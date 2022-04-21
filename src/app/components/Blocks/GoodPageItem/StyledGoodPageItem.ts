import { IStyledGoodPageItemPhoto } from './IGoodPageItem';
import styled from 'styled-components';

export const StyledGoodPageItem = styled.div`
  cursor: pointer;
  display: flex;
  flex-direction: column;
  justify-content: center;
  padding: 12px;
  border: 1px solid ${(props) => props.theme.colors.lightGrey};
  border-radius: 6px;
  background-color: #fff;
  box-shadow: 0px 5px #d1d1d1;
`;

export const StyledGoodPageItemPhoto = styled.div<IStyledGoodPageItemPhoto>`
  width: 200px;
  height: 200px;
  border-radius: 6px;
  background-color: ${(props) => props.theme.colors.superLightGrey};
  background-image: url(${({ image }) => image});
  background-size: cover;
`;

export const StyledGoodPageItemTitle = styled.h4`
  margin-top: 15px;
  margin-bottom: 0px;
  font-weight: 700;
  color: ${(props) => props.theme.colors.primary};
`;

export const StyledGoodPageItemDesc = styled.p`
  margin-top: 0;
  margin-bottom: 0;
  font-size: 14px;
  color: ${(props) => props.theme.colors.grey};
`;
