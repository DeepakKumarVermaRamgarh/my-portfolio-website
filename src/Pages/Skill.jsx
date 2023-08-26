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
  Option,
  Select,
  TBody,
  THead,
  Table,
  TableImg,
  Td,
  Th,
  Tr,
} from "../components/StyledComponents";
import { Button } from "../components/Button";
import { MdDelete, MdEditDocument, MdSave } from "react-icons/md";
import { useState } from "react";
import { usePortfolioContext } from "../context/portfolioContext";

export const Skill = () => {
  const [skill, setSkill] = useState({});
  const [thumb, setThumb] = useState(null);

  const { addSkill, portfolio, removeSkill } = usePortfolioContext();

  const handleChange = (e) => {
    if (e.target.name === "file") {
      const file = e.target.files[0];
      setThumb(URL.createObjectURL(file));
      setSkill({ ...skill, thumb: file });
    } else {
      setSkill({
        ...skill,
        [e.target.name]: e.target.value.trim(),
      });
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const { title, category, thumb } = skill;
    if (title && category && thumb) {
      addSkill(skill);
      e.target.reset();
    }
  };

  const handleRemove = (skill) => {
    removeSkill(skill);
  };

  return (
    <MainContainer>
      <ContainerHeader>Update Skills</ContainerHeader>
      <Hr />
      <Form onSubmit={handleSubmit} autoCapitalize="true">
        <FormWrapper>
          <Column>
            <FormControl>
              <Label>Skill </Label>
              <Input
                placeholder="Skill"
                value={skill.title}
                onChange={handleChange}
                name="title"
                required
              />
            </FormControl>
            <FormControl>
              <Label>Category</Label>
              <Select
                name="category"
                value={skill.category}
                onChange={handleChange}
                defaultValue="frontend"
                required
              >
                <Option value="frontend">Front-End</Option>
                <Option value="backend">Back-End</Option>
                <Option value="dsa">DSA</Option>
                <Option value="database">Database</Option>
                <Option value="system design">System Design</Option>
              </Select>
            </FormControl>
          </Column>
          <Column>
            <FullImageBox style={{ width: "30%" }}>
              <Image src={thumb} />
            </FullImageBox>
            <InputFile
              type="file"
              accept="image/jpg, image/jpeg, image/png"
              name="file"
              onChange={handleChange}
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
      <Table>
        <THead>
          <Tr>
            <Th>Image</Th>
            <Th>Title</Th>
            <Th>Category</Th>
            <Th>Action</Th>
          </Tr>
        </THead>
        <TBody>
          {portfolio?.Skills?.map((skill, i) => (
            <Tr key={i}>
              <Td>
                <TableImg src={skill?.thumb} />
              </Td>
              <Td>{skill?.title}</Td>
              <Td>{skill?.category}</Td>
              <Td style={{ color: "crimson" }}>
                <MdDelete onClick={() => handleRemove(skill)} />
              </Td>
            </Tr>
          ))}
        </TBody>
      </Table>
    </MainContainer>
  );
};
