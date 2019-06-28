import React from 'react'
import axios from 'axios'

class UpdateDelete extends React.Component {
  state={
    name: '',
    age: '',
    email:'',
    errorMessage: null
  }

//POPULATION THE FORM WITH THE CURRENT DATA
componentDidMount() {
  const id = Number(this.props.match.params.id)
  
  axios.get(`http://localhost:5000/friends`)
  .then(response => {
    //console.log(response.data)
    const foundFriend = response.data.filter(friend => {
      if(friend.id === id) {
          return friend
      } else  {
        return null
      }
    })
    const{ name, age, email } = foundFriend[0]
    this.setState({ name, age, email})
  })
  .catch(err => {
    this.setState({
      errorMessage: err.response.data.error
    })
  })
} 


handleChange = e => {
  this.setState({
    [e.target.name]: e.target.value
  })
}

updateFriend= e => {
  e.preventDefault()
  const id = this.props.match.params.id
  const { name, age, email } = this.state
  const payload = { name, age, email }

  axios.put(`http://localhost:5000/friends/${id}`, payload)
      .then(response => {
         this.setState({
           errorMessage: null
         })
        
       this.props.updateFriends(response.data)
       this.props.history.push('/friends')
      })
       
      .catch(err => {
        this.setState({
          errorMessage: err.response.data.error
        })
      })
  }


	deleteFriend = (e) => {
		e.preventDefault()

		const id = this.props.match.params.id

		axios.delete(`http://localhost:5000/friends/${id}`)
			.then((response) => {
				this.setState({
					errorMessage: null
				})

				this.props.updateFriends(response.data)
				this.props.history.push("/friends")
			})
			.catch((err) => {
				this.setState({
					errorMessage: err.response.data.error
				})
			})
	}
		



  render() {

   const id = this.props.match.params.id
   const { name, age, email, errorMessage } = this.state
    
    return(
    <form onSubmit={this.updateFriend}>
     <h1>Edit Info of Friend #{id}</h1>
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
     <div>
      <button type='submit'>Save</button>
      <button type='button' onClick={this.deleteFriend}>Delete</button>
     </div>
   </form>
   )
  }
}

export default UpdateDelete;