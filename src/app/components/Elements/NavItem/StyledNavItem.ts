import styled from 'styled-components';

export const StyledNavItem = styled.li`
  position: relative;
  padding-left: 40px;
  text-transform: uppercase;
  font-weight: 700;

  &:before {
    content: '';
    position: absolute;
    top: 50%;
    left: 20px;
    display: inline-block;
    width: 4px;
    height: 4px;
    border-radius: 50%;
    background-color: #ff3a00;
    transform: translateY(-50%);
  }
`;
