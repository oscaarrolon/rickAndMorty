const section = document.getElementById('section')



fetch('https://rickandmortyapi.com/api/character')
    .then((response) => {
        return response.json()
    })
    .then((json) => {
        pintarPersonaje(json.results)
    })
    .catch((error) => {
        console.log(error)
    })

//lugar de orige, especie e imagen

pintarPersonaje = (pArray) => {
    pArray.map(pArray => {
        const article = document.createElement('article')
        article.classList.add('verde')

        const articleRojo = document.createElement('article')
        articleRojo.classList.add('rojo')

        const h2 = document.createElement('h2')
        h2.innerText = `Nombre: ${pArray.name}`

        const genero = document.createElement('h3')
        genero.innerText = `Genero: ${pArray.gender}`

        const origen = document.createElement('h3')
        origen.innerText = `Lugar de origen: ${pArray.origin.name}`

        const especie = document.createElement('h3')
        especie.innerText = `Especie: ${pArray.species}`

        const img = document.createElement('img')
        img.src = `${pArray.image}`

        if (pArray.status === 'Alive') {
            article.append(img, h2, genero, origen, especie)
            section.append(article)
        } else if (pArray.status === 'Dead') {
            articleRojo.append(img, h2, genero, origen, especie)
            section.append(articleRojo)
        }
    }
    )
}




