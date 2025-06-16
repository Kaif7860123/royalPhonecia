import React from 'react'
import Header from '../../components/header'
import Text from '../../components/text'
import FavHotel from '../../components/favHotel'
import StayPackage from '../../components/stayPackage'
import AboutUs from '../../components/aboutus'
import Facility from '../../components/facility'
import Corporate from '../../components/corporateEvents'
import Footer from '../../components/footer'
import Wellness from '../../components/wellness'

const Home = () => {
  return (
    <>
      <Header/>
      <Text/>
      <FavHotel/>
      <StayPackage/>
      <Wellness/>
      <AboutUs/>
      <Facility/>
      <Corporate/>
      <Footer/>
    </>
  )
}

export default Home
