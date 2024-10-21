import React from 'react';

import mediaLiteracyImage from '@assets/images/mediaLiteracy_image.png';

import { Box } from '@components/atoms/Box';
import { Main } from '@components/atoms/Layout';
import { Text } from '@components/atoms/Text';
import { Title } from '@components/atoms/Title';
import { SectionContainer } from '@components/molecules/Layout';
import { Header } from '@components/organisms/Header';

export default function MediaLiteracyIntro({}) {
  return (
    <>
      <Header
        backButton={true}
        title="미디어리터러시 교육이란?"
        subMenu={false}
        bgColor="#FFF3BF"
      />
      <Main mode="center" bg="#FFF3BF">
        <SectionContainer maxWidth={600}>
          <div>
            <Title size={24} weight={600} style={{ margin: '4rem 0 3rem', textAlign: 'center' }}>
              미디어 리터러시 교육을 <br /> 소개할게요!
            </Title>
            <Box paddingTop={45} paddingBt={45} radius={17} style={{ textAlign: 'center' }}>
              <img src={mediaLiteracyImage} alt="미디어 리터러시란?" />
              <Text
                size={15}
                weight={500}
                align="center"
                style={{ marginTop: '3rem', lineHeight: 1.6 }}
              >
                사람들이 미디어 콘텐츠를 비판적으로 분석하고 <br />
                이해하도록 돕는 교육입니다. <br />
                주요 목표는 정보의 출처와 편향성을 인식하고, <br />
                미디어 메시지의 제작 과정을 이해하며, <br />
                미디어의 사회적 영향을 평가하는 <br />
                능력을 기르는 것입니다.
              </Text>
            </Box>
          </div>
        </SectionContainer>
      </Main>
    </>
  );
}
