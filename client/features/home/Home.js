import React from 'react';
import { useSelector } from 'react-redux';

/**
 * COMPONENT
 */
const Home = (props) => {
  const username = useSelector((state) => state.auth.me.username);

  return (
    <div className='card'>
      <h3>Welcome, {username}!</h3>
      <p>Please enjoy our fine taste of assorted Products!</p>
    </div>
  );
};

export default Home;
