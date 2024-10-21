import React from 'react';

import hintImage from '@assets/images/hint_image.svg';

import { useQuizContext } from '@hooks/useQuizContext';

import { StyledHintButton } from './HintButton.styled';

export default function HintButton() {
  const { thisQuizData, handleHintModal } = useQuizContext();

  return (
    <>
      {thisQuizData.hintFl === '1' && thisQuizData.hint ? (
        <StyledHintButton onClick={handleHintModal}>
          <img src={hintImage} alt="힌트" />
        </StyledHintButton>
      ) : (
        <div style={{ opacity: 0 }}></div>
      )}
    </>
  );
}
