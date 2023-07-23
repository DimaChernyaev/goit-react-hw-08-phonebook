import styled from '@emotion/styled';
import { Form, Field } from 'formik';

export const ButtonUpdate = styled.button`
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

export const ContactFormUpdate = styled(Form)`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  padding: 12px;
  border-radius: 8px;
  margin-bottom: 16px;
`;

export const InputUpdate = styled(Field)`
  padding: 5px 12px;
  border-color: goldenrod;
  border-radius: 8px;
  width: 350px;
  font-size: 18px;
  text-align: center;
`;

export const LabelUpdate = styled.label`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  &:first-of-type {
    margin-bottom: 10px;
  }
`;

export const InputTitleUpdate = styled.span`
  font-size: 16px;
  font-weight: bold;
  color: black;
  margin-bottom: 5px;
`;

export const ButtonClose = styled.button`
  background-color: white;
  border: 2px solid goldenrod;
  border-radius: 50%;
  cursor: pointer;

  display: inline-flex;
  padding: 3px;
  align-items: center;

  position: absolute;
  top: 8px;
  right: 8px;

  transition: border-color 250ms linear;

  &:hover {
    border-color: black;
  }
`;

export const ContainerUpdateForm = styled.div`
  position: relative;
  padding: 10px 10px;
`;
