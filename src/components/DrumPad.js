import React from 'react'
//styles
import './DrumPad.css'

function DrumPad({ props }) {

  const handleClick = (e) => {
    console.log(e)
  }

  return (
    <div key={props.kbdletter} className='drum-pad' onClick={handleClick}>
      <kbd>{props.kbdletter}</kbd>
      <span className="sound">{props.sound}</span>  
      <audio id={props.kbdletter}
        className="clip"
        src={props.audiosrc}>
      </audio>
    </div>
  )
}

export default DrumPad;