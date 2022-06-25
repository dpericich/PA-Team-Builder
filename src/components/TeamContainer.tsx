import React, { useState } from 'react';
import styled from 'styled-components';
import extendedPokemon from '../helpers/pokemon';
import TeamSlot from './TeamSlot';
import GenerationFilter from './GenerationFilter';

const TeamContainer = () => {
    interface teamSlot {
        number: []
    }

    const [availablePokemon, setAvailablePokemon] = useState(extendedPokemon)
    const [isShiny, setIsShiny] = useState(false);
    // Need to store the pokemon here instead of in the actual team slot
    // need to have a way to 
    const [team, setTeam] = useState([[],[],[],[],[],[]]);

    const setTeamSlot = (id: number, data): void => {

    }

    const TeamContainerContainer = styled.div`
        display: grid;
        grid-template-columns: repeat(3, 400px);
        grid-gap: 1.3rem;
    `

    const isShinyButtonText = (): string => {
        return isShiny ? "Regular Sprite": "I'm feeling Shiny";
    }

    return(
        <div>
            <p>Filter Options by Generation: </p>
            <GenerationFilter setAvailablePokemon={setAvailablePokemon} />
            <button onClick={() => setIsShiny(!isShiny)}>{isShinyButtonText()}</button>
            <TeamContainerContainer>
                {team.map(slot => (
                    <TeamSlot availablePokemon={availablePokemon} isShiny={isShiny}/>
                ))}
            </TeamContainerContainer>
        </div>
    )
};

export default TeamContainer;