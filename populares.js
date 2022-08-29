var generos=[];


const API_KEY = "d16c8ae735142a7d406b7bd38c1b308b"

const populares = (data) =>{
    let dadosHTML ='';

    let dadosFilmes = JSON.parse(data.target.response);


    localStorage.setItem('db_filmes', data.target.response);
 
    for (let i=0; i<dadosFilmes.results.length; i++){
        let filme = dadosFilmes.results[i];
        let data = new Date (filme.release_date);
        let geners = converteGenero(filme.genre_ids);

        dadosHTML+= `
        <div class="card card-princip" style="width: 18rem;">
        <img src="https://image.tmdb.org/t/p/w500/${filme.poster_path}" class="card-img-top img-princip" alt="...">
        <div class="card-body">
            <h5 class="card-title title-filme">${filme.title}</h5>
            <p class="card-text data">${data.toLocaleDateString ()}</p>
            <p class="card-text categoria">${geners}</p>
            <a href="/detalhes.html?id=${filme.id}" class="btn btn-primary maisdet">+ Detalhes</a>
        </div>
    </div>
    `
    }

    document.getElementById('populares').innerHTML = dadosHTML;
}

function converteGenero(array){
    let string="";
   // console.log(generos.genres.length)
    //console.log(generos)
    for(i=0; i<array.length; i++){

        for(u=0;u<generos.genres.length;u++){

            if(array[i]==generos.genres[u].id){

                if(string=="") {
                    string+=generos.genres[u].name;
                }else{
                    string+=", " + generos.genres[u].name;
                }
            }
        }
    }
    return string;
}

const mostraErro = () =>{
    alert('Erro na requisição')
}

const init = () => {
    let xhr = new XMLHttpRequest();
    let url = `https://api.themoviedb.org/3/movie/popular?api_key=d16c8ae735142a7d406b7bd38c1b308b&language=pt-BR`
    xhr.onload = populares;
    xhr.onerror = mostraErro;

    xhr.open('GET', url, true)
    xhr.send();
}


const salvaGenero = (data) =>{
    let resposta = JSON.parse(data.target.response);
  //  console.log(resposta);
    generos=resposta;
}

const genre = () => {
    let xhr4 = new XMLHttpRequest();
    let url = `https://api.themoviedb.org/3/genre/movie/list?api_key=d16c8ae735142a7d406b7bd38c1b308b&language=pt-BR`
    xhr4.onload = salvaGenero;
    xhr4.onerror = mostraErro;

    xhr4.open('GET', url, true)
    xhr4.send();

}



genre();
init();
