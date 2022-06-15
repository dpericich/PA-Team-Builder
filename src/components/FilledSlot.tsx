import React from 'react';
import styled from 'styled-components';
import Types from './Types';

type FilledSlotProps = {
    types: string[],
    name: string,
    sprite: string,
    shinySprite: string,
    isShiny: boolean
}


const FilledSlot = ({types, name, sprite, shinySprite, isShiny }: FilledSlotProps) => {
    const FilledContainer = styled.div`
        display: flex;
        flex-direction: column;
        align-items: center;
        justify-content: flex-start;
    `
    
    const Name = styled.h4`
        font-size: 1.3rem;
        text-align: center;
        padding: 0;
    `

    const PokemonSprite = styled.img`
        width: 10rem;
        heightL 10rem;
    `

    return(
        <FilledContainer>
            {/* Maybe have the pokeball and name here */}
            <Name>{name.toUpperCase()}</Name>
            <Types types={types} />
            <PokemonSprite src={isShiny ? shinySprite : sprite} alt={`Image of ${name}`} />
        </FilledContainer>
    )
};

export default FilledSlot;