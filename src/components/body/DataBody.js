import "./dataBody.css"
import { useContext } from "react";
import { myContext } from "../../context/myContext";


const DataBody = () => {
  const { data, loading, error, isDark } = useContext(myContext);
  const months = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', "Jul", 'Aug', 'Sep', 'oct', 'Nov', 'Dec']
  const twitter = require('../../assets/twitter-icon.svg').default;
  const portfolio = require('../../assets/link.svg').default;
  const location = require('../../assets/maped-in.svg').default;
  const building = require('../../assets/building.svg').default;
  const github = require('../../assets/github-icon.svg').default;

  if (loading) return <iframe title="Loader" style={{display:'block', margin: 'auto', border:'none'}} src="https://lottie.host/embed/c54420a7-3621-4f95-93a4-b7a950a6e0d2/7UAn39S12R.lottie"></iframe> 
  if (error) return <p className={`${isDark? 'dark-mode_txt': ''}`}>Error: {error}</p>
  if (!data) return <p className={`${isDark? 'dark-mode_txt': ''}`}>No data to display</p>

  console.log(data)
  const getCreatedDate = () => {
    const createdDate = new Date(data.created_at)
    const dd = createdDate.getDate();
    const mm = months[createdDate.getMonth()];
    const yy = createdDate.getFullYear();
    const fullDate = `${dd} ${mm} ${yy}`
    return fullDate

  }
  return (
    <>
      <div className={`user-card ${isDark? 'dark-theme_user-card ': ''}`}>
        <div className="profile">
          <img className="avatar" src={data.avatar_url} alt="avatar's user" />
        </div>
        <div className="information">
          <div className="user-head">
            <div className="user-username_name">
              <p className={`name ${isDark? 'dark-mode_txt': ''}`}>{data.name || 'N/A'}</p>
              <p className="username">
                <a href={data.url} target="_blank" rel="noreferrer">{data.login}</a></p>
            </div>
            <div className={`created-date ${isDark? 'dark-mode_txt': ''}`}>
              <p>Joined {data && getCreatedDate()}</p>
            </div>
          </div>
          <div className="user-bio">
            <p className={`${isDark? 'dark-mode_txt': ''}`}>{data.bio || 'No biography for this user'}</p>
          </div>
          <div className={`repos-followers-following ${isDark? 'dark-theme_repos-followers-following': ''}`}>
            <p className={`${isDark? 'dark-mode_txt': ''}`}>repos <br /> <span className={`${isDark? 'dark-mode_txt': ''}`}>{data.public_repos}</span></p>
            <p className={`${isDark? 'dark-mode_txt': ''}`}>followers <br /> <span className={`${isDark? 'dark-mode_txt': ''}`}>{data.followers}</span></p>
            <p className={`${isDark? 'dark-mode_txt': ''}`}>following <br /> <span className={`${isDark? 'dark-mode_txt': ''}`}>{data.following}</span></p>
          </div>
          <div className="country-links">
            <p>
              <img src={location} alt="" className={`${isDark? 'dark-theme_icons': ''}`} />
              <span className={`${isDark? 'dark-mode_txt': ''}`}>{data.location || 'Not Available'}</span>
            </p>
            <p>
              <img src={twitter} alt="" className={`${isDark? 'dark-theme_icons': ''}`} />
              <span className={`${isDark? 'dark-mode_txt': ''}`}>
                {data.twitter_username ? <a href={`https://twitter.com/${data.twitter_username}`} target="_blank" rel="noreferrer" className={`${isDark? 'dark-mode_txt': ''}`}>Twitter</a> : 'Not Available'}
              </span>
            </p>
            <p>
              <img src={portfolio} alt="" className={`${isDark? 'dark-theme_icons': ''}`} />
              <span className={`${isDark? 'dark-mode_txt': ''}`}>
                {<a href={data.blog} target="_blank" rel="noreferrer" className={`${isDark? 'dark-mode_txt': ''}`}>Website</a> || 'Not Available'}
              </span>
            </p>
            <p>
              <img src={github} alt="" className={`${isDark? 'dark-theme_icons': ''}`} />
              <span>
                {<a href={data.html_url} target="_blank" rel="noreferrer" className={`${isDark? 'dark-mode_txt': ''}`}>Github</a> || 'Not Available'}
              </span>
            </p>
            <p>
              <img src={building} alt="" className={`${isDark? 'dark-theme_icons': ''}`} />
              <span className={`${isDark? 'dark-mode_txt': ''}`}>{data.company || 'Not Available'}</span>
            </p>
          </div>
        </div>
      </div>
    </>
  )
}
export default DataBody;