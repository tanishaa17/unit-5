import './App.css';
import { Inventory } from "./componants/inventory";

function App() {
  const books = 13;
  const pens = 10
  const notebooks = 44;
  const inkpens = 78
  return (
    <div className="App">
      <h1>Inventory Management App</h1>
      <Inventory
        books={books}
        pens={pens}
        notebooks={notebooks}
        inkpens={inkpens}

      />
    </div>
  );
}

export default App;
