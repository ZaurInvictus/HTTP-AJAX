import React from 'react';
import axios from 'axios';
import { Route, NavLink } from 'react-router-dom';
import './App.css';

import Home from './Home';
import FriendsList from './FriendsList';
import Friend from './Friend';
import PostFriend from './PostFriend'
import UpdateDelete from './UpdateDelete'

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state={
      friends: [],
      errorMessage: null
    }
  }


  componentDidMount() {
    axios
    .get('http://localhost:5000/friends')
    .then(res => {
      // console.log(res)
      this.setState({ friends: res.data });
    })
    .catch(err => {
      //console.log(err)
      this.setState({ errorMessage: err.response.data.error});
    })
  }

  //PASS STATE DOWN TO PostFriend.JS COMPONENT / UPDATES THE STATE
  updateFriends = (friends) => {
    this.setState({ friends })
  }

  render() {
     const { friends } = this.state;
    return (
     <div className="App">
        <ul className='navbar'>
         <li><NavLink exact to='/' activeClassName='activeButton'>Home</NavLink></li>
         <li><NavLink to='/friends' activeClassName='activeButton'>Friends List</NavLink></li>
         <li><NavLink to='/add-friend' activeClassName='activeButton'>Add Friend</NavLink></li>
       </ul>
       <Route exact path='/' component={Home} />
       <Route 
         exact path="/friends" 
         render={props => <FriendsList {...props} friends={friends} />}
       />
       <Route path="/friends/:id" 
        render={props => <Friend {...props} friends={friends} />}
       />
       <Route 
        exact path='/add-friend' 
        render={props => <PostFriend {...props}  updateFriends={this.updateFriends} />}
       />
       <Route 
        exact path="/edit/:id"
        render={props => <UpdateDelete {...props}
        updateFriends={this.updateFriends}/>}
       />
     </div>
   );
  }
 }

export default App;
