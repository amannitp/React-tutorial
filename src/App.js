
import './App.css';
import {Header,Footer} from './Component/Header'
import StudentProps from './Component/StudentProps';

function App() {
  const name="Aman Raj"
  
  return (
    <div className="App">
      <StudentProps 
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
       />

        {/* <Header/>
        <h2 style={{backgroundColor:"red",color:'black'}}>  My  name is {name}</h2>
        <Footer/> */}
    </div>
  );
}

export default App;
