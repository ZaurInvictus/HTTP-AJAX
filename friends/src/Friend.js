import React from 'react';

const Friend = (props) => {
  const id = props.match.params.id;
  const friend = props.friends.find(friend => `${friend.id}` === id);
  return (
   <div>
     <h1>{friend.name}</h1>
     <p>Age: {friend.age}</p>
     <p>Email: {friend.email}</p>
   </div>
  )
}

export default Friend;