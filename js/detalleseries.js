window.addEventListener('load',function(){
    let imagenserie = document.querySelector('.imagenserie')
    let tituloserie = document.querySelector('.tituloserie')
    let calificacionserie = document.querySelector('.calificacionserie')
    let detallesserie = document.querySelector('.detallesserie')
    let detallesovserie = document.querySelector('.detallesovserie')
    let infogeneroserie = document.querySelector('.infogeneroserie')
    let infoactoresserie = document.querySelector('.infoactoresserie')
    let trailerserie = document.querySelector('.trailerserie')
    let titleserie = document.querySelector('titleserie')

    let detalleseries = location.search
    let detalleseriesObj = new URLSearchParams (detalleseries)
    let tv_id = detalleseriesObj.get ('tv_id')

    // INFORMACION
    fetch(`https://api.themoviedb.org/3/tv/${tv_id}?api_key=947976bd814222f623ebca2e4e5e8a3a&language=es-ES&page=1`)
    .then(function(data){
        return data.json()
    })
    .then(function(serie){
        console.log(serie);
        // GENEROS
        serie.genres.forEach(genres => {
            infogeneroserie.innerHTML += `${genres.name} | `
        });
        // NOMBRE EN BARRA
        titleserie.innerHTML = `${serie.name}`
        // IMAGEN
        imagenserie.innerHTML = `<img src='https://image.tmdb.org/t/p/w500${pelicula.backdrop_path}' alt ='${pelicula.name}'/>`
        // TITULO
        tituloserie.innerHTML = `${pelicula.name}`
        // RATING
        calificacionserie.innerHTML = `<h3 class="infogeneral">Calificación: ${pelicula.vote_average}</h3>`
        // FECHA
        detallesserie.innerHTML = `<h3 class="infogeneral">Fecha de estreno: ${pelicula.release_date}</h3>`
        // RESUMEN
        detallesovserie.innerHTML = `<h3 class="infogeneral">Resumen de la serie: ${pelicula.overview}</h3>`
    })
    // ACTORES
    fetch(`https://api.themoviedb.org/3/tv/${tv_id}/credits?api_key=947976bd814222f623ebca2e4e5e8a3a&language=es-ES`)
    .then(function(data){
        return data.json()
    })
    .then(function(actores){
        console.log(actores.cast);
        actores.cast.forEach(actor => {
            infoactoresserie.innerHTML += `${actor.character} | `
        })
    })

    //TRAILER

    fetch(`https://api.themoviedb.org/3/tv/${tv_id}/videos?api_key=bad307a59294abaae8c2d0fcc48475d8&language=es-ES`)
    .then(function(data){
        return data.json()
    })
    .then(function(video){
        console.log(video);
        if (video.results != 0){
            trailerserie.innerHTML = `<iframe width="560" height="315" src="https://www.youtube.com/embed/${video.results[0].key}?start=2" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe> `
        }else{
            trailerserie.innerHTML = `NO POSEE VIDEO.`
        }  
    })
    .catch(function(error){
        console.log(error);
    })

    //PELICULAS SIMILARES
    // fetch(`https://api.themoviedb.org/3/movie/${id}?/api_key=bad307a59294abaae8c2d0fcc48475d8&language=es-ES`)
})