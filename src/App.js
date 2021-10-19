import React from 'react'
import Intro from './components/Intro/Intro';
import Nav from './components/Nav/Nav';
import ServicesSection from './components/ServicesComp/ServicesSection';
import ServLastSection from './components/ServicesComp/ServLastSection';
import { content, feedbackData, projectsData } from './data';
import 'antd/dist/antd.css';
import Feedbacks from './components/Feedbacks/Feedbacks';
import Projects from './components/Projects/Projects';
import Footer from './components/Footer/Footer';


const App = () => {
  return (
    <>
      <Nav/>
      <Intro/>
      <div className="services" id='about'>
        <ServicesSection {...content.servObj1} />
        <ServicesSection {...content.servObj2} />
        <ServLastSection pageData = {{obj1: content.servObj3, obj2: content.servObj4}} />
      </div>
      <Feedbacks feedbacks={feedbackData} />
      <Projects projects={projectsData} />
      <Footer />
    </>
  )
}

export default App
