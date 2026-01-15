<?php

use Illuminate\Support\Facades\Route;
use Inertia\Inertia;
use App\Http\Controllers\Auth\RegisterController;
use App\Http\Controllers\Auth\AuthenticatedSessionController;
use App\Http\Controllers\ReservationController;

Route::get('/', fn () => Inertia::render('Legacy'))->name('home');

Route::get('/erregistratu', fn () => Inertia::render('Legacy'))->name('register');
Route::post('/erregistratu', [RegisterController::class, 'store'])->name('register.store');

Route::post('/login', [AuthenticatedSessionController::class, 'store']);
Route::post('/logout', [AuthenticatedSessionController::class, 'destroy']);

Route::get('/erreserbak', [ReservationController::class, 'index'])
    ->name('erreserbak.index');

Route::post('/erreserbak/validate', [ReservationController::class, 'store'])
    ->name('erreserbak.validate');


Route::get('/ordutegia', fn () => Inertia::render('Schedule'))
    ->middleware('canSeeStaffPages');

Route::get('/pendiente', fn () => Inertia::render('PendingDelivery'))
    ->middleware('canSeeStaffPages');

Route::get('/{any}', fn () => Inertia::render('Legacy'))
    ->where('any', '^(?!api|erregistratu).*$');






