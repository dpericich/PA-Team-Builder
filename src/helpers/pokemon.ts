// removed this 
const pokemon: string[] = 'Rowlet,Dartrix,Decidueye,Cyndaquil,Quilava,Typhlosion,Oshawott,Dewott,Samurott,Bidoof,Bibarel,Starly,Staravia,Staraptor,Shinx,Luxio,Luxray,Wurmple,Silcoon,Beautifly,Cascoon,Dustox,Ponyta,Rapidash,Eevee,Vaporeon,Jolteon,Flareon,Espeon,Umbreon,Leafeon,Glaceon,Sylveon,Zubat,Golbat,Crobat,Drifloon,Drifblim,Kricketot,Kricketune,Buizel,Floatzel,Burmy,Wormadam,Mothim,Geodude,Graveler,Golem,Stantler,Wyrdeer,Munchlax,Snorlax,Paras,Parasect,Pichu,Pikachu,Raichu,Abra,Kadabra,Alakazam,Chimchar,Monferno,Infernape,Buneary,Lopunny,Cherubi,Cherrim,Psyduck,Golduck,Combee,Vespiquen,Scyther,Kleavor,Scizor,Heracross,Mime Jr.,Mr. Mime,Aipom,Ambipom,Magikarp,Gyarados,Shellos,Gastrodon,Qwilfish,Overqwil,Happiny,Chansey,Blissey,Budew,Roselia,Roserade,Carnivine,Petilil,Lilligant,Tangela,Tangrowth,Barboach,Whiscash,Croagunk,Toxicroak,Ralts,Kirlia,Gardevoir,Gallade,Yanma,Yanmega,Hippopotas,Hippowdon,Pachirisu,Stunky,Skuntank,Teddiursa,Ursaring,Ursaluna,Goomy,Sliggoo,Goodra,Onix,Steelix,Rhyhorn,Rhydon,Rhyperior,Bonsly,Sudowoodo,Lickitung,Lickilicky,Togepi,Togetic,Togekiss,Turtwig,Grotle,Torterra,Porygon,Porygon2,Porygon-Z,Gastly,Haunter,Gengar,Spiritomb,Murkrow,Honchkrow,Unown,Spheal,Sealeo,Walrein,Remoraid,Octillery,Skorupi,Drapion,Growlithe,Arcanine,Glameow,Purugly,Machop,Machoke,Machamp,Chatot,Duskull,Dusclops,Dusknoir,Piplup,Prinplup,Empoleon,Mantyke,Mantine,Basculin,Basculegion,Vulpix,Ninetales,Tentacool,Tentacruel,Finneon,Lumineon,Magby,Magmar,Magmortar,Magnemite,Magneton,Magnezone,Bronzor,Bronzong,Elekid,Electabuzz,Electivire,Gligar,Gliscor,Gible,Gabite,Garchomp,Nosepass,Probopass,Voltorb,Electrode,Rotom,Chingling,Chimecho,Misdreavus,Mismagius,Cleffa,Clefairy,Clefable,Sneasel,Sneasel,Sneasler,Weavile,Snorunt,Glalie,Froslass,Cranidos,Rampardos,Shieldon,Bastiodon,Swinub,Piloswine,Mamoswine,Bergmite,Avalugg,Snover,Abomasnow,Zorua,Zoroark,Rufflet,Braviary,Riolu,Lucario,Uxie,Mesprit,Azelf,Heatran,Regigigas,Cresselia,Tornadus,Thundurus,Landorus,Enamorus,Dialga,Palkia,Giratina,Arceus,Phione,Manaphy,Shaymin,Darkrai'.split(',');

