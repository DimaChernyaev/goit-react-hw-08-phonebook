import styled from '@emotion/styled';
import image from '../../images/phonebook.jpg';

export const HomeBackground = styled.div`
  background-image: linear-gradient(
      to right,
      rgba(47, 48, 58, 0.7),
      rgba(47, 48, 58, 0.7)
    ),
    url(${image});
  height: 100vh;
  max-width: 1440px;
  background-repeat: no-repeat;
  background-size: cover;
  background-position: center;
  padding-top: 140px;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

export const Title = styled.h1`
  font-size: 72px;
  line-height: 1.4;
  color: white;
`;

export const Text = styled.p`
  font-size: 28px;
  margin-top: 20px;
  color: white;
`;
