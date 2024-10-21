import React, { useEffect, useState } from 'react';
import { NavLink } from 'react-router-dom';

import { Stamp } from '@services/stampService';

import { Title } from '@components/atoms/Title';
import { SectionContainer } from '@components/molecules/Layout';
import { StampList } from '@components/molecules/Stamp';
import { SpaceBetweenTitle } from '@components/molecules/Title';

import { navLinks } from '@routes/navLinks';
import { MY_STAMP } from '@routes/url';

import StampDetailModal from './StampDetailModal';

export const StampSection = () => {
  const [stampData, setStampData] = useState([]);
  const [stampState, setStampState] = useState('');
  const [stampModal, setStampModal] = useState({ isOpen: false, data: {} });
  useEffect(() => {
    getFetchStampData();
  }, []);

  const getFetchStampData = async () => {
    const response = await Stamp.userStamp();
    const getStampLength = response.filter((stamp) => stamp.stampFl);
    setStampData(getStampLength);
    setStampState(`${getStampLength.length}/${response.length}`);
  };

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
      <SectionContainer>
        <NavLink
          to={navLinks[MY_STAMP].path}
          style={{ display: 'block', textAlign: 'center' }}
        ></NavLink>
        <SpaceBetweenTitle to={navLinks[MY_STAMP].path}>
          <Title size={20} weight={400}>
            활동 스탬프 {stampState}
          </Title>
        </SpaceBetweenTitle>
        <StampList stampData={stampData} top={40} onClick={handelClickStampDetailModalOpen} />
      </SectionContainer>
      <StampDetailModal
        isOpen={stampModal.isOpen}
        stampData={stampModal.data}
        isClose={handelClickStampDetailModalClose}
      />
    </>
  );
};
