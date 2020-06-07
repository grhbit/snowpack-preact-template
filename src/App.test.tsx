import { render } from "@testing-library/preact";
import { h } from "preact";
import App from "./App";

test("renders learn preact link", () => {
  const { getByText } = render(<App />);
  const linkElement = getByText(/learn preact/i);
  expect(linkElement).toBeInTheDocument();
});
