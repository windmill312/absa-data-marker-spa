import styled from 'styled-components';

const TextArea = styled.textarea`
  background: rgb(244, 242, 246);
  border: 1px solid rgb(38, 38, 38);
  font-size: 20px;
  outline: 0px;
  padding: 15px;
  border-radius: 6px;
  transition: all 50ms ease 0s;
  &:active,
  &:focus {
    background: rgb(225, 224, 228);
  }
  resize: none;
`;

export default TextArea;
