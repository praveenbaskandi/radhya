import styled from 'styled-components';

import {Colors} from '../../utils/Colors';

export const Container = styled.div`
  padding-left: 2rem;
  padding-right: 2rem;
  margin-top: 5%;
`;

export const ContainerInside = styled.div`
  display: flex;
`;

export const Heading = styled.h1`
  font-size: 2rem;
  text-align: center;
  justify-content: center;
  align-self: center;
  @media (max-width: 768px) {
    font-size: 1rem;
  }
  transform: rotate(270deg);
`;

export const BookBox = styled.div`
  display: flex;
  margin-left: 20px;
  flex-direction: column;
`;

export const CategoryBox = styled.div`
  border-radius: 20px;
  flex-grow: 1;
  display: flex;
  width: 100px;
  background-color: ${Colors.colorBlue};
`;
