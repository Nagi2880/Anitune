import React from 'react';
import './App.css';
import {
  createBrowserRouter,
  RouterProvider
} from "react-router-dom"
import '../node_modules/bootstrap/dist/css/bootstrap.min.css'

import Home from './pages/Home';
import Poster from './elements/Poster';

function App() {
  const route = createBrowserRouter([
    //Route home
    {
      path:"/",
      element: <Home />
    },
    {
      path:"/test",
      element: <Poster />
    }
  ])
  return (
    <div className="App">
      <RouterProvider router={route} />
    </div>
  );
}

export default App;
