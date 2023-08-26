import { styled } from "styled-components";

const StyledButton = styled.button`
  background-color: transparent;
  border: 2px solid ${({ theme }) => theme.soft};
  color: ${({ theme }) => theme.blue};
  transition: color, border, background-color 0.3s;
  border-radius: 5px;
  max-width: fit-content;

  display: flex;
  align-items: center;
  justify-content: center;
  gap: 0.8rem;

  svg {
    font-size: 20px;
  }

  &:hover {
    border: 2px solid ${({ theme }) => theme.blue};
    background-color: ${({ theme }) => theme.blue};
    color: ${({ theme }) => theme.text};
  }
`;

export const Button = ({ children }) => {
  return <StyledButton>{children}</StyledButton>;
};
