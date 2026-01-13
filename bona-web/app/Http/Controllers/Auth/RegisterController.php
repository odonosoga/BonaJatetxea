<?php

namespace App\Http\Controllers\Auth;

use App\Http\Controllers\Controller;
use Illuminate\Http\Request;
use Inertia\Inertia;
use App\Models\User;
use Illuminate\Validation\Rules;
use Illuminate\Support\Facades\Hash;  // ← FALTA ESTO
use Illuminate\Support\Facades\Auth;  // ← FALTA ESTO

class RegisterController extends Controller
{
    public function store(Request $request)
{
    $request->validate([
        'izena' => 'required|string|max:255',
        'abizena' => 'required|string|max:255',
        'email' => 'required|string|email|max:255|unique:users',
        'password' => ['required', 'confirmed', Rules\Password::defaults()],
        'role' => 'required|in:Admin,Langile,Bezero',
        // Valida otros campos como telefonoa, etc.
    ]);

   $user = User::create([
    'name' => $request->izena . ' ' . $request->abizena,
    'email' => $request->email,
    'password' => Hash::make($request->password),
    'role' => 'Bezero',  // Fijo para esta página
    'telefonoa' => $request->telefonoa,
    // Otros campos
]);


    auth()->login($user);
    return redirect('/dashboard'); // O ruta por rol
}
}
