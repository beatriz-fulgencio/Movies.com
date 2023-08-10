

const detalhesfunction = () => {
    const params = new URLSearchParams(location.search)
    let id = params.get('id');

    var dadosFilmes = JSON.parse(localStorage.getItem('db_filmes'));
    let idxFilme = dadosFilmes.results.findIndex((elem) => elem.id == id);

    if (idxFilme == -1) {
        console.log("entrou")
        dadosFilmes = JSON.parse(localStorage.getItem('db2_filmes'));
        idxFilme = dadosFilmes.results.findIndex((elem) => elem.id == id);
    } 

    if (idxFilme == -1) {
        console.log("entrou")
        dadosFilmes = JSON.parse(localStorage.getItem('db3_filmes'));
        idxFilme = dadosFilmes.results.findIndex((elem) => elem.id == id);
    } 
    
    console.log(idxFilme)
    if (idxFilme > -1) {
        let filme = dadosFilmes.results[idxFilme]

        let data = new Date(filme.release_date);

        //let geners = converteGenero(filme.genre_ids);

        let new_detales = '';
        new_detales += `
<div class="grid-detalhes">
<img src="https://image.tmdb.org/t/p/w500/${filme.poster_path}" alt="" class="img-filme">
<div class="texto-detalhes" >
    <h2 class="titulo-filme">${filme.title}</h2>
    <h6 class="frase-filme">${filme.original_title}</h6>
    <div class="linha">
        <p><small class="data">${data.toLocaleDateString()}</small></p>
        <p><small class="categoria">${""}</small></p>
    </div>

    <div class="detalhacao">
        <div class="box-detalha">
            <svg width="19" height="18" viewBox="0 0 19 18" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path
                    d="M9.5 0L11.6329 6.56434H18.535L12.9511 10.6213L15.084 17.1857L9.5 13.1287L3.91604 17.1857L6.04892 10.6213L0.464963 6.56434H7.36712L9.5 0Z"
                    fill="#ffff00" />
            </svg>
            ${filme.vote_average}/10
        </div>
        <div class="idioma box-detalha">
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path
                    d="M19 8H18V5C18 4.20435 17.6839 3.44129 17.1213 2.87868C16.5587 2.31607 15.7956 2 15 2H5C4.20435 2 3.44129 2.31607 2.87868 2.87868C2.31607 3.44129 2 4.20435 2 5V17C2.00099 17.1974 2.06039 17.3901 2.17072 17.5539C2.28105 17.7176 2.43738 17.845 2.62 17.92C2.73868 17.976 2.86882 18.0034 3 18C3.13161 18.0008 3.26207 17.9755 3.38391 17.9258C3.50574 17.876 3.61656 17.8027 3.71 17.71L6.52 14.89H8V16.33C8 17.1256 8.31607 17.8887 8.87868 18.4513C9.44129 19.0139 10.2044 19.33 11 19.33H17.92L20.29 21.71C20.3834 21.8027 20.4943 21.876 20.6161 21.9258C20.7379 21.9755 20.8684 22.0008 21 22C21.1312 22.0034 21.2613 21.976 21.38 21.92C21.5626 21.845 21.7189 21.7176 21.8293 21.5539C21.9396 21.3901 21.999 21.1974 22 21V11C22 10.2044 21.6839 9.44129 21.1213 8.87868C20.5587 8.31607 19.7956 8 19 8ZM8 11V12.89H6.11C5.97839 12.8892 5.84793 12.9145 5.72609 12.9642C5.60426 13.014 5.49344 13.0873 5.4 13.18L4 14.59V5C4 4.73478 4.10536 4.48043 4.29289 4.29289C4.48043 4.10536 4.73478 4 5 4H15C15.2652 4 15.5196 4.10536 15.7071 4.29289C15.8946 4.48043 16 4.73478 16 5V8H11C10.2044 8 9.44129 8.31607 8.87868 8.87868C8.31607 9.44129 8 10.2044 8 11ZM20 18.59L19 17.59C18.9074 17.4955 18.7969 17.4203 18.6751 17.3688C18.5532 17.3173 18.4223 17.2906 18.29 17.29H11C10.7348 17.29 10.4804 17.1846 10.2929 16.9971C10.1054 16.8096 10 16.5552 10 16.29V11C10 10.7348 10.1054 10.4804 10.2929 10.2929C10.4804 10.1054 10.7348 10 11 10H19C19.2652 10 19.5196 10.1054 19.7071 10.2929C19.8946 10.4804 20 10.7348 20 11V18.59Z"
                    fill="white" />
            </svg>
            ${filme.original_language}
        </div>
    </div>
    <strong>Sinopse:</strong>
    <p class="sinopse">${filme.overview}</p>
   
</div>
</div>`

        document.getElementById('detalhes').innerHTML = new_detales;
    } else {
        alert('filme não encontrado')
    }
}


detalhesfunction();