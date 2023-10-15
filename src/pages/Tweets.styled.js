import styled from 'styled-components';
import { Link } from 'react-router-dom';

export const Section = styled.section`
  padding-top: 100px;
  padding-bottom: 100px;
`;

export const Container = styled.div`
  padding-left: 24px;
  padding-right: 24px;
`;

export const LinkGoBack = styled(Link)`
  display: block;
  width: 196px;
  margin-top: 24px;
  margin-bottom: 40px;
  margin-left: auto;
  margin-right: auto;

  padding-left: 28px;
  padding-right: 28px;
  padding-top: 14px;
  padding-bottom: 14px;
  font-size: 18px;
  font-weight: 600;
  text-align: center;
  text-decoration: none;
  text-transform: uppercase;
  color: #373737;
  border: 2px solid #5736a3;
  border-radius: 10.311px;
  background-color: #ebd8ff;
  transition: all var(--transition-dur-and-func);
  &:hover,
  &:focus {
    background-color: #5cd3a8;
  }
`;

export const Li = styled.li`
  color: black;
`;
