import React, { useId, useState } from 'react';

import { useAlertModalActions } from '@hooks/userAlertModalActions';

import { HiddenCheckbox, SwitchLabel, ToggleContainer } from './Switch.styled';

export default function ToggleSwitch({ initial = false }) {
  const id = useId();
  const { openModal } = useAlertModalActions();
  const [isSubscribed, setIsSubscribed] = useState(initial);

  const handleToggle = async () => {
    setIsSubscribed(!isSubscribed);
    openModal({ text: `알림 설정이 ${isSubscribed ? '켜졌습니다.' : '꺼졌습니다.'}` });
  };

  return (
    <ToggleContainer>
      <HiddenCheckbox type="checkbox" id={id} checked={isSubscribed} onChange={handleToggle} />
      <SwitchLabel htmlFor={id} isActive={isSubscribed} />
    </ToggleContainer>
  );
}
