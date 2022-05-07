
import './App.css';
import { SearchBar } from './components/SearchComponents/SearchBar';

function App() {
  return (
    <div className="App">
    
    <header>
      <img src={require("./assets/img/logo.png")} alt="logo"></img>
    </header>
    <SearchBar></SearchBar>
    </div>
  );
}

export default App;
