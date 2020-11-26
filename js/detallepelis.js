window.addEventListener('load',function(){
    let imagenPeli = document.querySelector('.imagenPeli')
    let titulopeli = document.querySelector('.titulopeli')
    let calificacionpeli = document.querySelector('.calificacionpeli')
    let detallespeli = document.querySelector('.detallespeli')
    let detallesov = document.querySelector('.detallesov')
    let infogenero = document.querySelector('.infogenero')
    let infoactores = document.querySelector('.infoactores')
    let trailer = document.querySelector('.trailer')
    let title = document.querySelector('title')

    let detallePelis = location.search
    let detallePelisObj = new URLSearchParams (detallePelis)
    let id = detallePelisObj.get ('id')

    // INFORMACION
    fetch(`https://api.themoviedb.org/3/movie/${id}?api_key=947976bd814222f623ebca2e4e5e8a3a&language=es-ES`)
    .then(function(data){
        return data.json()
    })
    .then(function(pelicula){
        // console.log(pelicula.genres);
        // GENEROS
        pelicula.genres.forEach(genre => {
            infogenero.innerHTML += `${genre.name} | `
        });
        // NOMBRE EN BARRA
        title.innerHTML = `${pelicula.title}`
        // IMAGEN
        imagenPeli.innerHTML = `<img src='https://image.tmdb.org/t/p/w500${pelicula.poster_path}' alt ='${pelicula.title}'/>`
        // TITULO
        titulopeli.innerHTML = `${pelicula.title}`
        // RATING
        calificacionpeli.innerHTML = `Calificación: ${pelicula.vote_average}`
        // FECHA
        detallespeli.innerHTML = `Fecha de estreno: ${pelicula.release_date}`
        // RESUMEN
        detallesov.innerHTML = `Resumen de la película: ${pelicula.overview}`
    })
    // ACTORES
    fetch(`https://api.themoviedb.org/3/movie/${id}/credits?api_key=947976bd814222f623ebca2e4e5e8a3a&language=es-ES`)
    .then(function(data){
        return data.json()
    })
    .then(function(actores){
        console.log(actores.cast);
        actores.cast.forEach(actor => {
            infoactores.innerHTML += `${actor.character} | `
        })
    })

    //TRAILER

    fetch(`https://api.themoviedb.org/3/movie/${id}/videos?api_key=bad307a59294abaae8c2d0fcc48475d8&language=es-ES`)
    .then(function(data){
        return data.json()
    })
    .then(function(video){
        console.log(video);
        if (video.results != 0){
            trailer.innerHTML = `<iframe width="560" height="315" src="https://www.youtube.com/embed/${video.results[0].key}?start=2" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe> `
        }else{
            trailer.innerHTML = `NO POSEE VIDEO.`
        }  
    })
    .catch(function(error){
        console.log(error);
    })

    //PELICULAS SIMILARES
    // fetch(`https://api.themoviedb.org/3/movie/${id}?/api_key=bad307a59294abaae8c2d0fcc48475d8&language=es-ES`)
})