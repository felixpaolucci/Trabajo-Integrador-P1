window.addEventListener('load', function(){
    let nombreGenero = document.querySelector('.nombreGenero')
    // let imagenes = document.querySelector('.imagenes')
    let listaa = document.querySelector('.listaa')

    let generoInfo = location.search
    let generoInfoObj = new URLSearchParams (generoInfo)
    let id = generoInfoObj.get('id')
    let name = generoInfoObj.get('name')
    nombreGenero.innerHTML += name

    // PELICULAS
    fetch(`https://api.themoviedb.org/3/discover/movie?api_key=bad307a59294abaae8c2d0fcc48475d8&language=es-ES&include_adult=false&include_video=false&page=1&with_genres=${id}`)
    .then(function(respuesta){
        return respuesta.json()
    })
    .then(function(aaa){
        /*console.log(genero)
        for (var i = 0; i < listaGeneros.results.length; i++) {
            document.querySelector(".listaGeneros").innerHTML += `<li><a href='movieDetail.html?idSerie=${listaGeneros.results[i].id}'><img src=" ${URLPosterlistaGeneros.results[i].poster_path}" alt=''></a></li>`;
        }*/
        aaa.results.forEach(peliculas => {
            listaa.innerHTML += `<a href="movieDetail.html?id=${peliculas.id}"> <img src='https://image.tmdb.org/t/p/w500${peliculas.poster_path}' alt='${peliculas.title}'/> </a> <p class="titulitos">${peliculas.title}</p> <br>`
        });
    })
    .catch(function(error){
        console.log(error)
    })

    // SERIES
    fetch(`https://api.themoviedb.org/3/discover/tv?api_key=bad307a59294abaae8c2d0fcc48475d8&language=es-ES&include_adult=false&include_video=false&page=1&with_genres=${id}`)
    .then(function(respuesta){
        return respuesta.json()
    })
    .then(function(aaa){
        /*console.log(genero)
        for (var i = 0; i < listaGeneros.results.length; i++) {
            document.querySelector(".listaGeneros").innerHTML += `<li><a href='movieDetail.html?idSerie=${listaGeneros.results[i].id}'><img src=" ${URLPosterlistaGeneros.results[i].poster_path}" alt=''></a></li>`;
        }*/
        aaa.results.forEach(series => {
            listaa.innerHTML += `<a href="serieDetail.html?id=${series.id}"> <img src='https://image.tmdb.org/t/p/w500${series.poster_path}' alt='${series.name}'/> </a> <p>${series.name}</p> <br>`
        });
    })
    .catch(function(error){
        console.log(error)
    })

})

