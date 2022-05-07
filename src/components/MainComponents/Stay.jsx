import '../../styles/MainComponents/Stay.css';
export function Stay ({superHost}){
  return(
    <div className="stay-container">
      <img className="stay-img" src="https://images.unsplash.com/photo-1505873242700-f289a29e1e0f?ixlib=rb-1.2.1&auto=format&fit=crop&w=2255&q=80" alt="stay" />
     
      <div className='stay-details'>
        {superHost ? <span className='stay-superhost'> SUPER HOST </span> : null}
        <span className='stay-type'> Full House </span>
        
        <div>
          <span class="material-symbols-outlined stay-star-icon">
            star
          </span> 
          <span> 4.50 </span>
        </div>
      </div>
      
      <div className='stay-title'>
        <span> Lovely Studio near Railway Station </span>
      </div>
    </div>
  )
}