import { NavLink } from 'react-router-dom';

const NotFound = () => {
  return (
    <main style={{ textAlign: 'center', color: '#5736A3', paddingTop: 200 }}>
      <b style={{ fontSize: 64 }}>404</b>
      <p style={{ fontSize: 44 }}>Sorry, we couldn't find that page :(</p>
      <NavLink
        to="/"
        style={{
          fontSize: 44,
          marginTop: 50,
          color: 'blue',
          textDecoration: 'underline',
        }}
      >
        Come back to Home
      </NavLink>
    </main>
  );
};

export default NotFound;
