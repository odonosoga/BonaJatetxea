<?php

namespace App\Http\Controllers\Auth;

use App\Http\Controllers\Controller;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Auth;

class AuthenticatedSessionController extends Controller
{
    // Login
    public function store(Request $request)
    {
        $credentials = $request->validate([
            'email'    => 'required|email',
            'password' => 'required',
        ]);

        if (!Auth::attempt($credentials)) {
            return back()->withErrors([
                'email' => 'Credenciales incorrectas',
            ]);
        }

        $request->session()->regenerate();

        $user = $request->user();
        $role = $user->role ?? null;

        if ($role === 'Langile') {
            return redirect('/ordutegia');     
        }

        if ($role === 'Bezero') {
            return redirect('/BonaJatetxea');   
        }

        return redirect('/');                 
    }


    // Logout
    public function destroy(Request $request)
    {
        Auth::logout();

        $request->session()->invalidate();
        $request->session()->regenerateToken();

        return redirect('/');
    }
}
