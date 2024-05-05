import AudioPlayer from './components/audioPlayer';
import Hero from './components/hero'
import TaskCard from './components/TaskCard'
import './App.css';
import { Timer } from './components/Timer';
import styles from './style';

function App() {
  return (
    <div className={`${styles.flexCenter} page-wrapper overflow-hidden flex-col w-full`}> {/* page wrapper*/} 
      <main className={`${styles.flexCenter} flex-col gap-[40px]`}>
      <Hero/>
      <AudioPlayer/>
      <Timer/>
      <TaskCard/>
      </main>
    </div>
  );
}

export default App;
