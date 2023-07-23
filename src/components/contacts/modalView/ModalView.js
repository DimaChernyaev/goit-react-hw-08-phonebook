import Modal from 'react-modal';
import UpdateForm from '../updateForm/updateForm';

const customStyles = {
  content: {
    top: '50%',
    left: '50%',
    right: 'auto',
    bottom: 'auto',
    marginRight: '-50%',
    transform: 'translate(-50%, -50%)',
  },
};

Modal.setAppElement('#root');

export const ModalView = ({ onClose, isOpen, id }) => {
  return (
    <div>
      <Modal
        closeTimeoutMS={300}
        style={customStyles}
        isOpen={isOpen}
        onRequestClose={onClose}
      >
        <UpdateForm onClose={onClose} id={id}/>
      </Modal>
    </div>
  );
};
