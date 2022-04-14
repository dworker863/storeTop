import { FC } from 'react';
import { IOverlay } from './IOverlay';
import { StyledOverlay } from './StyledOverlay';

const Overlay: FC<IOverlay> = ({ active, mode }) => {
  return (
    <StyledOverlay active={active} mode={mode}>
      Overlay
    </StyledOverlay>
  );
};

export default Overlay;
