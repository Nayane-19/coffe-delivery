import { Router } from "./Router";
import "./globalStyles.css";
import { BrowserRouter } from "react-router-dom";
import { CoffeContextProvider } from "./context/cartContext";

function App() {
  return (
    <BrowserRouter>
      <CoffeContextProvider>
        <Router />
      </CoffeContextProvider>
    </BrowserRouter>
  );
}

export default App;
