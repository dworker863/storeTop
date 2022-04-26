import styled from 'styled-components';
import checkIcon from '../../../../assets/images/check-icon.png';

export const StyledCartPage = styled.section`
  color: ${(props) => props.theme.colors.fontColor};
`;

export const StyledCartTitle = styled.h2``;

export const StyledCartPageWrapper = styled.div`
  display: flex;
`;

export const StyledCartGoodsWrapper = styled.div``;

export const StyledCartPageDelivery = styled.div`
  padding: 45px;
  border: 1px solid ${(props) => props.theme.colors.lightGrey};
  border-radius: 6px;
  border-top-left-radius: 0px;
  box-shadow: 0px 5px #d1d1d1;
`;

export const StyledCartPageDeliveryTitle = styled.h3`
  font-size: 24px;
  margin-top: 0;
  margin-bottom: 20px;
`;

export const StyledCartPageSelect = styled.select`
  margin-bottom: 20px;
  border-radius: 4px;
`;

export const StyledCartNote = styled.div`
  font-size: 12px;
  margin-bottom: 25px;
`;

export const StyledCartNoteText = styled.p`
  margin-top: 0;
  margin-bottom: 0;
  color: ${(props) => props.theme.colors.grey};
`;

export const StyledCartBigLine = styled.div`
  height: 1px;
  width: 300px;
  margin-bottom: 25px;
  background-color: ${(props) => props.theme.colors.lightGrey};
`;

export const StyledCartPageDeliverySubTitle = styled.h4`
  font-size: 16px;
  font-weight: 700;
  margin-bottom: 10px;
`;

export const StyledCartString = styled.p`
  margin-top: 0;
  margin-bottom: 10px;
  color: ${(props) => props.theme.colors.fontColorSecondary};
`;

export const StyledCartIndex = styled.div`
  margin-bottom: 20px;
  font-size: 14px;
`;

export const StyledCartShortLine = styled.div`
  height: 1px;
  width: 100px;
  margin-bottom: 20px;
  background-color: ${(props) => props.theme.colors.lightGrey};
`;

export const StyledCartPromoTitle = styled.div`
  font-weight: 700;
  margin-bottom: 15px;
`;

export const StyledCartPromoInput = styled.input`
  margin-right: 10px;
  margin-bottom: 20px;
  padding: 8px;
  border: 1px solid ${(props) => props.theme.colors.lightGrey};
  border-radius: 4px;
`;

export const StyledCartPromoBtn = styled.button`
  width: 32px;
  height: 32px;
  border-radius: 4px;
  vertical-align: middle;
  background-image: url(${checkIcon});
  background-position: 50% 50%;
  background-size: 18px;
  background-repeat: no-repeat;
  background-color: ${(props) => props.theme.colors.primary};
`;

export const StyledCartSumTitle = styled.h3`
  font-size: 24px;
  font-weight: 700;
  color: ${(props) => props.theme.colors.primary};
`;

export const StyledCartGoodItem = styled.div`
  display: flex;
  justify-content: space-between;
  margin-bottom: 20px;
`;

export const StyledCartGoodTitle = styled.div`
  font-size: 16px;
  font-weight: 700;
`;

export const StyledCartGoodItemCount = styled.div`
  font-size: 14px;
  color: ${(props) => props.theme.colors.lightGrey};
`;

export const StyledCartGoodPrice = styled.div`
  font-size: 24px;
  font-weight: 700;
  /* color: ${(props) => props.theme.colors.lightGrey}; */
`;

export const StyledCartExpress = styled.div`
  margin-bottom: 20px;
  font-weight: 700;
`;

export const StyledCartFullLine = styled.div`
  height: 1px;
  width: 100%;
  margin-bottom: 20px;
  background-color: ${(props) => props.theme.colors.lightGrey};
`;

export const StyledCartSumWrapper = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 20px;
`;

export const StyledCartPromo = styled.div`
  font-size: 14px;
  color: ${(props) => props.theme.colors.lightGrey};
`;

export const StyledCartSum = styled.div`
  font-size: 24px;
  font-weight: 700;
  color: ${(props) => props.theme.colors.primary};
`;

export const StyledCartOrderWrapper = styled.div`
  display: flex;
  justify-content: flex-start;
  align-items: center;
  gap: 20px;
`;

export const StyledCartOrderInfo = styled.span`
  font-size: 14px;
  color: ${(props) => props.theme.colors.lightGrey};

  a {
    text-decoration: underline;
    color: ${(props) => props.theme.colors.primary};
  }
`;

export const StyledCartRecomended = styled.span``;

export const StyledCartGoodCard = styled.span``;
