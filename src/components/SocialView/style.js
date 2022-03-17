import styled from 'styled-components';

export const Container = styled.div`
  padding: 20px;
  display: flex;
  margin-top: ${({mt = 0}) => mt}px;
  flex-direction: row;
  margin-left: 2%;
  flex: 1;
  border-radius: 20px;
  background-color: #9AB8FA;
  @media (max-width: 768px) {
    height: 100px;
    width: 50px;
  }
`;

export const SocialFacebook = styled.div`
&:hover {
 background-color: #4267B2;
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
background-color:#FFFFFF50;
`;

export const Image = styled.img`
  width: 60%;
  height: 60%;
  align-self: center;
`;
