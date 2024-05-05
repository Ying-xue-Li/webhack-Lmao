import AudioPlayer from './components/audioPlayer';
import Hero from './components/hero'
import TaskSection from './components/TaskSection'
import './App.css';
import { Timer } from './components/Timer';
import styles from './style';
import { Helmet } from 'react-helmet';
import CardsBox from './components/cardsBox'
import  {TodoWrapper}  from './components/TodoWrapper';
import MovingEyes from './components/MovingEye';

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
      <div
          style={{
            display: "flex",
            justifyContent: "center"
          }}
        ><MovingEyes/></div>
      <main className={`${styles.flexCenter} main-wrapper`}>
        <Hero/>
        
        <AudioPlayer/>
        <Timer/>
        {/* <TaskSection/> */}
        <TodoWrapper/>
        <CardsBox />
      </main>
    </div>
  );
}

export default App;
