import React from 'react';

import styled from '@emotion/styled';

import { Text } from '@components/atoms/Text';
import { Title } from '@components/atoms/Title';

import { useAlertModalActions } from '@hooks/userAlertModalActions';

import { pxToRem } from '@utils/pxTorem';

import { StyledModal } from './Modal.styled';

export default function WindowAlert({
  isOpen = false,
  title = '',
  text = '',
  callback = null,
  cancel = null,
}) {
  const { closeModal } = useAlertModalActions();
  return (
    <StyledModal isOpen={isOpen}>
      <Container max={330}>
        <Head>
          <Title size={20} weight={600} style={{ marginBottom: '1rem' }}>
            {title}
          </Title>
          <Text size={16} align="center">
            {text}
          </Text>
        </Head>
        <ButtonWrapper>
          {cancel && (
            <ButtonArea style={{ color: '#666', fontWeight: 500 }} onClick={closeModal}>
              취소
            </ButtonArea>
          )}
          <ButtonArea style={{ color: '#ff881b' }} onClick={callback ? callback : closeModal}>
            확인
          </ButtonArea>
        </ButtonWrapper>
      </Container>
    </StyledModal>
  );
}

const Container = styled('div')`
  margin: auto;
  box-shadow: 0px 0px 15px rgba(0, 0, 0, 0.15);
  width: 90%;
  max-width: ${({ max }) => pxToRem(max)};
  text-align: center;
  background-color: #fff;
  max-height: 85%;
  overflow-y: auto;
  border-radius: 1rem;
  position: relative;
`;
const Head = styled('div')`
  padding: 2.5rem 2rem;
`;

const ButtonWrapper = styled('div')`
  display: flex;
  width: 100%;
  border-top: 1px solid #f8f8f8;
`;

const ButtonArea = styled('button')`
  display: block;
  flex: 1;
  text-align: center;
  font-size: 1.6rem;

  padding: 1.5rem 1rem;
  &:active {
    background-color: rgba(194, 192, 193, 0.25);
  }
  & + button {
    border-left: 1px solid #f8f8f8;
  }
`;
