
import './App.css';
import {Header,Footer} from './Component/Header'
import Movie from './Component/Movie';
import Moviedata from './Component/Moviedata';
import StudentProps from './Component/StudentProps';
import movies from './movie.json'

function App() {
  const name="Aman Raj"
  
  return (
    <div className="app">



      {/* {
          movies.map((ele)=>{

          return(
            <Movie/>
          )
          }
      } */}

     
      {/* <div className='main'>
      <Moviedata/> */}
      </div>




      
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
  );
}

export default App;
