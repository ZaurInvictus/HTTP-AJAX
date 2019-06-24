import React from 'react';
import axios from 'axios';
import { Route, NavLink } from 'react-router-dom';
import './App.css';

import Home from './Home';
import FriendsList from './FriendsList';
import Friend from './Friend';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state={
      friends: []
    }
  }


  componentDidMount() {
    axios
    .get('http://localhost:5000/friends')
    .then(res => {
      console.log(res)
      this.setState({ friends: res.data });
    })
    .then()
    .catch(err => {
      // console.log(err)
      this.setState({ error: err.response});
    })
  }


  render() {
     const { friends } = this.state;
    return (
     <div className="App">
        <ul className='navbar'>
         <li><NavLink exact to='/' activeClassName='activeButton'>Home
           </NavLink>
         </li>
         <li>
         <NavLink to='/friends' activeClassName='activeButton'>Friends List</NavLink>
         </li>
       </ul>
       <Route exact path='/' component={Home} />
       <Route 
         exact path="/friends" 
         render={props => <FriendsList {...props} friends={friends} />}
       />
       <Route 
         path="/friend-info/:id" 
         render={props =>  <Friend {...props} friends={friends} />}
       />
     </div>
   );
  }
 }

export default App;
