import styled from 'styled-components';

export const StyledBanners = styled.section`
  display: flex;
  justify-content: space-between;
  width: 100%;
`;

export const StyledBannersFirst = styled.img`
  width: 655px;
  height: 350px;
  background-color: ${(props) => props.theme.colors.superLightGrey};
`;

export const StyledBannersSecond = styled.img`
  width: 520px;
  height: 350px;
  background-color: ${(props) => props.theme.colors.superLightGrey};
`;
