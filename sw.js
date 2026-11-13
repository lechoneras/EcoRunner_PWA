const CACHE_NAME = "Ecorunner-pwa-1";


const archivos = [

    /* Página principal */
    "./",

    /* Archivo HTML */
    "./index.html",

    /* Archivo CSS */
    "./estilos.css",

    /* Archivo JavaScript */
    "./app.js",

    /* Archivo Manifest */
    "./manifest.json", "./imagenes/Logo.png"

];

self.addEventListener("install", function(event) {

    event.waitUntil(

        caches.open(CACHE_NAME)

            .then(function(cache) {

                return cache.addAll(archivos);

            })

    );

});

self.addEventListener("fetch", function(event) {

    event.respondWith(

        caches.match(event.request)

            .then(function(respuesta) {

                if (respuesta) {

                    return respuesta;

                }

                return fetch(event.request);

            })

    );

});