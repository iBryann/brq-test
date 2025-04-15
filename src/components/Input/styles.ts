import styled from "styled-components";

export const InputContainer = styled.input`
  padding: 0.5rem 0;
  background-color: transparent;
  border-radius: 0;
  border: none;
  border-bottom: 1px solid ${({ theme }) => theme.colors.border.primary};
  color: ${({ theme }) => theme.colors.text.primary};
  font-size: 13px;

  &:focus {
    outline: none;
    border-bottom: 1px solid ${({ theme }) => theme.colors.border.focus};
  }
`;
