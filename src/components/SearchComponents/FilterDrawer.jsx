import '../../styles/SearchComponents/FilterDrawer.css';
import { LocationUISelector } from './LocationUISelector';
import { GuestsUISelector } from './GuestsUISelector';
import { SearchButton } from './SearchButton';

export function FilterDrawer ({
  toggleVisible, caller, toggleLocation, toggleGuests, params, setLocation, substractGuest, addGuest, guests
}) {

  return(
    <div className="filter-drawer-wrapper">
    
      <div className='filter-drawer'>
        <div className="title">
          <p>Edit your search</p>
          <button className="btn-close" onClick={toggleVisible}> 
            <span className = "material-symbols-outlined">close</span> 
          </button>
        </div>

        <div className="selector-wrapper">
          <div className="filter-drawer--selector" >
            <div className="filter-drawer--location" onClick={toggleLocation} >
              <span className='selector-indicator'>LOCATION</span>
              <div>{!params.location ? "Add Location" : params.location }</div>
            </div>
            <div className="separator"></div>

            <div id="guests" className="filter-drawer--guests" onClick={toggleGuests}>
              <span className='selector-indicator'>GUESTS</span>
              <div>{!params.guests ? "Add Guests" : params.guests + " guests" }</div>
            </div>
          </div>
        </div>

        <div className="location-or-guests-container">
          {caller==='location'?
            <LocationUISelector setLocation={setLocation}/> :
            <GuestsUISelector substractGuest={substractGuest} addGuest={addGuest} guests={guests}/>
          }
        </div>

        <SearchButton />

      </div>
    </div>
  )
}