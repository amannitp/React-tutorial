
import './App.css';
import {Header,Footer} from './Component/Header'
import Movie from './Component/Movie';
import Moviedata from './Component/Moviedata';
import StudentProps from './Component/StudentProps';
import UseStateHooks from './Component/UseStateHooks';
import movies from './movie.json'
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import Stack from '@mui/material/Stack';
import AddIcon from '@mui/icons-material/Add';
import { useState } from 'react';
import DataField from './Component/DataField';
import DeleteIcon from '@mui/icons-material/Delete';


function App() {

  const [name,setName]=useState("")
  const [email,setEmail]=useState("")
  const [data,setData]=useState([])

  const addData = ()=>{
    setData([...data,{
      name:name,
      email:email
    }]);
    setName("")
    setEmail("")
  }
  
  return (
    <div className="app">
        <Header/>
        {/* form */}
        <div className='form'>
        <Stack direction="row" spacing={2}>
        <TextField
        value={name}
        onChange={(event)=>setName(event.target.value)}
         id="outlined-basic " 
         className='tf1' 
         label="name" 
         variant="outlined" />
        <TextField 
        value={email}
        onChange={(event)=>setEmail(event.target.value)}
        id="outlined-basic" 
        className='tf2' 
        label="email" 
        variant="outlined" />
        <Button onClick={addData} variant="contained" color="success">
             <AddIcon/>
        </Button>
        </Stack>
        
        </div>

        {/* data */}

        <div className='data'>
          <div className='data_val'>
          <h4>Name</h4>
          <h4>Email</h4>
           <h4>Remove</h4>

          </div>
          {
            data.map((element,idx)=>{
              return(
                <DataField key={idx} name={element.name} email={element.email} idx={idx}/>
              )
            })
          }

        </div>














        {/* <UseStateHooks/> */}

    
    {/* if else condition used in react
      {
        (()=>{
          if(login){
            return <h1>Hello i am Aman Raj</h1>
          }else{
            return <h1> i am kamlesh kumar</h1>
          }
        })()
      } */}

     {/* {
      login===true ?<Header/>:<Footer/>
     } */}

      {/* {/* {
          movies.map((ele)=>{

          return(
            <Movie/>
          )
          }
      } */}

     
      {/* <div className='main'>
      <Moviedata/> */}




      
      {/* <StudentProps 
      name="Aman Raj"
       rollNo="1902036"
       />
      <StudentProps 
      name="Ajay Kumer sharma" 
      rollNo="1902020"
      />
      <StudentProps 
      name="vivek kumar"
       rollNo="1902021"
       /> */}

        {/* <Header/>
        <h2 style={{backgroundColor:"red",color:'black'}}>  My  name is {name}</h2>
        <Footer/> */}
    </div>
  )
}

export default App;
