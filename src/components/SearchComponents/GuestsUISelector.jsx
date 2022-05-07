import '../../styles/SearchComponents/GuestsUISelector.css';
export function GuestsUISelector({ substractGuest, addGuest, guests}){

  return(
    <div className="guests-ui-wrapper">

      <div className="guests-sel-container">
        <p className='guest-selector'>
          <span>Adults</span>
          <span className='ages-tag'>Ages 13 or above</span>
        </p>
        <div>
          <button className="adults" onClick={substractGuest}> - </button>
          <span> {guests.adults} </span>
          <button className="adults" onClick={addGuest}> + </button>
        </div>
      </div>

      <div className="guests-sel-container">
        <p className='guest-selector'>
          <span>Children</span>
          <span className='ages-tag'>Ages 2 to 12</span>
        </p>
        <div>
          <button className="children" onClick={substractGuest}> - </button>
          <span> {guests.children} </span>
          <button className="children" onClick={addGuest}> + </button>
        </div>
      </div>

    </div>
  )
}