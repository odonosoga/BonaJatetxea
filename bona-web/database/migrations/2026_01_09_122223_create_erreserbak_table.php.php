<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

return new class extends Migration
{
    /**
     * Run the migrations.
     */
    public function up(): void
    {
        Schema::create('erreserbak', function (Blueprint $table) {
            $table->id('id_erreserba');
            $table->foreignId('id_bezero')
                  ->constrained('bezeroak', 'id_bezero');
            $table->foreignId('idLokala')
                  ->constrained('lokalen_kokapenak', 'idLokala');
            $table->date('data');
            $table->time('ordua');
            $table->integer('pertsona_Kop');
            $table->timestamps();
        });
    }

    /**
     * Reverse the migrations.
     */
    public function down(): void
    {
        //
    }
};
