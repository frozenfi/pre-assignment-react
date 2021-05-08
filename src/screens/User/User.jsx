import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import classes from './User.module.scss';
import UserDetails from '../../components/UserDetails/UserDetails';

const User = () => {

  // Get 'id' param from URL path
  const { id } = useParams();

  // State: data of the currently viewed user
  const [user, setUser] = useState();

  // API endpoint URL where we fetch the data from
  const API_URL = 'https://jsonplaceholder.typicode.com/users';

  useEffect(() => {
    // Fetch data from API_URL with GET method
    fetch(`${API_URL}/${id}`, { method: 'GET' })
      // Turn response data into JSON object
      .then(response => response.json())
      // Store JSON data in state
      .then(data => setUser(data))
      // Handle potential errors during the request
      .catch(error => {
        console.error(error);
        alert('An unexpected error has ocurred.');
      });
  }, [id]); // Re-render only if 'id' changes

  return (
    <div className={classes.user}>
      {user && (
        <UserDetails user={user} />
      )}
    </div>
  );

};

export default User;
