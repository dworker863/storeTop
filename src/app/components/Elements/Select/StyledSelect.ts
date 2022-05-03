import styled from 'styled-components';

export const StyledSelect = styled.select`
  display: hidden;
  position: relative;
  margin-bottom: 20px;
  padding: 5px;
  border-radius: 4px;

  &:after {
    position: absolute;
    content: '';
    top: 14px;
    right: 10px;
    width: 0;
    height: 0;
    border: 6px solid transparent;
    border-color: #fff transparent transparent transparent;
  }
`;
