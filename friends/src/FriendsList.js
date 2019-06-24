import React from 'react';

const FriendsList = (props) => {
  return (
    <div className='friends-list-wrapper'>
      {props.friends.map(friend => {
        return (
         <div className='friends-card' friend={friend} key={friend.id}> 
           <h2>{friend.name}</h2>
           <p>Age: {friend.age}</p>
           <p>Email: {friend.email}</p>
         </div>
        )
      })}
      
      <form >
         <input
            type="text"
            placeholder="Name"
            name="name"
          />
          <input
            type="text"
            placeholder="Age"
            name="age"
          />
          <input
            type="text"
            placeholder="Email"
            name="email"
          />
          <button type="submit">Add Friend</button>
         </form>
    </div>
  )
}

export default FriendsList;