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
        Schema::create('lokalen_kokapenak', function (Blueprint $table) {
            $table->id('idLokala');
            $table->foreignId('idLangile')
                  ->constrained('langileak', 'idLangile');
            $table->string('kokapena');
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
