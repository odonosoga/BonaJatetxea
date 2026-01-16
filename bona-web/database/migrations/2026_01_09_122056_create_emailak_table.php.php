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
        Schema::create('emailak', function (Blueprint $table) {
            $table->foreignId('idLangile')
                  ->constrained('langileak', 'idLangile')
                  ->primary(); 
            $table->string('emaila');
            $table->string('pasahitza');
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
