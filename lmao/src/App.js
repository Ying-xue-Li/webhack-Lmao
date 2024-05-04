import AudioPlayer from './components/audioPlayer';
import './App.css';
import { Timer } from './components/Timer';

function App() {
  return (
    <div className="App">
      <h1>purring player</h1>
      <AudioPlayer />
      <Timer />
    </div>
  );
}

export default App;
