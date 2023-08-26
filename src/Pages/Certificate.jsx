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
  TableWrapper,
  Td,
  Th,
  Tr,
} from "../components/StyledComponents";
import { Button } from "../components/Button";
import { MdDelete, MdEditDocument, MdSave } from "react-icons/md";
import { usePortfolioContext } from "../context/portfolioContext";
import { useEffect, useState } from "react";
import validator from "validator";

export const Certificate = () => {
  const date = new Date();
  const today = date.toISOString().split("T")[0];

  const { portfolio, addCertificate, removeCertificate } =
    usePortfolioContext();

  const [certificate, setCertificate] = useState({});
  const [thumb, setThumb] = useState(null);

  const handleChange = (e) => {
    if (e.target.name === "file") {
      const file = e.target.files[0];
      setThumb(URL.createObjectURL(file));
      setCertificate({ ...certificate, thumb: file });
    } else {
      setCertificate({
        ...certificate,
        [e.target.name]: e.target.value.trim(),
      });
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const { title, date, category, thumb } = certificate;
    if (title && date && category && thumb) {
      addCertificate(certificate);
      e.target.reset();
    }
  };

  const handleRemove = (certificate) => {
    removeCertificate(certificate);
  };

  return (
    <MainContainer>
      <ContainerHeader>Update Certificates</ContainerHeader>
      <Hr />
      <Form autoCapitalize="true" onSubmit={handleSubmit}>
        <FormWrapper>
          <Column>
            <FormControl>
              <Label>Certificate Name</Label>
              <Input
                placeholder="Title of Certificate."
                name="title"
                value={certificate.title}
                onChange={handleChange}
                required
              />
            </FormControl>
            <FormControl>
              <Label>Certified Date</Label>
              <Input
                type="date"
                max={today}
                placeholder="Title of Certificate."
                name="date"
                value={certificate.date}
                onChange={handleChange}
                required
              />
            </FormControl>
            <FormControl>
              <Label>Category</Label>
              <Select
                name="category"
                value={certificate.category}
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

      <TableWrapper>
        <Table>
          <THead>
            <Tr>
              <Th>Image</Th>
              <Th>Name</Th>
              <Th>Category</Th>
              <Th>Date</Th>
              <Th>Action</Th>
            </Tr>
          </THead>
          <TBody>
            {portfolio?.Certificates?.map((certificate, i) => (
              <Tr key={i}>
                <Td>
                  <TableImg src={certificate.thumb} />
                </Td>
                <Td>{certificate.title}</Td>
                <Td>{certificate.category}</Td>
                <Td>{certificate.date}</Td>
                <Td style={{ color: "crimson" }}>
                  <MdDelete onClick={() => handleRemove(certificate)} />
                </Td>
              </Tr>
            ))}
          </TBody>
        </Table>
      </TableWrapper>
    </MainContainer>
  );
};
