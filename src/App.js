import DrumPad from "./components/DrumPad.js"
import { v4 as uuidv4 } from 'uuid'



//styles
import './App.css';
//sounds
import pianoAmajor from './assets/piano-a_A_major.wav' 
import pianoBmajor from './assets/piano-b_B_major.wav'
import pianoCmajor from './assets/piano-c_C_major.wav'
import pianoDmajor from './assets/piano-d_D_major.wav'
import pianoEmajor from './assets/piano-e_E_major.wav'
import pianoFmajor from './assets/piano-f_F_major.wav'
import pianoFsharpmajor from './assets/piano-f_F#_major.wav'
import pianoGmajor from './assets/piano-g_G_major.wav'
import pianoGsharpmajor from './assets/piano-g_G#_major.wav'



function App() {
  const piano = [
    {
      kbdletter: 'Q',
      sound: 'piano-A-major',
      audiosrc: pianoAmajor,
      key: 1
    }, 
    {
      kbdletter: 'W',
      sound: 'piano-B-major',
      audiosrc: pianoBmajor,
      key: 2
    },
    {
      kbdletter: 'E',
      sound: 'piano-C-major',
      audiosrc: pianoCmajor,
      key: 3
    },
    {
      kbdletter: 'A',
      sound: 'piano-D-major',
      audiosrc: pianoDmajor,
      key: 4
    },
    {
      kbdletter: 'S',
      sound: 'piano-E-major',
      audiosrc: pianoEmajor,
      key: 5
    },
    {
      kbdletter: 'D',
      sound: 'piano-F-major',
      audiosrc: pianoFmajor,
      key: 6
    },
    {
      kbdletter: 'Z',
      sound: 'piano-F-sharp',
      audiosrc: pianoFsharpmajor,
      key: 7
    },
    {
      kbdletter: 'X',
      sound: 'piano-G-major',
      audiosrc: pianoGmajor,
      key: 8
    }, 
    {
      kbdletter: 'C',
      sound: 'piano-G-sharp',
      audiosrc: pianoGsharpmajor,
      key: 9
    }
  ]
  return (
    <div className='drum-machine'>
      drum-machine
      <div className="drum-pads-box">
        {piano.map((kbdkey) => <DrumPad key={uuidv4()} props={ kbdkey } />)}
      </div>
      <div className='display'>
        display sound name of the pressed key
      </div>
      
    </div>
  );
}

export default App;
