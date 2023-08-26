import {
  Body,
  Card,
  Column,
  ContainerHeader,
  Count,
  FormWrapper,
  Hr,
  MainContainer,
  Title,
} from "../components/StyledComponents";

import { usePortfolioContext } from "../context/portfolioContext";

export const Dashboard = () => {
  const { portfolio } = usePortfolioContext();
  return (
    <MainContainer>
      <ContainerHeader>Dashboard</ContainerHeader>
      <Hr />
      <FormWrapper>
        <Column>
          <Card>
            <Title>Total Projects</Title>
            <Hr />
            <Count>{portfolio?.Projects?.length}</Count>
          </Card>
        </Column>
        <Column>
          <Card>
            <Title>Total Skills</Title>
            <Hr />
            <Count>{portfolio?.Skills?.length}</Count>
          </Card>
        </Column>
        <Column>
          <Card>
            <Title>Total Certificates</Title>
            <Hr />
            <Count>{portfolio?.Certificates?.length}</Count>
          </Card>
        </Column>
      </FormWrapper>
    </MainContainer>
  );
};
