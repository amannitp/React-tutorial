import React from 'react'
import TextField from '@mui/material/TextField';
import '../App.css'

const EventTut = () => {

    const changeOccurance= () =>{
         window.alert(" donot copy")
    }
  return (
    <div className='Event-Tut'>
        <TextField
        onCopy={changeOccurance}
         id="outlined-basic" 
         label="name" 
         variant="outlined" />
        <TextField id="outlined-basic" label="email" variant="outlined" />
    </div>
  )
}

export default EventTut