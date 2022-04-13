import styled from 'styled-components';
import { Link } from 'react-scroll';

export const StyledContacts = styled.div`
  display: flex;
  justify-content: space-between;
  flex-wrap: wrap;
  width: 525px;
  font-size: 14px;

  @media (max-width: 1800px) {
    order: 2;
    margin-right: 80px;
  }

  @media (max-width: 992px) {
    margin-bottom: 40px;
  }

  @media (max-width: 768px) {
    width: 100%;
    margin-right: 0px;
  }
`;

export const StyledRequest = styled(Link)`
  cursor: pointer;
  text-decoration: underline;
  font-size: 14px;
  font-weight: 400;
  transform: translateX(18px);

  @media (max-width: 768px) {
    transform: translateX(0px);
  }

  @media (max-width: 576px) {
    font-size: 12px;
  }
`;
