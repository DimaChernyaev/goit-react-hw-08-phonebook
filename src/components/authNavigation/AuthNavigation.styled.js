import styled from '@emotion/styled';
import { Link } from 'react-router-dom';

export const WrapperLogLink = styled.div`
  display: flex;
`;

export const ButtonRegistration = styled(Link)`
  display: inline-flex;
  justify-content: space-between;
  align-items: center;
  padding: 10px;
  font-weight: bold;
  font-size: 14px;
  color: black;

  background-color: aquamarine;
  border: 2px solid aquamarine;
  border-radius: 8px 0 0 8px;
  cursor: pointer;

  transition: border-color 250ms linear, background-color 250ms linear;

  &:hover {
    background-color: white;
    border-color: black;
  }
`;
export const ButtonLogin = styled(Link)`
  display: inline-flex;
  justify-content: space-between;
  align-items: center;
  padding: 10px;
  font-weight: bold;
  font-size: 14px;
  color: black;

  background-color: aquamarine;
  border: 2px solid aquamarine;
  border-radius: 0 8px 8px 0;
  cursor: pointer;

  transition: border-color 250ms linear, background-color 250ms linear;

  &:hover {
    background-color: white;
    border-color: black;
  }
`;

export const Line = styled.span`
  display: inline-flex;
  height: 40px;
  width: 1px;
  background: black;
`;

