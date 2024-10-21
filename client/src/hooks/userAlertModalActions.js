import { useSetRecoilState } from 'recoil';

import { alertModalState } from '@states/alertModalState';

export const useAlertModalActions = () => {
  const setModalState = useSetRecoilState(alertModalState);

  // 모달 여는 함수
  const openModal = ({ text, cancel = false }, callback) => {
    // body 스크롤 잠금
    document.body.style.overflow = 'hidden';

    setModalState({
      isOpen: true,
      cancel,
      text,
      callback: callback || null,
    });
  };

  // 모달 닫는 함수
  const closeModal = () => {
    // body 스크롤 복원
    document.body.style.overflow = 'auto';

    setModalState((prevState) => ({
      ...prevState,
      isOpen: false,
      callback: null,
    }));
  };

  return { openModal, closeModal };
};
