import React, { useCallback, useEffect, useState } from 'react';

import { PRODUCT_LIST_SCHEMA } from '@schema';
import { ShopService } from '@services/shopService';

import { ShopTemplate } from '@components/templates/Shop';

import { useLoading } from '@hooks/useLoading';

export default function Shop() {
  const [isBrandLoading, setFetchBrandList] = useLoading(ShopService.brandList); // 브랜드 리스트 API
  const [brandList, setBrandList] = useState([]); // 브랜드 리스트 데이터
  const [isProductLoading, setFetchProductList] = useLoading(ShopService.productList); // 브랜드 제품 리스트 API
  const [productList, setProductList] = useState([]);
  const [productTarget, setProductTarget] = useState({ brandNm: '전체', brandCd: '' });
  const [productPagination, setProductPagination] = useState({});

  // 브랜드 리스트 조회를 위한 훅
  useEffect(() => {
    getBrandListFetchData();
  }, []);

  // 브랜드 리스트 데이터 조회
  const getBrandListFetchData = useCallback(async () => {
    if (isBrandLoading) return;

    try {
      // 브랜드 리스트 가져오기
      const responseBrandListData = await setFetchBrandList();
      setBrandList(responseBrandListData.data);
    } catch (error) {
      console.error(error);
    }
  }, [brandList]);

  // 상품 조회를 위한 훅
  useEffect(() => {
    handleProductList();
  }, [productTarget]);

  // 브랜드 상품 조회
  const handleProductList = useCallback(async () => {
    if (isProductLoading) return;

    try {
      // 브랜드 리스트 가져오기
      const responseProductListData = await setFetchProductList({
        ...PRODUCT_LIST_SCHEMA,
        searchBrandCd: productTarget.brandCd,
      });
      setProductList(responseProductListData.data);
      setProductPagination(responseProductListData.pagination);
    } catch (error) {
      console.error(error);
    }
  }, [productTarget]);

  return (
    <ShopTemplate
      // 브랜드
      brandList={brandList}
      isBrandLoading={isBrandLoading}
      // 제품
      productList={productList}
      productTarget={productTarget}
      setProductTarget={setProductTarget}
      setProductList={setProductList}
      setProductPagination={setProductPagination}
      setFetchProductList={setFetchProductList}
      productPagination={productPagination}
      isProductLoading={isProductLoading}
    />
  );
}
