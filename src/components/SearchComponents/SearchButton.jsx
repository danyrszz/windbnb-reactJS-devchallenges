import '../../styles/SearchComponents/SearchButton.css'
export function SearchButton () {
  return(
    <div className="search-btn-wrapper">
      <button className="search-btn">
        <span className = "material-symbols-outlined">search</span>
        Search
      </button>
    </div>
  )
}