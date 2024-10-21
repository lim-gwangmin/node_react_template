import React from 'react';
import { useNavigationType } from 'react-router-dom';

import { QuizGameTemplate } from '@components/templates/Quiz';

import NotFound from '@pages/error/NotFound';

export default function QuizGame() {
  const navigationType = useNavigationType();
  const isPageMoveType = navigationType === 'POP';

  return <>{isPageMoveType ? <NotFound /> : <QuizGameTemplate />}</>;
}
