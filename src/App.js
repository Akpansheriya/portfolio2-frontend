import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";
import { Routes, Route } from "react-router-dom";
import { useCookies } from "react-cookie";

import Aos from "aos";
import "aos/dist/aos.css";
import "aos/dist/aos.js";

import { useEffect, useState } from "react";

import Loader from "./components/Loader/Loader";
import Handler from "./components/Handler/Handler";
import Veiw from "./components/Portfolio/Veiw";
import appsData from "./portData.json";
import webData from "./web.json"
import Condition from "./components/Term-condition/Condition";
import Privacy from "./components/privacy-policy/Privacy";
import WebView from "./components/Portfolio/WebView";

function App() {
  const [load, setLoaded] = useState(false);

  const [cookies, setCookie] = useCookies(null);

  const handleAppClick = (appId) => {
    setCookie("selectedAppId", appId);
  };
  const [id, setId] = useCookies(null);

  const handleId = (ids) => {
    setId("selectedAppId", ids);
  };
  

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
            <Route
              exact
              path="/"
              element={<Handler apps={appsData} onAppClick={handleAppClick} webData={webData} handleId={handleId} />}
            />
            <Route
              
              path="/portfolio"
              element={<Veiw appsData={appsData} cookies={cookies} />}
            />
            <Route
              
              path="/webPortfolio"
              element={<WebView webData={webData} id={id} />}
            />
            <Route  path="/TermConditions" element={<Condition />} />
            <Route  path="/PrivacyPolicy" element={<Privacy />} />
          </Routes>
         
        </>
      )}


    </div>
  );
}

export default App;
