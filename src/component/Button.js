import styled from "styled-components";

export const ButtonContainer = styled.button`
  text-transform: capitalize;
  font-size: 1.4rem;
  background: transparent;
  border: 0.05rem solid #f15a22;
  border-color: ${(props) => (props.cart ? "red" : "#f15a22")};
  color: ${(props) => (props.cart ? "red" : "#f15a22")};
  border-radius: 0.5rem;
  padding: 0.2rem 0.5rem;
  cursor: pointer;
  margin: 0.2rem 0.5rem 0.2rem 0;
  transition: all 0.5s ease-in-out;
  &:hover {
    background: ${(props) => (props.cart ? "red" : "#f15a22")};
    color: #fff;
  }
  &:focus {
    outline: none;
  }
`;
