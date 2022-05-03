import { Field } from 'formik';
import styled from 'styled-components';
import checkIcon from '../../../../assets/images/check-icon.png';

export const StyledFilters = styled.div`
  display: flex;
  padding: 20px 30px;
  outline: 1px solid ${(props) => props.theme.colors.lightGrey};
  border-top: none;
  border-bottom-left-radius: 7px;
  border-bottom-right-radius: 7px;
  box-shadow: 0px 5px #d1d1d1;
  background-color: #f9f9f9;

  input {
    margin-right: 12px;
    margin-bottom: 5px;
  }

  @media (max-width: 1800px) {
    padding: 20px 50px;

    label {
      margin-right: 40px;
    }
  }

  @media (max-width: 1200px) {
    padding: 20px 55px;
  }

  @media (max-width: 992px) {
    flex-wrap: wrap;
    padding: 20px 35px;
  }

  @media (max-width: 360px) {
    padding: 15px;
  }
`;

export const StyledFiltersTitle = styled.h3`
  margin-top: 0;
  margin-bottom: 5px;
  font-size: 14px;

  @media (max-width: 992px) {
    margin-top: 20px;
  }
`;

export const StyledFiltersBlock = styled.div`
  padding: 0 25px;
  border-right: 1px solid ${(props) => props.theme.colors.lightGrey};

  &:first-child {
    padding-left: 0;
  }

  &:last-child {
    padding-right: 0;
    border-right: none;
  }

  label {
    font-weight: 400;

    &:last-child {
      margin-right: 0;
    }

    @media (max-width: 576px) {
      display: inline-block;
      width: 81%;
      font-size: 12px;
    }

    @media (max-width: 470px) {
      width: 75%;
    }

    @media (max-width: 410px) {
      width: 72%;
    }
  }

  @media (max-width: 1800px) {
    padding: 0 55px;
  }

  @media (max-width: 1200px) {
    padding: 0 45px;
  }

  @media (max-width: 992px) {
    width: 100%;
    padding: 0;
    border: none;

    &:after {
      content: '';
      display: block;
      width: 200px;
      margin-top: 20px;
      height: 1px;
      background-color: ${(props) => props.theme.colors.lightGrey};
    }

    &:last-child {
      padding-bottom: 20px;
      &:after {
        display: none;
      }
    }
  }
`;

export const StyledFilterCheckbox = styled(Field)`
  position: relative;
  display: inline-block;
  width: auto;
  margin-left: 0;
  margin-right: 15px;

  &[type='radio'],
  &[type='checkbox'] {
    visibility: hidden;

    &:before {
      visibility: visible;
      content: '';
      position: absolute;
      /* top: -4px; */
      display: block;
      width: 14px;
      height: 14px;
      border: 1px solid ${(props) => props.theme.colors.lightGrey};
    }
  }

  &[type='radio']:checked,
  &[type='checkbox']:checked {
    &:before {
      background-color: ${(props) => props.theme.colors.primary};
      background-image: url(${checkIcon});
      background-size: 10px;
      background-repeat: no-repeat;
      background-position: 50%;
    }
  }
`;
