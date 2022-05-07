import '../../styles/SearchComponents/LocationUISelector.css';

export function LocationUISelector({setLocation}){

  //here we're fetching the locations from the JSON
  const data = require("../../assets/data/stays.json");

  let locations = [];
  data.forEach(element => {
    if(!locations.includes(element.city)) locations = [ ...locations, element.city];  
  });

  function handleClick (e){
    setLocation(e.target.innerText);
  }
  
  return(
      <div className="location-list-wrapper">
        <ul className="location-list">

          {locations.map((element, i)=>{
            return(
            <li key={i}>
              <span className = "material-symbols-outlined">pin_drop</span>
              <div className='clickable' onClick={handleClick}>{element}, Finland</div>
            </li>
            )
          })}
        </ul>
      </div>
  )
}