import styled from 'styled-components';
import {Carousel} from 'react-responsive-carousel';

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
  justify-content: center;
  align-items: center;
  background-color: ${Colors.colorPink};
`;

export const SocialBox = styled.div`
  margin-left: 2%;
  flex: 1;
  height: 400px;
  border-radius: 20px;
  align-self: center;
  justify-content: center;
  align-items: center;
  background-color: ${Colors.colorPink};
  @media (max-width: 768px) {
    height: 200px;
  }
`;

export const Heading = styled.h1`
  font-size: 2rem;
  text-align: center;
  transform: rotate(270deg);
  @media (max-width: 768px) {
    font-size: 1rem;
  }
`;

export const Quotes = styled.h1`
  font-size: 2rem;
  margin-bottom: 5%;
  text-align: center;
  @media (max-width: 768px) {
    font-size: 1rem;
  }
`;

export const CarouselView = styled(Carousel)`
  margin-top: 7%;
  margin-bottom: 5%;
  margin-left: 5%;
  align-self: center;
  margin-right: 5%;
  @media (max-width: 768px) {
    width: 220px;
  }
`;
