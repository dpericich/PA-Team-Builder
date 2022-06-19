import React from 'react';
import styled from 'styled-components';

type TypesProps = {
    types: string[]
}

const Types = ({ types }: TypesProps) => {
    const TypesContainer = styled.div`
        display: flex;
        flex-direction: row;
        justify-content: space-around;
        align-items: center;
    `


    return(
        <TypesContainer>
            {types.map(type => <div className={`type ${type}`}>{type}</div>)}
        </TypesContainer>
    )
};

export default Types;