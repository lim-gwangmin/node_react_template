import styled from '@emotion/styled';

export const StyledNav = styled('nav')`
  padding: 0 2rem;
`;
export const StyledMenuItem = styled('li')`
  border-bottom: 1px solid #eaeaea;
`;
export const StyledMenuButton = styled('button')`
  position: relative;
  font-size: 1.6rem;
  display: block;
  width: 100%;
  text-align: left;
  padding: 2rem 3rem 2rem 0;
  color: ${({ isOpen }) => (isOpen ? '#FFCD1B' : '#2E3233')};
`;

export const StyledMenuArrowImage = styled('img')`
  ${({ hasSubMenu, isOpen }) =>
    hasSubMenu
      ? `
      position: absolute;
      right: 2rem;
      top:50%;
      transform: translateY(-50%) ${isOpen ? 'rotate(180deg)' : 'rotate(0deg)'};
      display:block;
    `
      : 'display:none'}
`;

export const StyledSubMenu = styled('ul')`
  list-style-type: none;
  padding-left: 0;
  ${({ sub }) =>
    sub &&
    `
    margin-left: 1.6rem;
    margin-bottom: 1rem;
    > li { border:none }
    button { padding: 1rem 0; font-size: 1.5rem;}
  `}
`;
