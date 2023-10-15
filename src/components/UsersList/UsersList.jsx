import { UserItem } from 'components/UserItem/UserItem';
import { ListUsers } from './UsersList.styled';

export const UsersList = ({ currentItems }) => {
  return (
    <>
      <ListUsers>
        {currentItems.map(({ id, tweets, avatar, followers, isFollowing }) => (
          <UserItem
            id={id}
            tweets={tweets}
            avatar={avatar}
            followers={followers}
            isFollowing={isFollowing}
          />
        ))}
      </ListUsers>
    </>
  );
};
