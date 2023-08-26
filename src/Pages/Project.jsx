import {
  Column,
  ContainerHeader,
  Form,
  FormControl,
  FormWrapper,
  FullImageBox,
  Hr,
  Image,
  Input,
  InputFile,
  Label,
  MainContainer,
  TBody,
  THead,
  Table,
  TableImg,
  TableWrapper,
  Td,
  TextArea,
  Th,
  Tr,
} from "../components/StyledComponents";
import { Button } from "../components/Button";
import { MdDelete, MdEditDocument, MdSave } from "react-icons/md";
import { useState } from "react";
import { usePortfolioContext } from "../context/portfolioContext";

export const Project = () => {
  const { portfolio, addProject, removeProject } = usePortfolioContext();

  const [project, setProject] = useState({});
  const [thumb, setThumb] = useState(null);

  const handleChange = (e) => {
    if (e.target.name === "file") {
      const file = e.target.files[0];
      setThumb(URL.createObjectURL(file));
      setProject({ ...project, thumb: file });
    } else {
      setProject({
        ...project,
        [e.target.name]: e.target.value.trim(),
      });
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const { title, description, technologies, thumb, link } = project;
    if ((title && description && technologies && thumb, link)) {
      addProject(project);
      setProject({});
    }
  };

  const handleRemove = (Project) => {
    removeProject(Project);
  };

  return (
    <MainContainer>
      <ContainerHeader>Update Projects</ContainerHeader>
      <Hr />
      <Form autoCapitalize="true" onSubmit={handleSubmit}>
        <FormWrapper>
          <Column>
            <FormControl>
              <Label>Project Title</Label>
              <Input
                placeholder="Title for project"
                name="title"
                value={project.title}
                onChange={handleChange}
                required
              />
            </FormControl>
            <FormControl>
              <Label>Project Description</Label>
              <TextArea
                style={{ height: "250px" }}
                placeholder="• Features of projects seperated by (.) operator."
                name="description"
                value={project.description}
                onChange={handleChange}
                required
              />
            </FormControl>
            <FormControl>
              <Label>Technologies</Label>
              <Input
                placeholder="Eg. React, Redux, NodeJS, MongoDB"
                name="technologies"
                value={project.technologies}
                onChange={handleChange}
                required
              />
            </FormControl>
            <FormControl>
              <Label>Technologies</Label>
              <Input
                placeholder="Github Link"
                type="url"
                name="link"
                value={project.link}
                onChange={handleChange}
                required
              />
            </FormControl>
          </Column>
          <Column>
            <FullImageBox>
              <Image src={thumb} />
            </FullImageBox>
            <InputFile
              type="file"
              name="file"
              onChange={handleChange}
              accept="image/jpg, image/jpeg, image/png"
              required
            />
          </Column>
        </FormWrapper>
        <Button type="submit">
          {" "}
          <MdSave /> Add
        </Button>
      </Form>

      <Hr />

      <TableWrapper>
        <Table>
          <THead>
            <Tr>
              <Th>Image</Th>
              <Th>Title</Th>
              <Th>Description</Th>
              <Th>Technology</Th>
              <Th>Action</Th>
            </Tr>
          </THead>
          <TBody>
            {portfolio?.Projects?.map((project, i) => (
              <Tr>
                <Td>
                  <TableImg src={project.thumb} />
                </Td>
                <Td>{project.title}</Td>
                <Td>{project.description}</Td>
                <Td>{project.technologies}</Td>

                <Td style={{ color: "crimson" }}>
                  <MdDelete onClick={() => handleRemove(project)} />
                </Td>
              </Tr>
            ))}
          </TBody>
        </Table>
      </TableWrapper>
    </MainContainer>
  );
};
