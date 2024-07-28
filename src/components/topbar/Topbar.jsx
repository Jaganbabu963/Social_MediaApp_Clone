import { Search,Person,Chat,Notifications } from "@mui/icons-material";
import "./Topbar.css";


const Topbar = (props) => {
  return (
    <div className="topbar">
       <div className="topbarLeft">
        <span className="logo">LomoSocial</span>
       </div>
       <div className="topbarCentre">
        <div className="searchBar">
          <Search className="searchIcon" />
          <input 
          placeholder = "Search for person, Video or Post"
          className = "searchInput"/>
        </div>
       </div>
       <div className="topbarRight">
        <div className="topbarLinks">
          <span className="homePage">Homepage</span>
          <span className="homePage">Timeline</span>
        </div>
        <div className="topbarIcons">
          <div className="topbarIconItem">
            <Person />
            <span className="iconBadge">1</span>
          </div>
          <div className="topbarIconItem">
            <Chat />
            <span className="iconBadge">2</span>
          </div>
          <div className="topbarIconItem">
            <Notifications />
            <span className="iconBadge">3</span>
          </div>
        </div>
       <img onClick={props.fun1} src="/assets/1.jpg" alt="" className="topbarImage" />
       </div>
     
    </div>
  )
}

export default Topbar
