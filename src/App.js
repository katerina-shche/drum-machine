import DrumPad from "./components/DrumPad.js"
//styles
import './App.css';



function App() {
  const piano = [
    {
      kbdletter: 'Q',
      sound: 'piano-A-major',
      audiocrs: ''
    }, 
    {
      kbdletter: 'W',
      sound: 'piano-B-major',
      audiocrs: ''
    },
    {
      kbdletter: 'E',
      sound: 'piano-C-major',
      audiocrs: ''
    },
    {
      kbdletter: 'A',
      sound: 'piano-D-major',
      audiocrs: ''
    },
    {
      kbdletter: 'S',
      sound: 'piano-E-major',
      audiocrs: ''
    },
    {
      kbdletter: 'D',
      sound: 'piano-F-major',
      audiocrs: ''
    },
    {
      kbdletter: 'Z',
      sound: 'piano-F-sharp',
      audiocrs: ''
    },
    {
      kbdletter: 'X',
      sound: 'piano-G-major',
      audiocrs: ''
    }, 
    {
      kbdletter: 'C',
      sound: 'piano-G-sharp',
      audiocrs: ''
    }
  ]
  return (
    <div className='drum-machine'>
      drum-machine
      <div className="drum-pads-box">
        {piano.map((key) => <DrumPad props={ key } />)}
      </div>
      <div className='display'>
        display sound name of the pressed key
      </div>
    </div>
  );
}

export default App;
