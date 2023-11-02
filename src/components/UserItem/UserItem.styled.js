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

export const AvatarLine = styled.div`
  position: absolute;
  top: 214px;
  width: 100%;
  height: 8px;

  background-color: #ebd8ff;
  box-shadow: 0px 3.43693px 2.5777px 0px #fbf8ff inset,
    0px 3.43693px 3.43693px 0px rgba(0, 0, 0, 0.06),
    0px -1.71846px 3.43693px 0px #ae7be3 inset;
`;

export const AvatarCircle = styled.div`
  position: absolute;
  top: 179px;
  left: 150px;
  z-index: 2;

  width: 80px;
  height: 80px;
  flex-shrink: 0;
  border-radius: 50%;
  fill: #ebd8ff;
  box-shadow: 0px 4.39163px 3.29372px 0px #fbf8ff inset,
    0px -2.19582px 4.39163px 0px #ae7be3 inset;
`;
