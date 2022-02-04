import { useEffect } from 'react'

import './styles/global.scss'

import { Header } from "./components/Header"
import { BannerHome } from './components/BannerHome'
import { About } from './components/About'
import { Skills } from './components/Skills'
import { WhiteSpace } from './components/WhiteSpace'
import { Footer } from './components/Footer'
import { SocialButton } from './components/SocialButton'
import { Portfolio } from './components/Portfolio'
import { PageTitle } from './components/PageTitle'

import AOS from "aos";
import "aos/dist/aos.css";

function App() {

  useEffect(() => {
    AOS.init();
    AOS.refresh();
  }, []);

  return (
    <>
      <PageTitle />
      <SocialButton />
      <Header />
      <BannerHome />
      <About />
      <Skills />
      <Portfolio />
      <WhiteSpace />
      <Footer />
    </>
  )
}

export default App
