import styled from 'styled-components';

export const StyledMenuWrapper = styled.div`
  width: 100%;
  padding: 10px;
  background: linear-gradient(to bottom, #ff4d00, #ff3a00);
`;

export const StyledMenu = styled.ul`
  display: flex;
  width: max-content;
  margin: 0 auto;
  padding: 10px 85px;

  & > li {
    text-transform: none;
    color: #fff;
    font-size: 16px;
    padding: 15px 35px;
    border-right: 1px solid #fff;

    &:last-child {
      border-right: none;
    }

    &:hover {
      color: #fff;
    }
  }
`;
