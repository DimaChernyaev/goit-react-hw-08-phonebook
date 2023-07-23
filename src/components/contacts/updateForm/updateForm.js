import { Formik } from 'formik';
import { updateContact } from 'redux/contactsLogics/operation';
import { useDispatch, useSelector } from 'react-redux';
import { selectContactsItems } from 'redux/contactsLogics/selectors';
import {
  ButtonUpdate,
  InputUpdate,
  InputTitleUpdate,
  ContactFormUpdate,
  LabelUpdate,
  ButtonClose,
  ContainerUpdateForm,
} from './updateForm.styled';
import { AiOutlineClose } from 'react-icons/ai';

const initialValues = {
  name: '',
  number: '',
};

const UpdateForm = ({ onClose, id }) => {
  const dispatch = useDispatch();
  const items = useSelector(selectContactsItems);

  const submitUpdateContact = (values, { resetForm }) => {
    const oldContact = items.find(item => item.id === id);

    const newContact = {
      id,
      name: values.name === '' ? oldContact.name : values.name,
      number: values.number === '' ? oldContact.number : values.number,
    };

    dispatch(updateContact(newContact));
    resetForm();
    onClose();
  };

  return (
    <ContainerUpdateForm>
      <ButtonClose type="button" onClick={onClose}>
        <AiOutlineClose />
      </ButtonClose>
      <Formik initialValues={initialValues} onSubmit={submitUpdateContact}>
        <ContactFormUpdate>
          <LabelUpdate>
            <InputTitleUpdate>Name</InputTitleUpdate>
            <InputUpdate type="text" name="name" />
          </LabelUpdate>
          <LabelUpdate>
            <InputTitleUpdate>Number</InputTitleUpdate>
            <InputUpdate type="tel" name="number" />
          </LabelUpdate>
          <ButtonUpdate type="submit">Update</ButtonUpdate>
        </ContactFormUpdate>
      </Formik>
    </ContainerUpdateForm>
  );
};

export default UpdateForm;
