import React from 'react';
import styled from 'styled-components';

const EmptySlot = () => {
    const EmptySlotContainer = styled.div`
        display: flex;
        flex-direction: column;
        align-items: center;
        justify-content: center;
    `

    const ImageSpacer = styled.div`
        width: 10rem;
        height: 10rem;
    `

    return(
        <EmptySlotContainer>
            Select a Pokemon
            <ImageSpacer></ImageSpacer>
        </EmptySlotContainer>
    )
};

export default EmptySlot;