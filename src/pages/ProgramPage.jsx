import React from 'react'
import Navbar from '../components/Navbar/Navbar'
import PageHeader from '../components/PageHeader/PageHeader'
import PageHeaderImage from '../assets/page-header.jpg'
import Programs from '../components/Programs/Programs'
import Footer from '../components/Footer/Footer'
import Title from '../components/Title/Title'
import GoToTop from '../components/GoToTop/GoToTop'

const ProgramPage = () => {
  return (
    <div>
        <Navbar/>
        <PageHeader
        subtitle='Discover Our Programs'
        title='Join our courses and unlock your potential with expert guidance.'
        bgImage={PageHeaderImage}
        />
        <Title subTitle='PROGRAMS' title='What We Offer'/>
        <Programs/>
        <GoToTop/>
        <Footer/>
    </div>
  )
}

export default ProgramPage