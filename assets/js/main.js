 
// => esse item é uma Arrow function Uma expressão arrow function possui uma 
// sintaxe mais curta quando comparada a uma expressão de função 
// (function expression) e não tem seu próprio this, arguments, 
// super ou new.target. Estas expressões de funções são melhor aplicadas para funções 
// que não sejam métodos, e elas não podem ser usadas como construtoras (constructors). 

const pokemonList = document.getElementById('pokemonList')
const loadMoreButton = document.getElementById('loadMoreButton')

const maxRecords = 151
const limit = 4
let offset = 0;

function convertPokemonToLi(pokemon) {
    return `
        <li class="pokemon ${pokemon.type}">
            <span class="number">#${pokemon.number}</span>
            <span class="name">${pokemon.name}</span>
            

            <div class="detail">
                <ol class="types">
                    ${pokemon.types.map((type) => `<li class="type ${type}">${type}</li>`).join('')}  
                </ol>

                <div class="Bola">
                    <img src="./Image/Bola.png">       
                </div>
                <div class="Logo">
                   <img src="${pokemon.photo}"
                    alt="${pokemon.name}" > 
                </div> 
            </div>
        </li>
    `
}


function loadPokemonItens(offset, limit) {
    pokeApi.getPokemons(offset, limit).then((pokemons = []) => {
        const newHtml = pokemons.map(convertPokemonToLi).join('')
        pokemonList.innerHTML += newHtml
    })
}

loadPokemonItens(offset, limit)

loadMoreButton.addEventListener('click', () => {
    offset += limit
    const qtdRecordsWithNexPage = offset + limit

    if (qtdRecordsWithNexPage >= maxRecords) {
        const newLimit = maxRecords - offset
        loadPokemonItens(offset, newLimit)
        
        loadMoreButton.parentElement.removeChild(loadMoreButton)
    } else {
        loadPokemonItens(offset, limit)
        
    }
})
    

    
    
    


        

 //      for (let i = 0; i < pokemons.length; i++) {
 //           const pokemon = pokemons[i]; 
 //           listItems.push(convertPokemonToLi(pokemon)) 
 //      }
       
 //      console.log(listItems)
       


