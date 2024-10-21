import React from 'react';
import { NavLink } from 'react-router-dom';

import bee from '@assets/images/bee_big.png';
import bgBottom from '@assets/images/quiz_home_bottom_bg.png';
import bgCenter01 from '@assets/images/quiz_home_center01.png';
import bgCenter02 from '@assets/images/quiz_home_center02.png';
import bgTop from '@assets/images/quiz_home_top_bg.png';
import ButtonImage from '@assets/images/quiz_start_button_image.png';
import TitleImage from '@assets/images/quiz_start_comment_image.png';

import { Main } from '@components/atoms/Layout';
import { Header } from '@components/organisms/Header';

import { navLinks } from '@routes/navLinks';
import { QUIZ_CATEGORY } from '@routes/url';

export default function QuizHome() {
  return (
    <>
      <Header bgColor="initial" border={0} style={{ position: 'fixed', zIndex: 99 }} />
      <Main bg="#FFF7AB" style={MainStyle}>
        <div style={{ flex: 0.3 }}>
          <img src={bgTop} alt="" style={BgCenter01ImageStyle} />
        </div>
        <div style={{ flex: 0.4, display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
          <div style={{ position: 'absolute', zIndex: 2, textAlign: 'center' }}>
            <img src={TitleImage} alt="" style={{ maxWidth: '30.9rem' }} />
            <NavLink
              to={navLinks[QUIZ_CATEGORY].path}
              style={{ display: 'block', margin: '2rem auto 0', maxWidth: '14rem' }}
            >
              <img src={ButtonImage} alt="" />
            </NavLink>
          </div>
          <img src={bgCenter02} alt="" />
        </div>
        <div style={{ flex: 0.3 }}>
          <img src={bee} alt="" style={BeeImageStyle} />
          <img src={bgCenter01} alt="" style={BgCenter02ImageStyle} />
          <img src={bgBottom} alt="" style={BgCenter03ImageStyle} />
        </div>
      </Main>
    </>
  );
}

const MainStyle = {
  display: 'flex',
  flexFlow: 'column',
  flex: 1,
  justifyContent: 'space-between',
};

const BgCenter01ImageStyle = {
  position: 'absolute',
  top: 0,
  left: 0,
  width: '100%',
  maxHeight: ' 35%',
  zIndex: 1,
};
const BgCenter02ImageStyle = {
  position: 'absolute',
  bottom: '7%',
  left: '50%',
  transform: 'translateX(-50%)',
  zIndex: 1,
};
const BgCenter03ImageStyle = {
  position: 'absolute',
  bottom: 0,
  left: 0,
  width: '100%',
  maxHeight: ' 25%',
  zIndex: 0,
};

const BeeImageStyle = {
  position: 'absolute',
  left: '45%',
  bottom: '25%',
  transform: 'translateX(-50%)',
  zIndex: 1,
};
