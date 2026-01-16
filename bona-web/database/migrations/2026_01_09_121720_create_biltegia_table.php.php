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
        Schema::create('biltegia', function (Blueprint $table) {
            $table->id('idBiltegia');
            $table->foreignId('idLokala')
                  ->constrained('lokalen_kokapenak', 'idLokala');
            $table->string('produktuarenIzena');
            $table->string('produktuarenDeskribapena');
            $table->string('produktuKopurua');
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
