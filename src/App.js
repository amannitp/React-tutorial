
import './App.css';
import {Header,Footer} from './Header'

function App() {
  const name="Aman Raj"
  
  return (
    <div className="App">
        <Header/>
        <h2>  My  name is {name}</h2>
        <Footer/>
    </div>
  );
}

export default App;
