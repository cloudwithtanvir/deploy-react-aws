import logo from './logo.svg';
import './App.css';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          You have successfully deployed your app.
        </p>
        <a
          className="App-link"
          href="https://tanvirewu.github.io/"
          target="_blank"
          rel="noopener noreferrer"
        >
          Visit my profile
        </a>
      </header>
    </div>
  );
}

export default App;
