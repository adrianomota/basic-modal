import React from 'react';
import PropTypes from 'prop-types';
import { ModalContainer, Header, Body, Footer } from './styles';

export default function Modal({ show, close, ok, children }) {
  return (
    <ModalContainer show={show}>
      <Header>
        <h3>Modal Header</h3>
        <span onClick={close}>×</span>
      </Header>

      <Body>
        <p>{children}</p>
      </Body>

      <Footer>
        <button type="button" onClick={close}>
          Close
        </button>
        <button type="button" onClick={ok}>
          Ok
        </button>
      </Footer>
    </ModalContainer>
  );
}

Modal.propTypes = {
  show: PropTypes.bool.isRequired,
  close: PropTypes.func.isRequired,
  ok: PropTypes.func.isRequired,
  children: PropTypes.node.isRequired,
};
