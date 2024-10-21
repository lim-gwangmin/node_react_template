import React from 'react';

import { Gauge } from '@components/atoms/Gauge';
import { Text, TextPoint } from '@components/atoms/Text';

import { getPercentageWithPrecision } from '@utils/calculate';

import { color, StyledHeader, StyledLevelComment, StyledTotalPointBox } from './Home.styled';

export default function TotalPoint({
  level = 1,
  initialLevelUpPoint,
  accruedPoint = 0,
  levelUpPoint = 0,
}) {
  const pointsToNextLevel = initialLevelUpPoint * level - accruedPoint;
  const levelUpProgress = initialLevelUpPoint - pointsToNextLevel;
  const gague = getPercentageWithPrecision(levelUpProgress, initialLevelUpPoint);

  return (
    <StyledTotalPointBox bgColor={color.secondary[100]}>
      <StyledHeader>
        <Text weight={500} color="#707070">
          레벨 업 포인트
        </Text>
        <TextPoint color={color.primary[400]} weight={700}>
          {gague}%
        </TextPoint>
      </StyledHeader>
      {/* <Gauge value={gague} icon={honeyPotImage} /> */}
      <Gauge value={gague} icon={null} />
      <StyledLevelComment>{pointsToNextLevel} 포인트 모으면 레벨 UP!</StyledLevelComment>
    </StyledTotalPointBox>
  );
}
