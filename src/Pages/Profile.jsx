import {
  Column,
  ContainerHeader,
  FormControl,
  Hr,
  Input,
  Label,
  MainContainer,
  TextArea,
  Image,
  FullImageBox,
  FormWrapper,
  Form,
  InputFile,
} from "../components/StyledComponents";
import { Button } from "../components/Button";
import { MdSave } from "react-icons/md";
import { useEffect, useState } from "react";
import { usePortfolioContext } from "../context/portfolioContext";

export const Profile = () => {
  const { updateProfile, portfolio } = usePortfolioContext();

  const [avatarPreview, setAvatarPreview] = useState();
  const [profile, setProfile] = useState({ ...portfolio });

  const handleInput = (e) => {
    if (e.target.name === "avatar") {
      const file = e.target.files[0];
      setAvatarPreview(URL.createObjectURL(file));
      setProfile({ ...profile, avatar: file });
    } else {
      setProfile({ ...profile, [e.target.name]: e.target.value.trim() });
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    updateProfile(profile);
  };

  return (
    <MainContainer>
      <ContainerHeader>Update Profile</ContainerHeader>
      <Hr />
      <Form onSubmit={handleSubmit}>
        <FormWrapper>
          <Column>
            <FormControl>
              <Label>Full Name</Label>
              <Input
                type="text"
                name="name"
                placeholder="Full Name"
                required
                onChange={handleInput}
                value={profile.name}
              />
            </FormControl>
            <FormControl>
              <Label>Position</Label>
              <Input
                type="text"
                name="designation"
                placeholder="Designation"
                required
                onChange={handleInput}
                value={profile.designation}
              />
            </FormControl>
            <FormControl>
              <Label>Email</Label>
              <Input
                type="email"
                inputMode="email"
                name="email"
                placeholder="Email"
                required
                onChange={handleInput}
                value={profile.email}
              />
            </FormControl>
            <FormControl>
              <Label>Mobile</Label>
              <Input
                type="number"
                name="mobile"
                placeholder="Mobile"
                required
                onChange={handleInput}
                value={profile.mobile}
              />
            </FormControl>
            <FormControl>
              <Label>Address</Label>
              <TextArea
                name="address"
                placeholder="Address"
                required
                onChange={handleInput}
                value={profile.address}
              />
            </FormControl>
            <FormControl>
              <Label>About Me</Label>
              <TextArea
                name="about"
                placeholder="Brief Intro"
                required
                onChange={handleInput}
                value={profile.about}
              />
            </FormControl>
          </Column>
          <Column>
            <FullImageBox>
              <Image src={avatarPreview || profile.avatar} />
            </FullImageBox>
            <InputFile
              type="file"
              name="avatar"
              accept="image/jpg, image/jpeg, image/png"
              onChange={handleInput}
              required
            />
          </Column>
        </FormWrapper>
        <Button type="submit">
          {" "}
          <MdSave /> Update
        </Button>
      </Form>
    </MainContainer>
  );
};
