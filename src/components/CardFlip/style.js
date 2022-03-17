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
    flex-direction: column;
    padding: 5px;
  }
`;

export const BoxContainer = styled.div`
  display: flex;
  flex-direction: column;
  margin-left: 20px;
  @media (max-width: 768px) {
    margin-left: 5px;
  }
`;

export const Heading = styled.h2`
  font-size: 15px;
  color: #060807;
`;

export const Content = styled.div`
  font-size: 15px;
  color: #060807;
  @media (max-width: 768px) {
    text-overflow: ellipsis;
    overflow: hidden;
    display: -webkit-box;
    -webkit-line-clamp: 2;
    -webkit-box-orient: vertical;
  }
`;

export const Button = styled.button`
  font-size: 15px;
  background-color: #2427B7;
  border-color: #2427B7;
  margin-top: 20px;
  color: #FFFFFF;
  height: 40px;
  border-radius: 50px;
`;

export const ImageView = styled.img`
  width: 200px;
  height: 250px;
  border-radius: 10px;
  @media (max-width: 768px) {
    height: 100px;
    width: 50px;
  }
`;
