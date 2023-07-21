import styled from '@emotion/styled';
import { Form, Field } from 'formik';

export const ButtonAuth = styled.button`
  margin-top: 16px;
  display: inline-flex;
  align-items: center;
  gap: 5px;
  padding: 8px 20px;
  font-weight: 400;
  font-size: 16px;
  font-weight: bold;
  text-align: center;

  background-color: white;
  border: 2px solid goldenrod;
  border-radius: 8px;
  cursor: pointer;

  transition: border-color 250ms linear;

  &:hover {
    border-color: black;
  }
`;

export const FormAuth = styled(Form)`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 10px;
`;

export const InputAuth = styled(Field)`
  padding: 5px 12px;
  border-color: goldenrod;
  border-radius: 8px;
  width: 350px;
  font-size: 18px;
  text-align: center;
`;

export const LabelAuth = styled.label`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

export const InputTitleAuth = styled.span`
  font-size: 16px;
  font-weight: bold;
  color: black;
  margin-bottom: 5px;
`;

export const ValidationErrorAuth = styled.div`
  max-width: 300px;
  text-align: center;
  color: red;
  font-size: 12px;
`;

export const FormAuthWrapper = styled.div`
  padding-top: 40px;
  text-align: center;
`;

export const FormAuthTitle = styled.h2`
  font-size: 28px;
  margin-bottom: 30px;
`;

export const TextFormAuth = styled.p`
  font-size: 16px;
  margin-top: 20px;
`;
