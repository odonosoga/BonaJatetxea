<?php

namespace App\Http\Controllers\Auth;

use App\Http\Controllers\Controller;
use App\Http\Requests\RegisterRequest;
use App\Models\User;
use App\Models\PendingRegistration;
use App\Mail\VerifyRegistration;  // ← NUEVO: Mailable
use Illuminate\Support\Facades\Hash;
use Illuminate\Support\Facades\Auth;
use Illuminate\Auth\Events\Registered; 
use Illuminate\Support\Facades\Log;
use Illuminate\Support\Facades\Mail;

class RegisterController extends Controller
{
    public function store(RegisterRequest $request)
    {
        // 1. Validación (Usa las reglas de tu RegisterRequest) ✅ MANTENIDO
        $data = $request->validated();

        // 2. PENDING en vez de User directo (15 min expiry)
        $pending = PendingRegistration::create([
            'name'        => $data['name'],
            'surname'     => $data['surname'],
            'email'       => $data['email'],
            'password'    => Hash::make($data['password']),
            'phone'       => $data['phone'],
            'birth_date'  => $data['birth_date'],
            'address'     => $data['address'],
            'postal_code' => $data['postal_code'],
            'expires_at'  => now()->addMinutes(15),  // 15 MIN
        ]);

        Log::info('Pending creado:', ['id' => $pending->id]);  // ✅ MANTENIDO

        // 3. EMAIL BONITO CON MAILABLE (HTML renderizado)
        Mail::to($data['email'])->send(new VerifyRegistration($pending));

        // 4. NO login. Alerta React en register page ✅
        return back()->with('success', '✅ ¡Correo enviado! Verifica en 15 min.');

        // 5. COMENTADO: Tu código viejo (ya NO se usa)
        // Auth::login($user);
        // return redirect()->route('home');
    }
}
