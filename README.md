Erronkako repositorioa

git checkout -b feature origin/feature

npm install react-scripts

git checkout -b leprechaun origin/leprechaun

npm install react-icons

npm install react-router-dom

Lo qe hice para crear la pagina en githb:

npm install --save-dev gh-pages

En tu package.json, agrega la propiedad homepage, por ejemplo: "homepage": "https://TU_USUARIO.github.io/NOMBRE_DEL_REPO"

Dentro de "scripts" de tu package.json, agrega:​​

"predeploy": "npm run build",

"deploy": "gh-pages -d build"

npm run deploy


PARA INICIAR PROYECTO LARAVEL REACT:
en dos terminales diferentes: 
  1.npm run dev
  2.php artisan serve


PARA QUE LA BASE DE DATOS SE ELIMINEN LOS EMAIL SIN VERIFICAR 
* * * * * cd /ruta-a-tu-proyecto && php artisan schedule:run >> /dev/null 2>&1 (EN SERVER)
php artisan schedule:work (EN DEV)


