import styled from 'styled-components';

import {Colors} from '../../utils/Colors';

export const Container = styled.div`
  padding-top: 2rem;
  background-color: ${Colors.white};
  padding-left: 2rem;
  padding-right: 2rem;
  padding-bottom: 2rem;
`;

export const ContainerInside = styled.div`
  padding-top: 2rem;
  padding-bottom: 2rem;
  padding-left: 2rem;
  padding-right: 2rem;
  background-color: ${Colors.colorBlack};
  border-radius: 20px;
  justify-content: space-between;
  display: flex;
`;

export const Heading = styled.div`
  font-size: 4rem;
  color: ${Colors.white};
  @media (max-width: 768px) {
    font-size: 2rem;
  }
`;

export const SubHeading = styled.h3`
  font-size: 1.5rem;
  color: ${Colors.white};
  @media (max-width: 768px) {
    font-size: 1rem;
  }
`;

export const AboutBox = styled.div`
  display: flex;
  flex-direction: column;
  margin-right: 2rem;
`;
