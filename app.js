const $form=$('#search-form');
const $searchField=$('#search-key-word');
const $responseContainer=$('#response-container');
const pokeImages=[{

}]



$form.submit(function(e){
    e.preventDefault();
    $responseContainer.html="";
    searchedForText=$searchField.val();
    getPoks();
})

function getPoks(){
   
    $.ajax({
        type:'GET',
        url: "https://pokeapi.co/api/v2/pokedex/1/",
        dataType:'json'
    }).done(addPoks)
   
}  

/*function handleError(){
    console.log("algo falló");
}*/

function addPoks(pokemon){

     console.log(pokemon);
    const pokes=pokemon.pokemon_entries;
    //pokes.forEach(function(eachPok){
        for (let i=0; i<2; i++){
            const pokelist=pokes[i];
            const completePok=pokelist.pokemon_species;
            const names=pokelist.pokemon_species.name;
            const pokUrl=pokelist.pokemon_species.url;
            console.log(pokelist);
    //paintPoks(names)
    getUrl(pokelist)
}
}

function getUrl(pokelist){
    const pokUrl=pokelist.pokemon_species.url;
    console.log(pokUrl);
    getInfoForEachPokemon(pokUrl)
}



//get url  info for each pokemon ajax call


function getInfoForEachPokemon(pokUrl){
    $.ajax({
        type:'GET',
        url: pokUrl,
        dataType:'json'
    }).done(addInfo)
}

function addInfo(pokesInfo){
   const namePok=pokesInfo.name;
    const color=pokesInfo.color.name;
    const captureRate=pokesInfo.captureRate;
    const habitat=pokesInfo.habitat.name;
    const forms=pokesInfo.forms_switchable.name;
    const pokemonDescription = pokesInfo.flavor_text_entries[3].flavor_text;
    const pokemonGruop = pokesInfo.egg_groups[0].name;
    const pokemonGenre = pokesInfo.genera[4].genus;
    const growthRate=pokesInfo.growth_rate.name;
   console.log(namePok);
   console.log(color);
   // paintPoks(names, color);
    paintPoks(namePok, color, captureRate, habitat, forms,pokemonDescription);
}




function paintPoks(namePok, color, captureRate,habitat,forms,pokemonDescription){
    //console.lo1g(element);
   const link=$( "<a />");
    const img=document.createElement('img');
    const name=$("<h2></h2>").text(namePok);
    const colorPoks=$("<p></p>").text(color);
    const captRate=$("<p></p>").text(captureRate);
    const habit=$("<p></p>").text(habitat);
    const form=$("<p></p>").text(forms);
    const descript=$("<p></p>").text(pokemonDescription);

    
   link.attr({
        href: '#',
        'id':'event-target',
       //'onclick':showModal(event),
        'data-color':color,
        'data-habitat':habitat,
    })
    link.append(name);
    $responseContainer.append(link);
    $responseContainer.append(colorPoks);
    $responseContainer.append(captRate);
    $responseContainer.append(habit);
    $responseContainer.append(form);
    $responseContainer.append(descript);
   // $responseContainer.append(namePok);
   
   
}