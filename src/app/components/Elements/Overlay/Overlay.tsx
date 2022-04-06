import { FC } from 'react';
import { IOverlay } from './IOverlay';
import { StyledOverlay } from './StyledOverlay';

const Overlay: FC<IOverlay> = ({ active }) => {
  return <StyledOverlay active={active}>Overlay</StyledOverlay>;
};

export default Overlay;
