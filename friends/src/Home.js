import React from 'react';
import { Link } from 'react-router-dom';

const Home = () => {
  return (
    <div>
      <h1>Friends Database</h1>
      <h4>This is classified information!</h4>
      <button><Link  className='home-button' to="/friends">Enter</Link></button> 
    </div>
  )
}

export default Home;