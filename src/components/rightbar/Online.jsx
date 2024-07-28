import React from "react";

const Online = ({user}) => {
  return (
    <>
      <li key = {user.userid} className="eachFriend">
        <img src={user.profilePicAdd} alt="" className="eachFriendImg" />
        <span className="onlineStatus"></span>
        <span className="friendName">{user.userName}</span>
      </li>
    </>
  );
};

export default Online;
