import styled from 'styled-components';

export const StyledDiscountGoods = styled.div`
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
`;
