<?php

namespace App\Http\Controllers\Auth;

use App\Http\Controllers\Controller;
use App\Http\Requests\RegisterRequest;
use App\Models\User;
use Illuminate\Support\Facades\Hash;
use Illuminate\Support\Facades\Auth;
use Illuminate\Auth\Events\Registered; 
use Illuminate\Support\Facades\Log;

class RegisterController extends Controller
{
    public function store(RegisterRequest $request)
    {
        // 1. Validación (Usa las reglas de tu RegisterRequest)
        $data = $request->validated();

        // 2. Creación con todos los campos para evitar NULLs
        $user = User::create([
            'name'        => $data['name'] . ' ' . $data['surname'],
            'email'       => $data['email'],
            'password'    => Hash::make($data['password']),
            'phone'       => $data['phone'],
            'birth_date'  => $data['birth_date'],
            'address'     => $data['address'],
            'postal_code' => $data['postal_code'],
            'role'        => 'Bezero',
        ]);

        Log::info('Usuario creado:', ['id' => $user->id]);

        // 3. Envío de email automático
        // Al disparar este evento, Laravel detecta el 'implements MustVerifyEmail' 
        // del modelo User y envía el correo.
        event(new Registered($user));

        // 4. Login automático en el servidor
        Auth::login($user);

        // 5. RESPUESTA PARA INERTIA (Clave para el Navbar)
        // No devuelvas JSON. Al redirigir, Inertia vuelve a cargar los datos 
        // compartidos (share) del Middleware y verá al usuario logueado.
        return redirect()->route('home'); 
    }
}