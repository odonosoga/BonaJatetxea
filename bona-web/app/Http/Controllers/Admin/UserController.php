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
    // ✅ MÉTODO PRINCIPAL (ACTUALIZADO con tabs)
    public function index(Request $request)
    {
        $tab = $request->get('tab', 'langile');
        
        $query = User::with('langile');
        
        // LOGICA PARA TABS
        if ($tab === 'eliminados') {
            $query->onlyTrashed();
        } else {
            $query->withTrashed(); // Para que React vea deleted_at
        }
        
        $allUsers = $query->orderBy('name')->get();

        return Inertia::render('admin', [
            'users' => ['data' => $allUsers],
            'activeTab' => $tab // ← AÑADIDO
        ]);
    }

    // ✅ storeLangile (INTACTO)
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

    // ✅ update (INTACTO)
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

    // ✅ destroy (ACTUALIZADO: soft delete)
    public function destroy(User $user)
    {
        if ($user->role === 'Langile') {
            $user->langile()->delete();
        }
        $user->delete(); // ← Ahora es SOFT DELETE automático

        return back()->with('success', 'Usuario movido a Eliminados.');
    }

    // 🆕 NUEVO: Restaurar usuario
    public function restore(User $user)
    {
        $user->restore();
        
        // Restaurar langile si existía
        if ($user->role === 'Langile') {
            Langile::updateOrCreate(
                ['user_id' => $user->id],
                ['mota' => $user->langile?->mota ?? ''] // Mantiene datos previos si existen
            );
        }

        return back()->with('success', 'Usuario recuperado exitosamente.');
    }

    // 🆕 NUEVO: Eliminar permanente
    public function forceDelete(User $user)
    {
        if ($user->role === 'Langile') {
            $user->langile()->forceDelete();
        }
        $user->forceDelete();

        return back()->with('success', 'Usuario eliminado PERMANENTEMENTE.');
    }
}
