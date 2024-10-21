import { axiosInstance } from './axiosInstance';

// 주간 랭킹
export const get_popupList = () => {
  return axiosInstance.get('/api/setting/popup/use');
};
