import { SiCodingninjas, SiGithub, SiLinkedin } from "react-icons/si";
import { MdArrowDownward, MdFolder } from "react-icons/md";
import {
  RiContactsLine,
  RiDownload2Line,
  RiHome8Line,
  RiMailLine,
  RiPhoneLine,
  RiSendPlaneLine,
  RiUser2Fill,
} from "react-icons/ri";
import { Button } from "../components/Button";
import { SectionTitle } from "../components/SectionTitle";

import { Card } from "../components/Card";
import { SkillCard } from "../components/SkillCard";
import { ProjectCard } from "../components/ProjectCard";

import { Link as RouterLink } from "react-router-dom";
import {
  About,
  Address,
  Avatar,
  AvatarImg,
  Body,
  Box,
  CerImgBox,
  CertificateWrapper,
  CertificationSection,
  ContactForm,
  ContactSection,
  Details,
  Footer,
  Header,
  HeaderButtons,
  HeaderContent,
  HeaderScroll,
  Icon,
  Icons,
  Image,
  ImgBox,
  ImgLabel,
  Info,
  Input,
  Link,
  LinkIcon,
  LinkIcons,
  Links,
  Message,
  ProjectSection,
  Projects,
  SkillSection,
  Text,
} from "../components/HomeStyledComponents";

import { usePortfolioContext } from "../context/portfolioContext";
import emailjs from "emailjs-com";
import { toast } from "react-toastify";

