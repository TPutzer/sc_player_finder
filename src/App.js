import logo from './logo.svg';
import './style/App.css';
import CenterElement from './ui/CenterElement';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <CenterElement/>
      </header>
    </div>
  );
}

export default App;
