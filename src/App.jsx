import React from "react";
import { Routes, Route } from "react-router-dom";
import RestaurantPage from "./Pages/RestaurantPage";
import ShoploginPage from "./Pages/ShoploginPage";
import Shopregister from "./Pages/Shopregister";
import UserloginPage from "./Pages/UserloginPage";
import UserregisterPage from "./Pages/UserregisterPage";
import Home from "./Pages/Home";
import Profilee from "./Pages/Profilee";
import ProtectedRoute from "./Component/ProtectedRoute.jsx"; 
import Shoptablee from "./Pages/Shoptablee.jsx";

function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/restaurant" element={<RestaurantPage />} />
        <Route path="/shopregistration" element={<Shopregister />} /> 
        <Route path="/shoplogin" element={<ShoploginPage />} />
        <Route path="/tableaddsection" element={<Shoptablee />} />
        <Route path="/userlogin" element={<UserloginPage />} />
        <Route path="/userregistration" element={<UserregisterPage />} />
        <Route  path="/profile"  element={ <ProtectedRoute> <Profilee /> </ProtectedRoute> }/>
      </Routes>
    </>
  );
}

export default App;
