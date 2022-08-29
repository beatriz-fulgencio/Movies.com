
const cinema = (data) => {
    let textoHTML = '';

    let dadoFilmes = JSON.parse(data.target.response);

    console.log("Debug")
    localStorage.setItem('db2_filmes', data.target.response)
    
    console.log(dadoFilmes)


    for (let i = 0; i < dadoFilmes.results.length; i++) {
        let filmes = dadoFilmes.results[i];
        let data = new Date (filmes.release_date);
        let geners = converteGenero(filmes.genre_ids);

        textoHTML += `
        <div class="card-filmes">
        <img src="https://image.tmdb.org/t/p/w500/${filmes.poster_path}" class="img-card" alt="">
        <div class="corpo-card">
            <h5 class="titulo-card">${filmes.title}</h5>
            <p class="categoria">${geners} </p>
            <p class="card-texto">${filmes.original_title}</p>
            <p class="data">${data.toLocaleDateString ()}</p>
            <a href="/detalhes.html?id=${filmes.id}" class="btn btn-primary maisdet">+ Detalhes</a>
        </div>
    </div>
    `}
    document.getElementById('cinema').innerHTML = textoHTML;
}

const mostraErros = () => {
    alert('Erro na requisição')
}

function initial () {
    let xhr2 = new XMLHttpRequest();
    let urll = `https://api.themoviedb.org/3/movie/now_playing?api_key=d16c8ae735142a7d406b7bd38c1b308b&language=pt-BR`
    xhr2.onload = cinema;
    xhr2.onerror = mostraErros;

    xhr2.open('GET', urll, true)
    xhr2.send();
}


genre();
initial();

