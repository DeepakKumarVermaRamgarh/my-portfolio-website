import { Route, Routes } from "react-router-dom";
import { MenuBar } from "./Menu";
import { Dashboard } from "../Pages/Dashboard";
import { Body } from "./StyledComponents";
import { Profile } from "../Pages/Profile";
import { Social } from "../Pages/Social";
import { Project } from "../Pages/Project";
import { Certificate } from "../Pages/Certificate";
import { Skill } from "../Pages/Skill";
import { PageNotFound } from "../Pages/PageNotFound";

export const AdminRoutes = () => {
  return (
    <Body>
      <MenuBar />
      <Routes>
        <Route exact path="/dashboard" element={<Dashboard />} />
        <Route exact path="/profile" element={<Profile />} />
        <Route exact path="/social" element={<Social />} />
        <Route exact path="/project" element={<Project />} />
        <Route exact path="/certification" element={<Certificate />} />
        <Route exact path="/Skill" element={<Skill />} />
        <Route exact path="*" element={<PageNotFound />} />
      </Routes>
    </Body>
  );
};
