import '../../styles/SearchComponents/SearchButton.css'
export function SearchButton ({search}) {
  return(
    <div className="search-btn-wrapper">
      <button className="search-btn" onClick={search}>
        <span className = "material-symbols-outlined">search</span>
        Search
      </button>
    </div>
  )
}