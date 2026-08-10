import{ Box, Button, IconButton, Typography, useTheme, Divider } from "@mui/material";
import { ColorModeContext, useMode } from "../../theme";
import { CssBaseline, ThemeProvider } from "@mui/material";
import { motion } from "framer-motion";
import { Routes, Route, BrowserRouter} from "react-router-dom";
import { tokens } from "../../theme";
import Topbar from "../../scenes/global/Topbar";
import CPlusPlusLogo from "../../logos/c-.png";
import JavaScriptLogo from "../../logos/java-script.png";
import JavaLogo from "../../logos/java.png";
import CloudLogo from "../../logos/cloud-data-distribution.png";
import mySQLLogo from "../../logos/mysql-database.png";
import VisualStudioLogo from "../../logos/logo.png";
import GitHubLogo from "../../logos/github.png";
import HTMLLogo from "../../logos/html.png";
import CSSLogo from "../../logos/css.png";
import PythonLogo from "../../logos/python.png";
import VSCodeLogo from "../../logos/vscode.png";
import UbuntuLogo from "../../logos/ubuntu.png";
import LinuxLogo from "../../logos/linux.png";
import ChatGPTLogo from "../../logos/chatgpt.png";
import MUILogo from "../../logos/mui-seeklogo.png";
import FlaskLogo from "../../logos/icons8-flask-96.png";
import ReactLogo from "../../logos/react.png"
import CommunicationIcon from "../../logos/icons8-communication-100.png";
import TeamworkIcon from "../../logos/support.png";
import TID from "../../logos/TID.png";
import TIDLogo from "../../logos/a1zsggbtvdxjuviafaoa-978878750.png";
import SkillButton from "../../components/SkillButton";
import Bread1 from "../../logos/bread1.png";
import Bread2 from "../../logos/bread2.png";
import ProjectCard from "../../components/ProjectCard";
import JobCard from"../../components/JobCard";
import PortfolioWebsite from "../../logos/Landingpage.png";
import LandingPage from "../../components/LandingPage";
import AboutMe from "../../components/AboutMe";
import Skills from "../../components/Skills";
import ContactForm from "../../components/Contact";
import Me from "../../logos/163.jpg";
import MeAgain from "../../logos/116.jpg";
// import Login from "./scenes/login";
// import SignIn from "./scenes/signin";

{/* <SkillButton icon={<img src={CloudLogo} alt="Cloud Logo" height="20" width="20"/>} label="Distributed Software"/>
 */}

