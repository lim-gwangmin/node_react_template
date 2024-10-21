import React, { useCallback, useEffect, useRef, useState } from 'react';
import { RotatingLines } from 'react-loader-spinner';
import { NavLink } from 'react-router-dom';
import Slider from 'react-slick';

import styled from '@emotion/styled';
import { PopupService } from '@services/popupService';

import { ButtonsContainer } from '@components/atoms/Layout';
import { ButtomPositionModal } from '@components/atoms/Modal';

import { useLoading } from '@hooks/useLoading';

const settings = {
  dots: false,
  infinite: true,
  speed: 500,
  autoplay: true,
  fade: false,
  arrows: false,
  slidesToShow: 1,
  slidesToScroll: 1,
};

const IMAGE_BASE_URL = import.meta.env.VITE_PRODUCT_IMAGE_URL;

const Popup = () => {
  const sliderRef = useRef(null);
  const [popupListLoading, fetchPopupList] = useLoading(PopupService.popupList); // 유저 데이터 조회 API
  const [popupList, setPopupList] = useState([]);
  const [isVisible, setIsVisible] = useState(false);
  const [currentSlide, setCurrentSlide] = useState(1);

  // 페이지가 로드될 때 로컬 스토리지 확인
  useEffect(() => {
    getPopupFetchData();
  }, []);

  //
  useEffect(() => {
    LockScrollToggle();
  }, [isVisible]);

  // 팝업 데이터 조회
  const getPopupFetchData = useCallback(async () => {
    if (popupListLoading) return;

    try {
      // 팝업 데이터 가져오기
      const responsePopupData = await fetchPopupList();

      const hideToday = localStorage.getItem('hidePopupToday');
      const currentDate = new Date().toLocaleDateString();

      if (hideToday !== currentDate && responsePopupData.length) {
        setIsVisible(true);
      }

      setPopupList(responsePopupData);
    } catch (error) {
      console.error(error);
    }
  }, []);

  // "오늘 하루 보지 않기" 버튼 클릭 핸들러
  const handleHideToday = () => {
    const currentDate = new Date().toLocaleDateString();
    localStorage.setItem('hidePopupToday', currentDate);
    setIsVisible(false);
  };

  // "닫기" 버튼 클릭 핸들러
  const handleClose = () => {
    setIsVisible(false);
  };

  // 스크롤 잠금 및 복원
  const LockScrollToggle = () => {
    if (isVisible) {
      document.body.style.overflow = 'hidden';
      return;
    }
    document.body.style.overflow = 'auto';
  };

  if (!isVisible) return null; // 팝업이 보이지 않도록 설정

  return (
    <ButtomPositionModal isOpen={true} style={{ paddingBottom: '1rem' }}>
      {popupListLoading ? (
        <div style={{ textAlign: 'center', padding: '5rem 0' }}>
          <RotatingLines
            visible={true}
            height="60"
            width="60"
            color="#FFD43B"
            strokeColor="#FF881B"
            strokeWidth="5"
            animationDuration="0.75"
          />
        </div>
      ) : (
        <>
          <Slider
            ref={sliderRef}
            {...settings}
            afterChange={(index) => setCurrentSlide(index + 1)} // 슬라이드 인덱스 업데이트
          >
            {popupList.map((slide, index) => (
              <NavLink
                to={slide.linkUrl}
                target="_self"
                key={index}
                onClick={() => (document.body.style.overflow = 'auto')}
              >
                <img
                  src={IMAGE_BASE_URL + slide.imageLink}
                  alt={slide.popupNm}
                  style={{ margin: '0 auto' }}
                />
              </NavLink>
            ))}
          </Slider>

          <div style={{ marginTop: '1rem', textAlign: 'center' }}>
            <span>
              {currentSlide} / {popupList.length}
            </span>
          </div>
          <ButtonsContainer>
            <Button style={{ flex: 1 }} onClick={handleHideToday}>
              오늘 하루 보지 않기
            </Button>
            <Button style={{ flex: 1 }} onClick={handleClose}>
              닫기
            </Button>
          </ButtonsContainer>
        </>
      )}
    </ButtomPositionModal>
  );
};

export default Popup;

const Button = styled('button')`
  flex: 1;
  padding: 1rem;
  &:active {
    opacity: 0.7;
    transform: translate(1px, 1px);
    background-color: rgba(194, 192, 193, 0.25);
  }
`;
