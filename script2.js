async function findPokemon() {
    let pokemonName = document.querySelector('#pokemon').value;
    let response = await axios.get('https://pokeapi.co/api/v2/pokemon/' + pokemonName );
    console.log(response.data);
    let name = response.data.name;
    let hp = response.data.stats[0].base_stat;
    let image = response.data.sprites.front_shiny;
    let results = document.querySelector('#results');
    results.innerHTML = `
      <h2>${name}</h2>
      <h3>HP: ${hp}</h3>
      <img src="${image}"/>
    `
  }
  
  let btn = document.querySelector('#search-btn');
  
  btn.addEventListener('click', function(){
    findPokemon();
  })