const extendedPokemon: [string, number][] = [['Select a Pokemon', 0], ['Rowlet', 722], ['Dartrix', 723], ['Decidueye', 724], ['Cyndaquil', 155], ['Quilava', 156], ['Typhlosion', 157], ['Oshawott', 501], ['Dewott', 502], ['Samurott', 503], ['Bidoof', 399], ['Bibarel', 400], ['Starly', 396], ['Staravia', 397], ['Staraptor', 398], ['Shinx', 403], ['Luxio', 404], ['Luxray', 405], ['Wurmple', 265], ['Silcoon', 266], ['Beautifly', 267], ['Cascoon', 268], ['Dustox', 269], ['Ponyta', 77], ['Rapidash', 78], ['Eevee', 133], ['Vaporeon', 134], ['Jolteon', 135], ['Flareon', 136], ['Espeon', 196], ['Umbreon', 197], ['Leafeon', 470], ['Glaceon', 471], ['Sylveon', 700], ['Zubat', 41], ['Golbat', 42], ['Crobat', 169], ['Drifloon', 425], ['Drifblim', 426], ['Kricketot', 401], ['Kricketune', 402], ['Buizel', 418], ['Floatzel', 419], ['Burmy', 412], ['Wormadam', 413], ['Mothim', 414], ['Geodude', 74], ['Graveler', 75], ['Golem', 76], ['Stantler', 234], ['Wyrdeer', 899], ['Munchlax', 446], ['Snorlax', 143], ['Paras', 46], ['Parasect', 47], ['Pichu', 172], ['Pikachu', 25], ['Raichu', 26], ['Abra', 63], ['Kadabra', 64], ['Alakazam', 65], ['Chimchar', 390], ['Monferno', 391], ['Infernape', 392], ['Buneary', 427], ['Lopunny', 428], ['Cherubi', 420], ['Cherrim', 421], ['Psyduck', 54], ['Golduck', 55], ['Combee', 415], ['Vespiquen', 416], ['Scyther', 123], ['Kleavor', 900], ['Scizor', 212], ['Heracross', 214], ['Mime Jr.', 439], ['Mr. Mime', 122], ['Aipom', 190], ['Ambipom', 424], ['Magikarp', 129], ['Gyarados', 130], ['Shellos', 422], ['Gastrodon', 423], ['Qwilfish', 211], ['Overqwil', 904], ['Happiny', 440], ['Chansey', 113], ['Blissey', 242], ['Budew', 406], ['Roselia', 315], ['Roserade', 407], ['Carnivine', 455], ['Petilil', 548], ['Lilligant', 549], ['Tangela', 114], ['Tangrowth', 465], ['Barboach', 339], ['Whiscash', 340], ['Croagunk', 453], ['Toxicroak', 454], ['Ralts', 280], ['Kirlia', 281], ['Gardevoir', 282], ['Gallade', 475], ['Yanma', 193], ['Yanmega', 469], ['Hippopotas', 449], ['Hippowdon', 450], ['Pachirisu', 417], ['Stunky', 434], ['Skuntank', 435], ['Teddiursa', 216], ['Ursaring', 217], ['Ursaluna', 901], ['Goomy', 704], ['Sliggoo', 705], ['Goodra', 706], ['Onix', 95], ['Steelix', 208], ['Rhyhorn', 111], ['Rhydon', 112], ['Rhyperior', 464], ['Bonsly', 438], ['Sudowoodo', 185], ['Lickitung', 108], ['Lickilicky', 463], ['Togepi', 175], ['Togetic', 176], ['Togekiss', 468], ['Turtwig', 387], ['Grotle', 388], ['Torterra', 389], ['Porygon', 137], ['Porygon2', 233], ['Porygon-Z', 474], ['Gastly', 92], ['Haunter', 93], ['Gengar', 94], ['Spiritomb', 442], ['Murkrow', 198], ['Honchkrow', 430], ['Unown', 201], ['Spheal', 363], ['Sealeo', 364], ['Walrein', 365], ['Remoraid', 223], ['Octillery', 224], ['Skorupi', 451], ['Drapion', 452], ['Growlithe', 58], ['Arcanine', 59], ['Glameow', 431], ['Purugly', 432], ['Machop', 66], ['Machoke', 67], ['Machamp', 68], ['Chatot', 441], ['Duskull', 355], ['Dusclops', 356], ['Dusknoir', 477], ['Piplup', 393], ['Prinplup', 394], ['Empoleon', 395], ['Mantyke', 458], ['Mantine', 226], ['Basculin', 550], ['Basculegion', 902], ['Vulpix', 37], ['Ninetales', 38], ['Tentacool', 72], ['Tentacruel', 73], ['Finneon', 456], ['Lumineon', 457], ['Magby', 240], ['Magmar', 126], ['Magmortar', 467], ['Magnemite', 81], ['Magneton', 82], ['Magnezone', 462], ['Bronzor', 436], ['Bronzong', 437], ['Elekid', 239], ['Electabuzz', 125], ['Electivire', 466], ['Gligar', 207], ['Gliscor', 472], ['Gible', 443], ['Gabite', 444], ['Garchomp', 445], ['Nosepass', 299], ['Probopass', 476], ['Voltorb', 100], ['Electrode', 101], ['Rotom', 479], ['Chingling', 433], ['Chimecho', 358], ['Misdreavus', 200], ['Mismagius', 429], ['Cleffa', 173], ['Clefairy', 35], ['Clefable', 36], ['Sneasel', 215], ['Sneasler', 903], ['Weavile', 463], ['Snorunt', 361], ['Glalie', 362], ['Froslass', 478], ['Cranidos', 408], ['Rampardos', 409], ['Shieldon', 410], ['Bastiodon', 411], ['Swinub', 220], ['Piloswine', 221], ['Mamoswine', 473], ['Bergmite', 712], ['Avalugg', 713], ['Snover', 459], ['Abomasnow', 460], ['Zorua', 570], ['Zoroark', 571], ['Rufflet', 627], ['Braviary', 628], ['Riolu', 447], ['Lucario', 448], ['Uxie', 480], ['Mesprit', 481], ['Azelf', 482], ['Heatran', 485], ['Regigigas', 486], ['Cresselia', 488], ['Tornadus', 641], ['Thundurus', 642], ['Landorus', 645], ['Enamorus', 905], ['Dialga', 483], ['Palkia', 484], ['Giratina', 487], ['Arceus', 493], ['Phione', 489], ['Manaphy', 490], ['Shaymin', 492], ['Darkrai', 491]];

