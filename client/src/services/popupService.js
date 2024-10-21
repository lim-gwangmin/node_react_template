import { isTokenExpired } from '@utils/tokenManager';

import { get_popupList } from '../api';

export const PopupService = {
  // 팝업 조회
  popupList: async () => {
    try {
      const response = await get_popupList();

      // 에러 처리
      const expired = isTokenExpired(response);
      const { result } = expired.data;
      return result.data;
    } catch (error) {
      const { response } = error;
      console.error('quizCategory failed:', error);
      isTokenExpired(response.data);
      throw error;
    }
  },
};
