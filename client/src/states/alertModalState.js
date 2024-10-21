import { atom } from 'recoil';

export const alertModalState = atom({
  key: 'alertModalState',
  default: {
    isOpen: false,
    cancel: false,
    title: '',
    text: '',
    callback: null,
  },
});
