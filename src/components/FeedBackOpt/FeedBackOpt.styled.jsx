import styled from '@emotion/styled'
export const MyBtn = styled.button`
  text-align: center;
  color: dimgrey;
  padding: 2px 5px;
  background-color: snow;
  border: 1px solid #858585;
  border-radius: 3px;
  box-shadow: 1px 2px 3px rgba(0, 0, 0, 0.4);
  &:not(:last-child) {
    margin-right: 10px;
  }
  &:hover {
    background-color: dodgerblue;
    color: black;
  }
`