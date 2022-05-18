
import './App.css';
import { Stay } from './components/MainComponents/Stay';
import { StaysHeader } from './components/MainComponents/StaysHeader';
import { SearchBar } from './components/SearchComponents/SearchBar';
import { useState } from 'react';

const data = require("./assets/data/stays.json");
//here we're fetching just the locations from the JSON
let locations = [];
data.forEach(element => {
  if(!locations.includes(element.city)) locations = [ ...locations, element.city];  
});

function App() {

  //app state
  const [stays, setStays] = useState(data);
  let totalResults = stays.length;
  
  function search (city, maxGuests){
    city = city ? city.split(",")[0] : null;
    if(!city){
      //search only for guests
      let filtered = data.filter( stay=> stay.maxGuests >= maxGuests);
      setStays(filtered);
      totalResults = stays.length;
    }else{
      //search for both parameters
      let filtered = data.filter( stay=> (stay.maxGuests >= maxGuests)&&(stay.city===city) );
      setStays(filtered);
      totalResults = stays.length;
    }
  }
    
  return (
    <div className="App">    
      <header>
        <div className="header-logo">
          <img src={require("./assets/img/logo.png")} alt="logo" ></img>
        </div>
        <SearchBar search = {search}></SearchBar>
      </header>

      <StaysHeader totalResults = {totalResults}/>

      <div className="stays-container">
        {
          stays.map( stay => {
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
          })
        }
      </div>
    </div>
  );
}
export default App ;
export {locations, data};
