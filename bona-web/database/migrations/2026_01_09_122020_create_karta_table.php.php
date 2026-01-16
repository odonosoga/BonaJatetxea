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
        Schema::create('karta', function (Blueprint $table) {
            $table->id('idKarta');
            $table->foreignId('idPlatera')
                  ->constrained('platerak', 'idPlatera');
            $table->string('izena');
            $table->string('platerak_enum');
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
