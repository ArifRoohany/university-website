import React from 'react'
import Navbar from '../components/Navbar/Navbar'
import PageHeader from '../components/PageHeader/PageHeader'
import GoToTop from '../components/GoToTop/GoToTop'
import PageHeaderImage from '../assets/page-header.jpg'
import Contact from '../components/Contact/Contact'
import Footer from '../components/Footer/Footer'

const ContactPage = () => {
  return (
    <div>
      <Navbar/>
      <PageHeader
      subtitle='Contact Us'
      title='Our support team is ready to help you with anything you need.'
      bgImage={PageHeaderImage}
      />
      <Contact/>
      <GoToTop/>
      <Footer/>
    </div>
  )
}

export default ContactPage