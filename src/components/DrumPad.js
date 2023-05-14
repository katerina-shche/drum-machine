import React from 'react'


//styles
import './DrumPad.css'

function DrumPad({ props, audiovolume }) {


// handleClick volume+play+display
  const handleClick = (e) => {
    const datakey = e.target.getAttribute('data-key');
    const audio = document.querySelector(`audio[data-key="${datakey}"]`)
    const display = document.querySelector('#display')
    display.innerHTML = props.sound
    const button = document.querySelector(`.drum-pad[data-key="${datakey}"]`)
    console.log(button)
    button.classList.add('isShining')
      setTimeout(() => { button.classList.remove('isShining')
        }, 1000)
    audio.currentTime = 0; // rewind to the start
    audio.volume = audiovolume/100 //set the volume
    audio.play();
  }

  return (
    <div data-key={props['data-key']} className='drum-pad' id={props.sound} onClick={handleClick}>
      {props.kbdletter}
      <audio data-key={props['data-key']} id={props.kbdletter}
        className="clip"
        src={props.audiosrc}
        />
      
    </div>
  )
}

export default DrumPad;