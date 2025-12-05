import React from 'react'
import Navbar from '../components/Navbar/Navbar'
import PageHeader from '../components/PageHeader/PageHeader'
import PageHeaderImage from '../assets/page-header.jpg'
import Testimonials from '../components/Testimonials/Testimonials'
import Footer from '../components/Footer/Footer'
import Title from '../components/Title/Title'
import GoToTop from '../components/GoToTop/GoToTop'

const TestimonialsPage = () => {
  return (
    <div>
        <Navbar/>
        <PageHeader 
      
        subtitle='What Our Students Say'
        title='Hear from those who experienced our campus firsthand'
        bgImage={PageHeaderImage}
        
        />
        <div className="container">
        <Title subTitle='TESTIMONIALS' title='what our students says'/>
        <Testimonials/>
        </div>
        <GoToTop/>
        <Footer/>
    </div>
  )
}

export default TestimonialsPage