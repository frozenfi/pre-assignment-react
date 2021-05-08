import React from 'react';
import classes from './UserDetails.module.scss';
import UserPropType from '../../utils/user';
import LinkButton from '../LinkButton/LinkButton';

const UserDetails = ({ user }) => {
  return (
    <div className={classes.detailsContainer}>
      <h3>Name</h3>
      <p>{user.name}</p>
      <h3>Username</h3>
      <p>{user.username}</p>
      <h3>Email</h3>
      <p>{user.email}</p>
      <h3>Phone</h3>
      <p>{user.phone}</p>
      <h3>Website</h3>
      <p>{user.website}</p>
      <h3>Company</h3>
      <p>{user.company.name}</p>
      <h3>Address</h3>
      <p>{user.address.street}, {user.address.suite}, {user.address.city}, {user.address.zipcode}</p>
      <LinkButton to="/home">Go back</LinkButton>
    </div>
  );
};

UserDetails.propTypes = {
  user: UserPropType,
};

export default UserDetails;
