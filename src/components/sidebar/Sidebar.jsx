import {
  RssFeed,
  Chat,
  Slideshow,
  Groups,
  Bookmark,
  QuestionMark,
  WorkOutline,
  Event,
  Psychology,
} from "@mui/icons-material";
import "./sidebar.css";
import Closefriends from "./Closefriends";
import { users } from "../../dummyData";

const Sidebar = () => {
  return (
    <div className="sidebar">
      <div className="sidebarWrapper">
        <ul className="sidebarList">
          <li className="sidebarListItem">
            <RssFeed />
            <span className="listItemText">Feed</span>
          </li>
          <li className="sidebarListItem">
            <Chat />
            <span className="listItemText">Chats</span>
          </li>
          <li className="sidebarListItem">
            <Slideshow />
            <span className="listItemText">Videos</span>
          </li>
          <li className="sidebarListItem">
            <Groups />
            <span className="listItemText">Groups</span>
          </li>
          <li className="sidebarListItem">
            <Bookmark />
            <span className="listItemText">Bookmarks</span>
          </li>
          <li className="sidebarListItem">
            <QuestionMark />
            <span className="listItemText">Questions</span>
          </li>
          <li className="sidebarListItem">
            <WorkOutline />
            <span className="listItemText">Jobs</span>
          </li>
          <li className="sidebarListItem">
            <Event />
            <span className="listItemText">Events</span>
          </li>
          <li className="sidebarListItem">
            <Psychology />
            <span className="listItemText">Courses</span>
          </li>
        </ul>
        <button className="sidebarButton">Show more</button>
        <hr className="sidebarHr" />
        <ul className="sidebarFriend">
          {  users.map(u=>
            <Closefriends key={u.userid} user = {u}/>)}
        </ul>
      </div>
    </div>
  );
};

export default Sidebar;
