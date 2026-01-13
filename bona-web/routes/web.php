<?php

use Illuminate\Support\Facades\Route;
use Inertia\Inertia;
use App\Http\Controllers\Auth\RegisterController; // ← AÑADE ESTA LÍNEA

Route::get('/legacy', function () {
    return Inertia::render('Legacy'); // mismo nombre que el fichero Legacy.tsx
});

// Ruta GET para mostrar el formulario
Route::get('/erregistroa', function () {
    return Inertia::render('Register');
})->name('register');

// Ruta POST para procesar el formulario
Route::post('/erregistroa', [RegisterController::class, 'store'])->name('register.register');
