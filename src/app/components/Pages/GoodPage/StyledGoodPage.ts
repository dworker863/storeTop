import { StyledInfoWrapper } from './../../../commonStyles/StyledInfoWrapper';
import styled from 'styled-components';
import { StyledInfo } from '../../../commonStyles/StyledInfo';
import addCartIcon from '../../../../assets/images/cart-white-icon.png';
import favoriteIcon from '../../../../assets/images/favorite-icon.png';

export const StyledGoodInfoWrapper = styled(StyledInfoWrapper)`
  @media (max-width: 1200px) {
    flex-direction: column;

    & > div:first-child {
      width: min-content;
      margin-bottom: 40px;
      margin-right: auto;
    }
  }

  @media (max-width: 768px) {
    width: 100%;
  }
`;

export const StyledGoodInfo = styled(StyledInfo)`
  @media (max-width: 768px) {
    width: 100%;
  }

  h2 {
    text-align: left;
  }
`;

export const StyledGoodPage = styled.section`
  width: 100%;
`;

export const StyledGoodPageSubTitle = styled.h3`
  color: ${(props) => props.theme.colors.primary};
`;

export const StyledGoodRating = styled.div`
  margin-top: 30px;
`;

export const StyledGoodRatingIconsWrapper = styled.div`
  cursor: pointer;
  display: flex;
  gap: 10px;
  margin-bottom: 20px;
`;

export const StyledGoodRatingIcon = styled.img``;

export const StyledGoodRatingText = styled.div`
  display: inline-block;
  font-size: 24px;
  font-weight: 700;
`;

export const StyledGoodRatingTextBig = styled.span`
  font-size: 30px;
`;

export const StyledGoodSerialWrapper = styled.div`
  position: relative;
  display: flex;
  align-items: center;
  gap: 12px;
  margin-bottom: 40px;

  &:after {
    content: '';
    position: absolute;
    bottom: -12px;
    display: block;
    width: 300px;
    height: 1px;
    background-color: ${(props) => props.theme.colors.lightGrey};
  }

  @media (max-width: 1200px) {
    margin-top: 20px;
  }
`;

export const StyledGoodSubTitle = styled.div`
  font-size: 14px;
  font-weight: 700;
  color: ${(props) => props.theme.colors.primary};
`;

export const StyledGoodStock = styled.div`
  padding: 5px;
  font-size: 14px;
  font-weight: 700;
  color: #fff;
  border-radius: 3px;
  background-color: ${(props) => props.theme.colors.green};
`;

export const StyledGoodPageDesc = styled.p``;

export const StyledCharacteristicsTitle = styled.span`
  font-weight: 700;
  color: ${(props) => props.theme.colors.grey};
`;

export const StyledCharacteristicsItem = styled.p`
  margin-top: 0;
  margin-bottom: 10px;
`;

export const StyledGoodCounterWrapper = styled.div`
  display: inline-flex;
  border-radius: 4px;
  border: 1px solid ${(props) => props.theme.colors.lightGrey};
`;

export const StyledGoodCount = styled.span`
  padding: 17px;
  border-right: 1px solid ${(props) => props.theme.colors.lightGrey};
  font-size: 16px;
  font-weight: 700;

  @media (max-width: 576px) {
    padding: 12px;
  }
`;

export const StyledGoodCountChanger = styled.span`
  cursor: pointer;
  font-family: 'Arial';
  padding: 20px;
  font-size: 36px;
  font-weight: 700;
  line-height: 10px;
  color: ${(props) => props.theme.colors.lightRed};
  border-right: 1px solid ${(props) => props.theme.colors.lightGrey};
  background-color: ${(props) => props.theme.colors.superLightGrey};

  &:last-child {
    padding-top: 23px;
    border-right: none;
    color: ${(props) => props.theme.colors.lightGreen};
  }

  @media (max-width: 576px) {
    padding: 15px;

    &:last-child {
      padding-top: 19px;
    }
  }
`;

export const StyledGoodBtnWrapper = styled.div`
  display: inline-flex;
  gap: 15px;

  button {
    @media (max-width: 1400px) {
      &:before {
        transform: translateY(-90%);
      }

      &:last-child {
        padding-left: 30px;
      }
    }

    @media (max-width: 1200px) {
      &:before {
        transform: translateY(-45%);
      }

      &:last-child {
        padding-left: 55px;
      }
    }

    @media (max-width: 992px) {
      padding: 10px 20px;

      &:last-child {
        padding-left: 55px;
      }
    }

    @media (max-width: 800px) {
      width: 100px;
      background-image: url(${addCartIcon});
      background-size: 35px;
      background-repeat: no-repeat;
      background-position: 45% 50%;

      &:last-child {
        background-image: url(${favoriteIcon}),
          linear-gradient(#f5cf2f, #eba21e);
        background-size: auto 30px, auto auto;
        background-repeat: no-repeat;
        background-position: 50%;
      }

      &:before {
        display: none;
      }
    }

    @media (max-width: 576px) {
      width: 70px;
      padding: 15px;
    }
  }

  @media (max-width: 576px) {
    gap: 4px;
  }
`;

export const StyledGoodPagePrice = styled.p`
  text-decoration: line-through;
  margin-top: -15px;
  font-size: 30px;
  font-weight: 700;
`;

export const StyledGoodPageDiscountPrice = styled.p`
  margin-top: -15px;
  font-size: 30px;
  font-weight: 700;
`;

export const StyledCategoryGoodsTitle = styled.h3`
  margin-top: 55px;

  @media (max-width: 470px) {
    text-align: center;
  }
`;

export const StyledCategoryGoodsWrapper = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;

  @media (max-width: 1200px) {
    /* padding: 18px 28px; */
    gap: 18px;
    justify-content: flex-start;
  }

  @media (max-width: 470px) {
    justify-content: center;
  }

  /* @media (max-width: 768px) {
    margin: 0 auto;
  } */
`;
