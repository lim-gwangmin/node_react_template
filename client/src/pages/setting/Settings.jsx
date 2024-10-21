import React, { useEffect, useState } from 'react';

import { AgreementService } from '@services/agreementService';
import { AuthService } from '@services/authService';

import { SubmitLoader } from '@components/atoms/Loader';
import { SettingsTemplate } from '@components/templates/Setting';

import { useLoading } from '@hooks/useLoading';

export default function Settings() {
  const [isAgreementLoading, setFetchAgreement] = useLoading(AgreementService.agreement);
  const [isUserDataLoading, setFetchUserData] = useLoading(AuthService.userDatas);
  const [agreementList, setAgreementList] = useState([]);
  const [alarm, setAlarm] = useState(false);

  useEffect(() => {
    fetchAgreementData();
  }, []);

  const fetchAgreementData = async () => {
    if (isAgreementLoading || isUserDataLoading) return;
    try {
      const agreementResponse = await setFetchAgreement();
      const userDataResponse = await setFetchUserData();

      setAgreementList(agreementResponse);
      const { appAlarm } = userDataResponse.result.data;
      setAlarm(appAlarm);
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <>
      <SettingsTemplate agreementList={agreementList} alarm={alarm} />
      {(isAgreementLoading || isUserDataLoading) && <SubmitLoader />}
    </>
  );
}
