import React from 'react';

const FriendsList = (props) => {
  return (
    <div className='friends-list'>
       <h2>{props.friend.name}</h2>
       <p>Age: {props.friend.age}</p>
       <p>Email: {props.friend.email}</p>
    </div>
  )
}

export default FriendsList;