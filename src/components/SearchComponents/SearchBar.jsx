import '../../styles/SearchComponents/SearchBar.css';
import { FilterDrawer } from '../SearchComponents/FilterDrawer';
import { useState } from 'react';
export function SearchBar ({search}){

  const [visible, setVisible] = useState(false);
  const [caller, setCaller] = useState(null);
  const [params, setParams] = useState ({location:null,guests:0});
  const [guests, setGuests] = useState({adults:0, children:0});


  const toggleVisible = (e)=>{
    if(!visible){
      setVisible(true);
      setCaller(e.target.id);
    }else{
      setVisible(false);
    }
  }

  const toggleLocation = (e) =>{
    setCaller("location");
  }
  const toggleGuests = (e) =>{
    setCaller("guests");
  }

  const setLocation = (location) => {
    setParams({...params, location:location});
  }

  
  function substract (e){
    // eslint-disable-next-line default-case
    switch (e.target.className){
      case 'adults' :
        if(guests.adults>0){
          setGuests({...guests, adults: guests.adults-1});
          setParams({...params, guests: params.guests-1});
        } 
        break;
        
      case 'children' : 
        if(guests.children>0){ 
          setGuests({...guests, children: guests.children-1});
          setParams({...params, guests: params.guests-1});
        }
        break;
      }
    }

  function add (e){
    // eslint-disable-next-line default-case
    switch (e.target.className){
      case 'adults' :
        setGuests({...guests, adults: guests.adults+1});
        break;
      case 'children' : 
        setGuests({...guests, children: guests.children+1});
        break;
      }
    setParams({...params, guests: params.guests+1});
  }

  return(
    <>
    {visible? 
    <FilterDrawer 
      toggleVisible={toggleVisible}
      caller = {caller}
      toggleLocation = {toggleLocation}
      toggleGuests = {toggleGuests}
      params = {params}
      setLocation = {setLocation}
      substractGuest = {substract}
      addGuest = {add}
      guests = {guests}
      search = {search} 
    /> : null}

    <div className="search-bar">
      <div id="location" className="search-bar--location element" onClick={toggleVisible}> 
        {!params.location? "Select Location":params.location}
      </div>
      <div className="division"></div>
      <div id="guests" className="search-bar--guests element" onClick={toggleVisible}>
        {!params.guests? "Add Guests":params.guests+" guests"}
      </div>
      <div className="division"></div>

      <div className="search-bar--search-icon element" onClick={()=>search(params.location, params.guests)}>
        <span className = "material-symbols-outlined">search</span>
      </div>
    </div>
    </>
  )
}