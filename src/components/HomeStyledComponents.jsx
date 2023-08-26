import { device } from "../config/breakPoints";
import { styled } from "styled-components";

export const Body = styled.div`
  background-color: ${({ theme }) => theme.bg};
  color: ${({ theme }) => theme.text};
  width: 100vw;
  min-height: 100vh;
  padding: 8rem;
  display: flex;
  flex-direction: column;
  gap: 8rem;

  @media ${device.lg} {
    padding: 50px 15px;
  }
`;

export const Header = styled.header`
  display: flex;
  margin-inline: auto;
  width: 80%;
  text-align: center;

  @media ${device.sm} {
    width: 100%;
  }
`;

export const LinkIcons = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  gap: 0.8rem;
`;

export const LinkIcon = styled.a`
  &:hover {
    color: ${({ theme }) => theme.blue};
    scale: 1.2;
  }
`;

export const HeaderContent = styled.div`
  flex: 1;
  display: flex;
  flex-direction: column;
  gap: 0.5rem;
`;

export const HeaderButtons = styled.div`
  display: flex;
  gap: 1rem;
  align-items: center;
  justify-content: center;
`;

export const HeaderScroll = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  writing-mode: vertical-rl;
  touch-action: none;
  user-select: none;
  gap: 0.8rem;
  cursor: pointer;
  color: ${({ theme }) => theme.blue};
  font-weight: bold;
  animation: updown 0.5s infinite alternate;

  @keyframes updown {
    100% {
      transform: translateY(20px);
    }
  }
`;

export const About = styled.section``;

export const Details = styled.div`
  display: flex;
  gap: 4rem;
  justify-content: space-between;

  @media ${device.sm} {
    flex-direction: column;
  }
`;

export const Avatar = styled.div`
  flex: 1;
`;

export const AvatarImg = styled.img`
  width: 100%;
  object-fit: contain;
`;

export const Info = styled.div`
  flex: 1;
  display: flex;
  flex-direction: column;
  justify-content: space-between;

  @media ${device.sm} {
    align-items: center;
    gap: 1rem;
  }
`;

export const Text = styled.p`
  color: ${({ theme }) => theme.textSoft};
  font-weight: 600;
  line-height: 2;
  text-align: justify;
  font-size: 16px;
`;

export const SkillSection = styled.section``;
export const ProjectSection = styled.section``;

export const Box = styled.div`
  display: flex;
  justify-content: space-evenly;
  flex-wrap: wrap;
  gap: 5rem;
`;
export const ImgBox = styled.div`
  width: 120px;
  height: 120px;

  position: relative;
  display: grid;
  place-items: center;
  overflow: hidden;

  &:hover span {
    display: inline-block;
  }

  &:hover img {
    filter: blur(5px);
  }
`;
export const Image = styled.img`
  object-fit: cover;
  width: 100%;
  height: 100%;
  object-position: center;
  cursor: pointer;
  transition: filter, scale 0.3s;
`;
export const ImgLabel = styled.span`
  position: absolute;
  font-weight: 600;
  font-size: 1.5em;
  z-index: 2;
  filter: unset;
  display: none;
`;

export const CertificationSection = styled.section``;
export const CertificateWrapper = styled.div`
  text-align: center;
  display: flex;
  flex-direction: column;
  gap: 0.8rem;
`;
export const CerImgBox = styled.div`
  width: 300px;
  height: 200px;
  position: relative;
  display: grid;
  place-items: center;
  overflow: hidden;
  border-radius: 10px;

  &:hover img {
    scale: 1.2;
  }
`;

export const Projects = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  flex-wrap: wrap;
  gap: 2rem;
`;

export const ContactSection = styled.section`
  @media ${device.sm} {
    align-items: center;
    text-overflow: wrap;
    text-align: center;
  }
`;
export const Address = styled.address`
  width: 50%;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: center;
  gap: 1rem;
  margin-inline: auto;
  line-height: 2;

  h4 {
    display: flex;
    align-items: center;
    gap: 1rem;
  }

  svg {
    font-size: 20px;
  }

  @media ${device.sm} {
    width: 60%;
    align-items: center;
    text-overflow: wrap;
    text-align: center;
  }

  @media ${device.xs} {
    width: 100%;
  }
`;
export const ContactForm = styled.form`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  width: 50%;
  border-radius: 10px;
  padding: 20px;
  gap: 0.8rem;
  border: 2px solid ${({ theme }) => theme.soft};

  @media ${device.sm} {
    width: 100%;
  }
`;
export const Input = styled.input`
  width: 100%;
  border: 2px solid ${({ theme }) => theme.soft};
  border-radius: 5px;
  outline: 0;
  height: 50px;
  font-size: 16px;
  padding-inline: 20px;
  background-color: ${({ theme }) => theme.soft};
  color: ${({ theme }) => theme.text};

  &::placeholder {
    color: ${({ theme }) => theme.textSoft};
  }
`;
export const Message = styled.textarea`
  width: 100%;
  border: 2px solid ${({ theme }) => theme.soft};
  border-radius: 5px;
  outline: 0;
  height: 200px;
  font-size: 16px;
  padding: 20px;
  background-color: ${({ theme }) => theme.soft};
  color: ${({ theme }) => theme.text};
  font: inherit;
  resize: none;

  &::placeholder {
    color: ${({ theme }) => theme.textSoft};
  }
`;

export const Footer = styled.footer`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 5rem;
  background-color: ${({ theme }) => theme.blue};
  transition: color 0.3s;
  gap: 0.8rem;

  a:hover {
    color: #fff;
  }

  @media ${device.sm} {
    padding: 1rem;
  }

  @media ${device.xs} {
    h1 {
      font-size: 20px;
    }
  }
`;
export const Links = styled.div`
  display: flex;
  gap: 1rem;
  @media ${device.xs} {
    font-size: 14px;
  }
`;
export const Link = styled.a`
  font-weight: 500;
`;
export const Icons = styled.div`
  display: flex;
  gap: 1rem;
`;
export const Icon = styled.a`
  background-color: #000;
  width: 50px;
  height: 50px;
  border-radius: 10px;
  color: #fff;
  font-size: 25px;
  display: grid;
  place-items: center;
  border: 2px solid #000;
  transition: color, background-color 0.3s;

  &:hover {
    background-color: transparent;
    color: ${({ theme }) => theme.blue};
    border: 2px solid #fff;
  }

  @media ${device.xs} {
    width: 40px;
    height: 40px;
  }
`;
