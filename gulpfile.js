var elixir = require('laravel-elixir');
require('laravel-elixir-angular');
/*
 |--------------------------------------------------------------------------
 | Elixir Asset Management
 |--------------------------------------------------------------------------
 |
 | Elixir provides a clean, fluent API for defining some basic Gulp tasks
 | for your Laravel application. By default, we are compiling the Less
 | file for our application, as well as publishing vendor resources.
 |
 */

elixir(function(mix) {
    mix.less('app.less');
});


 
elixir(function(mix) {
   
   mix.angular("resources/assets/angular/", "public/js/angular/", "application.js");
});

