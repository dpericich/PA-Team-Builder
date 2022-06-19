import React, { useEffect, useState } from 'react';
import extendedPokemon, { generation1, generation2, generation3, generation4, hisuian } from '../helpers/pokemon'

type GenerationFilterProps = {
    setAvailablePokemon
}

const GenerationFilter = ({ setAvailablePokemon }: GenerationFilterProps ) => {
    const [selectedGeneration, setSelectedGeneration] = useState('all');

    const placeholderOption = ["Select a Pokemon", ""]

    useEffect(() => {
        if (selectedGeneration == "all") {
            setAvailablePokemon(extendedPokemon);
        } else if (selectedGeneration == "gen1") {
            const gen1Pokemon = [placeholderOption, ...extendedPokemon.filter((mon) => generation1.includes(mon[1]))]
            setAvailablePokemon(gen1Pokemon)
        } else if (selectedGeneration == "gen2") {
            const gen2Pokemon = [placeholderOption, ...extendedPokemon.filter((mon) => generation2.includes(mon[1]))]
            setAvailablePokemon(gen2Pokemon)
        } else if (selectedGeneration == "gen3") {
            const gen3Pokemon = [placeholderOption, ...extendedPokemon.filter((mon) => generation3.includes(mon[1]))]
            setAvailablePokemon(gen3Pokemon)
        } else if (selectedGeneration == "gen4") {
            const gen4Pokemon = [placeholderOption, ...extendedPokemon.filter((mon) => generation4.includes(mon[1]))]
            setAvailablePokemon(gen4Pokemon)
        } else if (selectedGeneration == "his") {
            const hisuainPokemon = [placeholderOption, ...extendedPokemon.filter((mon) => hisuian.includes(mon[1]))]
            setAvailablePokemon(hisuainPokemon)
        }
    }, [selectedGeneration])

    return(
        <select onChange={(e) => setSelectedGeneration(e.target.value)}>
            <option value="all">All Pokemon</option>
            <option value="gen1">Generation 1</option>
            <option value="gen2">Generation 2</option>
            <option value="gen3">Generation 3</option>
            <option value="gen4">Generation 4</option>
            <option value="his">Hisuian</option>
        </select>
    )
};

export default GenerationFilter;