<?php
namespace App\Http\Controllers\Auth;

use App\Http\Controllers\Controller;
use App\Http\Requests\RegisterRequest;
use Illuminate\Support\Facades\Hash;
use Illuminate\Support\Facades\Log;
use Illuminate\Auth\Events\Registered;  // ← AÑADIDO
use App\Models\User;

    class RegisterController extends Controller
{
    public function store(RegisterRequest $request)
    {
        $data = $request->validated();

        $user = User::create([
            'name' => $data['name'] . ' ' . $data['surname'],
            'email' => $data['email'],
            'password' => Hash::make($data['password']),
            'phone' => $data['phone'],
            'birth_date' => $data['birth_date'],
            'address' => $data['address'],
            'postal_code' => $data['postal_code'],
            'role' => 'Bezero',
        ]);

       // 3️⃣ Enviar email de verificación
        $user->sendEmailVerificationNotification();

        // 4️⃣ Login automático (opcional)
        Auth::login($user);

        // 5️⃣ Redirigir a página de "verifica tu correo"
        return redirect()->route('verification.notice');

        Log::info('👤 USER CREATED', ['id' => $user->id, 'email' => $user->email]); // ← DEBUG 3
        
        event(new Registered($user));           // ✅ CAMBIADO - AUTOMÁTICO TOTAL
        
        Log::info('📧 REGISTERED EVENT FIRED', ['user_id' => $user->id]); // ← DEBUG 4

        return response()->json([
            'message' => '¡Perfecto! Revisa tu email para verificar la cuenta.',
            'user' => $user
        ], 201);
    }
}
