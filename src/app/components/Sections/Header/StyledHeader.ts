import styled from 'styled-components';
import headerBg from '../../../../assets/images/header-bg.png';

export const StyledHeader = styled.header`
  overflow: hidden;
  z-index: 10;
  position: relative;
  background-image: url(${headerBg});
  padding-bottom: 32px;
`;
