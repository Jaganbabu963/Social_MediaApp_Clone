import React from "react";
import Feed from "../../components/feed/Feed";
import Rightbar from "../../components/rightbar/Rightbar";
import Sidebar from "../../components/sidebar/Sidebar";
import Topbar from "../../components/topbar/Topbar";
import "./profile.css";

const Profile = (props) => {
  return (
    <>
      <Topbar fun1 = {props.fun} />
      <div className="profile">
        <Sidebar />
        <div className="profileRight">
          <div className="profilerightTop">
            <div className="profileImg">
              <img src="/assets/sunset.jpeg" alt="" className="coverImg" />
              <img src="/assets/prof.jpg" alt="" className="userImg" />
            </div>
            <div className="profileInfo">
              <h4 className="infoNama">Jagan babu</h4>
              <span className="infoDesc">hi, Friends ciao</span>
            </div>
          </div>
          <div className="profilerightBottom">
            <Feed />
            <Rightbar profile />
          </div>
        </div>
      </div>
    </>
  );
};

export default Profile;
