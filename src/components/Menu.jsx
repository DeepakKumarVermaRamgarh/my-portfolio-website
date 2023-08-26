import { NavLink, useNavigate } from "react-router-dom";
import { Image, ImageBox, LinkWrapper, Menu } from "./StyledComponents";
import {
  MdCardMembership,
  MdDashboard,
  MdLink,
  MdLogout,
  MdOutlinePower,
  MdVerifiedUser,
  MdWork,
} from "react-icons/md";
import { Button } from "./Button";
import { useEffect, useMemo } from "react";
import { useContextValue } from "../context/userContext";
import { usePortfolioContext } from "../context/portfolioContext";

export const MenuBar = () => {
  const navigate = useNavigate();
  const { user, logout } = useContextValue();
  const { portfolio } = usePortfolioContext();

  // useEffect(() => {
  //   if (user) {
  //     getPortfolio();
  //   }
  // }, [user,portfolio]);

  const handleLogout = () => {
    logout();
  };

  useEffect(() => {
    if (!user) navigate("/login");
  }, [user]);

  return (
    <Menu>
      <ImageBox>
        <Image src={portfolio?.avatar} />
      </ImageBox>
      <NavLink
        to="dashboard"
        style={({ isActive }) =>
          isActive
            ? {
                color: "green",
                backgroundColor: "lightsteelblue",
                fontWeight: "500",
              }
            : {}
        }
      >
        <LinkWrapper>
          <MdDashboard /> <span>Dashboard</span>
        </LinkWrapper>
      </NavLink>

      <NavLink
        to="profile"
        style={({ isActive }) =>
          isActive
            ? {
                color: "green",
                backgroundColor: "lightsteelblue",
                fontWeight: "500",
              }
            : {}
        }
      >
        <LinkWrapper>
          <MdVerifiedUser /> <span>Profile</span>
        </LinkWrapper>
      </NavLink>

      <NavLink
        to="social"
        style={({ isActive }) =>
          isActive
            ? {
                color: "green",
                backgroundColor: "lightsteelblue",
                fontWeight: "500",
              }
            : {}
        }
      >
        <LinkWrapper>
          <MdLink /> <span>Social</span>
        </LinkWrapper>
      </NavLink>

      <NavLink
        to="project"
        style={({ isActive }) =>
          isActive
            ? {
                color: "green",
                backgroundColor: "lightsteelblue",
                fontWeight: "500",
              }
            : {}
        }
      >
        <LinkWrapper>
          <MdWork /> <span>Projects</span>
        </LinkWrapper>
      </NavLink>

      <NavLink
        to="certification"
        style={({ isActive }) =>
          isActive
            ? {
                color: "green",
                backgroundColor: "lightsteelblue",
                fontWeight: "500",
              }
            : {}
        }
      >
        <LinkWrapper>
          <MdCardMembership /> <span>Certifications</span>
        </LinkWrapper>
      </NavLink>

      <NavLink
        to="skill"
        style={({ isActive }) =>
          isActive
            ? {
                color: "green",
                backgroundColor: "lightsteelblue",
                fontWeight: "500",
              }
            : {}
        }
      >
        <LinkWrapper>
          <MdOutlinePower /> <span>Skills</span>
        </LinkWrapper>
      </NavLink>

      <Button>
        <MdLogout onClick={handleLogout} /> <span>Logout</span>
      </Button>
    </Menu>
  );
};
