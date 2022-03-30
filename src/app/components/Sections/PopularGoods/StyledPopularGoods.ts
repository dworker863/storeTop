import styled from 'styled-components';

export const StyledPopularGoods = styled.div`
  width: 100%;
  color: ${(props) => props.theme.colors.grey};
`;

export const StyledPopularGoodsTitle = styled.h2`
  font-size: 24px;
  margin-bottom: 0;
`;

export const StyledPopularGoodsDesc = styled.p`
  margin-top: 0;
  font-size: 16px;
  line-height: 16px;
`;

export const StyledPopularGoodsWrapper = styled.p`
  display: flex;
  justify-content: space-between;
`;
