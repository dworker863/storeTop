import styled from 'styled-components';

export const StyledOrder = styled.section`
  display: flex;
  justify-content: space-between;
  flex-wrap: wrap;
  margin-top: 35px;

  @media (max-width: 576px) {
    width: 100%;
    padding-right: 20px;
    padding-left: 20px;
    margin-bottom: 80px;
    font-size: 14px;
  }
`;

export const StyledOrderInfo = styled.div`
  width: 58%;

  @media (max-width: 992px) {
    width: 100%;
    margin-bottom: 60px;
  }

  @media (max-width: 576px) {
    margin-bottom: 40px;
  }
`;

export const StyledOrderDesc = styled.p``;

export const StyledOrderLine = styled.div`
  width: 250px;
  height: 1px;
  margin-top: 25px;
  margin-bottom: 25px;
  background-color: ${(props) => props.theme.colors.lightGrey};
`;

export const StyledOrderFeedback = styled.div`
  width: 38%;

  @media (max-width: 992px) {
    width: 100%;
  }
`;
