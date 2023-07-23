import ButtonLoader from 'components/loader/ButtonLoader';
import { Contact, ContactText, ButtonItem, WrapperButton } from '../ContactList.styled';
import { FaUserAlt, FaRegTrashAlt, FaPen } from 'react-icons/fa';
import { useDispatch, useSelector } from 'react-redux';
import { deleteContact } from 'redux/contactsLogics/operation';
import { selectIsDeleteLoading } from 'redux/contactsLogics/selectors';
import { useState } from 'react';
import toast, { Toaster } from 'react-hot-toast';
import { ModalView } from 'components/contacts/modalView/ModalView';

const ContactItem = ({ id, name, number }) => {
  const [deleteId, setDeleteId] = useState(null);
  const [isModal, setIsModal] = useState(false);
  const dispatch = useDispatch();
  const isLoading = useSelector(selectIsDeleteLoading);

  const handleDeleteContact = async (id, name) => {
    setDeleteId(id);

    await dispatch(deleteContact(id));
    toast.success(`The contact named ${name} has been deleted`);
  };

  const modalOpen = () => {
    setIsModal(true);
  };

  const closeModal = () => {
    setIsModal(false);
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
        <WrapperButton>
          <ButtonItem type="button" onClick={modalOpen}>
            <FaPen />
          </ButtonItem>
          <ButtonItem
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
          </ButtonItem>
        </WrapperButton>
        {isModal && <ModalView isOpen={isModal} onClose={closeModal} id={id} />}
      </Contact>
    </>
  );
};

export default ContactItem;
