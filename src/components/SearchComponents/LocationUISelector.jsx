import '../../styles/SearchComponents/LocationUISelector.css';
import {locations} from '../../App'

export function LocationUISelector({setLocation}){

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