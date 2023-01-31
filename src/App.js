
import './App.css';
import {Header,Footer} from './Component/Header'
import Movie from './Component/Movie';
import Moviedata from './Component/Moviedata';
import StudentProps from './Component/StudentProps';
import movies from './movie.json'

function App() {
  const name="Aman Raj"
  const login= false
  
  return (
    <div className="app">

      
    
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
