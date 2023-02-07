import { Button } from '@mui/material';
import './App.css';

const copyButtonFunction = () => {
  navigator.clipboard.writeText("play.crownnetwork.org");
  alert("Your IP should now be in your clipboard, enjoy!");
}

function App() {
  return (
    <div className="centerContainer">

      <h1 className='title glow'>Crown Network</h1>
      <h2></h2>
      <Button className='copyButton' variant="text" onClick={copyButtonFunction}>Copy IP</Button>


    </div>
  )
}

export default App