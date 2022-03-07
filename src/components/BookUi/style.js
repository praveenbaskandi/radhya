import styled from 'styled-components';

export const Container = styled.div`
  &:hover {
   cursor: pointer;
   transform: scale(1.2);
  }
  width: 200px;
  margin-left: 20px
`;

export const Heading = styled.div`
  font-size: 15px;
  color: #060807;
`;

export const ImageView = styled.img`
  width: 200px;
  height: 300px;
  @media (max-width: 768px) {
    height: 150px;
    width: 100px;
  }
`;