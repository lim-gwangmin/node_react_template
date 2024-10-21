import React from 'react';

import { PRODUCT_LIST_SCHEMA } from '@schema';

import calendarImage from '@assets/images/calendar_image.png';

import { VisualBox } from '@components/atoms/Box';
import { Main } from '@components/atoms/Layout';
import { WindowInfinityScrollContainer } from '@components/atoms/Layout';
import { SubmitLoader } from '@components/atoms/Loader';
import { Title } from '@components/atoms/Title';
import { SectionContainer } from '@components/molecules/Layout';
import { Header } from '@components/organisms/Header';
import { BrandSection, ProductSection } from '@components/organisms/Shop';

import { colors } from '@styles/theme';

const THEMA_COLOR = colors.primary[700];

export default function ShopTemplate({
  brandList,
  isBrandLoading,
  productList,
  productTarget,
  setProductTarget,
  setProductList,
  setProductPagination,
  setFetchProductList,
  productPagination,
  isProductLoading,
}) {
  // 브랜드 상품 필터 조회
  const handleChangeProductList = ({ brandCd, brandNm }) => {
    setProductTarget((prevProductTarget) => ({ ...prevProductTarget, brandNm, brandCd }));
  };

  // 상품 리스트 infinity scroll 함수
  const loadMoreProductList = async () => {
    const { currentPageNo, lastPageNo } = productPagination;
    if (currentPageNo >= lastPageNo) return; // 마지막 페이지라면 종료

    if (isProductLoading) return; // 이미 로딩 중이거나 더 로드할 항목이 없으면 종료
    const nextPage = productPagination.currentPageNo + 1;
    const responseProductListData = await setFetchProductList({
      ...PRODUCT_LIST_SCHEMA,
      searchBrandCd: productTarget.brandCd,
      pageIndex: nextPage,
    });

    setProductList((prevList) => [...prevList, ...responseProductListData.data]);
    setProductPagination((prevData) => ({ ...prevData, ...responseProductListData.pagination }));
  };

  return (
    <WindowInfinityScrollContainer loadMore={loadMoreProductList} isLoading={isProductLoading}>
      <Header backButton={true} title="상점" subMenu={false} border={0} bgColor={THEMA_COLOR} />
      <Main bg={THEMA_COLOR}>
        <SectionContainer>
          <Title size={20} weight={500}>
            구매
          </Title>
          <VisualBox image={calendarImage} style={{ marginTop: '2rem' }}>
            다함께 실천하는 <br />
            <b>하루 한 번 미디어리터러시</b>
          </VisualBox>
        </SectionContainer>
        <BrandSection brandList={brandList} onClick={handleChangeProductList} />
        <ProductSection productTarget={productTarget} productList={productList} />
      </Main>
      {isBrandLoading && <SubmitLoader />}
    </WindowInfinityScrollContainer>
  );
}
