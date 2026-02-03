<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use Illuminate\Support\Facades\DB;

class EskaeraController extends Controller
{
    public function index()
    {
        $orders = DB::table('eskaerak')->orderBy('updated_at', 'desc')->get();
        return response()->json($orders);
    }

    public function updateStatus(Request $request, $id)
    {
        $request->validate([
            'eskaerarenEgoera' => 'required|in:zain,bidalketan,entregatua'
        ]);

        DB::table('eskaerak')
            ->where('id_eskaera', $id)
            ->update([
                'eskaerarenEgoera' => $request->eskaerarenEgoera,
                'updated_at' => now()
            ]);

        return response()->json(['success' => true]);
    }
}
