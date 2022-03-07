import styled from 'styled-components';

export const Container = styled.div`
  width: 100%;
  padding-top: 2rem;
  padding-bottom: 2rem;
  background-color: #434f53;
`;

export const Heading = styled.h1`
  font-size: 2rem;
  text-align: center;
  justify-content: center;
  align-self: center;
`;

export const Image = styled.img`
  width: 60%;
  height: 60%;
  align-self: center;
`;

export const SocialContainer = styled.div`
  margin-top: 5%;
  margin-bottom: 5%;
  margin-left: 10%;
  margin-right: 10%;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
`;

export const SocialFacebook = styled.div`
  &:hover {
    background-color: #4267B2;
    cursor: pointer;
  }
  height: 100px;
  width: 100px;
  display: flex;
  justify-content: center;
  border-radius: 100px;
  background-color:#FFFFFF50;
`;

export const SocialTwitter = styled.div`
  &:hover {
    background-color: #00acee;
    cursor: pointer;
  }
  height: 100px;
  width: 100px;
  display: flex;
  justify-content: center;
  border-radius: 100px;
  background-color:#FFFFFF50;
`;

export const SocialInsta = styled.div`
  &:hover {
    background-color: #8a3ab9;
    cursor: pointer;
  }
  height: 100px;
  width: 100px;
  display: flex;
  justify-content: center;
  border-radius: 100px;
  background-color:#FFFFFF50;
`;

export const SocialYoutube = styled.div`
  &:hover {
    background-color: #c4302b;
    cursor: pointer;
  }
  height: 100px;
  width: 100px;
  display: flex;
  justify-content: center;
  border-radius: 100px;
  background-color:#FFFFFF50;
`;

export const SocialLinkdin = styled.div`
  &:hover {
    background-color: #0e76a8;
    cursor: pointer;
  }
  height: 100px;
  width: 100px;
  display: flex;
  justify-content: center;
  border-radius: 100px;
  background-color:#FFFFFF50;
`;
