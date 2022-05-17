import '../../styles/SearchComponents/SearchButton.css'
export function SearchButton ({search, params, hideDrawer}) {
  function manageSearch(){
    search(params.location, params.guests);
    hideDrawer();
  }
  return(
    <div className="search-btn-wrapper">
      <button className="search-btn" onClick={manageSearch}>
        <span className = "material-symbols-outlined">search</span>
        Search
      </button>
    </div>
  )
}