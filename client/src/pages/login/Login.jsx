import React, { useEffect } from 'react';

import { loginSchema } from '@schema';
import { AuthService } from '@services/authService';

import { LoginTemPlate } from '@components/templates/Login';

import useCustomNavigate from '@hooks/useCustomNavigate';
import { useAlertModalActions } from '@hooks/userAlertModalActions';

import { getToken } from '@utils/tokenManager';

export default function Login() {
  const { jwtToken, refreshToken } = getToken();
  const { goToHome } = useCustomNavigate();
  const { initialValues, schema } = loginSchema;
  const { openModal } = useAlertModalActions();

  // 토큰이 스토리지에 있을 경우 홈으로 이동
  useEffect(() => {
    if (jwtToken || refreshToken) {
      goToHome();
    }
  }, [jwtToken, refreshToken]);

  // 로그인 후 처리
  const onLoginSuccess = async (res) => {
    const { resultCode, resultMessage } = res;

    // 오류일 경우
    if (resultCode != 200) {
      openModal({ text: resultMessage });
      return;
    }

    // 로그인 성공 시 홈으로 이동
    goToHome();
  };

  return (
    <LoginTemPlate
      initialValues={initialValues}
      schema={schema}
      request={AuthService.login}
      setData={onLoginSuccess}
    />
  );
}
