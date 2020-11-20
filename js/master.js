window.addEventListener('load', function(){
    // SLIDER:
    let slider = document.querySelector('.slider')
    fetch('https://api.themoviedb.org/3/movie/popular?api_key=947976bd814222f623ebca2e4e5e8a3a&language=es-ES&page=1')
    .then(respuesta =>{
        return respuesta.json()
    })
    .then(function(sliderA){
        for(let i = 4; i < 12; i ++){
            slider.innerHTML += `<li> <img src="https://image.tmdb.org/t/p/original${sliderA.results[i].backdrop_path}" alt="slider" </li>`
        }
    })



    // ESTRENOS:
    let peliculasEstrenos = document.querySelector('.peliculasEstrenos')

    fetch('https://api.themoviedb.org/3/movie/now_playing?api_key=947976bd814222f623ebca2e4e5e8a3a&language=en-US&page=1')
    .then(function(respuesta){
        return respuesta.json()
    })
    .then(function(estrenos){
        console.log(estrenos);
        estrenos.results.forEach(pelicula => {
            let articulo = document.createElement('article')
            articulo.innerHTML += `<a href="movieDetail.html?id=${pelicula.id}&titulo=${pelicula.title}&imagen=${pelicula.poster_path}&overview=${pelicula.overview}&calificacion=${pelicula.vote_average}&genero=${pelicula.genre_ids}&fechapubli=${pelicula.release_date}"> <img src='hhtps://image.tmdb.org/t/p/w500${pelicula.poster_path}' alt='${pelicula.title}'/> </a>`

            peliculasEstrenos.append(articulo)
        })
    })
    .catch(function(error){
        console.log(error);
    })

    

})