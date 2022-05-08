
import './App.css';
import { Stay } from './components/MainComponents/Stay';
import { StaysHeader } from './components/MainComponents/StaysHeader';
import { SearchBar } from './components/SearchComponents/SearchBar';


const data = require("./assets/data/stays.json");
//here we're fetching the locations from the JSON
let locations = [];
data.forEach(element => {
  if(!locations.includes(element.city)) locations = [ ...locations, element.city];  
});

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

      <div className="stays-container">
      </div>


    </div>
  );
}

export default App ;
export {locations, data};
