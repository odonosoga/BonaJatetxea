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
        Schema::create('biltegi_hornitzailea', function (Blueprint $table) {
            $table->id();
            $table->foreignId('idHornitzailea')
                  ->constrained('hornitzaileak', 'idHornitzailea');
            $table->foreignId('idInbentario')
                  ->constrained('biltegia', 'idBiltegia');
            $table->integer('prezio');
            $table->date('Data');
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
