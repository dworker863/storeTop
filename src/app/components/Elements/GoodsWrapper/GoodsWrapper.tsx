import { FC } from 'react';
import { StyledGoodsWrapper } from './StyledGoodsWrapper';

const GoodsWrapper: FC = ({ children }) => {
  return <StyledGoodsWrapper>{children}</StyledGoodsWrapper>;
};

export default GoodsWrapper;
