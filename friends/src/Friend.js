import React from 'react';
import { Link } from 'react-router-dom'

const Friend = (props) => {
  const id = props.match.params.id;
  //console.log(props.match) //To see process under the hood 
  const friend = props.friends.find(friend => `${friend.id}` === id);
  //Another way of doing same
  // const friend = props.friends.find(i => String(i.id) === props.match.params.id)

	if (!friend) {
		return <div>Loading...</div>
  }
  
  return (
   <div>
     <h1>{friend.name}</h1> 
     <p><strong>Age: </strong>{friend.age}</p>
     <p><strong>Email: </strong>{friend.email}</p> 
     <button><Link to={`/edit/${friend.id}`}>Edit</Link></button>
   </div>
  )
}

export default Friend;