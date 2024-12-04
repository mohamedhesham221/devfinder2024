import "./searchForm.css"
import { useContext, useState } from "react";
import { myContext } from "../../context/myContext";
const SearchForm = () => {
  const searchIcon = require("../../assets/search.svg").default;
  const [userName, setUserName] = useState("");
  const { isDark, fetchData} = useContext(myContext)
  const handleFetchData = () => {
    fetchData(`https://api.github.com/users/${userName}`)
  }
  return (
    <>
      <div className={`search ${isDark? 'dark-theme_search' : ''}`}>
        <form onSubmit={(e) => { e.preventDefault(); handleFetchData()}}>
          <fieldset>
            <legend>Github username</legend>
            <label>
              <span>username</span>
              <img className="search-icon" src={searchIcon} alt="search icon" />
            </label>
            <input className={`${isDark? 'dark-mode_txt' : ''}`} type="text" placeholder="Your Github Username . . ."
              onChange={(e) => setUserName(e.target.value)} />
          </fieldset>
          <button type="submit">Search</button>
        </form>
      </div>
    </>
  )
}
export default SearchForm;