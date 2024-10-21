import React, { useState } from 'react';

import { Main } from '@components/atoms/Layout';
import { SectionContainer } from '@components/molecules/Layout';
import { StampList } from '@components/molecules/Stamp';
import { Header } from '@components/organisms/Header';
import { StampDetailModal } from '@components/organisms/MyPage';

export default function StampTemplate({ stampData = [] }) {
  const [stampModal, setStampModal] = useState({ isOpen: false, data: {} });

  // 스탬프 상세 모달 여는 함수
  const handelClickStampDetailModalOpen = (data) => {
    setStampModal({ isOpen: true, data });
  };
  // 스탬프 상세 모달 닫는 함수
  const handelClickStampDetailModalClose = () => {
    setStampModal((prevStampData) => ({ ...prevStampData, isOpen: false }));
  };

  return (
    <>
      <Header backButton={true} title="나의 활동 스탬프" />
      <Main>
        <SectionContainer>
          <StampList stampData={stampData} onClick={handelClickStampDetailModalOpen} />
        </SectionContainer>
        <StampDetailModal
          isOpen={stampModal.isOpen}
          stampData={stampModal.data}
          isClose={handelClickStampDetailModalClose}
        />
      </Main>
    </>
  );
}
