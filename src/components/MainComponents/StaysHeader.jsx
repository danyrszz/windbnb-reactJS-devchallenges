import '../../styles/MainComponents/StaysHeader.css';
export function StaysHeader ({totalResults}){
  return(
    <div className="stays-header-container">
      <p className='stays-title'>Stays in Finland</p>
      <p> {totalResults} stays </p>
    </div>
  )
}