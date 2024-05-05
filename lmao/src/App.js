import AudioPlayer from './components/audioPlayer';
import './App.css';
import { Timer } from './components/Timer';
import { Helmet } from 'react-helmet';

function App() {
  return (
    <div className="App">
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
      <h1>purring player</h1>
      <AudioPlayer />
      <Timer />
      

    </div>
  );
}

export default App;
