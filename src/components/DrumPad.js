import React from 'react'
//styles
import './DrumPad.css'

function DrumPad({ props }) {
  return (
    <div className='drum-pad'>
      <kbd>{props.kbdletter}</kbd>
      <span class="sound">{props.sound}</span>  
      <audio srs={props.audiosrc}></audio>
    </div>
  )
}

export default DrumPad;