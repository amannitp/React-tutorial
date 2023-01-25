
import './App.css';
import {Header,Footer} from './Component/Header'

function App() {
  const name="Aman Raj"
  
  return (
    <div className="App">
        <Header/>
        <h2 style={{backgroundColor:"red",color:'black'}}>  My  name is {name}</h2>
        <Footer/>
    </div>
  );
}

export default App;
