import { Link } from "react-router-dom";
import { Button } from "../components/Button";
import { Body, MainContainer, Title } from "../components/StyledComponents";
import { MdArrowCircleLeft } from "react-icons/md";

export const PageNotFound = () => {
  return (
    <Body style={{ flexDirection: "column", gap:"2rem" }}>
      <Title>404 Page Not Found</Title>
      <Link to={"/"}>
        <Button>
          {" "}
          <MdArrowCircleLeft /> Back To Home{" "}
        </Button>
      </Link>
    </Body>
  );
};
