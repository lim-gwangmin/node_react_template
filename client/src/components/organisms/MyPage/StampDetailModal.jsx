import React, { useState } from 'react';

import styled from '@emotion/styled';

import { Button } from '@components/atoms/Button';
import { ButtonsContainer } from '@components/atoms/Layout';
import { ButtomPositionModal } from '@components/atoms/Modal';
import { Text } from '@components/atoms/Text';
import { Title } from '@components/atoms/Title';

const IMAGE_URL = import.meta.env.VITE_ADMIN_URL;

export default function StampDetailModal({ isOpen = false, isClose, stampData = {} }) {
  const { imageLink, stampNm, stampDc } = stampData;

  return (
    <ButtomPositionModal isOpen={isOpen} onClose={isClose}>
      <Thumbnail image={IMAGE_URL + imageLink} />
      <Title size={18} style={{ marginBottom: '1rem', textAlign: 'center' }}>
        {stampNm}
      </Title>
      <Text size={14} color="#9C9C9C" align="center">
        {stampDc}
      </Text>
    </ButtomPositionModal>
  );
}

const Thumbnail = styled('div')`
  background-image: url(${({ image }) => (image ? image : null)});
  background-repeat: no-repeat;
  background-size: 80%;
  background-position: center;
  background-color: #f5f5f6;
  width: 10rem;
  height: 10rem;
  border-radius: 100%;
  margin: 0 auto 2rem;
`;
