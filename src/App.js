import logo from "./miki-logo.png";
import Dictionary from "./Dictionary";
import './App.css';

export default function App() {
  return (
    <div className="App">
      <div className="container">
      <header className="App-header">
        <img src={logo} className="App-logo img-fluid" alt="logo" />
      </header>
      <main>
        <Dictionary defaultKeyword="sunset"/>
      </main>
      <footer className="App-footer">
      This project was coded by{" "}
          <a
            href="https://tranquil-tarsier-93eb74.netlify.app/"
            target="_blank"
            rel="noopener noreferrer"
          >
            Miki.I
          </a>{" "}
          and is{" "}
          <a
            href="https://github.com/Mikicanad/dictionary-app"
            target="_blank"
            rel="noopener noreferrer"
          >
            open-sourced on GitHub
          </a>{" "}
          and{" "}
          <a
            href="https://mikisdictionaryappproject.netlify.app/"
            target="_blank"
            rel="noopener noreferrer"
          >
            hosted on Netlify
          </a>
      </footer>
      </div>
    </div>
  );
}


