import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";
import {Routes,Route} from "react-router-dom"


import Aos from "aos";
import "aos/dist/aos.css";
import "aos/dist/aos.js";

import { useEffect, useState } from "react";

import Loader from "./components/Loader/Loader"
import Handler from "./components/Handler/Handler";
import Veiw from "./components/Portfolio/Veiw";
import appsData from "./portData.json"
import Condition from "./components/Term-condition/Condition";
import Privacy from "./components/privacy-policy/Privacy";





function App() {
  const [load, setLoaded] = useState(false);
  const [selectedAppId, setSelectedAppId] = useState();

  const handleAppClick = (appId) => {
    setSelectedAppId(appId);
    localStorage.setItem('selectedAppId', appId);

  };
  

 

  console.log("selectedAppId",typeof selectedAppId)
 

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
<Routes>
  <Route exact path="/" element={<Handler  apps={appsData} onAppClick={handleAppClick}/>} />
  <Route exact path="/portfolio" element={<Veiw appsData={appsData}  />} />
<Route exact path="/Term-Conditions" element={<Condition/>} />
<Route exact path="/Privacy-Policy" element={<Privacy/>} />
</Routes>

</>

      )}
   
    
    </div>
  );
}

export default App;
