import '../../styles/SearchComponents/LocationUISelector.css';
import { useState } from 'react';

export function LocationUISelector({setLocation}){

  const [location, setThisLocation] = useState(
    ['Coatza','Helsinki, Finland','Pajapan']
    );


  function handleClick (e){
    setLocation(e.target.innerText);
  }
  
  //here we're fetching the locations from the JSON
  return(
      <div className="location-list-wrapper">
        <ul className="location-list">

          {location.map((element, i)=>{
            return(
            <li key={i}>
              <span className = "material-symbols-outlined">pin_drop</span>
              <div className='clickable' onClick={handleClick}>{element}</div>
            </li>
            )
          })}
        </ul>
      </div>
  )
}