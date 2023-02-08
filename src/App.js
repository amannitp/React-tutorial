
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
import { useState ,useRef,useEffect,createContext,useReducer,useMemo,useCallback} from 'react';
import DataField from './Component/DataField';
import DeleteIcon from '@mui/icons-material/Delete';
import UseEffectTut from './Component/UseEffectTut';
import EventTut from './Component/EventTut';
import Contact from './Component/Contact';
import Home from './Component/Home';
import About from './Component/About';
import CusṭomHoks from './Component/CusṭomHoks';

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
import UseRef from './Component/UseRef';
import { CallToActionOutlined } from '@mui/icons-material';

const reducer=(state,action)=>{
  if(action.type==="INC")
    return state+1;
  else if(action.type==='DEC')
    return state-1
  else if(action.type==="MUL")
  return state*5;

}

function App() {
  

  

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
  const [count,setCount]=useState(0)
  const[name,setName]=useState('')
  const[todos,setTodos]=useState("")
  const [state,dispatch]=useReducer(reducer, 0)

  const [data]=CusṭomHoks(`https://hub.dummyapis.com/employee?noofRecords=${50}}&idStarts=1001`)

  const expensiveCalculation=(num)=>{
    console.log("claculating")
    for(let i=0;i<10000;i++){
      return num
    }
  }

  const calculation=useMemo(()=>{
    expensiveCalculation(count)
  },[count])
  
  
 const handleChange=(e)=>{
  setName(e.target.value)
 }

 useCallback(()=>{
  CallTodo(count)
 })
  return(
    <>
    <Movie/>
    <button onClick={()=>setCount(count+1)}>Increment</button>
    <h1>calculation is :{count}</h1>

    <input type="text" onChange={handleChange} />
    <h1> Name is :{name}</h1>

   
    {/* <h1>{state}</h1>
    <button onClick={()=>dispatch({type:"INC"})}>Increment</button>
    <button onClick={()=>dispatch({type:"DEC"})}>Decrement</button>
    <button onClick={()=>dispatch({type:"MUL"})}>multiply</button> */}
     {/* <UseRef/>
     <input type="text" value={data} onChange={handleChange}/>
     <button>click me</button>
     <h1>current input is : {counter.current}</h1> */}
     </>
   
    // <AppState.Provider value={data}>
    //   <CompA />
    // </AppState.Provider>
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
 // export {AppState};

export default App;

