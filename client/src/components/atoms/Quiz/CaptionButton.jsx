import styled from '@emotion/styled';

export default function CaptionButton({ onClick }) {
  return (
    <StyledButton type="button" onClick={onClick}>
      자막보기
    </StyledButton>
  );
}

const StyledButton = styled('button')`
  color: #707070;
  font-size: 1.2rem;
  font-weight: 700;
  padding: 0.7rem 1rem;
  border-radius: 6rem;
  background-color: #fff3bf;
  text-align: center;
`;
