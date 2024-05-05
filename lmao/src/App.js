import AudioPlayer from './components/audioPlayer';
import Hero from './components/hero'
import TaskSection from './components/TaskSection'
import './App.css';
import { Timer } from './components/Timer';
import styles from './style';
import { Helmet } from 'react-helmet';

function App() {
  return (
    <div className={`${styles.flexCenter} page-wrapper overflow-hidden flex-col w-full`}> {/* page wrapper*/} 
      <Helmet>
        <script>
          {`
          window.embeddedChatbotConfig = {
            chatbotId: "c-_ZW2fcqEn37DlrXw6Np",
            domain: "www.chatbase.co"
          };
          `}
        </script>
        <script
          src="https://www.chatbase.co/embed.min.js"
          chatbotId="c-_ZW2fcqEn37DlrXw6Np"
          domain="www.chatbase.co"
          defer
        />
      </Helmet>
      <main className={`${styles.flexCenter} flex-col gap-[40px]`}>
      <Hero/>
      <h1>purring player</h1>
      <AudioPlayer/>
      <Timer/>
      <TaskSection/>
      </main>
    </div>
  );
}

export default App;
