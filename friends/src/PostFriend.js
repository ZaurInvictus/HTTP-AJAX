import React from 'react'
import axios from 'axios'

class PostFriend extends React.Component {
  state={
     name: '',
     age: '',
     email: '',
     errorMessage: null
   }
  
  handleChange = e => {
    this.setState({
      [e.target.name]: e.target.value
    })
  }


  addFriend = e => {
    e.preventDefault()

    const{ name, age, email } = this.state
    const payload = { name, age, email }

    axios.post('http://localhost:5000/friends', payload)
     .then((response) => {
       this.setState({
         errorMessage: null
       })

				//PASS STATE UP TO APP.jS
       this.props.updateFriends(response.data)
       	//PUSH BACK TO FRIENDS PAGE
       this.props.history.push('/friends')
     })
     .catch((err) => {
        this.setState({
          errorMessage: err.response
        })
     })

  }


 render() {
   const { name, age, email, errorMessage } = this.state
   return(
     <form onSubmit={this.addFriend}>
      <h1>Add New Friend</h1>
      <p>{errorMessage}</p>

       <input
         type='text'
         name='name'
         placeholder='Name'
         value={name}
         onChange={this.handleChange}
       />
       <input 
         type='number'
         name='age'
         placeholder='Age'
         value={age}
         onChange={this.handleChange}
       />
       <input 
         type='text'
         name='email'
         placeholder='email'
         value={email}
         onChange={this.handleChange}
       />
       <button type='submit'>Add Friend</button>
     </form>
   )
 }
}

export default PostFriend;








