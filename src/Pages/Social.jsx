import { MdSave } from "react-icons/md";
import { Button } from "../components/Button";
import {
  ContainerHeader,
  Form,
  FormControl,
  FormWrapper,
  Hr,
  Input,
  InputFile,
  Label,
  MainContainer,
} from "../components/StyledComponents";
import { usePortfolioContext } from "../context/portfolioContext";
import { useState } from "react";
import { toast } from "react-toastify";
import validator from "validator";

export const Social = () => {
  const { portfolio, updateSocialLinks, updateResume } = usePortfolioContext();
  const [socials, setSocials] = useState({ ...portfolio });

  const handleChange = (e) => {
    setSocials({ ...socials, [e.target.name]: e.target.value.trim() });
  };

  const handleUpdate = (e) => {
    e.preventDefault();
    if (
      socials.linkedIn &&
      validator.isURL(socials.linkedIn) &&
      socials.gitHub &&
      validator.isURL(socials.gitHub) &&
      socials.codingNinjas &&
      validator.isURL(socials.codingNinjas)
    ) {
      updateSocialLinks(socials);
    } else {
      toast.error("Invalid Url");
      return;
    }
  };

  const uploadResume = (e) => {
    const file = e.target.files[0];
    if (file) {
      const done = updateResume(file);
      if (done) {
        e.target.value = "";
        toast.success("Resume Updated Successfully");
      }
    }
  };

  return (
    <MainContainer>
      <ContainerHeader>Update Social Links</ContainerHeader>
      <Hr />
      <Form onSubmit={handleUpdate}>
        <FormWrapper style={{ flexDirection: "column" }}>
          <FormControl>
            <Label>Linked In</Label>
            <Input
              type="url"
              inputMode="url"
              placeholder="LinkedIn Profile URL"
              name="linkedIn"
              value={socials.linkedIn}
              onChange={handleChange}
            />
          </FormControl>
          <FormControl>
            <Label>GitHub</Label>
            <Input
              type="url"
              inputMode="url"
              placeholder="GitHub Profile URL"
              name="gitHub"
              value={socials.gitHub}
              onChange={handleChange}
            />
          </FormControl>
          <FormControl>
            <Label>Coding Ninjas</Label>
            <Input
              type="url"
              inputMode="url"
              placeholder="Coding Ninjas Profile URL"
              name="codingNinjas"
              value={socials.codingNinjas}
              onChange={handleChange}
            />
          </FormControl>
        </FormWrapper>

        <Button type="submit">
          {" "}
          <MdSave /> Update
        </Button>
      </Form>

      <Hr />

      <FormControl>
        <Label for="">Change Resume</Label>
        <InputFile
          type="file"
          name="resume"
          accept="application/pdf"
          onChange={uploadResume}
        />
      </FormControl>
    </MainContainer>
  );
};
