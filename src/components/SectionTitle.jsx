import { styled } from "styled-components";

const StyledSectionTitle = styled.div`
  display: flex;
  align-items: center;
  flex-direction: column;
  margin-bottom: 20px;

  h2 {
    color: ${({ theme }) => theme.blue};
  }
`;

export const SectionTitle = ({ subTitle, title }) => {
  return (
    <StyledSectionTitle>
      <h4>{subTitle}</h4>
      <h2>{title}</h2>
    </StyledSectionTitle>
  );
};
