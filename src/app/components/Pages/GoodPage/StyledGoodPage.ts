import styled from 'styled-components';

export const StyledGoodPage = styled.section`
  width: 100%;
`;

export const StyledGoodPageSubTitle = styled.h3`
  color: ${(props) => props.theme.colors.primary};
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
`;

export const StyledGoodSerial = styled.div`
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
`;

export const StyledGoodBtnWrapper = styled.div`
  display: inline-flex;
  gap: 8px;
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
