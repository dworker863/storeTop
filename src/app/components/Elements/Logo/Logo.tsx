import { FC } from 'react';
import { StyledLogo, StyledLogoBold, StyledLogoThin } from './StyledLogo';

const Logo: FC = () => {
  return (
    <StyledLogo>
      <StyledLogoThin>store</StyledLogoThin>
      <StyledLogoBold>top</StyledLogoBold>
    </StyledLogo>
  );
};

export default Logo;