const createGenerationRange = (start: number, stop:number): number[] => {
    let rangeContainer: number[] = [];
    for (let i:number = start; i <= stop; i++) {
        rangeContainer.push(i);
    }

    return rangeContainer
}

export default extendedPokemon;
export const generation1: number[] = createGenerationRange(1, 151);
export const generation2: number[] = createGenerationRange(152, 251);
export const generation3: number[] = createGenerationRange(252, 386);
export const generation4: number[] = createGenerationRange(387, 493);
export const hisuian: number[] = createGenerationRange(494, 913);

// make a type here to ensure that the type of each object in the hisuianPokemon hash is consistent
// need to review how to structure these response to allow the TeamSlot to correctly navigate data structures
type hisuianMon = {
    name: string,
    id: number,
    types: string[],
    shinySprite: string,
    sprite: string
}

export const hisuianPokemon: {} = {
    58: {
        name: 'growlithe',
        id: 58,
        types: ['fire', 'rock'],
        shinySprite: './assets/growlithe_shiny.png',
        sprite: './assets/growlithe_default.png'
    },
    59: {
        name: 'arcanine',
        id: 59,
        types: ['fire', 'rock'],
        shinySprite: './assets/arcanine_shiny.png',
        sprite: './assets/arcanine_default.png'
    },
    100: {
        name: 'voltorb',
        id: 100,
        types: ['electric', 'grass'],
        shinySprite: './assets/voltorb_shiny.png',
        sprite: './assets/voltorb_default.png'
    },
    101: {
        name: 'electrode',
        id: 101,
        types: ['electric', 'grass'],
        shinySprite: './assets/electrode_shiny.png',
        sprite: './assets/electrode_default.png'
    },
    157: {
        name: 'typhlosion',
        id: 157,
        types: ['normal', 'psychic'],
        shinySprite: './assets/typhlosion_shiny.png',
        sprite: './assets/typhlosion_default.png'
    },
    211: {
        name: 'qwilfish',
        id: 211,
        types: ['dark', 'poison'],
        shinySprite: './assets/qwilfish_shiny.png',
        sprite: './assets/qwilfish_default.png'
    },
    215: {
        name: 'sneasel',
        id: 215,
        types: ['fight', 'poison'],
        shinySprite: './assets/sneasel_shiny.png',
        sprite: './assets/sneasel_default.png'
    },
    503: {
        name: 'samurott',
        id: 503,
        types: ['water', 'dark'],
        shinySprite: './assets/samurott_shiny.png',
        sprite: './assets/samurott_default.png'
    },
    549: {
        name: 'lilligant',
        id: 549,
        types: ['grass', 'fight'],
        shinySprite: './assets/lilligant_shiny.png',
        sprite: './assets/lilligant_default.png'
    },
    570: {
        name: 'zorua',
        id: 570,
        types: ['normal', 'ghost'],
        shinySprite: './assets/zorua_shiny.png',
        sprite: './assets/zorua_default.png'
    },
    571: {
        name: 'zoroark',
        id: 571,
        types: ['normal', 'ghost'],
        shinySprite: './assets/zoroark_shiny.png',
        sprite: './assets/zoroark_default.png'
    },
    628: {
        name: 'braviary',
        id: 628,
        types: ['psychic', 'flying'],
        shinySprite: './assets/braviary_shiny.png',
        sprite: './assets/braviary_default.png'
    },
    705: {
        name: 'sliggoo',
        id: 705,
        types: ['steel', 'dragon'],
        shinySprite: './assets/sliggoo_shiny.png',
        sprite: './assets/sliggoo_default.png'
    },
    706: {
        name: 'goodra',
        id: 706,
        types: ['steel', 'dragon'],
        shinySprite: './assets/goodra_shiny.png',
        sprite: './assets/goodra_default.png'
    },
    713: {
        name: 'avalugg',
        id: 713,
        types: ['ice', 'rock'],
        shinySprite: './assets/avalugg_shiny.png',
        sprite: './assets/avalugg_default.png'
    },
    724: {
        name: 'decidueye',
        id: 724,
        types: ['grass', 'fight'],
        shinySprite: './assets/decidueye_shiny.png',
        sprite: './assets/decidueye_default.png'
    },
    899: {
        name: 'wydeer',
        id: 899,
        types: ['normal', 'psychic'],
        shinySprite: './assets/wydeer_shiny.png',
        sprite: './assets/wydeer_default.png'
    },
    900: {
        name: 'kleavor',
        id: 900,
        types: ['bug', 'rock'],
        shinySprite: './assets/kleavor_shiny.png',
        sprite: './assets/kleavor_default.png'
    },
    901: {
        name: 'ursaluna',
        id: 901,
        types: ['ground', 'normal'],
        shinySprite: './assets/ursaluna_shiny.png',
        sprite: './assets/ursaluna_default.png'
    },
    902: {
        name: 'basculegion',
        id: 902,
        types: ['ghost', 'water'],
        shinySprite: './assets/basculegion_shiny.png',
        sprite: './assets/basculegion_default.png'
    },
    903: {
        name: 'sneasler',
        id: 903,
        types: ['fight', 'poison'],
        shinySprite: './assets/sneasler_shiny.png',
        sprite: './assets/sneasler_default.png'
    },
    904: {
        name: 'overqwil',
        id: 904,
        types: ['dark', 'poison'],
        shinySprite: './assets/overqwil_shiny.png',
        sprite: './assets/overqwil_default.png'
    },
    905: {
        name: 'enamorus',
        id: 905,
        types: ['fairy', 'flying'],
        shinySprite: './assets/enamorus_shiny.png',
        sprite: './assets/enamorus_default.png'
    }
}

export const variantTypePokemon: {} = {}