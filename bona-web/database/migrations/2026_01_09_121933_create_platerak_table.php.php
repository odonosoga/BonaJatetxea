<?php
use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

return new class extends Migration
{
    public function up(): void
    {
        Schema::create('platerak', function (Blueprint $table) {
            $table->id();
            $table->string('izena');
            $table->text('deskripzioa');
            $table->text('osagaiak');
            $table->decimal('prezioa', 8, 2);
            $table->string('argazkia')->nullable();
            $table->string('sectionKey'); 
            $table->string('translationKey');
            $table->integer('default_cantidad')->default(1);
            $table->timestamps();
        });
    }

    public function down(): void
    {
        Schema::dropIfExists('platerak');
    }
};
