import logo from './logo.svg';
import './App.css';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src="lamuFort.jpg" className="App-logo" alt="logo" />
        <h6>Description</h6>
        <p>
        Lamu Fort is a fortress in the town of Lamu in northeastern Kenya.  
        The fort today is located in a central position in the town, about 70 metres
        (230 ft) from the main jetty on the shore.
        </p>

        <button id="btn" onClick={() => alert('You clicked this button')}><span id="count">0</span> Click me</button>
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
