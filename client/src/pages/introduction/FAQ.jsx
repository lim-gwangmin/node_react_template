import React, { useState } from 'react';

import styled from '@emotion/styled';

import ico_qna_A from '@assets/icons/ico_qna_A.png';
import ico_qna_Q from '@assets/icons/ico_qna_Q.png';
import arrowImage from '@assets/icons/icon_arrow_down.svg';

import { VisualBox } from '@components/atoms/Box';
import { Main } from '@components/atoms/Layout';
import { SectionContainer } from '@components/molecules/Layout';
import { Header } from '@components/organisms/Header';

const menuItems = [
  { id: 1, title: '자주하는 질문', content: '자주하는 질문 답변' },
  { id: 2, title: '자주하는 질문', content: '자주하는 질문 답변.' },
  { id: 3, title: '자주하는 질문', content: '자주하는 질문 답변.' },
];

export default function FAQ({}) {
  const [openMenus, setOpenMenus] = useState(Array(menuItems.length).fill(false));

  const toggleMenu = (index) => {
    setOpenMenus((prev) => {
      const newOpenMenus = [...prev];
      newOpenMenus[index] = !newOpenMenus[index];
      return newOpenMenus;
    });
  };
  return (
    <>
      <Header backButton={true} title="자주하는 질문" subMenu={false} />
      <Main>
        <SectionContainer maxWidth={800}>
          <VisualBox
            style={{ paddingTop: '3rem', paddingBottom: '3rem', backgroundColor: '#F0F2FF' }}
          >
            <b>
              미디어리터러시 교육의 <br />
              자주하는 질문
            </b>
          </VisualBox>
          <ul style={{ marginTop: '2rem' }}>
            {menuItems.map((menu, index) => (
              <li key={menu.id} style={{ marginTop: '-1px', lineHeight: 1.4 }}>
                <TitleSection onClick={() => toggleMenu(index)}>
                  {menu.title}
                  <ArrowArticle src={arrowImage} active={openMenus[index]} />
                </TitleSection>
                {openMenus[index] && <CommentSection>{menu.content}</CommentSection>}
              </li>
            ))}
          </ul>
        </SectionContainer>
      </Main>
    </>
  );
}

const TitleSection = styled('button')`
  position: relative;
  display: block;
  width: 100%;
  text-align: left;
  padding: 1.6rem 1rem;
  padding-left: 5rem;
  padding-right: 5rem;
  border-top: 1px solid #eaeaea;
  border-bottom: 1px solid #eaeaea;
  font-size: 1.6rem;
  background-image: url(${ico_qna_Q});
  background-position: left 1.5rem top 1.5rem;
  background-size: auto;
  background-repeat: no-repeat;
  &:active {
    opacity: 0.7;
    transform: translate(1px, 1px);
  }
`;
const ArrowArticle = styled('img')`
  position: absolute;
  right: 2rem;
  top: 2rem;
  transform: rotate(${({ active }) => (active ? '180deg' : '0deg')});
`;
const CommentSection = styled('p')`
  position: relative;
  padding: 1.6rem 1rem;
  padding-left: 7rem;
  border-bottom: 1px solid #eaeaea;
  font-size: 1.6rem;
  background-color: #fafcfd;
  color: #333;
  font-size: 1.6rem;
  background-image: url(${ico_qna_A});
  background-position: left 3rem top 1.5rem;
  background-size: auto;
  background-repeat: no-repeat;
`;
