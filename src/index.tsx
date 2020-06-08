import { h, render, Fragment } from "preact";
import "preact/devtools";
import App from "./App";
import GlobalStyle from "./GlobalStyle";

const root = document.getElementById("root");

if (root !== null) {
  render(
    <Fragment>
      <GlobalStyle />
      <App />
    </Fragment>,
    root,
  );
}
