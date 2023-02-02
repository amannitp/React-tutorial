import React from 'react'
import './DataField.css'
import '../App.css'
import DeleteIcon from '@mui/icons-material/Delete';
import { Button } from '@mui/material';

const DataField = ({name,email,idx}) => {
  return (
    <div className='data_val data_show'>
    <h4>{name}</h4>
    <h4>{email}</h4>
    <Button  variant="contained" color="error">
             <DeleteIcon/>
        </Button>

  </div>
  )
}

export default DataField