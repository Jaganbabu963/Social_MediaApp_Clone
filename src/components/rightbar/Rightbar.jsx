import "./rightbar.css";
import Online from "./Online";
import { users } from "../../dummyData";
import Follower from "./Follower";

const Rightbar = ({ profile }) => {
  const HomeRightbar = () => {
    return (
      <>
        <div className="birthDayContainer">
          <img src="/assets/gift.jpg" alt="" className="birthDayGift" />
          <span className="birthDayWishes">
            Ram and 3 others wishing you <b>Happy BirthDay</b>
          </span>
        </div>
        <hr className="underHr" />
        <img src="/assets/ad.jpeg" alt="" className="adImg" />
        <img src="/assets/ad2.jpeg" alt="" className="adImg" />
        <hr className="underHr" />
        <h4 className="rightbarTitle">Online Friends</h4>
        <ul className="friendsList">
          {users.map((u) => (
            <Online key={u.id} user={u} />
          ))}
        </ul>
      </>
    );
  };

  const ProfileRightbar = () => {
    return (
      <>
        <h4 className="rightBarTitle">User Info</h4>
        <div className="rightbarUserInfo">
          <div className="infoItem">
            <span className="infoCity">City: </span>
            <span className="infoCityvalue">Yellandu </span>
          </div>
          <div className="infoItem">
            <span className="infoCity">From: </span>
            <span className="infoCityvalue">Telangana </span>
          </div>
          <div className="infoItem">
            <span className="infoCity">RelationShip: </span>
            <span className="infoCityvalue">Single </span>
          </div>
        </div>
        <h4 className="rightBarTitle">User Friends</h4>
        <div className="followers">
          {users.map((u) => (
            <Follower key={u.id} user={u} />
          ))}
        </div>
      </>
    );
  };

  return (
    <div className="rightbar">
      <div className="rightbarWrapper">
        {profile ? <ProfileRightbar /> : <HomeRightbar />}
      </div>
    </div>
  );
};

export default Rightbar;
