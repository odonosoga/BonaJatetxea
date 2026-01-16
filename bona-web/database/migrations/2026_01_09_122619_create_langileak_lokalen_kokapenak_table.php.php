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
        Schema::create('langileak_lokalen_kokapenak', function (Blueprint $table) {
            $table->id();
            $table->foreignId('idLokala')
                  ->constrained('lokalen_kokapenak', 'idLokala');
            $table->foreignId('idLangile')
                  ->constrained('langileak', 'idLangile');
            $table->date('data');
            $table->string('data_tanda');
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
