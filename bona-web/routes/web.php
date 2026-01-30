<?php

use Illuminate\Support\Facades\Route;
use Inertia\Inertia;
use App\Http\Controllers\Auth\RegisterController;
use App\Http\Controllers\Auth\AuthenticatedSessionController;
use App\Http\Controllers\ReservationController;
use App\Models\PendingRegistration;
use App\Models\User;
use App\Http\Controllers\Admin\UserController;
use App\Http\Controllers\KontsultaController;
use Illuminate\Support\Facades\Auth;

// ============================================================================
// ✅ RUTAS ESPECÍFICAS (ALTO PRIORIDAD - PRIMERO)
// ============================================================================

// Home y páginas principales
Route::get('/', fn () => Inertia::render('home'))->name('home');
Route::get('/menu', fn () => Inertia::render('menu'));
Route::get('/kontaktua', fn () => Inertia::render('contact'));
Route::post('/kontaktua', [KontsultaController::class, 'store'])->name('kontaktua.store');  
Route::get('/ordutegia', fn () => Inertia::render('schedule'));
Route::get('/bidalketak', fn () => Inertia::render('pendingdelivery'));
Route::get('/erreserba', fn () => Inertia::render('reservation'));

// Registro (YA FUNCIONA)
Route::get('/erregistratu', fn () => Inertia::render('Register'))->name('register');
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
// ⭐ GRUPO ADMIN COMPLETO (PROTEGIDO + DASHBOARD)
// ============================================================================
Route::middleware(['auth'])->prefix('admin')->name('admin.')->group(function () {
    // ✅ CORREGIDO: Dashboard principal (busca pages/admin.jsx)
    Route::get('/', fn() => Inertia::render('admin', [
        'users' => User::with('langile')->orderBy('name')->paginate(20)
    ]))->name('dashboard');
    
    // CRUD Users (mantiene compatibilidad)
    Route::get('/users/langile', [UserController::class, 'indexLangile'])->name('users.langile.index');
    Route::get('/users/bezero', [UserController::class, 'indexBezero'])->name('users.bezero.index');
    Route::get('/users/{user}/edit', [UserController::class, 'edit'])->name('users.edit');
    Route::put('/users/{user}', [UserController::class, 'update'])->name('users.update');
    Route::delete('/users/{user}', [UserController::class, 'destroy'])->name('users.destroy');
    
    // ⭐ CREAR NUEVO LANGILE (tu método existente)
    Route::post('/users/langile', [UserController::class, 'storeLangile'])->name('users.langile.store');
});

// ============================================================================
// ✅ 404 CATCH-ALL (BAJA PRIORIDAD - AL FINAL)
// ============================================================================
Route::get('/{any}', fn () => Inertia::render('legacy'))
    ->where('any', '^(?!api|login|logout|erregistratu|registration|erreserbak|admin).*$');
