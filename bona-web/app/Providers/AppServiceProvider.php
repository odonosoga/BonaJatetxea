<?php

namespace App\Providers;

use Inertia\Inertia;
use Illuminate\Support\ServiceProvider;
use Illuminate\Support\Facades\Auth;
use Illuminate\Support\Facades\URL; // Importante para las URLs

class AppServiceProvider extends ServiceProvider
{
    /**
     * Register any application services.
     */
    public function register(): void
    {
        //
    }

    /**
     * Bootstrap any application services.
     */
    public function boot(): void
    {
        // Forzar HTTPS en AWS para evitar errores de carga (Mixed Content / MIME type)
        if (config('app.env') !== 'local') {
            URL::forceScheme('https');
        }

        Inertia::share('auth', function () {
            return [
                'user' => Auth::user()
                    ? [
                        'id'   => Auth::id(),
                        'name' => Auth::user()->name,
                        'role' => Auth::user()->role,
                      ]
                    : null,
            ];
        });
    }
}