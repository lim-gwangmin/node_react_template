import React from 'react';

import { Modal } from '@components/atoms/Modal';
import { Text, TextPoint } from '@components/atoms/Text';
import { Title } from '@components/atoms/Title';
import { MultipleHint, OXHint, ShortHint } from '@components/molecules/Quiz';

import { useQuizContext } from '@hooks/useQuizContext';

const RenderHintComponents = (props) => {
  const components = {
    ox: OXHint,
    multiple: MultipleHint,
    short: ShortHint,
  };

  const Component = components[props?.quizTy];

  if (!Component) {
    return null; // 또는 적절한 기본값 또는 에러 처리를 할 수 있습니다.
  }

  return <Component hint={props.hint ? props.hint : ''} />;
};

export default function HintModal() {
  const { thisQuizData, isHintModal, handleHintModal } = useQuizContext();

  const HintComponent = RenderHintComponents(thisQuizData);

  React.useEffect(() => {
    LockScrollToggle();
  }, [isHintModal]);

  // 스크롤 잠금 및 복원
  const LockScrollToggle = () => {
    if (isHintModal) {
      document.body.style.overflow = 'hidden';
      return;
    }
    document.body.style.overflow = 'auto';
  };

  return (
    <Modal isOpen={isHintModal} isClose={handleHintModal}>
      <Title
        size={20}
        style={{ textAlign: 'center', lineHeight: 1.4, marginTop: '-2rem', marginBottom: '2rem' }}
      >
        문제가 어려우시죠? <br />
        벌꿀이가 <TextPoint>힌트</TextPoint> 드릴게요!
      </Title>
      {HintComponent}
    </Modal>
  );
}
