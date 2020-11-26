window.addEventListener('load',function(){
    let imagenPeli = document.querySelector('.imagenPeli')
    let titulopeli = document.querySelector('.titulopeli')
    let calificacionpeli = document.querySelector('.calificacionpeli')
    let detallespeli = document.querySelector('.detallespeli')
    let detallesov = document.querySelector('.detallesov')
    let infodirector = document.querySelector('.infodirector')
    let infogenero = document.querySelector('.infogenero')
    let infoactores = document.querySelector('.infoactores')
    let trailer = document.querySelector('.trailer')
    let title = document.querySelector('title')

    let detallePelis = location.search
    let detallePelisObj = new URLSearchParams (detallePelis)
    let id = detallePelisObj.get ('id')
    let titulos = detallePelisObj.get('titulo')
    let imagen = detallePelisObj.get('imagen')
    let fecha = detallePelisObj.get('fecha')
    let ov = detallePelisObj.get('overview')
    let rating = detallePelisObj.get('calificacion')
    let generos = detallePelisObj.get('genero')

    // NOMBRE EN BARRA
    title.innerHTML = `${titulos}`
    // IMAGEN
    imagenPeli.innerHTML = `<img src='https://image.tmdb.org/t/p/w500${imagen}' alt ='${titulos}'/>`
    // TITULO
    titulopeli.innerHTML = `${titulos}`
    // FECHA
    detallespeli.innerHTML = `${fecha}`
    // RESUMEN
    detallesov.innerHTML = `${ov}`
    // RATING
    calificacionpeli.innerHTML = `${rating}`
    // DIRECTOR
    fetch('https://api.themoviedb.org/3/movie/${id}?/api_key=947976bd814222f623ebca2e4e5e8a3a&language=es-ES')
    
    // FECHA LANZAMIENTO
    .then(function(respuesta){
        // console.log(respuesta)
        return respuesta.json()
    })
    // GENEROS
    fetch('https://api.themoviedb.org/3/movie/${id}?/api_key=bad307a59294abaae8c2d0fcc48475d8&language=es-ES')
    .then(function(respuesta){
        return respuesta.jason()
    })
    .then(function(genero){
        console.log(genero);
        detalles.innerHTML += `| Duración: ${genero.runtime} Minutos`
        genero.generos.forEach(genero1 => {
            genero.innerHTML += `${genero1.name} / `
        })
     
    })
     

    // FECHA LANZAMIENTO Y MINUTOS
    .then(function(credits){
        console.log(credits)
        credits.crew.forEach(directores => {
            if(directores.job == 'Director'){
                infodirector.innerHTML += `${directores.name}.`
            }  
        });
        credits.cast.forEach(cast => {
            infoactores.innerHTML += `${cast.name} - `
        })
    })
    .catch(function(error){
        console.log(error);
    })

    //TRAILER
    fetch('https://api.themoviedb.org/3/movie/${id}?/api_key=bad307a59294abaae8c2d0fcc48475d8&language=es-ES')
    .then(function(video){
        console.log(video);
        trailer.innerHTML = `<iframe width="560" height="315" src="https://www.youtube.com/embed/${video.results[0].key}?start=2" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe> `
    })
    .catch(function(error){
        console.log(error);
    })  

    //PELICULAS SIMILARES
    fetch
})