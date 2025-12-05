import React from 'react'
import Navbar from '../components/Navbar/Navbar'
import PageHeader from '../components/PageHeader/PageHeader'
import PageHeaderImage from '../assets/page-header.jpg'
import About from '../components/About/About'
import Footer from '../components/Footer/Footer'
import GoToTop from '../components/GoToTop/GoToTop'

const AboutPage = () => {
  return (
    <div>
        <Navbar/>
        <PageHeader 

        subtitle='About Us'

        title='Learn more about our mission, values, and the people behind our success.'

        bgImage={PageHeaderImage}
        />
        <About />
        <GoToTop />
        
        <Footer/>
    </div>
  )
}

export default AboutPage