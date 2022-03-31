import styled from 'styled-components';
import trimmer from '../../../../assets/images/trimmer.png';

export const StyledGoodsItem = styled.div`
  width: 225px;
  margin-left: 1px;
  border: 1px solid ${(props) => props.theme.colors.grey};
  border-radius: 6px;

  @media (max-width: 992px) {
    margin: 0 auto;
  }
`;

export const StyledGoodsItemContentWrapper = styled.div`
  padding: 12px;
`;

export const StyledGoodsItemPhoto = styled.div`
  width: 200px;
  height: 200px;
  border-radius: 6px;
  background-image: url(${trimmer});
  background-size: cover;
  background-color: #e8e8e8;
`;

export const StyledGoodsItemTitle = styled.h3`
  margin-top: 12px;
  margin-bottom: 0;
  color: ${(props) => props.theme.colors.primary};
`;

export const StyledGoodsItemDesc = styled.p`
  margin-top: 0;
  margin-bottom: 0;
`;

export const StyledGoodsItemPriceWrapper = styled.div`
  display: flex;
  border-top: 1px solid ${(props) => props.theme.colors.grey};
`;

export const StyledGoodsItemPrice = styled.div`
  width: 170px;
  padding: 5px 15px;
  border-bottom-left-radius: 5px;
  border-right: 1px solid ${(props) => props.theme.colors.grey};
  background-color: ${(props) => props.theme.colors.primary};
`;

export const StyledGoodsItemBlack = styled.span`
  font-size: 14px;
  font-weight: 700;
  color: ${(props) => props.theme.colors.grey};
`;

export const StyledGoodsItemWhite = styled.span`
  font-size: 24px;
  font-weight: 700;
  color: #fff;
`;

export const StyledGoodsItemFavorite = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 55px;
  border-bottom-right-radius: 5px;
  background: linear-gradient(to bottom, #ffca67, #ffac3a);
`;

export const StyledGoodsItemFavoriteIcon = styled.img`
  width: 30px;
`;