export const Home = () => {
  const { portfolio } = usePortfolioContext();

  const handleScroll = () => {
    let scrollDelay = setInterval(() => {
      window.scrollBy(0, 50);
      if (window.innerHeight + window.pageYOffset >= document.body.offsetHeight)
        clearInterval(scrollDelay);
    }, 300);
  };

  const sendMail = async (e) => {
    e.preventDefault();

    emailjs
      .sendForm(
        import.meta.env.VITE_SERVICE_ID,
        import.meta.env.VITE_TEMPLATE_ID,
        e.target,
        import.meta.env.VITE_USER_ID
      )
      .then((res) => {
        toast.success("Thank You For Contacting");
        toast.success("I will respond you ASAP :)");
        e.target.reset();
      })
      .catch((err) => {
        toast.error(err.message);
      });
  };

  return (
    <>
      <Body>
        <Header>
          <LinkIcons>
            <LinkIcon href={portfolio?.linkedIn} target="_blank">
              {" "}
              <SiLinkedin />{" "}
            </LinkIcon>
            <LinkIcon href={portfolio?.gitHub} target="_blank">
              {" "}
              <SiGithub />{" "}
            </LinkIcon>
            <LinkIcon href={portfolio?.codingNinjas} target="_blank">
              {" "}
              <SiCodingninjas />{" "}
            </LinkIcon>
            <RouterLink to="/login">
              <RiUser2Fill />
            </RouterLink>
          </LinkIcons>

          <HeaderContent>
            <h3>Hello I'm </h3>
            <h1>{portfolio?.name}</h1>
            <h3>{portfolio?.designation}</h3>

            <HeaderButtons>
              <RouterLink
                to={portfolio?.resume}
                target="_blank"
                download="Deepak's Resume"
                rel="noopener noreferrer"
                title="Deepak's Resume"
              >
                <Button>
                  {" "}
                  <RiDownload2Line /> Download CV
                </Button>
              </RouterLink>
              <a href="#contact">
                <Button>
                  {" "}
                  <RiContactsLine /> Let's Talk
                </Button>
              </a>
            </HeaderButtons>
          </HeaderContent>

          <HeaderScroll onClick={handleScroll}>
            Scroll Down <MdArrowDownward />
          </HeaderScroll>
        </Header>

        <About id="about">
          <SectionTitle subTitle={"Get to know"} title={"About Me"} />
          <Details>
            <Avatar>
              <AvatarImg src={portfolio?.avatar} />
            </Avatar>
            <Info>
              <Card
                icon={<MdFolder />}
                title={"Projects"}
                subTitle={`${portfolio?.Projects.length} Completed Projects`}
              />
              <Text>{portfolio?.about}</Text>
              <Button>Let's Talk</Button>
            </Info>
          </Details>
        </About>

        <SkillSection id="skills">
          <SectionTitle title={"Skills"} subTitle={"The Skills I've"} />
          {/* <Details>
            <SkillCard
              title={"Front-end Development"}
              skills={["HTML", "CSS", "JavaScript", "SCSS", "React", "Redux"]}
            />
            <SkillCard
              title={"Back-end Development"}
              skills={["NodeJS", "Express", "MongoDB", "MySql"]}
            />
          </Details> */}
          <Box>
            {portfolio?.Skills?.map((skill, i) => (
              <ImgBox key={i}>
                <ImgLabel>{skill.title}</ImgLabel>
                <Image src={skill.thumb} />
              </ImgBox>
            ))}
          </Box>
        </SkillSection>

        <CertificationSection id="certificate">
          <SectionTitle
            title={"Certificates"}
            subTitle={"The Certificates I got"}
          />

          <Box>
            {portfolio?.Certificates?.map((certificate, i) => (
              <CertificateWrapper key={i}>
                <CerImgBox>
                  <ImgLabel>{certificate.title}</ImgLabel>
                  <Image src={certificate.thumb} />
                </CerImgBox>
                <span>{certificate.title}</span>
              </CertificateWrapper>
            ))}
          </Box>
        </CertificationSection>

        <ProjectSection id="project">
          <SectionTitle title={"Projects"} subTitle={"My Recent Works"} />
          <Projects>
            {portfolio?.Projects?.map((project, i) => (
              <ProjectCard
                key={i}
                img={project.thumb}
                title={project.title}
                desc={project.description}
                techs={project.technologies}
                gitLink={project.link}
              />
            ))}
          </Projects>
        </ProjectSection>

        <ContactSection id="contact">
          <SectionTitle
            title={"Contact Me"}
            subTitle={`I do receive your messages and will respond asap if the valid email is provided :)`}
          />

          <Details>
            <Address>
              <h4>
                <RiHome8Line /> {portfolio?.address}
              </h4>

              <a href={`mailto:${portfolio?.email}`}>
                <h4>
                  <RiMailLine /> {portfolio?.email}
                </h4>
              </a>
              <a href={`tel:+91${portfolio?.mobile}`}>
                <h4>
                  <RiPhoneLine /> +91 {portfolio?.mobile}
                </h4>
              </a>
            </Address>
            <ContactForm onSubmit={sendMail}>
              <Input
                type="text"
                inputMode="text"
                placeholder="Your Name"
                name="name"
                required
              />
              <Input
                type="email"
                inputMode="email"
                name="email"
                placeholder="Your Email"
                required
              />

              <Message
                type="text"
                inputMode="text"
                name="message"
                placeholder="Message Here..."
                required
              />
              <Button type="submit">
                {" "}
                <RiSendPlaneLine /> Send Message
              </Button>
            </ContactForm>
          </Details>
        </ContactSection>
      </Body>

      <Footer>
        <a href="#">
          <h1>{portfolio?.name}</h1>
        </a>
        <Links>
          <Link href="#">Home</Link>
          <Link href="#about">About</Link>
          <Link href="#skills">Skills</Link>
          <Link href="#project">Projects</Link>
          <Link href="#contact">Contact</Link>
        </Links>
        <Icons>
          <Icon href={portfolio?.gitHub} target="_blank">
            {" "}
            <SiGithub />{" "}
          </Icon>
          <Icon href={portfolio?.linkedIn} target="_blank">
            {" "}
            <SiLinkedin />{" "}
          </Icon>
          <Icon href={portfolio?.codingNinjas} target="_blank">
            {" "}
            <SiCodingninjas />{" "}
          </Icon>
        </Icons>
        &copy; Deepak Kumar Verma {new Date().getFullYear()}. All rights
        reserved.
      </Footer>
    </>
  );
};
