import styled from 'styled-components';

export const StyledMenuWrapper = styled.div`
  overflow: hidden;
  z-index: 1;
  position: relative;
  width: 100%;
  padding: 10px;
  background: linear-gradient(to bottom, #ff4d00, #ff3a00);

  @media (max-width: 992px) {
    padding: 10px 0;
  }

  @media (max-width: 768px) {
    overflow: scroll;
  }
`;

export const StyledMenu = styled.ul`
  display: flex;
  width: max-content;
  margin: 0 auto;
  padding: 0 85px;

  a {
    color: #fff;

    &:last-child li {
      border: none;
    }
  }

  li {
    text-transform: none;
    font-size: 16px;
    padding: 15px 35px;
    border-right: 1px solid #fff;

    a {
      color: #fff;
    }

    &:hover {
      color: #fff;
    }

    @media (max-width: 992px) {
      padding: 10px 20px;
    }

    @media (max-width: 768px) {
      padding: 5px 10px;
      font-size: 14px;
    }
  }

  @media (max-width: 992px) {
    padding: 10px 0;
  }
`;
