import ButtonLoader from 'components/loader/ButtonLoader';
import { Contact, ContactText, ButtonDelete } from '../ContactList.styled';
import { FaUserAlt, FaRegTrashAlt } from 'react-icons/fa';
import { useDispatch, useSelector } from 'react-redux';
import { deleteContact } from 'redux/contactsLogics/operation';
import { selectIsDeleteLoading } from 'redux/contactsLogics/selectors';
import { useState } from 'react';
import toast, { Toaster } from 'react-hot-toast';

const ContactItem = ({ id, name, number }) => {
  const [deleteId, setDeleteId] = useState(null);
  const dispatch = useDispatch();
  const isLoading = useSelector(selectIsDeleteLoading);

  const handleDeleteContact = async (id, name) => {
    setDeleteId(id);

    await dispatch(deleteContact(id));
    toast.success(`The contact named ${name} has been deleted`);
  };

  return (
    <>
      <Toaster position="top-center" />
      <Contact>
        <FaUserAlt size={18} />
        <ContactText>
          <p>Name: {name}</p>
          <p>Number: {number}</p>
        </ContactText>
        <ButtonDelete
          type="button"
          onClick={() => handleDeleteContact(id, name)}
        >
          {isLoading && deleteId === id ? (
            <ButtonLoader />
          ) : (
            <>
              <FaRegTrashAlt size={16} />
              Delete
            </>
          )}
        </ButtonDelete>
      </Contact>
    </>
  );
};

export default ContactItem;
