import styled from '@emotion/styled';

import checkboxIconOff from '@assets/icons/icon_check_off.svg';
import checkboxIconOn from '@assets/icons/icon_check_on.svg';

import { pxToRem } from '@utils/pxToRem';

// 체크박스 스타일 컴포넌트
export const StyledTermsCheckboxContainer = styled('span')`
  display: inline-block;
  vertical-align: middle;
`;
export const StyledTermsCheckbox = styled('input')`
  position: absolute;
  clip: rect(0 0 0 0);
  clip-path: inset(50%);
  width: 1px;
  height: 1px;
  font-size: ${({ size }) => pxToRem(size)};
  overflow: hidden;
  &:checked + label {
    // background-image: url('${checkboxIconOn}');
  }
`;
export const StyledTermsCheckboxLabel = styled('label')`
  position: relative;
  display: inline-block;
  // padding-left: 2.5rem;
  vertical-align: middle;
  background-size: contain;
  background-position: left center;
  background-repeat: no-repeat;
  // background-image: url('${checkboxIconOff}');
`;
export const StyledTermsCheckboxText = styled('span')`
  display: inline-block;
  vertical-align: middle;
  font-size: ${({ size }) => pxToRem(size)};
  // padding-left: 1rem;
`;
