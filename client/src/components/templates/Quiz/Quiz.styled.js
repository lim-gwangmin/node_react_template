import styled from '@emotion/styled';

export const StyledQuizText = styled('p')`
  font-size: 1.5rem;
  font-weight: 600;
  line-height: 1.4;
  text-align: center;
  white-space: pre-wrap;
  color: #000;
`;

export const HexGridContainer = styled('div')`
  background-color: #fff0ab;
  height: 100dvh;
  display: flex;
  flex-flow: column;
  overflow: auto;
  align-items: center;
  justify-content: center;
`;

export const BackButton = styled('button')`
  position: fixed;
  right: 2rem;
  top: 3rem;
  width: 4.6rem;
  height: 4.6rem;
  border-radius: 100%;
  background-color: #fff;
  padding: 0.5rem;
  display: flex;
  justify-content: center;
  align-items: center;
  z-index: 20;
  box-shadow: 0 0 3px 3px rgba(142, 142, 142, 0.25);
  &:active {
    opacity: 0.7;
    transform: translate(1px, 1px);
  }
`;
