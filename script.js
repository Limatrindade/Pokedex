var quantidade = document.getElementById("quantidade")
    quantidade.addEventListener("keyup", () => {
        insiraQuantidade(quantidade.value)
    })


insiraQuantidade(3)

function insiraQuantidade(quantidade) {
    fetch("https://pokeapi.co/api/v2/pokemon?limit="+quantidade)
    .then(response => response.json())
    .then(allpokemon => {

        var propriedadesPokemon = []

        allpokemon.results.map((valor) => {
            //console.log(valor)
            //console.log(valor.url)
            //console.log(valor.name)

            fetch(valor.url)
            .then(response => response.json())
            .then(pokemonSingle => {
                propriedadesPokemon.push({
                    nome: valor.name,
                    imagem: pokemonSingle.sprites.front_default
                })

                //console.log(propriedadesPokemon)

                if(propriedadesPokemon.length == quantidade) {
                    // fazendo essa verificação com intuito de parar o map
                    //console.log(propriedadesPokemon)
                    let boxDosPokedexs = document.querySelector(".box-pokedex")
                    boxDosPokedexs.innerHTML = ""
                    //console.log(boxDosPokedexs)
                    propriedadesPokemon.map((valor) => {
                        boxDosPokedexs.innerHTML+= `
                        
                        <div class="box-pokedex-img">
                            <img src=`+valor.imagem+` alt="foto do pokemon" width="60%" height="60%">
                            <p class="nome-pokemon">`+valor.nome+`</p>
                        </div>

                        `
                    })
                }

            })
        })
    })
}