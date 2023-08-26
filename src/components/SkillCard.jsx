import { styled } from "styled-components";
import { BsFillPatchCheckFill } from "react-icons/bs";
import { device } from "../config/breakPoints";

const StyledSkillCard = styled.div`
  flex: 1;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  border: 2px solid ${({ theme }) => theme.blueDark};
  background-color: ${({ theme }) => theme.blueDark};
  padding: 3rem;
  gap: 2rem;
  border-radius: 10px;
  max-height: 20rem;
  transition: border, background-color 0.3s;

  h2 {
    font-size: 20px;
    font-weight: 400;
    color: ${({ theme }) => theme.blue};
  }

  &:hover {
    border: 2px solid ${({ theme }) => theme.blue};
    background-color: ${({ theme }) => theme.bg};
  }

  @media ${device.xs}{
    padding:1rem;
  }

`;

const Skills = styled.div`
  display: flex;
  flex-direction: column;
  flex-wrap: wrap;
  gap: 2rem;
  width: 100%;
  height: 100%;

  @media ${device.sm} {
    flex-direction: row;
  }
`;

const Skill = styled.div`
  display: flex;
  align-items: center;
  justify-content: flex-start;
  gap: 1rem;
  font-weight: bold;
  flex: 1;

  svg {
    color: ${({ theme }) => theme.blue};
  }
`;

export const SkillCard = ({ title, skills = [] }) => {
  return (
    <StyledSkillCard>
      <h2>{title}</h2>
      <Skills>
        {skills.map((skill, index) => (
          <Skill key={index}>
            {" "}
            <BsFillPatchCheckFill /> {skill}
          </Skill>
        ))}
      </Skills>
    </StyledSkillCard>
  );
};
