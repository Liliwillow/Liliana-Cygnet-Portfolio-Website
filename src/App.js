import{ Box, Button, IconButton, Typography, useTheme, Divider } from "@mui/material";
import { ColorModeContext, useMode } from "./theme";
import { CssBaseline, ThemeProvider } from "@mui/material";
import { motion } from "framer-motion";
import { Routes, Route, BrowserRouter} from "react-router-dom";
import { tokens } from "./theme";
import Topbar from "./scenes/global/Topbar";
import CPlusPlusLogo from "./logos/c-.png";
import JavaScriptLogo from "./logos/java-script.png";
import JavaLogo from "./logos/java.png";
import CloudLogo from "./logos/cloud-data-distribution.png";
import mySQLLogo from "./logos/mysql-database.png";
import VisualStudioLogo from "./logos/logo.png";
import GitHubLogo from "./logos/github.png";
import HTMLLogo from "./logos/html.png";
import CSSLogo from "./logos/css.png";
import PythonLogo from "./logos/python.png";
import VSCodeLogo from "./logos/vscode.png";
import UbuntuLogo from "./logos/ubuntu.png";
import LinuxLogo from "./logos/linux.png";
import ChatGPTLogo from "./logos/chatgpt.png";
import MUILogo from "./logos/mui-seeklogo.png";
import FlaskLogo from "./logos/icons8-flask-96.png";
import ReactLogo from "./logos/react.png"
import CommunicationIcon from "./logos/icons8-communication-100.png";
import TeamworkIcon from "./logos/support.png";
import TID from "./logos/TID.png";
import TIDLogo from "./logos/a1zsggbtvdxjuviafaoa-978878750.png";
import SkillButton from "./components/SkillButton";
import Bread1 from "./logos/bread1.png";
import Bread2 from "./logos/bread2.png";
import ProjectCard from "./components/ProjectCard";
import JobCard from"./components/JobCard";
import PortfolioWebsite from "./logos/Landingpage.png";
import LandingPage from "./components/LandingPage";
import AboutMe from"./components/AboutMe";
import Skills from "./components/Skills";
import ContactForm from "./components/Contact";
// import Login from "./scenes/login";
// import SignIn from "./scenes/signin";
import Home from "./scenes/dashboard/Home";
import Register from "./scenes/authenticator/Register";

{/* <SkillButton icon={<img src={CloudLogo} alt="Cloud Logo" height="20" width="20"/>} label="Distributed Software"/>
 */}

 
                    

function App() {
  const [theme, colorMode] = useMode();


  return (
    <ColorModeContext.Provider value ={colorMode}>
      <ThemeProvider theme={theme}>
       <CssBaseline />
        <BrowserRouter>
          <div className="app">
            <main className="content">
              <Topbar />
              <Routes>
                <Route path="/" element={<Home />} />
                {/* <Route path="/login" element={<Login/> }/> */}
                <Route path="/register" element={<Register/>}/>
              </Routes>
            </main>
          </div>
        </BrowserRouter>
      </ThemeProvider>
     </ColorModeContext.Provider>
  );
}

export default App;
