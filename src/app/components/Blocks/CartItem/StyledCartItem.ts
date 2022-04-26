import styled from 'styled-components';

export const StyledCartItem = styled.div`
  display: flex;
  width: 690px;
  border-bottom-left-radius: 6px;
  border: 1px solid ${(props) => props.theme.colors.lightGrey};
  border-right: none;

  &:last-child {
    box-shadow: 0px 5px #d1d1d1;
  }
`;

export const StyledCartItemName = styled.h3`
  font-size: 24px;
  margin-bottom: 12px;
`;

export const StyledCartItemPhoto = styled.div`
  width: 200px;
  border-left: 1px solid ${(props) => props.theme.colors.lightGrey};
  background-color: ${(props) => props.theme.colors.superLightGrey};

  img {
    width: 100%;
    height: 100%;
  }
`;

export const StyledCartItemInfo = styled.div`
  padding: 50px 40px;
`;

export const StyledCartItemSerialNumber = styled.span`
  font-size: 14px;
  color: ${(props) => props.theme.colors.primary};
`;

export const StyledCartItemDesc = styled.div`
  margin-bottom: 15px;
  color: ${(props) => props.theme.colors.lightGrey};
`;

export const StyledCartItemSum = styled.div`
  display: flex;
  align-items: center;
  margin-bottom: 15px;
`;

export const StyledCartItemCountWrapper = styled.div`
  display: inline-flex;
  margin-right: 25px;
  border-radius: 4px;
  border: 1px solid ${(props) => props.theme.colors.lightGrey};
`;

export const StyledCartItemCount = styled.span`
  padding: 17px;
  border-right: 1px solid ${(props) => props.theme.colors.lightGrey};
  font-size: 16px;
  font-weight: 700;

  @media (max-width: 576px) {
    padding: 12px;
  }
`;

export const StyledCartItemCountChanger = styled.button`
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

export const StyledCartItemPrice = styled.div`
  font-size: 30px;
  font-weight: 700;
`;

export const StyledCartItemRemoveBtn = styled.a`
  text-decoration: underline;
  font-size: 14px;
  color: ${(props) => props.theme.colors.primary};
`;
