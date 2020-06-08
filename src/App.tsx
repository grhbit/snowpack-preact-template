import { h } from "preact";
import styled, { keyframes } from "styled-components/macro";
import logo from "./logo.png";

const AppContainer = styled.div`
  text-align: center;
`;

const AppHeader = styled.header`
  background-color: #282c34;
  min-height: 100vh;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  font-size: calc(10px + 2vmin);
  color: white;
`;

const AppLink = styled.a`
  color: #61dafb;
`;

const AppLogoSpin = keyframes`
  from {
    transform: scale(1);
  }
  to {
    transform: scale(1.06);
  }
`;

const AppLogo = styled.img`
  height: 40vmin;
  pointer-events: none;
  margin-bottom: 1rem;
  animation: ${AppLogoSpin} infinite 1.6s ease-in-out alternate;
`;

function App() {
  return (
    <AppContainer>
      <AppHeader>
        <AppLogo src={logo} alt="logo" />
        <p>
          Edit <code>src/App.jsx</code> and save to reload.
        </p>
        <AppLink href="https://preactjs.com" target="_blank" rel="noopener noreferrer">
          Learn Preact
        </AppLink>
      </AppHeader>
    </AppContainer>
  );
}

export default App;
