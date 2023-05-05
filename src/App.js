import DrumPad from "./components/DrumPad.js"
//styles
import './App.css';
//sounds
import  pianoAMajor  from '../public/piano keys audio/piano-a_A_major.wav'



function App() {
  const piano = [
    {
      kbdletter: 'Q',
      sound: 'piano-A-major',
      audiosrc: pianoAMajor
    }, 
    {
      kbdletter: 'W',
      sound: 'piano-B-major',
      audiosrc: ''
    },
    {
      kbdletter: 'E',
      sound: 'piano-C-major',
      audiosrc: ''
    },
    {
      kbdletter: 'A',
      sound: 'piano-D-major',
      audiosrc: ''
    },
    {
      kbdletter: 'S',
      sound: 'piano-E-major',
      audiosrc: ''
    },
    {
      kbdletter: 'D',
      sound: 'piano-F-major',
      audiosrc: ''
    },
    {
      kbdletter: 'Z',
      sound: 'piano-F-sharp',
      audiosrc: ''
    },
    {
      kbdletter: 'X',
      sound: 'piano-G-major',
      audiosrc: ''
    }, 
    {
      kbdletter: 'C',
      sound: 'piano-G-sharp',
      audiosrc: ''
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
