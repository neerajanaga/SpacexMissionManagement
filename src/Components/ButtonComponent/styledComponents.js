import styled from "styled-components";

export const Button = styled.button`
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 8px 18px;
  border-radius: 4px;
  background-color: ${(props) => (props.isSelected ? "#54a806" : "#cbf5a3")};
  border: none;
  box-sizing: border-box;
  &:active {
    border: none;
  }
  margin-bottom: 10px;
  outline: none;
  cursor: pointer;
`;
