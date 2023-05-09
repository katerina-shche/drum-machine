import DrumPad from "./components/DrumPad.js"
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
      audiosrc: pianoAmajor
    }, 
    {
      kbdletter: 'W',
      sound: 'piano-B-major',
      audiosrc: pianoBmajor
    },
    {
      kbdletter: 'E',
      sound: 'piano-C-major',
      audiosrc: pianoCmajor
    },
    {
      kbdletter: 'A',
      sound: 'piano-D-major',
      audiosrc: pianoDmajor
    },
    {
      kbdletter: 'S',
      sound: 'piano-E-major',
      audiosrc: pianoEmajor
    },
    {
      kbdletter: 'D',
      sound: 'piano-F-major',
      audiosrc: pianoFmajor
    },
    {
      kbdletter: 'Z',
      sound: 'piano-F-sharp',
      audiosrc: pianoFsharpmajor
    },
    {
      kbdletter: 'X',
      sound: 'piano-G-major',
      audiosrc: pianoGmajor
    }, 
    {
      kbdletter: 'C',
      sound: 'piano-G-sharp',
      audiosrc: pianoGsharpmajor
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
      hello world
    </div>
  );
}

export default App;
