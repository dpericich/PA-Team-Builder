import axios from 'axios'
import getPokemonData from './pokeapi'

const pokemon = 'Rowlet,Dartrix,Decidueye,Cyndaquil,Quilava,Typhlosion,Oshawott,Dewott,Samurott,Bidoof,Bibarel,Starly,Staravia,Staraptor,Shinx,Luxio,Luxray,Wurmple,Silcoon,Beautifly,Cascoon,Dustox,Ponyta,Rapidash,Eevee,Vaporeon,Jolteon,Flareon,Espeon,Umbreon,Leafeon,Glaceon,Sylveon,Zubat,Golbat,Crobat,Drifloon,Drifblim,Kricketot,Kricketune,Buizel,Floatzel,Burmy,Wormadam,Mothim,Geodude,Graveler,Golem,Stantler,Wyrdeer,Munchlax,Snorlax,Paras,Parasect,Pichu,Pikachu,Raichu,Abra,Kadabra,Alakazam,Chimchar,Monferno,Infernape,Buneary,Lopunny,Cherubi,Cherrim,Psyduck,Golduck,Combee,Vespiquen,Scyther,Kleavor,Scizor,Heracross,Mime Jr.,Mr. Mime,Aipom,Ambipom,Magikarp,Gyarados,Shellos,Gastrodon,Qwilfish,Overqwil,Happiny,Chansey,Blissey,Budew,Roselia,Roserade,Carnivine,Petilil,Lilligant,Tangela,Tangrowth,Barboach,Whiscash,Croagunk,Toxicroak,Ralts,Kirlia,Gardevoir,Gallade,Yanma,Yanmega,Hippopotas,Hippowdon,Pachirisu,Stunky,Skuntank,Teddiursa,Ursaring,Ursaluna,Goomy,Sliggoo,Goodra,Onix,Steelix,Rhyhorn,Rhydon,Rhyperior,Bonsly,Sudowoodo,Lickitung,Lickilicky,Togepi,Togetic,Togekiss,Turtwig,Grotle,Torterra,Porygon,Porygon2,Porygon-Z,Gastly,Haunter,Gengar,Spiritomb,Murkrow,Honchkrow,Unown,Spheal,Sealeo,Walrein,Remoraid,Octillery,Skorupi,Drapion,Growlithe,Arcanine,Glameow,Purugly,Machop,Machoke,Machamp,Chatot,Duskull,Dusclops,Dusknoir,Piplup,Prinplup,Empoleon,Mantyke,Mantine,Basculin,Basculegion,Vulpix,Ninetales,Tentacool,Tentacruel,Finneon,Lumineon,Magby,Magmar,Magmortar,Magnemite,Magneton,Magnezone,Bronzor,Bronzong,Elekid,Electabuzz,Electivire,Gligar,Gliscor,Gible,Gabite,Garchomp,Nosepass,Probopass,Voltorb,Electrode,Rotom,Chingling,Chimecho,Misdreavus,Mismagius,Cleffa,Clefairy,Clefable,Sneasel,Sneasel,Sneasler,Weavile,Snorunt,Glalie,Froslass,Cranidos,Rampardos,Shieldon,Bastiodon,Swinub,Piloswine,Mamoswine,Bergmite,Avalugg,Snover,Abomasnow,Zorua,Zoroark,Rufflet,Braviary,Riolu,Lucario,Uxie,Mesprit,Azelf,Heatran,Regigigas,Cresselia,Tornadus,Thundurus,Landorus,Enamorus,Dialga,Palkia,Giratina,Arceus,Phione,Manaphy,Shaymin,Darkrai'.split(',');

// Will need to add in filter for updating types for specific Arceus pokemon versions
// Also store assets for Hisuian pokemon that don't exist on the Pokeapi -> middleware

const BASE_POKE_API_URL = "https://pokeapi.co/api/v2/pokemon/"

const getPokemonData = async (pokemonNumber) => {
    const pokemonResponse = await fetch(`${BASE_POKE_API_URL}${pokemonNumber}`);
    const pokemonData = pokemonResponse.data;
    return pokemonData;
}

const expandedPokemon = pokemon.map(pokemon => {
    [pokemon, getPokemonData(pokemon).id]
})
