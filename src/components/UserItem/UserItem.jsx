import Button from 'components/Button/Button';
import logo from '../../img/logo.svg';
import defaultAvatar from '../../img/user.svg';

import {
  ItemUser,
  Logo,
  Avatar,
  AvatarLine,
  AvatarCircle,
} from './UserItem.styled';

export const UserItem = ({ id, tweets, avatar, followers, isFollowing }) => {
  return (
    <ItemUser key={id}>
      <Logo
        href="https://goit.global/ua/"
        target="_blank"
        rel="noreferrer noopener"
      >
        <img src={logo} alt="Logotype" />
      </Logo>
      <AvatarLine></AvatarLine>

      <Avatar
        src={avatar === '' ? defaultAvatar : avatar}
        alt="User's avatar"
      />
      <AvatarCircle></AvatarCircle>
      <Button
        tweets={tweets}
        followers={followers}
        id={id}
        onFollow={isFollowing}
      />
    </ItemUser>
  );
};
