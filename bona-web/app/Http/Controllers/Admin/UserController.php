<?php

namespace App\Http\Controllers\Admin;

use App\Http\Controllers\Controller;
use App\Models\User;
use App\Models\Langile;
use Illuminate\Support\Facades\Hash;
use Illuminate\Http\Request;
use Inertia\Inertia;

class UserController extends Controller
{
    // ✅ MÉTODO PRINCIPAL (CORREGIDO: Carga TODOS los usuarios)
    public function index()
    {
        // CAMBIO CLAVE: Usamos get() en lugar de paginate() para traer TODOS los registros.
        // React se encarga de paginarlos de 10 en 10.
        $allUsers = User::with('langile')->orderBy('name')->get();

        // Envolvemos en 'data' para mantener compatibilidad con admin.jsx (que espera users.data)
        return Inertia::render('admin', [
            'users' => ['data' => $allUsers]
        ]);
    }

    // ✅ TU MÉTODO EXISTENTE (intacto)
    public function storeLangile(Request $request)
    {
        $data = $request->validate([
            'name'  => 'required|string|max:255',
            'email' => 'required|email|unique:users,email',
            'password' => 'required|string|min:8',
            'phone' => 'nullable|string',
            'birth_date' => 'nullable|date',
            'address' => 'nullable|string',
            'postal_code' => 'nullable|string',
            'mota' => 'required|string',
        ]);

        $user = User::create([
            'name'        => $data['name'],
            'email'       => $data['email'],
            'password'    => Hash::make($data['password']),
            'phone'       => $data['phone'] ?? null,
            'birth_date'  => $data['birth_date'] ?? null,
            'address'     => $data['address'] ?? null,
            'postal_code' => $data['postal_code'] ?? null,
            'role'        => 'Langile',
        ]);

        $user->langile()->create([
            'mota' => $data['mota'],
        ]);

        return back()->with('success', 'Langile creado correctamente.');
    }

    // ✅ UPDATE (intacto)
    public function update(Request $request, User $user)
    {
        $data = $request->validate([
            'name' => 'required|string|max:255',
            'email' => 'required|email|unique:users,email,' . $user->id,
            'phone' => 'nullable|string|max:20',
            'address' => 'nullable|string|max:255',
            'postal_code' => 'nullable|string|max:10',
            'birth_date' => 'nullable|date',
            'mota' => 'nullable|string|max:100',
        ]);

        $user->update($data);

        if ($user->role === 'Langile' && $request->filled('mota')) {
            $user->langile()->updateOrCreate(['user_id' => $user->id], ['mota' => $request->mota]);
        }

        return back()->with('success', 'Usuario actualizado correctamente.');
    }

    // ✅ DESTROY (intacto)
    public function destroy(User $user)
    {
        if ($user->role === 'Langile') {
            $user->langile()->delete();
        }
        $user->delete();

        return back()->with('success', 'Usuario eliminado correctamente.');
    }
}
