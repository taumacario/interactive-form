import { Background } from "./components/Background";
import { Cards } from "./components/Cards";
import { GlobalStyle } from "./styles/global";

import {FormContextProvider} from './context/FormContext'

export function App() {
  return (
    <FormContextProvider>
      <GlobalStyle />
      <Background />
      <Cards />
    </FormContextProvider>
  );
}
