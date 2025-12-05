import React from 'react'
import Navbar from '../components/Navbar/Navbar'
import Hero from '../components/Hero/Hero'
import About from '../components/About/About'
import Campus from '../components/Campus/Campus'
import Contact from '../components/Contact/Contact'
import Footer from '../components/Footer/Footer'
import Programs from '../components/Programs/Programs'
import Testimonials from '../components/Testimonials/Testimonials'
import Title from '../components/Title/Title'
import GoToTop from '../components/GoToTop/GoToTop'

const HomePage = () => {
    return (
        <>
            <Navbar />
            <Hero />
            <div className='container'>
                <Title subTitle='PROGRAMS' title='What We Offer'/>
                <Programs />
                <Title subTitle='GALLERY' title='Campus Photos'/>
                <Campus />
                <About />
                <Title subTitle='TESTIMONIALS' title='What Our Students Says'/>
                <Testimonials />
                <Contact />
                <GoToTop/>
            </div>
            <Footer />
        </>
    )
}

export default HomePage