import logo from './logo.svg';
import './App.css';
import { Router, Link } from "@reach/router";
import ShowBody from './ShowBody';
import CreateBody from './CreateBody';

function App() {
  

  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <div>
          <Link to="/"><div className="btn">Show Post!</div></Link>
          <Link to="create"><div className="btn">Create Post!</div></Link>
        </div>
      </header>
      <div className="body">
        <Router>
          <ShowBody path="/" />
          <CreateBody path="/create" />
        </Router>
      </div>
    </div>
  );
}

export default App;
