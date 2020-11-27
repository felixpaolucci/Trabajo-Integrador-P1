window.addEventListener('load',function(){
    let detalleseries = location.search;
    let detalleseriesObj = new URLSearchParams (detalleseries);
    let id = detalleseriesObj.get('pelicula.id');

    // INFORMACION
    fetch(`https://api.themoviedb.org/3/tv/${id}?api_key=947976bd814222f623ebca2e4e5e8a3a&language=es-ES`)
    .then(function(data){
        return data.json()
    })
    .then(function(seriePedida){
        console.log(seriePedida)
        // TITULO
        document.querySelector("div.titulo").
        innerHTML = seriePedida.name;
        // IMAGEN
        document.querySelector("section.imagenserieimg").src=`https://image.tmdb.org/t/p/original${seriePedida.poster_path}`;
        // FECHA ESTRENO
        document.querySelector("div.fecha").innerHTML = seriePedida.first_air_date;
        // OVERVIEW
        document.querySelector("div.resumen").innerHTML = seriePedida.overview;
        // GENERO
        for (var i = 0; i < seriePedida.genres.length; i++){
            document.querySelector("div.genero").innerHTML += `<a href="detalleGenero.html?idGenero=${seriePedida.genres[i].id}"> ${seriePedida.genres[i].name} </a>`
        }
    })
})