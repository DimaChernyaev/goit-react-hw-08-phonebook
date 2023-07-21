import styled from '@emotion/styled';

export const WrapperUserMenu = styled.div`
  display: flex;
  gap: 20px;
  align-items: center;
`;

export const ButtonLogout = styled.button`
  display: inline-flex;
  justify-content: space-between;
  align-items: center;
  padding: 10px;
  font-weight: 400;
  font-size: 16px;
  color: black;
  gap: 10px;

  background-color: aquamarine;
  border: 2px solid aquamarine;
  border-radius: 8px;
  cursor: pointer;

  transition: border-color 250ms linear, background-color 250ms linear;

  &:hover {
    background-color: white;
    border-color: black;
  }
`;

export const UserName = styled.p`
  font-size: 18px;
  font-weight: bold;
  line-height: 1.2;
  color: white;
`;

export const UserWrapper = styled.div`
padding: 10px 20px;
gap: 10px;
border-radius: 40px;
background: black;
display: flex;
align-items: center;
`
