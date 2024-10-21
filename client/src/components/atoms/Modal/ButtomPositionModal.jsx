import React from 'react';

import { StyledBottomModalContainer, StyledModal, StyledModalBody } from './Modal.styled';

export default function ButtomPositionModal({
  isOpen = false,
  onClose,
  title = '',
  mode = 'center',
  max = 600,
  children,
  ...props
}) {
  // 백드롭 클릭 핸들러
  const handleBackdropClick = (e) => {
    if (e.target === e.currentTarget && onClose) {
      onClose();
    }
  };

  return (
    <StyledModal
      isOpen={isOpen}
      onClick={handleBackdropClick}
      style={{ flexFlow: 'column', justifyContent: 'end' }}
    >
      <StyledBottomModalContainer isOpen={isOpen} max={max} mode={mode} {...props}>
        <StyledModalBody>{children}</StyledModalBody>
      </StyledBottomModalContainer>
    </StyledModal>
  );
}
