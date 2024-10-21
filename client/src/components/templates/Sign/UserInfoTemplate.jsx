import React, { useState } from 'react';

import { userInfoSchema } from '@schema';
import { AuthService } from '@services/authService';

import checkIcon from '@assets/icons/icon_result.svg';

import { Button } from '@components/atoms/Button';
import { ButtonsContainer, Main } from '@components/atoms/Layout';
import { Alert } from '@components/atoms/Modal';
import { Comment, Text } from '@components/atoms/Text';
import { Center } from '@components/molecules/Layout';
import { SignStepTitle } from '@components/molecules/Title';
import { Header } from '@components/organisms/Header';
import { InsertUserInfo } from '@components/organisms/Sign';

import useCustomNavigate from '@hooks/useCustomNavigate';
import { useAlertModalActions } from '@hooks/userAlertModalActions';

import { AlertModalResultTitleStyle } from './Sign.styled';

export default function UserInfoTemplate({ phone = '', mobileCarrier = '', userNm = '' }) {
  const [result, setResult] = useState(false);
  const { goToLogin } = useCustomNavigate();
  const { initialValues, schema } = userInfoSchema;
  const { signUp } = AuthService;
  const { openModal } = useAlertModalActions();

  // form submit
  const onHandleSubmit = (res) => {
    const { resultCode, resultMessage } = res;

    if (resultCode != 200) {
      openModal({ text: resultMessage });
      return;
    }

    setResult(true);
  };

  return (
    <>
      <Header backButton={true} title="회원가입" subMenu={false} />
      <Main mode="center">
        <Center maxWidth={500}>
          <div>
            <SignStepTitle step={3}>회원정보 입력</SignStepTitle>
            <Comment top={10}>
              회원가입을 위해 <br /> 회원정보를 입력해주세요.
            </Comment>
            <InsertUserInfo
              initialValues={{
                ...initialValues,
                userPhoneNo: phone,
                mobileCarrier,
                userNm,
              }}
              schema={schema}
              request={signUp}
              setFetch={onHandleSubmit}
            />
          </div>
        </Center>
        <Alert isOpen={result} max={300}>
          <img src={checkIcon} alt="회원가입 완료" />
          <Text size={24} weight={500} align="center" style={AlertModalResultTitleStyle}>
            회원가입 완료
          </Text>
          <Text weight={400} color="#9B9798" align="center">
            지금 바로 미디어리터러시 <br />
            퀴즈를 풀어보세요!
          </Text>
          <ButtonsContainer>
            <Button onClick={goToLogin}>로그인</Button>
          </ButtonsContainer>
        </Alert>
      </Main>
    </>
  );
}
