import styled from 'styled-components';
import clearPng from '../../assets/clear.png';

const ClearButton = styled.button`
  background: url("${clearPng}") no-repeat center;
  background-size: contain;
  height: 20px;
  width: 20px;
  border: none;
  outline: none;
  cursor: pointer;
`;

export default ClearButton;
