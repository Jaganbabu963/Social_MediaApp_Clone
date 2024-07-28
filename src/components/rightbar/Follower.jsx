import React from 'react'

const Follower = ({user}) => {
  return (
    <>
      <div key={user.userid} className="follower">
          <img src={user.profilePicAdd} alt="" className="followerImg" />
          <span className="followerName">{user.userName}</span>
      </div>
    </>
  )
}

export default Follower
