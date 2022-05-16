import '../../styles/MainComponents/Stay.css';
export function Stay ({superHost, photo, type, rating, title}){
  return(
    <div className="stay-container">
      <img className="stay-img" src={photo} alt="stay" />
     
      <div className='stay-details'>
        {superHost ? <span className='stay-superhost'> SUPER HOST </span> : null}
        <span className='stay-type'> {type} </span>
        
        <div>
          <span className="material-symbols-outlined stay-star-icon">
            star
          </span> 
          <span> {rating} </span>
        </div>
      </div>
      
      <div className='stay-title'>
        <span> {title} </span>
      </div>
    </div>
  )
}