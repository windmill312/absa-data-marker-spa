import styled from 'styled-components';

const Button = styled.button`
  background: rgb(254, 216, 35);
  outline: none;
  color: rgb();
  height: 47px;
  min-width: 7em;
  border-color: rgb(254, 216, 35);
  border-radius: 6px;
  font-size: 16px;
  transition: all 0.2s ease-in-out;
  &:hover,
  &:focus,
  &:active {
    background: rgb(254, 197, 41);
    border-color: rgb(254, 197, 41);
  }
`;

export default Button;
