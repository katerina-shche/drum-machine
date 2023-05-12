import DrumPad from "./components/DrumPad.js"
import { v4 as uuidv4 } from 'uuid'
import { useEffect, useState, useRef } from "react";
//styles
import './App.css';
//sounds
import pianoAmajor from './assets/piano/piano-a_A_major.wav' 
import pianoBmajor from './assets/piano/piano-b_B_major.wav'
import pianoCmajor from './assets/piano/piano-c_C_major.wav'
import pianoDmajor from './assets/piano/piano-d_D_major.wav'
import pianoEmajor from './assets/piano/piano-e_E_major.wav'
import pianoFmajor from './assets/piano/piano-f_F_major.wav'
import pianoFsharpmajor from './assets/piano/piano-f_Fsharp_major.wav'
import pianoGmajor from './assets/piano/piano-g_G_major.wav'
import pianoGsharpmajor from './assets/piano/piano-g_Gsharp_major.wav'
import clap from './assets/drums/Clap.mp3'
import closedHH from './assets/drums/Closed-HH.mp3'
import heater1 from './assets/drums/Heater-1.mp3'
import heater2 from './assets/drums/Heater-2.mp3'
import heater3 from './assets/drums/Heater-3.mp3'
import heater4 from './assets/drums/Heater-4.mp3'
import kickNHat from './assets/drums/Kick-n-Hat.mp3'
import kick from './assets/drums/Kick.mp3'
import openHH from './assets/drums/Open-HH.mp3'

function App() {
 //colections of keys+sounds pairs for modes
  const piano = useRef([
    {
      kbdletter: 'Q',
      sound: 'Piano-A-Major',
      audiosrc: pianoAmajor,
      'data-key': '81'
    }, 
    {
      kbdletter: 'W',
      sound: 'Piano-B-Major',
      audiosrc: pianoBmajor,
      'data-key': '87'
    },
    {
      kbdletter: 'E',
      sound: 'Piano-C-Major',
      audiosrc: pianoCmajor,
      'data-key': '69'
    },
    {
      kbdletter: 'A',
      sound: 'Piano-D-Major',
      audiosrc: pianoDmajor,
      'data-key': '65'
    },
    {
      kbdletter: 'S',
      sound: 'Piano-E-Major',
      audiosrc: pianoEmajor,
      'data-key': '83'
    },
    {
      kbdletter: 'D',
      sound: 'Piano-F-Major',
      audiosrc: pianoFmajor,
      'data-key': '68'
    },
    {
      kbdletter: 'Z',
      sound: 'Piano-F-Sharp',
      audiosrc: pianoFsharpmajor,
      'data-key': '90'
    },
    {
      kbdletter: 'X',
      sound: 'Piano-G-Major',
      audiosrc: pianoGmajor,
      'data-key': '88'
    }, 
    {
      kbdletter: 'C',
      sound: 'Piano-G-Sharp',
      audiosrc: pianoGsharpmajor,
      'data-key': '67'
    }
  ])
  const drums = useRef([
    {
      kbdletter: 'Q',
      sound: 'Clap',
      audiosrc: clap,
      'data-key': '81'
    }, 
    {
      kbdletter: 'W',
      sound: 'Closed-HH',
      audiosrc: closedHH,
      'data-key': '87'
    },
    {
      kbdletter: 'E',
      sound: 'Heater-1',
      audiosrc: heater1,
      'data-key': '69'
    },
    {
      kbdletter: 'A',
      sound: 'Heater-2',
      audiosrc: heater2,
      'data-key': '65'
    },
    {
      kbdletter: 'S',
      sound: 'Heater-3',
      audiosrc: heater3,
      'data-key': '83'
    },
    {
      kbdletter: 'D',
      sound: 'Heater-4',
      audiosrc: heater4,
      'data-key': '68'
    },
    {
      kbdletter: 'Z',
      sound: 'Kick-n-Hat',
      audiosrc: kickNHat,
      'data-key': '90'
    },
    {
      kbdletter: 'X',
      sound: 'Kick',
      audiosrc: kick,
      'data-key': '88'
    }, 
    {
      kbdletter: 'C',
      sound: 'Open-HH',
      audiosrc: openHH,
      'data-key': '67'
    }
  ])
  const [mode, setMode] = useState(piano)
  const [volume, setVolume] = useState(50)

  //handleVolumeChange
  const handleVolumeChange = (e) => {
    setVolume(e.target.value)
  }
  //Switch from piano to drums
  const handleModeToggle = () => {
    setMode(mode === piano ? drums : piano)
    
    
  }
  //handleKeyDown volume+play+display
  useEffect(() => {
    const handleKeyDown = (e) => {
      const datakey = e.keyCode
      const audio = document.querySelector(`audio[data-key="${datakey}"]`);
      const display = document.querySelector('#display')
      if (audio) {
        //show sound name on display
        display.innerHTML = mode.current.filter(item => item['data-key'] === datakey.toString())[0].sound
        audio.volume = volume/100 //set the volume
        audio.currentTime = 0; // rewind to the start
        audio.play(); // play audio
      }
    };
    // add eventListener on mount and remove when unmount
    window.addEventListener('keydown', handleKeyDown);
    return () => {
    window.removeEventListener('keydown', handleKeyDown);
    };
  }, [mode, volume]);


  return (
    <div id='drum-machine'>
      <div id="drum-pads-box">
        {mode.current.map((item) => <DrumPad key={uuidv4()} props={ item } audiovolume={ volume } />)}
      </div>
      <div id="tools">
        <label htmlFor="volume">
          {`Volume is ${volume}%`}
          <input
            id='volume'
            type="range"
            min='0'
            max='100'
            step='1'
            value={volume}
            onChange={handleVolumeChange}
            />
          
        </label>
        <div id='display'>
        play something
        </div>
        <div id="toggle-container">
         <h3>piano</h3>
            <div id='toggle-box'>
                <div id='mode-toggle'
                onClick={handleModeToggle}
                style={{transform: mode === piano ? 'translateX(0)' : 'translateX(50%)'}}></div>
            </div>
          <h3>drums</h3>
        </div>
      </div>
      
    </div>
  );
}

export default App;
