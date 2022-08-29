const API_KEY = "d16c8ae735142a7d406b7bd38c1b308b";


function exibePesquisa (){
    let divTela=document.getElementById('txt-busca');
    let textos='';

    //montar texto html das noticias
    let dados = JSON.parse(this.responseText);
    localStorage.setItem('db3_filmes',this.responseText)

    for(i=0;i<dados.results.length; i++){
        let filmes = dados.results[i];

        let data = new Date (filmes.release_date);

        textos+=
        `<div class="search-card container-artigo-busca" >
        <div class="img-busca">
            <img class="img-busca" src="https://image.tmdb.org/t/p/w500/${filmes.poster_path}" alt="">
        </div>
        <div class="text-busca">
        <h3 class="title-busca" id="title-artigo"> ${filmes.title}</h3>
        <p>Data de lançamento:${data.toLocaleDateString ()}</p>
        <p class="resumo-busca"> ${filmes.overview}</p>
        <a href="/detalhes.html?id=${filmes.id}" class="btn btn-primary maisdet maisdet-busca">+ Detalhes</a>
        </div>
    </div>
        `
    }

    divTela.innerHTML = textos;
}

function executaPesquisa (evento){
    let query = document.getElementById("busca").value;

    let xhr3 = new XMLHttpRequest();
    xhr3.onload = exibePesquisa;
    xhr3.open('GET', `https://api.themoviedb.org/3/search/movie?api_key=d16c8ae735142a7d406b7bd38c1b308b&language=pt-BR&query=${query}`)
    xhr3.send();
    console.log("Debug");
    evento.preventDefault();
}

document.getElementById('buscar-query').addEventListener('submit', executaPesquisa);