<?php
use Inertia\Inertia;
use Illuminate\Support\Facades\Route;

Route::get('/legacy', function () {
    return Inertia::render('Legacy'); // mismo nombre que el fichero Legacy.tsx
});
