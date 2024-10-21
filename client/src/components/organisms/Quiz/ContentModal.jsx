import React from 'react';

import { Modal } from '@components/atoms/Modal';

import { useQuizContext } from '@hooks/useQuizContext';

export default function ContentModal() {
  const { isCaptionModal, handleCaptionModal, thisQuizData } = useQuizContext();

  React.useEffect(() => {
    LockScrollToggle();
  }, [isCaptionModal]);

  // 스크롤 잠금 및 복원
  const LockScrollToggle = () => {
    if (isCaptionModal) {
      document.body.style.overflow = 'hidden';
      return;
    }
    document.body.style.overflow = 'auto';
  };

  return (
    <Modal isOpen={isCaptionModal} isClose={handleCaptionModal}>
      <p
        style={{
          whiteSpace: 'pre-wrap',
          color: '#2E3233',
          lineHeight: 1.4,
          fontSize: '1.6rem',
          fontWeight: 500,
        }}
      >
        {thisQuizData.newsContent}
      </p>
    </Modal>
  );
}
