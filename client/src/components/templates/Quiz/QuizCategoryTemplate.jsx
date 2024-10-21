import React, { useEffect, useRef } from 'react';

import { QuizService } from '@services/quizService';
import { useSetRecoilState } from 'recoil';

import iconBack from '@assets/icons/icon_close_button.png';

import { QuizCategory } from '@components/organisms/Quiz';

import useCustomNavigate from '@hooks/useCustomNavigate';
import { useAlertModalActions } from '@hooks/userAlertModalActions';

import { navLinks } from '@routes/navLinks';
import { HOME } from '@routes/url';

import { quizListState } from '@states/quizState';

import { BackButton, HexGridContainer } from './Quiz.styled';

export default function QuizCategoryTemplate({
  quizCategoryList = [],
  isQuizListLoading = false,
  setFetchQuizList,
}) {
  const contentRef = useRef(null);
  const { goToPage } = useCustomNavigate();
  const setQuizListState = useSetRecoilState(quizListState);
  const { openModal } = useAlertModalActions();

  useEffect(() => {
    scrollToCenter(contentRef);
  }, []);

  // 퀴즈 문제 받아오는 함수
  const onHandleQuizList = async (categoryCd) => {
    if (isQuizListLoading) return;

    const response = await setFetchQuizList(categoryCd);

    //  퀴즈가 없을때 처리
    if (!response.quizList.length) {
      openModal({ text: '퀴즈가 없습니다.' });
      return;
    }

    setQuizListState(response);

    goToPage(navLinks.QUIZ_GAME(1).path);
  };

  const scrollToCenter = (ref) => {
    if (ref?.current) {
      const containerWidth = 1160;
      const containerHeight = 950;
      const element = ref.current; // 스크롤할 요소
      const viewportWidth = containerWidth - window.innerWidth; // 뷰포트 높이
      const viewportHeight = containerHeight - window.innerHeight; // 뷰포트 높이

      // 스크롤 위치 조정
      element.scrollTo({
        top: viewportHeight / 6, // 현재 스크롤 위치를 더해줍니다.
        left: viewportWidth / 4,
        behavior: 'smooth', // 부드러운 스크롤
      });
    }
  };

  return (
    <>
      <BackButton onClick={() => goToPage(navLinks[HOME].path)}>
        <img src={iconBack} alt="홈으로" />
      </BackButton>
      <HexGridContainer ref={contentRef}>
        <QuizCategory quizCategoryList={quizCategoryList} onHandleQuizList={onHandleQuizList} />
      </HexGridContainer>
    </>
  );
}
