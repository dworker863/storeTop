import styled from 'styled-components';

export const StyledGoods = styled.section`
  width: 100%;
  color: ${(props) => props.theme.colors.grey};
`;

export const StyledGoodsTitle = styled.h2`
  font-size: 24px;
  margin-bottom: 0;
`;

export const StyledGoodsDesc = styled.p`
  margin-top: 0;
  font-size: 16px;
  line-height: 16px;
`;

export const StyledGoodsWrapper = styled.p`
  display: flex;
  justify-content: space-between;
`;
