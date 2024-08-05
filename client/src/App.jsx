import React, {useState, createContext} from 'react';
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import routes from './routes/routes';
import decal from './assets/line-decal.png';
import './App.scss';

const router = createBrowserRouter(routes);

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