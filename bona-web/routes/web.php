<?php

use Illuminate\Support\Facades\Route;
use Inertia\Inertia;
use App\Http\Controllers\Auth\RegisterController;
use App\Http\Controllers\Auth\AuthenticatedSessionController;
use App\Http\Controllers\ReservationController;

Route::get('/', fn () => Inertia::render('Legacy'));

// ✅ RUTAS REALES PRIMERO
Route::get('/erregistroa', fn () => Inertia::render('Register'))  // ← CAMBIADO
    ->name('register');
Route::post('/erregistroa', [RegisterController::class, 'store'])  // ← CAMBIADO    
    ->name('register.store');

Route::post('/login', [AuthenticatedSessionController::class, 'store']);
Route::post('/logout', [AuthenticatedSessionController::class, 'destroy']);
Route::post('/erreserbak/validate', [ReservationController::class, 'store']);

// ✅ FALLBACK ÚLTIMO
Route::get('/{any}', fn () => Inertia::render('Legacy'))
    ->where('any', '.*');
