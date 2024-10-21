import React from 'react';
import { NavLink } from 'react-router-dom';

import styled from '@emotion/styled';

import arrowRight from '@assets/icons/icon_arrow_right_regular.svg';
import userThumnail from '@assets/images/bee_image_x2.svg';

import { UserCard } from '@components/molecules/Card';
import { SectionContainer } from '@components/molecules/Layout';

import { navLinks } from '@routes/navLinks';
import { EDIT_INFO } from '@routes/url';

export const ProfileSection = ({ userInfo }) => (
  <SectionContainer>
    <UserCardContainer>
      <UserCard
        userAgeCd={userInfo.userAgeCd}
        userName={userInfo.userNm}
        schoolName={userInfo.schoolNm}
        grade={userInfo.grade}
        image={userInfo.userThumnail || userThumnail}
      />
      <SettingNavigate to={navLinks[EDIT_INFO].path}>
        회원정보
        <Icon src={arrowRight} alt="Arrow Right" />
      </SettingNavigate>
    </UserCardContainer>
  </SectionContainer>
);

const UserCardContainer = styled('div')`
  padding 2rem 2.3rem;
  border-bottom-left-radius: 1rem;
  border-bottom-right-radius: 1rem;
  background-color:#fff;
  display: flex;
  justify-content:space-between;
  align-items: center;
  gap: 2rem;
`;
const Icon = styled('img')`
  margin-top: -2px;
`;

const SettingNavigate = styled(NavLink)`
  display: flex;
  font-size: 1.6rem;
  align-items: center;
  padding: 1rem 0 1rem 1rem;
  line-height: 1;
  gap: 1rem;
  color: #666;
  text-decoration: none;
`;
