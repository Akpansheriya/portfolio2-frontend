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
import Portfolio from '../Portfolio/Portfolio'
import Testimonials from '../Testimonials/Testimonials'
import Contact from '../ContactUs/Contact'
import Footer from '../Footer/Footer'
import data from "../../data.json"


function Handler({ apps, onAppClick}) {
  return (
    <div>
        <Navbars />
<Home/>
<Header/>
<CompanyPage/>
<AboutUs/>
<Service/>
<Benefit/>
<Startup/>
<MobileService/>
<EngagementModel/>
<Portfolio apps={apps} onAppClick={onAppClick} />
<Testimonials testimonialData={data}/>
<Contact/>
<Footer/>
    </div>
  )
}

export default Handler