import styled from 'styled-components';
import heroimg from '../../img/hero.png';

export const ItemUser = styled.li`
  position: relative;
  width: 380px;
  height: 460px;
  margin-left: auto;
  margin-right: auto;
  padding-top: 178px;
  padding-bottom: 36px;
  border-radius: 20px;
  background-color: #5736a3;
  background-image: url(${heroimg});
  background-size: 308px 168px;
  background-repeat: no-repeat;
  background-position: 36px 28px;
  box-shadow: -2.5777px 6.87386px 20.62157px 0px rgba(0, 0, 0, 0.23);
`;

export const Logo = styled.a`
  position: absolute;
  top: 20px;
  left: 20px;
  cursor: pointer;
  z-index: 1;
`;

export const Avatar = styled.img`
  position: relative;
  margin-left: auto;
  margin-right: auto;
  margin-bottom: 26px;
  width: 80px;
  height: 80px;
  object-fit: cover;

  border-radius: 62px;
  background-color: #5736a3;
  border: 8px solid #ebd8ff;
  z-index: 1;
`;

export const AvatarLine = styled.img`
  position: absolute;
  top: 214px;
  z-index: 0;
`;

export const AvatarCircle = styled.img`
  position: absolute;
  top: 179px;
  left: 145px;
  z-index: 2;
`;
