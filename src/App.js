import logo from './logo.svg';
import './App.css';
import Game from './Game/Game';

function App() {
  return (
    <div className="App">
		<img src={logo} />
		<Game />
    </div>
  );
}

export default App;
