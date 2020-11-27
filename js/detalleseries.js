window.addEventListener('load',function(){
    let imagenserie = document.querySelector('.imagenserie')
    let tituloserie = document.querySelector('.tituloserie')
    let calificacionserie = document.querySelector('.calificacionserie')
    let detallesserie = document.querySelector('.detallesserie')
    let detallesovserie = document.querySelector('.detallesovserie')
    let infogeneroserie = document.querySelector('.infogeneroserie')
    let titleserie = document.querySelector('titleserie')

    let detalleseries = location.search;
    let detalleseriesObj = new URLSearchParams (detalleseries);
    let id = detalleseriesObj.get ('idSerie')

    // INFORMACION
    fetch(`https://api.themoviedb.org/3/tv/${id}?api_key=947976bd814222f623ebca2e4e5e8a3a&language=es-ES`)
    .then(function(data){
        return data.json()
    })
    .then(function(serie){
        console.log(serie);
        // GENEROS
        serie.genres.forEach(generos => {
            infogeneroserie.innerHTML += `${generos.name} | `
        });
        // NOMBRE EN BARRA
        titleserie.innerHTML = `${serie.name}`
        // IMAGEN
        imagenserie.innerHTML = `<img src='https://image.tmdb.org/t/p/original${serie.poster}' alt ='${serie.name}'/>`
        // TITULO
        tituloserie.innerHTML = `${serie.name}`
        // RATING
        calificacionserie.innerHTML = `<h3 class="infogeneral">Calificación: ${pelicula.vote_average}</h3>`
        // FECHA
        detallesserie.innerHTML = `<h3 class="infogeneral">Fecha de estreno: ${serie.first_air_date}</h3>`
        // RESUMEN
        detallesovserie.innerHTML = `<h3 class="infogeneral">Resumen de la serie: ${serie.overview}</h3>`
    })
})