import React from 'react';
import classes from './UserCard.module.scss';
import LinkButton from '../LinkButton/LinkButton';
import UserPropType from '../../utils/user';

const UserCard = ({ user }) => {
  const link = `https://${user.website}`;
  return (
    <div className={classes.cardContainer}>
      <div className={classes.cardProfile}>
        <p>{user.name.charAt(0)}</p>
      </div>
      <h3 className={classes.cardName}>{user.name}</h3>
      <p className={classes.cardUsername}>@{user.username}</p>
      <a className={classes.cardLink} href={link} target="_blank" rel="noreferrer">{link}</a>
      <LinkButton to={`/user/${user.id}`}>MORE DETAILS</LinkButton>
    </div>
  );
};

UserCard.propTypes = {
  user: UserPropType,
};

export default UserCard;
