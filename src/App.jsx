import { ThemeProvider, styled } from "styled-components";
import { darkTheme, lightTheme } from "./config/theme";
import { useEffect, useState } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Home } from "./Pages/Home";
import { device } from "./config/breakPoints";
import { RiMoonFill, RiSunFill } from "react-icons/ri";
import { Login } from "./Pages/Login";
import { AdminRoutes } from "./components/AdminRoutes";
import { UserContextProvider } from "./context/userContext";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { PortfolioContextProvider } from "./context/portfolioContext";
import { PageNotFound } from "./Pages/PageNotFound";

const ThemeChanger = styled.div`
  position: fixed;
  top: 30px;
  right: 30px;
  width: 40px;
  height: 40px;
  font-size: 20px;
  display: grid;
  place-items: center;
  cursor: pointer;
  border-radius: 5px;
  transition: background-color 0.3s;
  color: ${({ theme }) => theme.text};
  z-index: 10;

  &:hover {
    background-color: ${({ theme }) => theme.soft};
  }

  @media ${device.sm} {
    top: 10px;
    right: 10px;
  }
`;

function App() {
  const [theme, setTheme] = useState(
    localStorage.getItem("portfolio-theme") || "darkTheme"
  );

  const changeTheme = () => {
    if (theme === "darkTheme") setTheme("lightTheme");
    else setTheme("darkTheme");
  };

  useEffect(() => {
    localStorage.setItem("portfolio-theme", theme);
  }, [theme]);

  return (
    <BrowserRouter>
      <UserContextProvider>
        <PortfolioContextProvider>
          <ThemeProvider theme={theme === "darkTheme" ? darkTheme : lightTheme}>
            <ThemeChanger onClick={changeTheme}>
              {theme === "darkTheme" ? <RiSunFill /> : <RiMoonFill />}
            </ThemeChanger>
            <ToastContainer />

            <Routes>
              <Route exact path="/" element={<Home />} />
              <Route exact path="/login" element={<Login />} />
              <Route exact path="/admin/*" element={<AdminRoutes />} />
              <Route exact path="*" element={<PageNotFound />} />
            </Routes>
          </ThemeProvider>
        </PortfolioContextProvider>
      </UserContextProvider>
    </BrowserRouter>
  );
}

export default App;
