import React from 'react'
import TextField from '@mui/material/TextField';
import '../App.css'
import Button from '@mui/material/Button';

const EventTut = () => {

    const changeOccurance= () =>{
         window.alert(" donot copy")
    }

    const paste=()=>{
        window.alert( " donot paste the word ")
    }

    const clickevent=()=>{
        window.alert(" double click event is occurs ")
    }
  return (
    <div className='Event-Tut'>
        <TextField
        style={{margin:'10px'}}
        onCopy={changeOccurance}
        onPaste={paste}
         id="outlined-basic" 
         label="name" 
         variant="outlined" />
        <TextField
        style={{margin:'10px'}}
         id="outlined-basic" label="email" variant="outlined" />
        <Button
        style={{margin:'10px'}}
        onDoubleClick={clickevent}
         color="error">Secondary</Button>
    </div>
  )
}

export default EventTut