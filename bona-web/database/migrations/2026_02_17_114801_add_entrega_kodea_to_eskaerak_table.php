<?php
// database/migrations/2026_02_17_124600_add_entrega_kodea_to_eskaerak_table.php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;
use Illuminate\Support\Facades\DB;

return new class extends Migration
{
    /**
     * Run the migrations.
     */
    public function up(): void
    {
        Schema::table('eskaerak', function (Blueprint $table) {
            $table->string('entregaKodea')->nullable()->after('entregaHelbidea');
        });

        // Opcional: Generar códigos para pedidos existentes en estado 'bidalketan'
        $existingOrders = DB::table('eskaerak')
            ->where('eskaerarenEgoera', 'bidalketan')
            ->get();

        foreach ($existingOrders as $order) {
            $codigo = str_pad(rand(0, 99999), 5, '0', STR_PAD_LEFT);
            DB::table('eskaerak')
                ->where('id_eskaera', $order->id_eskaera)
                ->update(['entregaKodea' => $codigo]);
        }
    }

    /**
     * Reverse the migrations.
     */
    public function down(): void
    {
        Schema::table('eskaerak', function (Blueprint $table) {
            $table->dropColumn('entregaKodea');
        });
    }
};
