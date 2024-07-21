import React, {useState, createContext} from 'react';
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import DefaultPageLayout from './page layouts/DefaultPageLayout';
import LandingPageLayout from './page layouts/LandingPageLayout';
import decal from './assets/line-decal.png';
import Questionnaire from './pages/Questionnaire';
import Landing from './pages/Landing';
import Thankyou from './pages/Thankyou';
import Consent from './pages/Consent';
import Error from './pages/Error';
import './App.scss';

const router = createBrowserRouter([
  {
    path: "/",
    element: <LandingPageLayout><Landing/></LandingPageLayout>,
    errorElement: <DefaultPageLayout><Error/></DefaultPageLayout>,
  },
  {
    path: "/consent",
    element: <DefaultPageLayout><Consent/></DefaultPageLayout>,
  },
  {
    path: "/questionnaire",
    element: <DefaultPageLayout><Questionnaire/></DefaultPageLayout>,
  },
  {
    path: "/thankyou",
    element: <DefaultPageLayout><Thankyou/></DefaultPageLayout>,
  },
]);

export const ResponseContext = createContext();
export const PermissionsContext = createContext();

function App() {
  
  //initialize responses storage
  const [allResponses, setAllResponses] = useState({});

  // console.log("Need to fix a couple things here: ")
  // console.log("- make sure data format is consistent in server")
  // console.log("- style for Safari ios")

  return (
    <div className="App">
      <ResponseContext.Provider value={{ allResponses, setAllResponses} }>
        <img src={decal} id='decal' alt='decal'/>
        <RouterProvider router={router}/>
      </ResponseContext.Provider>
    </div>
  );
}

export default App;