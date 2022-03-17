import styled from 'styled-components';

import {Colors} from '../../utils/Colors';

export const Container = styled.div`
  padding-left: 2rem;
  padding-right: 2rem;
  margin-top: 5%;
`;

export const ContainerInside = styled.div`
  display: flex;
  height: 400px;
  @media (max-width: 768px) {
    height: 200px;
  }
`;

export const CategoryBox = styled.div`
  border-radius: 20px;
  width: 100px;
  display: flex;
  margin-left: 5%;
  justify-content: center;
  align-items: center;
  background-color: ${Colors.colorGreen};
`;

export const SocialBox = styled.div`
  display: flex;
  margin-left: 2%;
  flex: 1;
  align-self: center;
  justify-content: space-between;
`;

export const Heading = styled.h1`
  font-size: 2rem;
  text-align: center;
  transform: rotate(270deg);
  @media (max-width: 768px) {
    font-size: 1rem;
  }
`;

export const Image = styled.img`
  width: 60%;
  height: 60%;
  align-self: center;
`;

export const SocialFacebook = styled.div`
  &:hover {
   background-color: ${Colors.colorFacebook};
   cursor: pointer;
   transform: scale(1.5);
  }
  @media (max-width: 768px) {
    height: 50px;
    width: 50px;
  }
  height: 100px;
  width: 100px;
  display: flex;
  justify-content: center;
  border-radius: 100px;
  background-color: ${Colors.colorGreen};
`;

export const SocialTwitter = styled.div`
  &:hover {
    background-color: ${Colors.colorTwitter};
    cursor: pointer;
    transform: scale(1.5);
  }
  @media (max-width: 768px) {
    height: 50px;
    width: 50px;
  }
  height: 100px;
  width: 100px;
  display: flex;
  justify-content: center;
  border-radius: 100px;
  background-color: ${Colors.colorGreen};
`;

export const SocialInsta = styled.div`
  &:hover {
    background-color: ${Colors.colorInsta};
    cursor: pointer;
    transform: scale(1.5);
  }
  @media (max-width: 768px) {
    height: 50px;
    width: 50px;
  }
  height: 100px;
  width: 100px;
  display: flex;
  justify-content: center;
  border-radius: 100px;
  background-color: ${Colors.colorGreen};
`;

export const SocialYoutube = styled.div`
  &:hover {
    background-color: ${Colors.colorYouTube};
    cursor: pointer;
    transform: scale(1.5);
  }
  @media (max-width: 768px) {
    height: 50px;
    width: 50px;
  }
  height: 100px;
  width: 100px;
  display: flex;
  justify-content: center;
  border-radius: 100px;
  background-color: ${Colors.colorGreen};
`;

export const SocialLinkdin = styled.div`
  &:hover {
    background-color: ${Colors.colorLinkdin};
    cursor: pointer;
    transform: scale(1.5);
  }
  @media (max-width: 768px) {
    height: 50px;
    width: 50px;
  }
  height: 100px;
  width: 100px;
  display: flex;
  justify-content: center;
  border-radius: 100px;
  background-color: ${Colors.colorGreen};
`;
