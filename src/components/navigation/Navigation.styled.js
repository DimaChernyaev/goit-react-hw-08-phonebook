import styled from '@emotion/styled';
import { Link } from 'react-router-dom';

export const NavigationList = styled.nav`
  display: flex;
  align-items: center;
  justify-content: space-between;
`;

export const WrapperLink = styled.div`
  display: flex;
  gap: 20px;
`;

export const NavigationLink = styled(Link)`
  position: relative;
  font-size: 20px;
  padding: 25px 0;
  font-weight: 700;
  color: black;
  transition: color 250ms linear, text-shadow 250ms linear;
  &:hover {
    color: aquamarine;
    text-shadow: 0px -1px 3px rgba(0, 0, 0, 0.7);
  }
`;
