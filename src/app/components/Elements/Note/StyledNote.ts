import styled from 'styled-components';

export const StyledNote = styled.p`
  max-width: 400px;
  font-size: 12px;
  line-height: 16px;
  color: ${(props) => props.theme.colors.lightGrey};
`;
