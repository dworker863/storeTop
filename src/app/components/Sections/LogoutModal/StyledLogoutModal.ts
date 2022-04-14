import styled from 'styled-components';

export const StyledLogoutModalWrapper = styled.div`
  position: absolute;
  top: 0;
  width: 100%;
  height: 100vh;
`;

export const StyledLogoutModalText = styled.p`
  text-align: center;
  margin-bottom: 20px;
`;

export const StyledLogoutModalButtonWrapper = styled.div`
  display: flex;
  justify-content: center;
  gap: 40px;
  height: 80px;

  button {
    margin: 0;
    margin-top: 30px;
  }
`;
