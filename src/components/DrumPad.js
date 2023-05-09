import React from 'react'
//styles
import './DrumPad.css'

function DrumPad({ props }) {
  return (
    <div className='drum-pad'>
      <kbd>{props.kbdletter}</kbd>
      <span className="sound">{props.sound}</span>  
      <audio id={props.kbdletter}
        className="clip"
        srs={props.audiosrc}>

      </audio>
    </div>
  )
}

export default DrumPad;