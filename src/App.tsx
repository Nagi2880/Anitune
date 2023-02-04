import React from 'react';
import './App.css';
import {
  createBrowserRouter,
  RouterProvider
} from "react-router-dom"
import '../node_modules/bootstrap/dist/css/bootstrap.min.css'

import Home from './pages/Home';

function App() {
  const route = createBrowserRouter([
    //Route home
    {
      path:"/",
      element: <Home />
    },
  ])
  return (
    <div className="App">
      <RouterProvider router={route} />
    </div>
  );
}

export default App;