function Home() {
  const [theme, colorMode] = useMode();
  const colors = tokens(theme.palette.mode);
  const MotionBox = motion(Box);
  const MotionImg = motion("img");
  const MotionDivider = motion(Divider);

  return (
    <ColorModeContext.Provider value ={colorMode}>
      <ThemeProvider theme={theme}>
       <CssBaseline />
          <div className="app">
            <main className="content">
              <Box
                display="flex"
                flexDirection="column"
                justifyContent="center"
                gap="50px"
                >

                {/* Landing */}
                
                <LandingPage image={Me} alt="Me :3"/>

                {/* Landing */}

                <MotionDivider
                  textAlign="left"
                  initial={{ opacity: 0, y: 30}}
                  whileInView={{ opacity: 1, y: 0}}
                  transition={{ duration: 0.6, delay: 0.2}}
                  viewport={{ amount: 0.1, once: true }}
                >
                  <Typography>About Me</Typography>
                </MotionDivider>
                
                {/* About Me */}

                <AboutMe image={MeAgain} alt="Me Again :3"/>
                  
                {/*About Me */}

                <MotionDivider
                  textAlign="left"
                  initial={{ opacity: 0, y: 30}}
                  whileInView={{ opacity: 1, y: 0}}
                  transition={{ duration: 0.6, delay: 0.2}}
                  viewport={{ amount: 0.5, once: true }}

                >
                  <Typography>Skills</Typography>
                </MotionDivider>

                {/* Skills */}

                <Skills
                  languages={[
                    <SkillButton icon={<img src={CPlusPlusLogo} alt="C++ Logo" height="30" width="30"/>} label="C++"/>, 
                    <SkillButton icon={<img src={JavaScriptLogo} alt="JS Logo" height="30" width="30"/>} label="JavaScript"/>,
                    <SkillButton icon={<img src={JavaLogo} alt="Java Logo" height="30" width="30"/>} label="Java"/>,
                    <SkillButton icon={<img src={PythonLogo} alt="Python Logo" height="30" width="30"/>} label="Python"/>,
                    <SkillButton icon={<img src={HTMLLogo} alt="HTML Logo" height="30" width="30"/>} label="HTML"/>,
                    <SkillButton icon={<img src={CSSLogo} alt="CSS Logo" height="30" width="30"/>} label="CSS"/>
                  ]}
                  software={[
                    <SkillButton icon={<img src={mySQLLogo} alt="MySQL Logo" height="30" width="30"/>} label="mySQL"/>,
                    <SkillButton icon={<img src={VisualStudioLogo} alt="Visual Studio Logo" height="30" width="30"/>} label="Visual Studio"/>,
                    <SkillButton icon={<img src={GitHubLogo} alt="GitHub Logo" height="30" width="30"/>} label="GitHub"/>,
                    <SkillButton icon={<img src={VSCodeLogo} alt="VSCode Logo" height="30" width="30"/>} label="Visual Studio Code"/>,
                    <SkillButton icon={<img src={FlaskLogo} alt="Flask Logo" height="30" width="30"/>} label="FlaskAPI"/>,
                    <SkillButton icon={<img src={MUILogo} alt="MaterialUI Logo" height="30" width="30"/>} label="Material UI"/>,
                    <SkillButton icon={<img src={ChatGPTLogo} alt="ChatGPT Logo" height="30" width="30"/>} label="ChatGPT  "/>,
                    <SkillButton icon={<img src={ReactLogo} alt="React Logo" height="30" width="30"/>} label="React"/>
                  ]}
                  other={[
                    <SkillButton icon={<img src={LinuxLogo} alt="Linux Logo" height="30" width="30"/>} label="Linux"/>,
                    <SkillButton icon={<img src={UbuntuLogo} alt="Ubuntu Logo" height="30" width="30"/>} label="Ubuntu"/>,
                    <SkillButton icon={<img src={CommunicationIcon} alt="Communication Icon" height="30" width="30"/>} label="Communication"/>,
                    <SkillButton icon={<img src={TeamworkIcon} alt="Teamwork Icon" height="30" width="30"/>} label="Teamwork" />,
                    <SkillButton icon={<img src={CloudLogo} alt="Distributed Software Icon" height="30" width="30"/>} label="Distributed Software" />

                  ]}
                />
                {/* Skills */}

                <MotionDivider
                  textAlign="left"
                  initial={{ opacity: 0, y: 30}}
                  whileInView={{ opacity: 1, y: 0}}
                  transition={{ duration: 0.6, delay: 0.2}}
                  viewport={{ amount: 0.5, once: true }}

                >
                  <Typography>Portfolio</Typography>
                </MotionDivider>

                {/* Portfolio */}

                <ProjectCard
                  image={PortfolioWebsite}
                  title="Liliana Cygnet Personal Website"
                  description="The website you’re on right now!  Developed by me as a way to demonstrate my coding skills and to serve as a resumé"
                  skills={[
                    <SkillButton icon={<img src={MUILogo} alt="MaterialUI Logo" height="20" width="20"/>} label="Material UI"/>,
                    <SkillButton icon={<img src={JavaScriptLogo} alt="JS Logo" height="20" width="20"/>} label="JavaScript"/>,
                    <SkillButton icon={<img src={ReactLogo} alt="React Logo" height="20" width="20"/>} label="React"/>,
                    <SkillButton icon={<img src={HTMLLogo} alt="HTML Logo" height="20" width="20"/>} label="HTML"/>,
                    <SkillButton icon={<img src={CSSLogo} alt="CSS Logo" height="20" width="20"/>} label="CSS"/>,
                    <SkillButton icon={<img src={VSCodeLogo} alt="VSCode Logo" height="20" width="20"/>} label="Visual Studio Code"/>
                  ]}    
                />
                <ProjectCard
                  image={TID}
                  title="Turlock Irrigation District Web App"
                  description="Web app created for Turlock Irrigation District used to manage water orders for farmers in the surrounding areas.  Workers at TID were expected to record data collected in the field and then transfer it to the office database manually; the app seeks to solve this issue by allowing data to be automatically uploaded to the office as it is collected.  Designed and developed by a team including me and 4 others using React, FlaskAPI, and MySQL."
                  skills={[
                    <SkillButton icon={<img src={MUILogo} alt="MaterialUI Logo" height="20" width="20"/>} label="Material UI"/>,
                    <SkillButton icon={<img src={JavaScriptLogo} alt="JS Logo" height="20" width="20"/>} label="JavaScript"/>,
                    <SkillButton icon={<img src={ReactLogo} alt="React Logo" height="20" width="20"/>} label="React"/>,
                    <SkillButton icon={<img src={FlaskLogo} alt="Flask Logo" heigh="20" width="20"/>} label="FlaskAPI"/>,
                    <SkillButton icon={<img src={mySQLLogo} alt="MySQL Logo" heigh="20" width="20"/>} label="MySQL"/>


                  ]}
                />  
                {/* Portfolio */}

                <MotionDivider
                  textAlign="left"
                  initial={{ opacity: 0, y: 30}}
                  whileInView={{ opacity: 1, y: 0}}
                  transition={{ duration: 0.6, delay: 0.2}}
                  viewport={{ amount: 0.5, once: true }}

                >
                  <Typography>Job History</Typography>
                </MotionDivider>

                {/* Job History */}

                <JobCard
                  image={TIDLogo}
                  title="Turlock Irrigation District"
                  role="Backend Intern"
                  date="1-1-24 to 5-5-24"
                  location="2944 3rd St, Ceres, CA 95307"
                  description="This opportunity was provided by the University of California School of Engineering as part of the Software Engineering course.  Development used a multi-stage waterfall methodology including research, systems analysis and preliminary design, and finally development.  My development tasks for this project included research, API design and deployment, data manipulation, and presentation to clients."
                  skills={[
                    <SkillButton icon={<img src={ReactLogo} alt="React Logo" height="20" width="20"/>} label="React"/>,
                    <SkillButton icon={<img src={PythonLogo} alt="Python Logo" height="30" width="30"/>} label="Python"/>,
                    <SkillButton icon={<img src={HTMLLogo} alt="HTML Logo" height="30" width="30"/>} label="HTML"/>,
                    <SkillButton icon={<img src={CSSLogo} alt="CSS Logo" height="30" width="30"/>} label="CSS"/>,
                    <SkillButton icon={<img src={JavaScriptLogo} alt="JS Logo" height="30" width="30"/>} label="JavaScript"/>,
                    <SkillButton icon={<img src={mySQLLogo} alt="MySQL Logo" height="30" width="30"/>} label="mySQL"/>,
                    <SkillButton icon={<img src={VisualStudioLogo} alt="Visual Studio Logo" height="30" width="30"/>} label="Visual Studio"/>,
                    <SkillButton icon={<img src={GitHubLogo} alt="GitHub Logo" height="30" width="30"/>} label="GitHub"/>,
                    <SkillButton icon={<img src={VSCodeLogo} alt="VSCode Logo" height="30" width="30"/>} label="Visual Studio Code"/>,
                    <SkillButton icon={<img src={FlaskLogo} alt="Flask Logo" height="30" width="30"/>} label="FlaskAPI"/>,
                    ]}
                  />

                {/* Job History */}

                <MotionDivider
                  textAlign="left"
                  initial={{ opacity: 0, y: 30}}
                  whileInView={{ opacity: 1, y: 0}}
                  transition={{ duration: 0.6, delay: 0.2}}
                  viewport={{ amount: 0.5, once: true }}

                >
                  <Typography></Typography>
                </MotionDivider>

                {/* Contact Form */}

                <ContactForm/>
                    
              </Box>
            </main>
          </div>
      </ThemeProvider>
     </ColorModeContext.Provider>
  );
}

export default Home;
