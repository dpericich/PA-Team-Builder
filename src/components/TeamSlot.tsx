import React, { useState, useEffect } from 'react';
import styled from 'styled-components';
import EmptySlot from './EmptySlot';
import FilledSlot from './FilledSlot';
import extendedPokemon from '../helpers/pokemon';
// import getPokemonData, { generation1, generation2, generation3, generation4, hisuian } from '../helpers/pokeapi'
import getPokemonData, { hisuianPokemonNumbers } from '../helpers/pokeapi'

type PokemonDataProps = {
    types: string[],
    name :string,
    sprite: string,
    shinySprite: string,
    id: number
}

type TeamSlotProps = {
    availablePokemon: (string | number)[][],
    isShiny: boolean
}


const TeamSlot = ({ availablePokemon, isShiny }: TeamSlotProps) => {
    const [selectedPokemon, setSelectedPokemon] = useState(0)
    const [pokemonData, setPokemonData] = useState({ types: [], name: '', sprite: '', shinySprite: '', id: 0 })
    const [filterRange, setFilterRange] = useState([])

    useEffect(() => {
    }, [selectedPokemon])

    const makePokeApiCall = async (pokemonName: number) => {
        setSelectedPokemon(pokemonName);
        const rawPokeData = await getPokemonData(pokemonName);
        console.log(rawPokeData)
        if (hisuianPokemonNumbers.includes(pokemonName)) { 
            setPokemonData(rawPokeData);
            return;
        }

        let pokeData = {
            types: [],
            name: '',
            sprite: '',
            shinySprite: '',
            id: 0,
        }
        
        pokeData.name = rawPokeData.name;
        let types = rawPokeData.types.map((val: any) => val.type.name)
        pokeData.types = types
        pokeData.sprite = rawPokeData.sprites.front_default;
        pokeData.shinySprite = rawPokeData.sprites.front_shiny;
        pokeData.id = rawPokeData.id

        // Have another call here to rework special typings
        // Hisuian versions of starters + others

        setPokemonData(pokeData);
    }

    const resetSlot = () => {
        setSelectedPokemon(0);
        setPokemonData({types: [], name: '', sprite: '', shinySprite: '', id: 0});
    }

    const TeamSlotContainer = styled.div`
        display: flex;
        flex-direction: column;
        align-items: center;
        justify-content: center;    
        width: 400px;
        border: 1px solid black;
        padding: .5rem 0;
    `
    const ReleaseButton = styled.button`
        outline: none;
        border: none;
        font-size: 1.3rem;
        padding: .3rem .5rem;
        border-radius: .5rem;
        box-shadow: 2px 2px 5px rgba(0,0,0,0.3);
        cursor: pointer;

        &:active {
            transform: scale(.98)
        }
    `

    return(
        <TeamSlotContainer>
            {!selectedPokemon && <select onChange={(e) => makePokeApiCall(parseInt(e.target.value))}>
                {/* {extendedPokemon.map((mon) => ( */}
                {availablePokemon.map((mon) => (
                        <option value={mon[1]}>{mon[0]}</option>
                ))}
            </select> }
            {selectedPokemon ? 
                <FilledSlot types={pokemonData.types}
                            name={pokemonData.name}
                            sprite={pokemonData.sprite}
                            shinySprite={pokemonData.shinySprite}
                            isShiny={isShiny}
                /> 
                : <EmptySlot /> }
            <ReleaseButton onClick={resetSlot} disabled={!selectedPokemon}>Release</ReleaseButton>
        </TeamSlotContainer>
    )
};

export default TeamSlot;