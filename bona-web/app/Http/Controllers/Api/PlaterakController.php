<?php

namespace App\Http\Controllers\Api;  

use App\Http\Controllers\Controller;
use App\Models\Platera;
use Illuminate\Http\Request;

class PlaterakController extends Controller
{
    public function index()
    {
        $platos = Platera::all()->map(function ($plato) {
            return [
                'id' => $plato->id,
                'img' => asset($plato->argazkia),
                'sectionKey' => $plato->sectionKey,
                'key' => $plato->translationKey,
                'price' => $plato->prezioa,
                'cantidad' => $plato->default_cantidad,
                'izena' => $plato->izena,
            ];
        });

        return response()->json($platos);
    }
}
