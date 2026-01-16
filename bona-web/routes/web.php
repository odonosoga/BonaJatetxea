<?php

use Illuminate\Support\Facades\Route;
use Inertia\Inertia;
use App\Http\Controllers\Auth\RegisterController;
use App\Http\Controllers\Auth\AuthenticatedSessionController;
use App\Http\Controllers\ReservationController;
use App\Models\PendingRegistration;
use App\Models\User;
use Illuminate\Support\Facades\Auth;

Route::get('/', fn () => Inertia::render('Legacy'))->name('home');

Route::get('/erregistratu', fn () => Inertia::render('Legacy'))->name('register');
Route::post('/erregistratu', [RegisterController::class, 'store'])->name('register.store');

Route::post('/login', [AuthenticatedSessionController::class, 'store']);
Route::post('/logout', [AuthenticatedSessionController::class, 'destroy']);

Route::get('/erreserbak', [ReservationController::class, 'index'])->name('erreserbak.index');
Route::post('/erreserbak/validate', [ReservationController::class, 'store'])->name('erreserbak.validate');


Route::get('/registration/verify/{id}/{hash}', function ($id, $hash) {
    $pending = PendingRegistration::findOrFail($id);

    if ($pending->expires_at->isPast() || sha1($pending->email) !== $hash) {
        return redirect('/erregistratu')->with('error', '❌ Enlace expirado');
    }

    $user = User::create([
        'name'        => $pending->name . ' ' . ($pending->surname ?? ''),
        'email'       => $pending->email,
        'password'    => $pending->password,
        'phone'       => $pending->phone,
        'birth_date'  => $pending->birth_date,
        'address'     => $pending->address,
        'postal_code' => $pending->postal_code,
        'role'        => 'Bezero',
        'email_verified_at' => now(),
    ]);

    $pending->delete();
    Auth::login($user);

    return redirect('/')->with('success', '✅ Verificado! Bienvenido');
})->name('registration.verify');

Route::get('/{any}', fn () => Inertia::render('Legacy'))
    ->where('any', '^(?!api|erregistratu|registration).*$');
