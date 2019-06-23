import React from 'react';
import './App.css';
import axios from 'axios';
import FriendsList from './FriendsList';

class App extends React.Component {
  constructor() {
    super();
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
      this.setState({ error: err.response.message });
    })
  }


  render() {
    return (
      <div className="App">
     
         {this.state.friends.map(friend => {
           return <FriendsList friend={friend} key={friend.id}/>
         })}
        
         <form onSubmit={this.submitHandler}>
         <input
            type="text"
            value={this.state.name}
            onChange={this.changeHandler}
            placeholder="Name"
            name="name"
          />
          <input
            type="text"
            value={this.state.age}
            onChange={this.changeHandler}
            placeholder="Age"
            name="age"
          />
          <input
            type="text"
            value={this.state.email}
            onChange={this.changeHandler}
            placeholder="Email"
            name="email"
          />
          <button type="submit">Add Friend</button>
         </form>
      </div>
    );
  }
}

export default App;
