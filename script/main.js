let random = Math.floor(Math.random()*150)
const url = `https://pokeapi.co/api/v2/pokemon/`
const button = document.querySelector(".dameRandomPokemon")

button.addEventListener("click", fetchUrlPokemon)

async function fetchUrlPokemon(){
    let random = Math.floor(Math.random()*150) + 1;
    let randomStats = Math.floor(Math.random()*5+ 1);
    const pokemonUrl= await fetch(url + random);
    const data = await pokemonUrl.json();
    const tipo = data.types[0].type.name;
    const imgPokemon = document.querySelector("#pokemon-img")
    const namePokemon = document.querySelector(".name")
    const habilidad1 = document.querySelector(".hab1")
    const habilidad2 = document.querySelector(".hab2")
    const ps = document.querySelector(".ps")
    const card = document.querySelector(".card-display")
    const tiposColores = {
        fire: '#F08030',
        water: '#6890F0',
        grass: '#78C850',
        electric: '#F8D030',
        ice: '#98D8D8',
        fighting: '#C03028',
        poison: '#A040A0',
        ground: '#E0C068',
        flying: '#A890F0',
        psychic: '#F85888',
        bug: '#A8B820',
        rock: '#B8A038',
        ghost: '#705898',
        dragon: '#7038F8',
        dark: '#705848',
        steel: '#B8B8D0',
        fairy: '#EE99AC',
        normal: '#A8A878'
    };
    const colors = tiposColores[tipo]||"777";
   
    card.style.backgroundColor = colors;
    ps.innerHTML = data.stats[randomStats].base_stat;
    imgPokemon.setAttribute("src", data.sprites.front_default); 
    data.name = data.name.charAt(0).toUpperCase() + data.name.slice(1);
    namePokemon.innerHTML = data.name;
    habilidad1. innerHTML = data.abilities[0].ability.name.charAt(0).toUpperCase() + data.abilities[0].ability.name.slice(1);
    habilidad2. innerHTML = data.abilities[1].ability.name.charAt(0).toUpperCase() + data.abilities[1].ability.name.slice(1);
    
    
            
    console.log(data)
}
fetchUrlPokemon();