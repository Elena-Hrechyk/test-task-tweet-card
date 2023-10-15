import styled from 'styled-components';

export const ButtonLoadMore = styled.button`
  display: ${props => (props.show ? 'flex' : 'none')};
  width: 196px;
  margin-top: 40px;
  padding: 14px 28px;
  justify-content: center;
  align-items: center;
  margin-left: auto;
  margin-right: auto;

  border-radius: 10.311px;
  background-color: #ebd8ff;
  box-shadow: 0px 3.43693px 3.43693px 0px rgba(0, 0, 0, 0.25);

  color: #373737;
  font-size: 18px;
  font-weight: 600;
  line-height: normal;
  text-transform: uppercase;
  transition: background-color var(--transition-dur-and-func);

  &:hover {
    background-color: #5cd3a8;
  }
`;
