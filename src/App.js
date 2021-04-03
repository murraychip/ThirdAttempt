import logo from './logo.svg';
import SampleComponent from './SampleComponent.js'
import './App.css';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
                  Welcome to Murray's Scavenger Hunt
        </p>
        <SampleComponent></SampleComponent>
        <button>
            Get Started
        </button> 
      </header>
    </div>
  );
}

export default App;
