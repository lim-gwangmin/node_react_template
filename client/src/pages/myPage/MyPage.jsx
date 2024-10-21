import React, { useCallback, useEffect, useState } from 'react';

import { AuthService } from '@services/authService';

import { SubmitLoader } from '@components/atoms/Loader';
import { MyPageTemplate } from '@components/templates/MyPage';

import { useLoading } from '@hooks/useLoading';

export default function MyPage() {
  const [userInfoLoading, fetchUserInfo] = useLoading(AuthService.userInfo); // 유저 데이터 조회 API
  const [userDataLoading, fetchUserData] = useLoading(AuthService.userDatas); // 유저 데이터 조회 API
  const [userInfo, setUserInfo] = useState({});
  const [userData, setUserData] = useState({});

  // 유저데이터 조회를 위한 훅
  useEffect(() => {
    getUserFetchData();
  }, []);

  // 유저 데이터 조회
  const getUserFetchData = useCallback(async () => {
    if (userDataLoading || userInfoLoading) return;

    try {
      // 유저 데이터 가져오기
      const responseUserData = await fetchUserData();
      const responseUserInfo = await fetchUserInfo();

      const userDataResult = responseUserData.result;
      const userInfoResult = responseUserInfo.result;

      setUserData(userDataResult);
      setUserInfo(userInfoResult);
    } catch (error) {
      console.error(error);
    }
  }, [userData]);

  return (
    <>
      <MyPageTemplate
        userData={userData.data}
        userInfo={userInfo.data}
        limitPointDay={userData.limitPointDay}
      />
      {userDataLoading && <SubmitLoader />}
    </>
  );
}
