window.addEventListener('load', function(){
    let nombreGenero = document.querySelector('.nombreGenero')
    let imagenes = document.querySelector('.imagenes')

    let generoInfo = location.search
    let generoInfoObj = new URLSearchParams (generoInfo)
    let id = generoInfoObj.get('id')
    let name = generoInfoObj.get('name')
    nombreGenero.innerHTML += name

    fetch(`https://api.themoviedb.org/3/discover/movie?api_key=bad307a59294abaae8c2d0fcc48475d8&language=es-ES&include_adult=false&include_video=false&page=1&with_genres=${id}`)
    .then(function(respuesta){
        return respuesta.json()
    })
    .then(function(genero){
        console.log(genero)
        genero.results.forEach(peliculas => {
            imagenes.innerHTML += `<a href="movieDetail.html?id=${peliculas.id}"> <img src='https://image.tmdb.org/t/p/w500${peliculas.poster_path} alt ='${peliculas.title}'/> </a> `
            
        });
    })
    .catch(function(error){
        console.log(error)
    })

})

