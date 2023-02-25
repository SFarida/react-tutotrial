import { useState, useRef } from 'react';
import { useOnClickOutside } from '../useOnClickOutside';
import UncontrolledForm from './UncontrolledForm';
import Form from './Form';

const Modal = () => {
  const [openModal, setOpenModal] = useState(false);

  const openModalHandler = () => {
    setOpenModal(true);
  };

  const closeModalHandler = () => {
    setOpenModal(false);
  };

  const ref = useRef();

  useOnClickOutside(ref, openModal, () => setOpenModal(false));
  return (
    <div className="modal">
      <button type="button" onClick={openModalHandler} onKeyDown={openModalHandler}>Modal</button>
      {
                openModal && (
                <div ref={ref} className="modalContent">
                  <span role="button" tabIndex={0} onClick={closeModalHandler} onKeyDown={closeModalHandler}>X</span>
                  <div>
                    <UncontrolledForm />
                    <br />
                    <Form />
                  </div>
                </div>
                )
            }
    </div>
  );
};

export default Modal;
