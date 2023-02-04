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
        <footer>
          Open-source code by{" "}
          <a
            href="https://github.com/hinako-fuji/dictionary-react"
            target="_blank"
            rel="noreferrer"
          >
            Hinako
          </a>
        </footer>
      </div>
    </div>
  );
}

export default App;
