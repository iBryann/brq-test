import styled from "styled-components";

export const ButtonContainer = styled.button`
  padding: 0.2rem 2rem;
  border: none;
  font-weight: 400;
  font-size: 1rem;
  line-height: 2rem;
  letter-spacing: 0.5px;
  color: ${({ theme }) => theme.colors.button.text};
  background-color: ${({ theme }) => theme.colors.button.background};
  transition: background-color 0.2s;

  &:hover {
    background-color: ${({ theme }) => theme.colors.button.hover};
    cursor: pointer;
  }
`;
