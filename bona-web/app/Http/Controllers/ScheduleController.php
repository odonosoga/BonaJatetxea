<?php

namespace App\Http\Controllers;

use App\Models\Langile;
use App\Models\User;
use Illuminate\Http\Request;
use Inertia\Inertia;

class ScheduleController extends Controller
{
    /**
     * Cargar página de horarios con TODOS los datos del seeder
     */
    public function index()
    {
        $langileak = Langile::with('user')
            ->select('idLangile as id', 'user_id', 'mota', 'monday', 'tuesday', 'wednesday', 'thursday', 'friday', 'saturday', 'sunday')
            ->get()
            ->map(function ($langile) {
                return [
                    'id' => $langile->id,
                    'idLangile' => $langile->id, // Para el modal
                    'name' => $langile->user->name ?? 'Sin nombre',
                    'email' => $langile->user->email ?? '',
                    'mota' => $langile->mota,
                    'role' => $langile->mota,
                    // ✅ CARGAR DATOS REALES del seeder, NO null
                    'monday' => $langile->monday,
                    'tuesday' => $langile->tuesday,
                    'wednesday' => $langile->wednesday,
                    'thursday' => $langile->thursday,
                    'friday' => $langile->friday,
                    'saturday' => $langile->saturday,
                    'sunday' => $langile->sunday,
                ];
            });

        return Inertia::render('schedule', [
            'langileak' => $langileak
        ]);
    }

    /**
     * Actualizar horarios de un solo langile (para modal)
     */
    public function update(Request $request, Langile $langile)
    {
        $request->validate([
            'monday' => 'required|in:12:00–16:00,19:00–23:00,12:00–16:00 / 19:00–23:00,Libre',
            'tuesday' => 'required|in:12:00–16:00,19:00–23:00,12:00–16:00 / 19:00–23:00,Libre',
            'wednesday' => 'required|in:12:00–16:00,19:00–23:00,12:00–16:00 / 19:00–23:00,Libre',
            'thursday' => 'required|in:12:00–16:00,19:00–23:00,12:00–16:00 / 19:00–23:00,Libre',
            'friday' => 'required|in:12:00–16:00,19:00–23:00,12:00–16:00 / 19:00–23:00,Libre',
            'saturday' => 'required|in:12:00–16:00,19:00–23:00,12:00–16:00 / 19:00–23:00,Libre',
            'sunday' => 'required|in:12:00–16:00,19:00–23:00,12:00–16:00 / 19:00–23:00,Libre',
        ]);

        $langile->update($request->only([
            'monday', 'tuesday', 'wednesday', 'thursday', 
            'friday', 'saturday', 'sunday'
        ]));

        return response()->json([
            'success' => true,
            'message' => 'Horarios actualizados correctamente'
        ]);
    }

    /**
     * Guardar horarios múltiples (método original mejorado)
     */
    public function store(Request $request)
{
    $request->validate([
        'workers' => 'required|array|min:1',
        'workers.*.id' => 'required|exists:langileak,idLangile',
        'workers.*.monday' => 'in:12:00–16:00,19:00–23:00,12:00–16:00 / 19:00–23:00,Libre',
        'workers.*.tuesday' => 'in:12:00–16:00,19:00–23:00,12:00–16:00 / 19:00–23:00,Libre',
        'workers.*.wednesday' => 'in:12:00–16:00,19:00–23:00,12:00–16:00 / 19:00–23:00,Libre',
        'workers.*.thursday' => 'in:12:00–16:00,19:00–23:00,12:00–16:00 / 19:00–23:00,Libre',
        'workers.*.friday' => 'in:12:00–16:00,19:00–23:00,12:00–16:00 / 19:00–23:00,Libre',
        'workers.*.saturday' => 'in:12:00–16:00,19:00–23:00,12:00–16:00 / 19:00–23:00,Libre',
        'workers.*.sunday' => 'in:12:00–16:00,19:00–23:00,12:00–16:00 / 19:00–23:00,Libre',
    ]);

    // ✅ VERIFICAR DUPLICADOS por idLangile
    $workerIds = array_column($request->workers, 'id');
    if (count($workerIds) !== count(array_unique($workerIds))) {
        return response()->json([
            'success' => false,
            'message' => 'Error: No puedes añadir el mismo trabajador dos veces'
        ], 422);
    }

    // Guardar horarios
    foreach ($request->workers as $workerData) {
        Langile::where('idLangile', $workerData['id'])->update($workerData);
    }

    return response()->json([
        'success' => true,
        'message' => 'Horarios guardados correctamente'
    ]);
}


    /**
     * Obtener langileak disponibles
     */
    public function getLangileak()
    {
        $langileak = Langile::with('user:id,name')
            ->select('idLangile as id', 'user_id', 'mota')
            ->get()
            ->map(fn($l) => [
                'id' => $l->id,
                'name' => $l->user->name ?? 'Sin nombre',
                'mota' => $l->mota
            ]);

        return response()->json($langileak);
    }
}
