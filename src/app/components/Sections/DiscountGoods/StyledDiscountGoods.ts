import styled from 'styled-components';

export const StyledDiscountGoods = styled.section`
  width: 100%;
`;

export const StyledDiscountGoodsTitle = styled.h2`
  margin-bottom: 0;
  font-size: 24px;
  color: ${(props) => props.theme.colors.primary};
`;

export const StyledDiscountGoodsDesc = styled.p`
  margin-top: 0;
  font-size: 16px;
  line-height: 16px;
`;

export const StyledDiscountGoodsWrapper = styled.div`
  display: flex;
  justify-content: space-between;
  flex-wrap: wrap;

  @media (max-width: 1200px) {
    justify-content: flex-start;
    gap: 18px;
  }

  @media (max-width: 992px) {
    justify-content: space-between;
  }
`;

export const StyledEmptyDiv = styled.div`
  display: none;
  width: 225px;
  margin: 0 auto;

  @media (max-width: 992px) {
    display: block;
  }
`;
