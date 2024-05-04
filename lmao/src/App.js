import logo from './logo.svg';
import AudioPlayer from './components/audioPlayer';
import './App.css';

function App() {
  return (
    <div className="App">
      <h1>purring player</h1>
      <AudioPlayer />
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Dont Learn React
        </a>
      </header>
    </div>
  );
}

export default App;
