if("serviceWorker" in navigator){
    navigator.serviceWorker.register("./sw.js")
        .then(function() {
            console.log("Service Worker registrado correctamente");
        })
        .catch(function(error){
            console.error("Error al registrar el Service Worker", error);
        });
}