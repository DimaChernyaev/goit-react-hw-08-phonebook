import ButtonLoader from 'components/loader/ButtonLoader';
import { Contact, ContactText, ButtonDelete } from '../ContactList.styled';
import { FaUserAlt, FaRegTrashAlt, FaPen } from 'react-icons/fa';
import { useDispatch, useSelector } from 'react-redux';
import { deleteContact } from 'redux/contactsLogics/operation';
import { selectIsDeleteLoading } from 'redux/contactsLogics/selectors';
import { useState } from 'react';
import 'react-toastify/dist/ReactToastify.css';

const ContactItem = ({ id, name, number }) => {
  const [deleteId] = useState(id);
  const dispatch = useDispatch();
  const isDeleteLoading = useSelector(selectIsDeleteLoading);
  const deleteButton = isDeleteLoading && deleteId;

  const handleDeleteContact = async () => {
    await dispatch(deleteContact(id));
  };

  return (
    <>
      <Contact>
        <FaUserAlt size={18} />
        <ContactText>
          <p>Name: {name}</p>
          <p>Number: {number}</p>
        </ContactText>
        <button type="button">
          <FaPen size={16} />
        </button>
        <ButtonDelete
          type="button"
          disabled={deleteButton}
          onClick={() => handleDeleteContact()}
        >
          {deleteButton === id ? (
            <ButtonLoader />
          ) : (
            <>
              <FaRegTrashAlt size={16} /> <span>Delete</span>
            </>
          )}
        </ButtonDelete>
      </Contact>
    </>
  );
};

export default ContactItem;
