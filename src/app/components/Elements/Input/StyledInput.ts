import styled from 'styled-components';

export const StyledInput = styled.input`
  display: block;
  width: 280px;
  padding: 10px;
  margin-top: 12px;
  margin-bottom: 12px;
  border: 1px solid ${(props) => props.theme.colors.lightGrey};
  border-radius: 3px;

  &::placeholder {
    color: ${(props) => props.theme.colors.lightGrey};
  }

  &:nth-child(6) {
    margin-bottom: 20px;
  }

  @media (max-width: 576px) {
    width: 280px;
  }
`;
