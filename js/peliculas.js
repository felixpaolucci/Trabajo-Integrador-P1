window.addEventListener('load', function(){
    // ESTRENOS:
    let peliculasEstrenos = document.querySelector('.peliculasEstrenos')

    fetch('https://api.themoviedb.org/3/movie/now_playing?api_key=947976bd814222f623ebca2e4e5e8a3a&language=es-ES&page=1')
    .then(function(respuesta){
        return respuesta.json()
    })
    .then(function(estrenos){
        console.log(estrenos);
        estrenos.results.forEach(pelicula => {
            let articulo = document.createElement('article')
            articulo.innerHTML += `<a href="movieDetail.html?id=${pelicula.id}&titulo=${pelicula.title}&imagen=${pelicula.poster_path}&overview=${pelicula.overview}&calificacion=${pelicula.vote_average}&genero=${pelicula.genre_ids}&fechapubli=${pelicula.release_date}"> <img src='https://image.tmdb.org/t/p/w500${pelicula.poster_path}' alt='${pelicula.title}'/> </a> <p>${pelicula.title}</p> <br>`

            peliculasEstrenos.append(articulo)
        })
    })
    .catch(function(error){
        console.log(error);
    })

    // TENDENCIAS:
    let peliculasTendencias = document.querySelector('.peliculasTendencias')

    fetch('https://api.themoviedb.org/3/trending/movie/day?api_key=947976bd814222f623ebca2e4e5e8a3a')
    .then(function(respuesta){
        return respuesta.json()
    })
    .then(function(tendencias){
        console.log(tendencias);
        tendencias.results.forEach(pelicula => {
            let articulo = document.createElement('article')
            articulo.innerHTML += `<a href="movieDetail.html?id=${pelicula.id}"> <img src='https://image.tmdb.org/t/p/w500${pelicula.poster_path}' alt='${pelicula.title}'/> </a> <p>${pelicula.title}</p> <br>`

            peliculasTendencias.append(articulo)
        })
    })
    .catch(function(error){
        console.log(error);
    })
    

     // NO TE PODES PERDER:
    let peliculasNo = document.querySelector('.peliculasNo')

    fetch('https://api.themoviedb.org/3/movie/top_rated?api_key=bad307a59294abaae8c2d0fcc48475d8&language=es-ES&page=1')
    .then(function(respuesta){
        return respuesta.json()
    })
    .then(function(no){
        console.log(no);
        no.results.forEach(pelicula => {
            let articulo = document.createElement('article')
            articulo.innerHTML += `<a href="movieDetail.html?id=${pelicula.id}&titulo=${pelicula.title}&imagen=${pelicula.poster_path}&overview=${pelicula.overview}&calificacion=${pelicula.vote_average}&genero=${pelicula.genre_ids}&fechapubli=${pelicula.release_date}"> <img src='https://image.tmdb.org/t/p/w500${pelicula.poster_path}' alt='${pelicula.title}'/> </a> <p>${pelicula.title}</p> <br>`

            peliculasNo.append(articulo)
        })
    })
    .catch(function(error){
        console.log(error);
    })

     // SERIES:
    let peliculaSeries = document.querySelector('.peliculaSeries')

    fetch('https://api.themoviedb.org/3/tv/popular?api_key=947976bd814222f623ebca2e4e5e8a3a&language=es-ES&page=1')
    .then(function(respuesta){
        return respuesta.json()
    })
    .then(function(cualquiera){
        console.log(cualquiera);
        cualquiera.results.forEach(pelicula => {
            let articulo = document.createElement('article')
            articulo.innerHTML += `<a href="movieDetail.html?id=${pelicula.id}&titulo=${pelicula.title}&imagen=${pelicula.poster_path}&overview=${pelicula.overview}&calificacion=${pelicula.vote_average}&genero=${pelicula.genre_ids}&fechapubli=${pelicula.release_date}"> <img src='https://image.tmdb.org/t/p/w500${pelicula.poster_path}' alt='${pelicula.title}'/> </a> <p>${pelicula.original_name}</p> <br>`

            peliculaSeries.append(articulo)
        })
    })
    .catch(function(error){
        console.log(error);
    })
})