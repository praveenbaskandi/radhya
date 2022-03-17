import styled from 'styled-components';

export const Container = styled.div`
  padding-top: 2rem;
  background-color: #FFFFFF;
  padding-left: 2rem;
  padding-right: 2rem;
`;

export const ContainerInside = styled.div`
  padding-top: 2rem;
  padding-bottom: 2rem;
  padding-left: 2rem;
  padding-right: 2rem;
  background-color: #F1DC38;
  border-radius: 20px;
  justify-content: space-between;
  display: flex;
`;

export const Image = styled.img`
  width: 30%;
  height: 30%;
  align-self: center;
`;

export const Heading = styled.h1`
  font-size: 4rem;
  color: #000000;
  @media (max-width: 768px) {
    font-size: 2rem;
  }
`;

export const SubHeading = styled.div`
  font-size: 1.5rem;
  color: #000000;
  @media (max-width: 768px) {
    font-size: 1rem;
  }
`;

export const AboutBox = styled.div`
  display: flex;
  flex-direction: column;
  margin-right: 2rem;
`;
