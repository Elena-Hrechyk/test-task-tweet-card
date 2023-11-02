import React, { useState, useEffect } from 'react';
import { updateUser } from 'helpers/api';
import {
  Tweets,
  Followers,
  ButtonNoFollow,
  ButtonFollowing,
} from './Button.styled';

const Button = ({ id, followers, tweets, onFollow }) => {
  const [followersCount, setFollowersCount] = useState(followers);
  const [isFollowing, setIsFollowin] = useState(onFollow);

  const following = () => {
    setIsFollowin(true);
    setFollowersCount(followersCount + 1);
  };

  const notFollowing = () => {
    setIsFollowin(false);
    setFollowersCount(followersCount - 1);
  };

  useEffect(() => {
    if (onFollow !== isFollowing) {
      async function refreshUser() {
        try {
          await updateUser(id, followersCount, isFollowing);
        } catch (err) {
          return err.message;
        }
      }

      refreshUser();
    }
  }, [onFollow, id, followersCount, isFollowing]);

  return (
    <>
      <Tweets>{tweets.toLocaleString('en-US')} tweets</Tweets>
      <Followers>{followersCount.toLocaleString('en-US')} followers</Followers>
      {!isFollowing ? (
        <ButtonNoFollow type="button" onClick={following}>
          Follow
        </ButtonNoFollow>
      ) : (
        <ButtonFollowing type="button" onClick={notFollowing}>
          Following
        </ButtonFollowing>
      )}
    </>
  );
};

export default Button;
