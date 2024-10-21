import React, { useEffect, useState } from 'react';
import { useLocation } from 'react-router-dom';

import { QuizService } from '@services/QuizService';

import { QuizResultTemplate } from '@components/templates/Quiz';

import { useLoading } from '@hooks/useLoading';

import NotFound from '@pages/error/NotFound';

export default function QuizResult({}) {
  const { state } = useLocation(); // route state 값에 저장한 정답 리스트
  const [resultData, setResultData] = useState([]); // 퀴즈 결과
  const answerList = state; // 제출한 정답 리스트
  const [isLoading, setQuizSolve] = useLoading(QuizService.quizSolve);

  if (!answerList?.length) return <NotFound />; // 예외상황일 경우 예외 페이지로 이동

  useEffect(() => {
    onHandleResultSolveList();
  }, [answerList]);

  // 결과 데이터
  const onHandleResultSolveList = async () => {
    const response = await setQuizSolve(answerList);

    setResultData(response.data);
  };

  return <QuizResultTemplate resultData={resultData} isLoading={isLoading} />;
}
