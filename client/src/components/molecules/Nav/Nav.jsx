import React, { useRef } from 'react';

import { AuthService } from '@services/authService';

import imageLogout from '@assets/icons/icon_logout.svg';

import { Menus } from '@components/atoms/Nav';

import { useOnClickOutside } from '@hooks/useOutsideClick';
import { useAlertModalActions } from '@hooks/userAlertModalActions';

import { StyledLogoutBtn, StyledNav, StyledNavWrapper } from './Nav.styled';
import NavHeader from './NavHeader';

export default function Nav({ visible, setVisible, subMenu }) {
  const navRef = useRef(null);
  const { openModal } = useAlertModalActions();

  useOnClickOutside(navRef, () => setVisible(false));

  const handleLogout = () => {
    openModal({ text: '로그아웃 하시겠습니까?', cancel: true }, AuthService.logOut);
  };

  if (!subMenu) return null;

  return (
    <StyledNav ref={navRef} visible={visible} onClick={() => setVisible(false)}>
      <StyledNavWrapper onClick={(e) => e.stopPropagation()}>
        <NavHeader setVisible={setVisible} />
        <Menus />
        <StyledLogoutBtn onClick={handleLogout}>
          <img src={imageLogout} alt="" />
        </StyledLogoutBtn>
      </StyledNavWrapper>
    </StyledNav>
  );
}
