import React from 'react';
import { Link } from 'react-router-dom';


const FriendsList = (props) => { 
  
    return (
      <div className='friends-list-wrapper'>
        {props.friends.map(friend => {
          return (
           <div className='friends-card' friend={friend} key={friend.id}> 
             <Link to={`/friends/${friend.id}`}>
               <h2>{friend.name}</h2>
             </Link> 
           </div>
           )
         })}
      </div>
    )
}

export default FriendsList;