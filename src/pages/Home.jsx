import { useLocation } from 'react-router-dom';
import { Section, Container, ToTweets } from './Home.styled';

const Home = () => {
  const location = useLocation();

  return (
    <Section>
      <Container>
        <ToTweets to="/tweets" state={{ from: location }}>
          All tweets
        </ToTweets>
      </Container>
    </Section>
  );
};

export default Home;
