import { styled } from "styled-components";

const StyledCard = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: 0.4rem;
  padding: 20px;
  max-width: fit-content;
  border-radius: 5px;
  border: 1px solid ${({ theme }) => theme.blueDark};
  background-color: ${({ theme }) => theme.blueDark};

  svg {
    font-size: 30px;
    color: ${({ theme }) => theme.blue};
  }

  h4 {
    color: ${({ theme }) => theme.secondary};
  }

  &:hover {
    background-color: ${({ theme }) => theme.bg};
  }
`;

export const Card = ({ icon, title, subTitle }) => {
  return (
    <StyledCard>
      {icon}
      <h3>{title}</h3>
      <h4>{subTitle}</h4>
    </StyledCard>
  );
};
