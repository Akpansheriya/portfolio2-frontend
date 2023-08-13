import React from 'react'
import Navbars from '../Navbar/Navbar'
import Home from '../Home/Home'
import Header from '../Header/Header'
import CompanyPage from '../Company/CompanyPage'
import AboutUs from '../AboutUS/AboutUs'
import Service from '../Service/Service'
import Benefit from '../Benefits/Benefit'
import Startup from '../startup/Startup'
import MobileService from '../mobileServices/MobileService'
import EngagementModel from '../engagement/EngagementModel'

import Testimonials from '../Testimonials/Testimonials'
import Contact from '../ContactUs/Contact'
import Footer from '../Footer/Footer'
import data from "../../data.json"
import MainPort from '../Portfolio/MainPort'




function Handler({ apps, onAppClick,webData,handleId}) {
  return (
    <div>
        <Navbars />
<Home/>
<Header/>
<CompanyPage/>
<AboutUs/>
<Service/>
<Benefit/>

<MobileService/>
<EngagementModel/>
<MainPort apps={apps} onAppClick={onAppClick} webData={webData} handleId={handleId} />
<Testimonials testimonialData={data}/>
<Startup/>
<Contact/>
<Footer/>
    </div>
  )
}

export default Handler