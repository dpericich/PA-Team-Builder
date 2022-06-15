import React from 'react';
import styled from 'styled-components';
import './App.css';
import TeamContainer from './components/TeamContainer';
import Header from './components/Header';

// How do I manage state? 
// Each TeamSlot could control their own state for the first iteration
// I am not concerned with looking at types yet
// In the future, I could have the app manage a state with callbacks for the TeamSlots
// These callbacks can be called during useEffect where the Pokemon state changes to check for new Pokemon

function App() {
  const AppContainer = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    margin-bottom: 1rem;
  `

  return (
    <div>
      <Header />
      <AppContainer>
        <TeamContainer />
      </AppContainer>
    </div>
  )
}

export default App;
