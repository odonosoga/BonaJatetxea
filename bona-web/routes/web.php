<?php
use Illuminate\Support\Facades\Route;
use Inertia\Inertia;
use App\Http\Controllers\Auth\RegisterController;
use App\Http\Controllers\Auth\AuthenticatedSessionController;


Route::get('/', fn () => Inertia::render('Legacy'));

Route::get('/{any}', fn () => Inertia::render('Legacy'))
    ->where('any', '^(?!api|erregistratu).*$');

Route::get('/erregistratu', fn () => Inertia::render('Legacy'))
    ->name('register');

Route::post('/erregistratu', [RegisterController::class, 'store'])
    ->name('register.store');


Route::post('/login', [AuthenticatedSessionController::class, 'store']);
Route::post('/logout', [AuthenticatedSessionController::class, 'destroy']);

