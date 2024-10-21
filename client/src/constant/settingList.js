import { navLinks } from '@routes/navLinks';
import { EDIT_INFO, USER_DELETION } from '@routes/url';

// 환경설정 도움센터 리스트
export const SETTING_HELP_LIST = [
  { link: navLinks[EDIT_INFO].path, label: '정보수정' },
  { link: navLinks[USER_DELETION].path, label: '회원탈퇴' },
];
