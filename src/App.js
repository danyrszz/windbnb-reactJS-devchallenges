
import './App.css';
import { Stay } from './components/MainComponents/Stay';
import { StaysHeader } from './components/MainComponents/StaysHeader';
import { SearchBar } from './components/SearchComponents/SearchBar';

function App() {
  return (
    <div className="App">
    
      <header>
        <div className="header-logo">
          <img src={require("./assets/img/logo.png")} alt="logo" ></img>
        </div>
        <SearchBar></SearchBar>
      </header>
     
      <StaysHeader />

      <Stay superHost={true}></Stay>
      <Stay superHost={true}></Stay>
      <Stay superHost={true}></Stay>
      <Stay superHost={true}></Stay>

    </div>
  );
}

export default App;
