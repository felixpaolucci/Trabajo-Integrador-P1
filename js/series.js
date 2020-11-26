window.addEventListener('load', function(){
    // SERIES:
    let largas = document.querySelector('.largas')
    fetch('https://api.themoviedb.org/3/tv/top_rated?api_key=bad307a59294abaae8c2d0fcc48475d8&language=es-ES&page=1')
    .then(function(respuesta){
        return respuesta.json()
    })
    .then(function(cualquiera){
        console.log(cualquiera);
        cualquiera.results.forEach(pelicula => {
            let articulo = document.createElement('article')
            articulo.innerHTML += `<a href="serieDetail.html?id=${pelicula.id}&titulo=${pelicula.title}&imagen=${pelicula.poster_path}&overview=${pelicula.overview}&calificacion=${pelicula.vote_average}&genero=${pelicula.genre_ids}&fechapubli=${pelicula.release_date}"> <img src='https://image.tmdb.org/t/p/w500${pelicula.poster_path}' alt='${pelicula.title}'/> </a> <p>${pelicula.original_name}</p> <br>`

            largas.append(articulo)
        })
    })
    .catch(function(error){
        console.log(error);
    })
    let cortas = document.querySelector('.cortas')
    fetch('https://api.themoviedb.org/3/tv/on_the_air?api_key=bad307a59294abaae8c2d0fcc48475d8&language=es-ES&page=1')
    .then(function(respuesta){
        return respuesta.json()
    })
    .then(function(cualquiera){
        console.log(cualquiera);
        cualquiera.results.forEach(pelicula => {
            let articulo = document.createElement('article')
            articulo.innerHTML += `<a href="serieDetail.html?id=${pelicula.id}&titulo=${pelicula.title}&imagen=${pelicula.poster_path}&overview=${pelicula.overview}&calificacion=${pelicula.vote_average}&genero=${pelicula.genre_ids}&fechapubli=${pelicula.release_date}"> <img src='https://image.tmdb.org/t/p/w500${pelicula.poster_path}' alt='${pelicula.title}'/> </a> <p>${pelicula.original_name}</p> <br>`

            cortas.append(articulo)
        })
    })
    .catch(function(error){
        console.log(error);
    })
    let miniseries = document.querySelector('.miniseries')
    fetch('https://api.themoviedb.org/3/tv/airing_today?api_key=bad307a59294abaae8c2d0fcc48475d8&language=es-ES&page=1')
    .then(function(respuesta){
        return respuesta.json()
    })
    .then(function(cualquiera){
        console.log(cualquiera);
        cualquiera.results.forEach(pelicula => {
            let articulo = document.createElement('article')
            articulo.innerHTML += `<a href="serieDetail.html?id=${pelicula.id}&titulo=${pelicula.title}&imagen=${pelicula.poster_path}&overview=${pelicula.overview}&calificacion=${pelicula.vote_average}&genero=${pelicula.genre_ids}&fechapubli=${pelicula.release_date}"> <img src='https://image.tmdb.org/t/p/w500${pelicula.poster_path}' alt='${pelicula.title}'/> </a> <p>${pelicula.original_name}</p> <br>`

            miniseries.append(articulo)
        })
    })
    .catch(function(error){
        console.log(error);
    })

})