<?php

namespace App\Providers;
use Inertia\Inertia;
use Illuminate\Support\ServiceProvider;
use Illuminate\Support\Facades\Auth;

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
