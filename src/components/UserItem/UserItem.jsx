import Button from 'components/Button/Button';
import logo from '../../img/logo.svg';
import heroimg from '../../img/hero.png';
import lineAvatar from '../../img/line.svg';
import circleAvatar from '../../img/circle.svg';

import {
  ItemUser,
  Logo,
  HeroImg,
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

      <HeroImg src={heroimg} alt="Decorative image" />

      <AvatarLine src={lineAvatar} alt="Decorative avatar's line" />
      <Avatar src={avatar} alt="User's avatar" />
      <AvatarCircle src={circleAvatar} alt="Decorative avatar's circle" />
      <Button
        tweets={tweets}
        followers={followers}
        id={id}
        onFollow={isFollowing}
      />
    </ItemUser>
  );
};
