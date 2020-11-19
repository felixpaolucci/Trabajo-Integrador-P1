window.addEventListener('load', function(){
    // SLIDER:
    let slider = document.querySelector('.slider')
    fetch('https://api.themoviedb.org/3/movie/popular?api_key=947976bd814222f623ebca2e4e5e8a3a&language=es-ES&page=1')
    .then(respuesta =>{
        return respuesta.json()
    })
    .then(function(sliderA){
        for(let i = 8; i < 12; i ++){
            slider.innerHTML += `<li> <img src="https://image.tmdb.org/t/p/original${sliderA.results[i].backdrop_path}" alt="slider" </li>`
        }
    })


})