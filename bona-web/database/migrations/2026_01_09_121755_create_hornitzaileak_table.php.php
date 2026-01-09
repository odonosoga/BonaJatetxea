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
        Schema::create('hornitzaileak', function (Blueprint $table) {
            $table->id('idHornitzailea');
            $table->string('izenaProduktua');
            $table->string('produktuarenDeskribapena');
            $table->string('produktuKantitatea'); // enum lógico
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
