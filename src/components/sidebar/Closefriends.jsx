import React from 'react'

const Closefriends = ({user}) => {
  return (
    <>
          <li key={user.userid} className="friendItem">
            <img src={user.profilePicAdd} alt="" className="frndimg" />
            <span className="friendName">{user.userName}</span>
          </li>
    </>
  )
}

export default Closefriends
