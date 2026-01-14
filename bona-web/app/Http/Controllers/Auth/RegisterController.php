<?php

namespace App\Http\Controllers\Auth;

use App\Http\Controllers\Controller;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Hash;
use Illuminate\Support\Facades\Auth;
use App\Models\User;
use Illuminate\Validation\Rules\Password;

class RegisterController extends Controller
{
    /**
     * Handle user registration
     */
    public function store(Request $request)
    {
        // 1️⃣ Validar datos
        $validated = $request->validate([
            'name'        => ['required', 'string', 'max:255'],
            'surname'     => ['required', 'string', 'max:255'],
            'email'       => ['required', 'string', 'email', 'max:255', 'unique:users'],
            'password'    => ['required', 'confirmed', Password::min(8)],
            'phone'       => ['nullable', 'string', 'max:20'],
            'birth_date'  => ['nullable', 'date'],
            'address'     => ['nullable', 'string', 'max:255'],
            'postal_code' => ['nullable', 'string', 'max:20'],
        ]);

        // 2️⃣ Crear usuario
        try {
            $user = User::create([
                'name'        => $validated['name'] . ' ' . $validated['surname'],
                'email'       => $validated['email'],
                'password'    => Hash::make($validated['password']),
                'phone'       => $validated['phone'] ?? null,
                'birth_date'  => $validated['birth_date'] ?? null,
                'address'     => $validated['address'] ?? null,
                'postal_code' => $validated['postal_code'] ?? null,
                'role'        => 'Bezero',
            ]);
        } catch (\Throwable $e) {
            return back()->withErrors(['db_error' => 'Error al crear usuario: ' . $e->getMessage()]);
        }

        // 3️⃣ Enviar email de verificación
        $user->sendEmailVerificationNotification();

        // 4️⃣ Login automático (opcional)
        Auth::login($user);

        // 5️⃣ Redirigir a página de "verifica tu correo"
        return redirect()->route('verification.notice');
    }
}
