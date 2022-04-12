import styled from 'styled-components';
import headerBg from '../../../../assets/images/header-bg.png';

export const StyledHeader = styled.header`
  overflow: hidden;
  z-index: 10;
  position: relative;
  padding-bottom: 32px;
  background-image: url(${headerBg});
`;
