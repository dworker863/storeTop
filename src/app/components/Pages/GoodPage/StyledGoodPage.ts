import styled from 'styled-components';

export const StyledGoodPage = styled.section`
  width: 100%;
`;

export const StyledGoodPageSubTitle = styled.h3`
  color: ${(props) => props.theme.colors.primary};
`;

export const StyledGoodPageDesc = styled.p``;

export const StyledGoodPagePrice = styled.p`
  text-decoration: line-through;
  margin-top: -10px;
  font-size: 30px;
  font-weight: 700;
`;

export const StyledGoodPageDiscountPrice = styled.p`
  margin-top: -10px;
  font-size: 30px;
  font-weight: 700;
`;
