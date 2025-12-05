import React from 'react'
import Navbar from '../components/Navbar/Navbar'
import PageHeader from '../components/PageHeader/PageHeader'
import Campus from '../components/Campus/Campus'
import PageHeaderImage from '../assets/page-header.jpg'
import Footer from '../components/Footer/Footer'
import Title from '../components/Title/Title'
import GoToTop from '../components/GoToTop/GoToTop'

const CampusPage = () => {
  return (
    <div>
        <Navbar/>
        <PageHeader 
        title='Explore Our Campus'
        subtitle='Discover where learning comes alive'
        bgImage={PageHeaderImage}
        />
        <Title title='Discover where learning comes alive' subTitle='Explore Our Campus'/>
        <Campus/>
        <GoToTop/>
        <Footer/>
    </div>
  )
}

export default CampusPage