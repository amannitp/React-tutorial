
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
import UseEffectTut from './Component/UseEffectTut';
import { useEffect } from 'react';
import EventTut from './Component/EventTut';
import Contact from './Component/Contact';
import Home from './Component/Home';
import About from './Component/About';

import {
  BrowserRouter as Router,
  Routes,
  Route,
  Link,
  useRouteMatch,
  useParams
} from "react-router-dom";
import Error from './Component/Error';
import insta from './Component/Insta'
import Mail from './Component/Mail'
import Insta from './Component/Insta';
import Userdatail from './Component/Userdatail';
import CompA from './Component/CompA';

function App() {

  const[count,setCount]=useState(10)
  const[data,setData]=useState("Aman Raj")

  // useEffect(()=>{
  //   alert("alert ")
  // })

  // useEffect(()=>{
  //   console.log("helllo world ")
  // },[])

  // useEffect(()=>{
  //   console.log("hello world")
  // },[count])


  // useEffect(()=>{

  //   async function getData(){
  //     const get=await fetch(`https://hub.dummyapis.com/employee?noofRecords=${count}&idStarts=1001`)
  //     const res=await get.json()
  //     setData(res)
  //     console.log(res)
  //   }
  //   getData()
  // },[count])


  return(
    <div>
      <CompA data={data}/>
    </div>
    // <Router>
    // <Header/>
    
    //   <Routes>
    //     // by default routes 
    //   <Route path='/'>
    //     <Route index path='/App' element={<App/>}/>
    //     <Route path='/App' element={<App/>}/>
    //     <Route path=':userdatail' element={<Userdatail/>}/>
    //     </Route>
    //   <Route path='/Home' element={<Home/>}/>
    //   <Route path='/contact' element={<Contact/>}> 
    //     // nested routing 
    //      <Route path={'insta'} element={<Insta/>} />
    //      // index routing
    //      <Route index element={<Insta/>} />
    //      <Route path={'Mail'} element={<Mail/>} />
    //   </Route>
    //   <Route path='/about' element={<About/>}/>
    //   <Route path='*' element={<Error/>}/>
    //   </Routes>
    // </Router>

    
    )
  }

export default App;
