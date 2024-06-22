async function carregarUsuarios() {
    const requestOpitions = {
        method: "GET"
    
    };
    const response = await fetch("https://rickandmortyapi.com/api/character", requestOpitions)
    const data = await response.json();

    const personagens = data.results
    
    console.log(data);

    let container = document.getElementById('container')

    personagens.map((personagem)=>{

        const div = document.createElement('div')
        const p = document.createElement('p')
        p.innerHTML = personagem.name

        const imagem = document.createElement('img')
        imagem.src = personagem.image


        div.appendChild(p)
        div.appendChild(imagem)

        container.appendChild(div)


    })
    
}

carregarUsuarios()
  
