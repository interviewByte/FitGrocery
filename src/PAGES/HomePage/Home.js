import React from 'react'
import {BannerSliders } from '../../COMPONENTS/Banners/BannerSliders'
import  {HomeCategories}  from '../../COMPONENTS/Category/HomeCategories'
import Navbar from '../../COMPONENTS/Navbar/Navbar'

export const Home = () => {
  return (
    <div>
        <Navbar/>
        <BannerSliders />
        <HomeCategories></HomeCategories>
        Home</div>
  )
}
