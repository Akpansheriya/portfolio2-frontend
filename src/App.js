import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";

// import Home from "./components/Home/Home";
import Header from "./components/Header/Header";
import CompanyPage from "./components/Company/CompanyPage";
import AboutUs from "./components/AboutUS/AboutUs";

import Contact from "./components/ContactUs/Contact";
import MobileService from "./components/mobileServices/MobileService";
import EngagementModel from "./components/engagement/EngagementModel";
import Service from "./components/Service/Service";
import Benefit from "./components/Benefits/Benefit";
import Aos from "aos";
import "aos/dist/aos.css";
import "aos/dist/aos.js";
import Startup from "./components/startup/Startup";
import { useEffect, useState } from "react";
import Testimonials from "./components/Testimonials/Testimonials";
import Loader from "./components/Loader/Loader"
import Portfolio from "./components/Portfolio/Portfolio";
import Home from "./components/Home/Home"
import Navbar from "./components/Navbar/Navbar";
import data from "./data.json"
import Footer from "./components/Footer/Footer"


function App() {
  const [load, setLoaded] = useState(false);
    useEffect(() => {
      setLoaded(true);
      setTimeout(() => {
        setLoaded(false);
      }, 4000);
    }, []);


  useEffect(() => {
    Aos.init();
  }, []);
  return (
    <div className="App">
     
         

         {load ? (
        load && <Loader />
      ) : (
        <>
<Navbar />
<Home/>
<Header/>
<CompanyPage/>
<AboutUs/>
<Service/>
<Benefit/>
<Startup/>
<MobileService/>
<EngagementModel/>
<Portfolio/>
<Testimonials testimonialData={data}/>
<Contact/>
<Footer/>
</>
      )}
   
      
    </div>
  );
}

export default App;
