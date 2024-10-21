import React from 'react';

import { StampFigure, StampItem, StampItemWrapper } from './Stamp.styled';

const IMAGE_URL = import.meta.env.VITE_ADMIN_URL;

export default function StampList({ stampData = [], top = 0, onClick }) {
  return (
    <StampItemWrapper top={top}>
      {stampData &&
        stampData.map((stamp, index) => (
          <StampItem key={index} onClick={() => (stamp.stampFl ? onClick(stamp) : null)}>
            <StampFigure image={IMAGE_URL + stamp.imageLink} />
            <figcaption style={{ marginTop: '1rem' }}>{stamp.stampNm}</figcaption>
          </StampItem>
        ))}
    </StampItemWrapper>
  );
}
