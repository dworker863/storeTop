import styled from 'styled-components';

export const StyledContacts = styled.div`
  display: flex;
  justify-content: space-between;
  flex-wrap: wrap;
  width: 525px;
  font-size: 14px;

  @media (max-width: 1600px) {
    order: 2;
    margin-right: 80px;
  }

  @media (max-width: 992px) {
    margin-bottom: 40px;
  }
`;

export const StyledRequest = styled.a`
  text-decoration: underline;
  font-weight: 400;
  transform: translateX(18px);
`;
