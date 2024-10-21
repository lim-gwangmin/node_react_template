import React from 'react';
import { useLocation } from 'react-router-dom';

import { UserInfoTemplate } from '@components/templates/Sign';

import NotFound from '@pages/error/NotFound';

export default function UserInfo() {
  const { state } = useLocation();

  return (
    <>
      {/* 이전 핸드폰 등록 데이터가 없거나 유효하지 않을 경우 에러 화면으로 리다이렉트 */}
      {!state?.phone || !state?.mobileCarrier || !state?.userNm ? (
        <NotFound />
      ) : (
        <UserInfoTemplate
          phone={state.phone}
          mobileCarrier={state.mobileCarrier}
          userNm={state.userNm}
        />
      )}
    </>
  );
}
