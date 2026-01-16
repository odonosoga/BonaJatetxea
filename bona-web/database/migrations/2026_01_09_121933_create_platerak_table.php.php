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
        Schema::create('platerak', function (Blueprint $table) {
            $table->id('idPlatera');
            $table->foreignId('idOsagai')
                  ->constrained('osagaiak', 'idOsagai');
            $table->string('izena');
            $table->string('deskripzioa');
            $table->string('osagaiak_enum');
            $table->integer('prezio');
            $table->string('argazkia')->nullable();
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
