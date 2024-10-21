import React, { useEffect, useState } from 'react';

import { QuizService } from '@services/quizService';

import { SubmitLoader } from '@components/atoms/Loader';
import { QuizCategoryTemplate } from '@components/templates/Quiz';

import { useLoading } from '@hooks/useLoading';

export default function QuizCategory() {
  const { quizCategory, quizList } = QuizService;
  const [quizCategoryList, setQuizCategoryList] = useState([]);
  const [isQuizListLoading, setFetchQuizList] = useLoading(quizList);

  useEffect(() => {
    onHandleQuizCategory();
  }, []);

  // 퀴즈 카테고리 받아오는 함수
  const onHandleQuizCategory = async () => {
    const response = await quizCategory();
    setQuizCategoryList(response);
  };

  return (
    <>
      <QuizCategoryTemplate
        quizCategoryList={quizCategoryList}
        isQuizListLoading={isQuizListLoading}
        setFetchQuizList={setFetchQuizList}
      />

      {isQuizListLoading && <SubmitLoader />}
    </>
  );
}
