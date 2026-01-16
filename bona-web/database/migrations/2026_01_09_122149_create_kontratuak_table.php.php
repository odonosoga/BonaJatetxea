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
        Schema::create('kontratuak', function (Blueprint $table) {
            $table->id('idKontratua');
            $table->foreignId('idLangile')
                  ->constrained('langileak', 'idLangile');
            $table->date('hasierako_data');
            $table->date('amaierako_data')->nullable();
            $table->integer('soldata');
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
