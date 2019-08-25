import React, { useState } from 'react';
import { toast } from 'react-toastify';
import { Container, BackDrop } from './styles';

import Modal from '../../components/Modal';

export default function Main() {
  const [isShowing, setIsShowing] = useState(false);

  function handleOpenModal() {
    setIsShowing(true);
  }

  function handleCloseModal() {
    setIsShowing(false);
  }

  function handleContinue() {
    toast.success('Ok....');
  }

  return (
    <Container>
      {isShowing && <BackDrop onClick={handleCloseModal} />}
      <button type="button" onClick={() => handleOpenModal()}>
        Open Modal
      </button>
      <Modal show={isShowing} close={handleCloseModal} ok={handleContinue}>
        Maybe aircrafts fly very high because they don't want to be seen in
        plane sight?
      </Modal>
    </Container>
  );
}
