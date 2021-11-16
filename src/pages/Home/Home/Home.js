import React from "react";
import Navigation from "../../Shared/Navigation/Navigation";
import AllDoctors from "../AllDoctors/AllDoctors";
import AppionmentBanner from "../AppoinmentBanner/AppionmentBanner";
import Banner from "../Banner/Banner";
import Services from "../Services/Services";

const Home = () => {
  return (
    <div>
      <Navigation></Navigation>
      <Banner />
      <Services></Services>
      <AppionmentBanner></AppionmentBanner>
      <AllDoctors />
    </div>
  );
};

export default Home;
