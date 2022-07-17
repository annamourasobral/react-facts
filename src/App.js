import logo from './logo.svg';
import './App.css';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <nav>
          <img src={logo} width="40px" className="App-logo" alt="logo" />
        </nav>
      </header>
      <main>
        <h1>Fun facts about React</h1>
        <ul>
          <li>Was first released in 2013</li>
          <li>Was originally created by Jordan Walke</li>
          <li>Has well over 100K stars on GitHub</li>
          <li>Is maintained by Facebook</li>
          <li>Powers thousands of enterprise apps, including mobile apps</li>
        </ul>
      </main>
      <footer>
        <small> © 2022 @annamourasobral development. All rights reserved. </small>
      </footer>
    </div>
  );
}

export default App;
