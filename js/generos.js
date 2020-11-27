window.addEventListener('load',function(){
    let seriesGeneros = document.querySelector('.seriesGeneros')
    let peliculasGeneros = document.querySelector('.peliculasGeneros')

    // NUESTARS SERIES
    fetch('https://api.themoviedb.org/3/genre/tv/list?api_key=bad307a59294abaae8c2d0fcc48475d8&language=es-ES')
    .then(function(respuesta){
        return respuesta.json()
    })
    .then(function(generos){
        generos.genres.forEach(element => {
            seriesGeneros.innerHTML += `<li class="generoNombre"> <a href="generosResultados.html?id=${element.id}&name=${element.name}">${element.name} </a> </li>`
        });
    })
    .catch(function(error){
        console.log(error)
    })

    //NUESTRAS PELICULAS
    fetch('https://api.themoviedb.org/3/genre/movie/list?api_key=bad307a59294abaae8c2d0fcc48475d8&language=es-ES')
    .then(function(respuesta){
        return respuesta.json()
    })
    .then(function(generos){
        generos.genres.forEach(element => {
            peliculasGeneros.innerHTML += `<li class="generoNombre"> <a href="generosResultados.html?id=${element.id}&name=${element.name}">${element.name} </a> </li>`
        });
    })
    .catch(function(error){
        console.log(error)
    })
} )