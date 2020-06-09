import { h } from "preact";
import type { FunctionComponent } from "preact";
import styled, { keyframes } from "styled-components/macro";
import tw from "twin.macro";
import logo from "./logo.png";

const AppContainer = tw.div`text-center`;

const AppHeader = styled.header`
  ${tw`flex flex-col items-center justify-center min-h-screen text-white`}

  background-color: #282c34;
  font-size: calc(10px + 2vmin);
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
  ${tw`pointer-events-none mb-4`}

  height: 40vmin;
  animation: ${AppLogoSpin} infinite 1.6s ease-in-out alternate;
`;

const App: FunctionComponent = () => {
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
};

export default App;
