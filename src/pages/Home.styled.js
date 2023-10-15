import styled from 'styled-components';
import { NavLink } from 'react-router-dom';

export const Section = styled.section`
  height: 100vh;
  padding-top: 100px;
  padding-bottom: 100px;
`;

export const Container = styled.div`
  padding-left: 24px;
  padding-right: 24px;
`;

export const ToTweets = styled(NavLink)`
  display: block;
  font-size: 40px;
  text-align: center;
  color: #5736a3;
  text-transform: uppercase;
`;
