import React, { useState, useEffect } from 'react';
import classes from './Home.module.scss';
import UserCard from '../../components/UserCard/UserCard';

const Home = () => {

  // State: array of users
  const [users, setUsers] = useState([]);

  // API endpoint URL where we fetch the data from
  const API_URL = 'https://jsonplaceholder.typicode.com/users';

  useEffect(() => {
    // Fetch data from API_URL with GET method
    fetch(API_URL, { method: 'GET' })
      // Turn response data into JSON object
      .then(response => response.json())
      // Store JSON data in state
      .then(data => setUsers(data))
      // Handle potential errors during the request
      .catch(error => {
        console.error(error);
        alert('An unexpected error has ocurred.');
      });
  }, []); // Render only once, never again

  return (
    <div className={classes.home}>
      {users.map(user => (
        <UserCard key={user.id} user={user} />
      ))}
    </div>
  );

};

export default Home;
