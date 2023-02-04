import "./App.css";
import Dictionary from "./Dictionary";

function App() {
  return (
    <div className="App">
      <div className="container">
        <header>
          <h1>Dictionary</h1>
        </header>

        <main>
          <Dictionary defaultKeyword="sunset" />
        </main>
        <footer>This project was coded by Hinako</footer>
      </div>
    </div>
  );
}

export default App;
