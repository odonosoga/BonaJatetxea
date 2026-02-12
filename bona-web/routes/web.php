<?php

use Illuminate\Support\Facades\Route;
use Inertia\Inertia;
use App\Http\Controllers\Auth\RegisterController;
use App\Http\Controllers\Auth\AuthenticatedSessionController;
use App\Http\Controllers\ReservationController;
use App\Http\Controllers\ProfileController;
use App\Models\PendingRegistration;
use App\Http\Controllers\ScheduleController;
use App\Models\User;
use App\Http\Controllers\Admin\UserController;
use App\Http\Controllers\KontsultaController;
use App\Http\Controllers\EskaeraController;  
use Illuminate\Support\Facades\Auth;
use Illuminate\Http\Request;

// ============================================================================
// ✅ RUTAS ESPECÍFICAS
// ============================================================================

Route::get('/', fn () => Inertia::render('home'))->name('home');
Route::get('/menu', fn () => Inertia::render('menu'));
Route::get('/kontaktua', fn () => Inertia::render('contact'));
Route::post('/kontaktua', [KontsultaController::class, 'store'])->name('kontaktua.store');  
Route::get('/ordutegia', [ScheduleController::class, 'index'])->name('schedule.index');
Route::post('/ordutegia/store', [ScheduleController::class, 'store'])->name('ordutegia.store');
Route::get('/bidalketak', fn () => Inertia::render('pendingdelivery'));
Route::get('/erreserba', fn () => Inertia::render('reservation'));
Route::get('/payform', fn () => Inertia::render('payform'));

Route::post('/ordainketa-prozesatu', function (Request $request) {
    return redirect()->back()->with('success', 'Eskerrik asko! Zure eskaera ongi jaso dugu.');
})->name('payform.store');

// Registro
Route::get('/erregistratu', fn () => Inertia::render('Register'))->name('register');
Route::post('/erregistratu', [RegisterController::class, 'store'])->name('register.store');

// Auth
Route::post('/login', [AuthenticatedSessionController::class, 'store']);
Route::post('/logout', [AuthenticatedSessionController::class, 'destroy']);

// Reservas
Route::get('/erreserbak', [ReservationController::class, 'index'])->name('erreserbak.index');
Route::post('/erreserbak/validate', [ReservationController::class, 'store'])->name('erreserbak.validate');

// Eskaerak
Route::get('/eskaerak', [EskaeraController::class, 'index']);
Route::patch('/eskaerak/{id}', [EskaeraController::class, 'updateStatus'])->name('eskaerak.update');

Route::middleware(['auth'])->group(function () {
    Route::get('/profile', [ProfileController::class, 'edit'])->name('profile.edit');
    Route::put('/profile', [ProfileController::class, 'update'])->name('profile.update');
});

// Verificación email
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

Route::get('/erregistroa', fn () => Inertia::render('register'));

// Admin
Route::middleware(['auth'])->prefix('admin')->name('admin.')->group(function () {
    Route::get('/', [UserController::class, 'index'])->name('users.index');
    Route::put('/users/{user}', [UserController::class, 'update'])->name('users.update');
    Route::delete('/users/{user}', [UserController::class, 'destroy'])->name('users.destroy');
    Route::post('/users/langile', [UserController::class, 'storeLangile'])->name('users.langile.store');
});

// ============================================================================
// ✅ 404 CATCH-ALL
// ============================================================================
Route::get('/{any}', fn () => Inertia::render('legacy'))
    ->where('any', '^(?!api|login|logout|erregistratu|registration|erreserbak|admin|eskaerak|payform|ordainketa-prozesatu).*$');