
import './App.css';

function App() {
  let name="Aman Raj"
  let rollNo=1902036
  return (
    <div className="App">
      <header className="App-header">
        <h1>{name}</h1>
        <h1>Roll no :{rollNo}</h1>
        <p>
          React js full course
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
  );
}

export default App;
