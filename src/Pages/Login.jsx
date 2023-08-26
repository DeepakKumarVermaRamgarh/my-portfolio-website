import { Button } from "../components/Button";
import { MdArrowCircleLeft, MdOutlineLogin } from "react-icons/md";
import { Link, useNavigate } from "react-router-dom";
import {
  Body,
  Form,
  Input,
  SubTitle,
  Title,
  Wrapper,
} from "../components/StyledComponents";
import { useEffect, useState } from "react";
import { useContextValue } from "../context/userContext";

export const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const navigate = useNavigate();
  const { user, signUp, signIn } = useContextValue();

  const handleLogin = (e) => {
    e.preventDefault();
    signIn(email, password);
  };

  useEffect(() => {
    if (user) navigate("/admin/dashboard");
  }, [user]);

  return (
    <Body>
      <Wrapper>
        <SubTitle> Login First To Continue On Dashboard </SubTitle>
        <Title>Login Here</Title>
        <Form onSubmit={handleLogin} autoComplete="true" autoCapitalize="true">
          <Input
            type="email"
            inputMode="email"
            placeholder="Registered Email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
          />
          <Input
            type="password"
            inputMode="text"
            placeholder="Password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
          />

          <Button type="submit">
            {" "}
            <MdOutlineLogin /> Login{" "}
          </Button>
          <Link to={'/'} >
            <Button>
              {" "}
              <MdArrowCircleLeft /> Back To Home{" "}
            </Button>
          </Link>
        </Form>
      </Wrapper>
    </Body>
  );
};
