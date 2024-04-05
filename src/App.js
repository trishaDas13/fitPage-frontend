import StockProvider from "./context/ContextAPI";
import Router from "./router/Router";

function App() {

  return (
    <StockProvider>
      <div className="App">
        <Router/>
      </div>
    </StockProvider>
  );
}

export default App;
