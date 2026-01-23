<?php

use Illuminate\Support\Facades\Route;
use Inertia\Inertia;
use App\Http\Controllers\Auth\RegisterController;
use App\Http\Controllers\Auth\AuthenticatedSessionController;
use App\Http\Controllers\ReservationController;
use App\Models\PendingRegistration;
use App\Models\User;
use Illuminate\Support\Facades\Auth;

// ============================================================================
// ✅ RUTAS ESPECÍFICAS (ALTO PRIORIDAD - PRIMERO)
// ============================================================================

// Home y páginas principales
Route::get('/', fn () => Inertia::render('home'))->name('home');
Route::get('/menu', fn () => Inertia::render('menu'));
Route::get('/kontaktua', fn () => Inertia::render('contact'));
Route::get('/ordutegia', fn () => Inertia::render('schedule'));
Route::get('/bidalketak', fn () => Inertia::render('pendingdelivery'));
Route::get('/erreserba', fn () => Inertia::render('reservation'));

// Registro (YA FUNCIONA)
Route::get('/erregistratu', fn () => Inertia::render('Legacy'))->name('register');  // ← Legacy = Register
Route::post('/erregistratu', [RegisterController::class, 'store'])->name('register.store');

// Login/Logout (YA FUNCIONA)
Route::post('/login', [AuthenticatedSessionController::class, 'store']);
Route::post('/logout', [AuthenticatedSessionController::class, 'destroy']);

// Reservas (YA FUNCIONA)
Route::get('/erreserbak', [ReservationController::class, 'index'])->name('erreserbak.index');
Route::post('/erreserbak/validate', [ReservationController::class, 'store'])->name('erreserbak.validate');

// Verificación email (YA FUNCIONA)
Route::get('/registration/verify/{id}/{hash}', function ($id, $hash) {
    $pending = PendingRegistration::findOrFail($id);

    if ($pending->expires_at->isPast() || sha1($pending->email) !== $hash) {
        return redirect('/erregistratu')->with('error', 'Enlace expirado');
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

    return redirect('/')->with('success', 'Verificado! Bienvenido');
})->name('registration.verify');

// Registro alternativo (mantenido)
Route::get('/erregistroa', fn () => Inertia::render('register'));

// ============================================================================
// ✅ 404 CATCH-ALL (BAJA PRIORIDAD - AL FINAL)
// ============================================================================
Route::get('/{any}', fn () => Inertia::render('legacy'))
    ->where('any', '^(?!api|login|logout|erregistratu|registration|erreserbak).*$');
