import logo from './logo.svg';
import './App.css';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          わーい <code>React</code> 使える〜
        </p>
        <a
          className="App-link"
          href="https://github.com/sonoka2"
          target="_blank"
          rel="noopener noreferrer"
        >
          githubのリンクだよ
        </a>
      </header>
    </div>
  );
}

export default App;
