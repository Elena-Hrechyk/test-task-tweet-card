import { useState, useEffect, useRef } from 'react';
import { useLocation } from 'react-router-dom';
import { fetchUsers } from 'helpers/api';
import { Filters } from 'components/Filters/Filters';
import Loader from 'components/Loader/Loader';
import PaginatedItems from 'components/Pagination/Pagination';
import { Section, Container, LinkGoBack } from './Tweets.styled';

const Tweets = () => {
  const [users, setUsers] = useState([]);
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(false);
  const [filter, setFilter] = useState('all');
  const location = useLocation();
  const clickGoTo = useRef(location.state?.from ?? '/');

  useEffect(() => {
    async function getUsers() {
      try {
        setError(null);
        setLoading(true);

        const data = await fetchUsers();
        setUsers(data);
      } catch (err) {
        setError(err.message);
      } finally {
        setLoading(false);
      }
    }

    getUsers();
  }, []);

  const getVisibleUsers = users.filter(user => {
    if (filter === 'all') {
      return true;
    } else if (filter === 'follow') {
      return !user.isFollowing;
    } else if (filter === 'followings') {
      return user.isFollowing;
    }
    return false;
  });

  return (
    <>
      <Section>
        <Container>
          <LinkGoBack to={clickGoTo.current}>Go back</LinkGoBack>
          <Filters onChange={setFilter} />
          {loading && !error ? (
            <Loader />
          ) : (
            <PaginatedItems
              items={getVisibleUsers}
              itemsPerPage={3}
              filter={filter}
            />
          )}
        </Container>
      </Section>
    </>
  );
};

export default Tweets;
