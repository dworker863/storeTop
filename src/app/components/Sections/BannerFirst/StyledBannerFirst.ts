import styled from 'styled-components';

export const StyledBanners = styled.section`
  display: flex;
  justify-content: space-between;
  flex-wrap: wrap;
  width: 100%;
`;

export const StyledBanner = styled.img`
  width: 48%;
  height: 350px;
  background-color: ${(props) => props.theme.colors.superLightGrey};

  @media (max-width: 768px) {
    width: 100%;
    margin-bottom: 10px;

    &:last-child {
      margin-bottom: 0;
    }
  }
`;
