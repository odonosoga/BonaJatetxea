<?php

namespace App\Http\Controllers;

use App\Mail\DeliveryConfirmed;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\DB;
use Illuminate\Support\Facades\Mail;
use Illuminate\Support\Facades\Log;

class EskaeraController extends Controller
{
    public function index()
    {
        $orders = DB::table('eskaerak')->orderBy('updated_at', 'desc')->get();
        return response()->json($orders);
    }

    /**
     * Guarda el pedido en la base de datos y envía email de confirmación.
     */
    public function store(Request $request)
    {
        // 1. Guardar en la base de datos
        DB::table('eskaerak')->insert([
            'eskaeraData'      => now()->toDateString(),      
            'eskaerarenEgoera' => 'zain',                     
            'ordainketaMota'   => $request->payment_method,   
            'entregaHelbidea'  => $request->address,          
            'created_at'       => now(),                      
            'updated_at'       => null,                       
        ]);

        // 2. Preparar datos para el envío de Email
        $customerData = [
            'name'    => $request->name,
            'address' => $request->address,
            'email'   => $request->email
        ];
        
        $cartItems = $request->cartItems;
        $cartTotal = $request->cartTotal;

        try {
            // El Mailable DeliveryConfirmed usará la vista delivery-confirmation
            Mail::to($request->email)->send(new DeliveryConfirmed($customerData, $cartItems, $cartTotal));
        } catch (\Exception $e) {
            Log::error("Error enviando email de pedido: " . $e->getMessage());
        }

        return redirect()->back()->with('success', 'Eskerrik asko! Zure eskaera ongi jaso dugu.');
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