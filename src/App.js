
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

      <StaysHeader totalResults = {data.length}/>

      <div className="stays-container">
        {data.map( stay => {
          return(
            <Stay
              key={stay.photo}
              superHost={stay.superHost}
              photo={stay.photo}
              type={stay.type}
              rating = {stay.rating}
              title = {stay.title}
            />
          )
        })}
      </div>


    </div>
  );
}
console.log(data)
export default App ;
export {locations, data};
