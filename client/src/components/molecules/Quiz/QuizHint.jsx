import React from 'react';

import styled from '@emotion/styled';

import { Text } from '@components/atoms/Text';

const OXHintBoxWrapper = styled('div')`
  display: flex;
  gap: 0.6rem;
  flex-flow: wrap;
  align-items: center;
  justify-content: center;
`;
const OXHintBox = styled('div')`
  border: 1px solid #ffcc9d;
  display: flex;
  justify-content: center;
  align-items: center;
  border-radius: 0.65rem;
  font-size: 2.65rem;
  color: #000;
  font-weight: 600;
  text-align: center;
  width: 4.5rem;
  height: 4.5rem;
  box-shadow: 0 0 5px 0px rgba(255, 136, 27, 0.3);
`;
// ox 유형 퀴즈 힌트
export const OXHint = ({ hint }) => {
  const hintArray = hint.split('').filter((char) => char !== ' ');
  return (
    <OXHintBoxWrapper>
      {hintArray.map((hintText, index) => (
        <OXHintBox key={index}>{hintText}</OXHintBox>
      ))}
    </OXHintBoxWrapper>
  );
};

// 객관식 유형 퀴즈 힌트
export const MultipleHint = ({ hint }) => (
  <Text size={14} align="center" color="#707070" style={{ lineHeight: 1.4 }}>
    {hint}
  </Text>
);

// 주관식 유형 퀴즈 힌트
export const ShortHint = ({ hint }) => (
  <Text size={14} align="center" color="#707070" style={{ lineHeight: 1.4 }}>
    {hint}
  </Text>
);
