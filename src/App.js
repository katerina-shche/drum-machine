import DrumPad from "./components/DrumPad.js"
import { v4 as uuidv4 } from 'uuid'
import { useEffect, useState } from "react";



//styles
import './App.css';
//sounds
import pianoAmajor from './assets/piano-a_A_major.wav' 
import pianoBmajor from './assets/piano-b_B_major.wav'
import pianoCmajor from './assets/piano-c_C_major.wav'
import pianoDmajor from './assets/piano-d_D_major.wav'
import pianoEmajor from './assets/piano-e_E_major.wav'
import pianoFmajor from './assets/piano-f_F_major.wav'
import pianoFsharpmajor from './assets/piano-f_Fsharp_major.wav'
import pianoGmajor from './assets/piano-g_G_major.wav'
import pianoGsharpmajor from './assets/piano-g_Gsharp_major.wav'



function App() {
 
  const piano = [
    {
      kbdletter: 'Q',
      sound: 'piano-A-major',
      audiosrc: pianoAmajor,
      'data-key': '81'
    }, 
    {
      kbdletter: 'W',
      sound: 'piano-B-major',
      audiosrc: pianoBmajor,
      'data-key': '87'
    },
    {
      kbdletter: 'E',
      sound: 'piano-C-major',
      audiosrc: pianoCmajor,
      'data-key': '69'
    },
    {
      kbdletter: 'A',
      sound: 'piano-D-major',
      audiosrc: pianoDmajor,
      'data-key': '65'
    },
    {
      kbdletter: 'S',
      sound: 'piano-E-major',
      audiosrc: pianoEmajor,
      'data-key': '83'
    },
    {
      kbdletter: 'D',
      sound: 'piano-F-major',
      audiosrc: pianoFmajor,
      'data-key': '68'
    },
    {
      kbdletter: 'Z',
      sound: 'piano-F-sharp',
      audiosrc: pianoFsharpmajor,
      'data-key': '90'
    },
    {
      kbdletter: 'X',
      sound: 'piano-G-major',
      audiosrc: pianoGmajor,
      'data-key': '88'
    }, 
    {
      kbdletter: 'C',
      sound: 'piano-G-sharp',
      audiosrc: pianoGsharpmajor,
      'data-key': '67'
    }
  ]
  const [mode, setMode] = useState(piano)
  // not mine handleKeyDown
  useEffect(() => {
    const handleKeyDown = (event) => {
      const audio = document.querySelector(`audio[data-key="${event.keyCode}"]`);
      if (audio) {
        audio.currentTime = 0; // rewind to the start
        audio.play();
      }
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => {
      window.removeEventListener('keydown', handleKeyDown);
    };
  }, []);


  return (
    <div className='drum-machine'>
      drum-machine
      <div className="drum-pads-box">
        {mode.map((kbdkey) => <DrumPad key={uuidv4()} props={ kbdkey } />)}
      </div>
      <div className='display'>
        display sound name of the pressed key
      </div>
      
    </div>
  );
}

export default App;
