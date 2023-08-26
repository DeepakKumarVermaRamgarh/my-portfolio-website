import { styled } from "styled-components";
import { Button } from "./Button";
import { SiGithub } from "react-icons/si";
import { device } from "../config/breakPoints";

const StyledCard = styled.div`
  padding: 20px;
  border-radius: 20px;
  display: flex;
  flex-direction: column;
  gap: 0.8rem;
  background-color: ${({ theme }) => theme.bg};
  border: 1px solid ${({ theme }) => theme.soft};
  width: min(300px, 100%);
  transition: background-color, transform 0.3s;

  &:hover {
    background-color: ${({ theme }) => theme.blueDark};
    transform: translateY(-5px);
  }

  @media ${device.sm} {
    align-items: center;
  }
`;

const ImageBox = styled.div`
  height: 200px;
  border-radius: inherit;
  overflow: hidden;
`;

const ProjectImage = styled.img`
  width: 100%;
  height: 100%;
  object-position: center;
  object-fit: cover;
  transition: scale 0.3s;
  &:hover {
    scale: 1.2;
  }
`;

const ProjectTitle = styled.h3`
  text-align: center;
  color: ${({ theme }) => theme.blue};
`;

const ProjectDescription = styled.p`
  text-align: justify;
`;

const TechStacks = styled.div`
  font-weight: 500;
`;

export const ProjectCard = ({ img, title, desc, techs, gitLink }) => {
  return (
    <StyledCard>
      <ImageBox>
        <ProjectImage src={img} />
      </ImageBox>
      <ProjectTitle> {title} </ProjectTitle>
      <ProjectDescription> {desc} </ProjectDescription>

      <h4><u>Technology Used</u></h4>
      <em><TechStacks>{techs}</TechStacks></em>
      <a href={gitLink} target="_blank">
        <Button>
          {" "}
          <SiGithub /> GitHub{" "}
        </Button>
      </a>
    </StyledCard>
  );
};
