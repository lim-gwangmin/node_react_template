import React, { useId } from 'react';

import checkboxIconOff from '@assets/icons/icon_check_off.svg';
import checkboxIconOn from '@assets/icons/icon_check_on.svg';

import {
  StyledTermsCheckbox,
  StyledTermsCheckboxContainer,
  StyledTermsCheckboxLabel,
  StyledTermsCheckboxText,
} from './Terms.styled';

export default function TermsCheckBox({
  value = '',
  name = '',
  size = 16,
  checked = false,
  disabled = false,
  readonly = false,
  onChange,
  children,
  ...props
}) {
  const id = useId();
  const handleChange = (e) => {
    if (!onChange) return;

    onChange({ checked: e.target.checked, value });
  };
  return (
    <StyledTermsCheckboxContainer>
      <StyledTermsCheckbox
        id={id}
        type="checkbox"
        name={name}
        checked={checked}
        readOnly={readonly}
        disabled={disabled}
        onChange={handleChange}
        value={value}
      />
      <StyledTermsCheckboxLabel htmlFor={id} readOnly={readonly} disabled={disabled} {...props}>
        <StyledTermsCheckboxText size={size}>
          <img
            src={checked ? checkboxIconOn : checkboxIconOff}
            style={{ paddingRight: '1rem', marginTop: '-3px' }}
            alt=""
          />
          {children}
        </StyledTermsCheckboxText>
      </StyledTermsCheckboxLabel>
    </StyledTermsCheckboxContainer>
  );
}
