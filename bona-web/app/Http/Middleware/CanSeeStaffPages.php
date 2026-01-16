<?php

namespace App\Http\Middleware;

use Closure;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Auth;

class CanSeeStaffPages
{
    public function handle(Request $request, Closure $next)
    {
        if (!Auth::check() || Auth::user()->role === 'Bezero') {
            abort(403);
        }

        return $next($request);
    }
}
