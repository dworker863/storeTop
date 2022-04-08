import styled from 'styled-components';

export const StyledInfo = styled.div`
  padding: 30px 45px;
  padding-bottom: 19px;
  border-top-right-radius: 6px;
  border-bottom-right-radius: 6px;
  border: 1px solid ${(props) => props.theme.colors.lightGrey};

  @media (max-width: 992px) {
    padding: 20px;
    font-size: 14px;
  }

  @media (max-width: 768px) {
    border-top-left-radius: 6px;
    border-bottom-left-radius: 6px;
  }

  @media (max-width: 576px) {
    padding: 30px 10px;
  }
`;
