import React from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';

const StyledModalWrapper = styled.div`
  width: 100vw;
  height: 100vh;
  background: ${props => props.theme.ModalColor};
  position: fixed;
  display: flex;
  align-items: center;
  justify-content: center;
`;

const StyledModal = styled.div`
  width: 40rem;
  min-height: 10rem;
  background: ${props => props.theme.ModalColor};
  color: ${props => props.theme.ModalFontColor};
  border-radius: 8px;
  padding: 1.5rem;
`;

const ModalHeader = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  h2 {
    margin: 0;
  }
`;

const ModalContent = styled.div`
  margin: 2rem 0;
  line-height: 1.5rem;
`;

const ModalActionWrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: flex-end;
`;

const Modal = ({ title, children, actions }) => {
  return (
    <StyledModalWrapper>
      <StyledModal>
        <ModalHeader>
          <h2>{title}</h2>
        </ModalHeader>
        <ModalContent>{children}</ModalContent>
        <ModalActionWrapper>{actions}</ModalActionWrapper>
      </StyledModal>
    </StyledModalWrapper>
  );
};

Modal.defaultProps = {
  title: 'Lorem ipsum',
  children: <span></span>
}

Modal.propTypes = {
  title: PropTypes.string,
  children: PropTypes.node,
  actions: PropTypes.node.isRequired
};

export default Modal;