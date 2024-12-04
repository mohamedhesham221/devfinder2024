import "./header.css";
import { useContext } from "react";
import { myContext } from "../../context/myContext";
const Header = () => {
  const { isDark, setIsDark } = useContext(myContext)
  const moon = require('../../assets/moon.svg').default
  const sun = require('../../assets/sun.svg').default
  return (
    <>
      <header>
        <h1 className={`${isDark? "dark-mode_txt": ""}`}>devfinder</h1>
        <button className="theme-switcher" onClick={() => setIsDark(prev => !prev)}>
          <span className={`theme-switcher_text ${isDark ? "dark-mode_txt" : ""}`}>
            {isDark ? "LIGHT" : "DARK"}</span>
          <img className={`theme-switcher_icon ${isDark ? "dark-theme_icon" : ""}`}
            src={isDark ? sun : moon} alt="Icon theme switcher" />
        </button>
      </header>
    </>
  )

}
export default Header;