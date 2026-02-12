<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

return new class extends Migration
{
    /**
     * Run the migrations.
     */
    public function up()
    {
        Schema::table('langileak', function (Blueprint $table) {
            $table->string('monday')->nullable()->after('mota');
            $table->string('tuesday')->nullable()->after('monday');
            $table->string('wednesday')->nullable()->after('tuesday');
            $table->string('thursday')->nullable()->after('wednesday');
            $table->string('friday')->nullable()->after('thursday');
            $table->string('saturday')->nullable()->after('friday');
            $table->string('sunday')->nullable()->after('saturday');
        });
    }

    public function down()
    {
        Schema::table('langileak', function (Blueprint $table) {
            $table->dropColumn(['monday', 'tuesday', 'wednesday', 'thursday', 'friday', 'saturday', 'sunday']);
        });
    }

};
