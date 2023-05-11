import React from 'react'


//styles
import './DrumPad.css'

function DrumPad({ props }) {

  const handleClick = (e) => {
    const datakey = e.target.getAttribute('data-key');
    const audio = document.querySelector(`audio[data-key="${datakey}"]`)
    const display = document.querySelector('.display')
    display.innerHTML = props.sound
    audio.currentTime = 0; // rewind to the start
    audio.play();

  }

  return (
    <div data-key={props['data-key']} className='drum-pad' onClick={handleClick}>
      <kbd data-key={props['data-key']}>{props.kbdletter}</kbd>
      <span data-key={props['data-key']} className="sound">{props.sound}</span>  
      <audio data-key={props['data-key']} id={props.kbdletter}
        className="clip"
        src={props.audiosrc}>
      </audio>
    </div>
  )
}

export default DrumPad;