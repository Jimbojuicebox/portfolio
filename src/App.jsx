import React, { useState } from "react"
import { ThemeProvider } from "styled-components"
import { theme } from "./utils/Theme"
import { MainBody, Container, FadeImage } from './styles/Global.styled'

import Showcase from "./components/Showcase"
import MySkills from "./components/MySkills"
import MyProjects from "./components/MyProjects"
import Footer from "./components/Footer"
import Navbar from "./components/Navbar"

import TopFadeImage from './assets/top.png'
import LeftFadeImage from './assets/left.png'
import RightFadeImage from './assets/right.png'


function App() {
  const [openMenu, setOpenMenu] = useState(false)

  return (
    <ThemeProvider theme={theme}>
      <MainBody>
        <Navbar openMenu={openMenu} setOpenMenu={setOpenMenu} />
        <Container>
          <Showcase openMenu={openMenu} />
          <MySkills openMenu={openMenu} />
          <MyProjects openMenu={openMenu} />
          <Footer openMenu={openMenu} />
        </Container>

        <FadeImage src={TopFadeImage} top='0' />
        <FadeImage src={LeftFadeImage} top='50vh' />
        <FadeImage src={RightFadeImage} top='150vh' right='0' />
        <FadeImage src={LeftFadeImage} top='250vh' />
      </MainBody>      
    </ThemeProvider>
  )
}

export default App
