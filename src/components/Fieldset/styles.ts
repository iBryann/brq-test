import styled from "styled-components";

export const FieldsetContainer = styled.fieldset`
  margin-bottom: 1.5rem;

  .fieldset-label {
    display: flex;
    flex-direction: column;
    font-size: 12px;
    font-weight: 700;
    color: ${({ theme }) => theme.colors.text.primary};
  }

  .fieldset-error {
    font-size: 12px;
    color: ${({ theme }) => theme.colors.text.error};
  }
`;
