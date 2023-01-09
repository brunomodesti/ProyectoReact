import logo from './logo.svg';
import './App.css';
import { ComponentOne } from './components/ComponentOne';
import { ComponentTwo } from './components/ComponentTwo';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>TITULO PRINCIPAL</p>
        <ComponentOne/>
        <ComponentTwo /> 
      </header>
    </div>
  );
}

export default App;
