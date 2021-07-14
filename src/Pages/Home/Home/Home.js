import React from "react";
import Footer from "../../../Pages/Shared/Footer/Footer";
import Navigation from "../../../Pages/Shared/Navigation/Navigation";
import ControledSlider from "../../ControledSlider/ControledSlider";
import CountSlider from "../../CountSlider/CountSlider";
import NewsPoint from "../../NewsPoint/NewsPoint";
import Banner from "../Banner/Banner";
import Fans from "../Fans/Fans";
import Nextmatch from "../Nextmatch/Nextmatch";
import Products from "../Products/Products";
import Sponsored from "../Sponsored/Sponsored";
import Statistics from "../Statistics/Statistics";
import Travel from "../Travel/Travel";
import Video from "../Video/Video";
import WorkHome from "../WorkHome/WorkHome";

const Home = () => {
  return (
    <div>
      <Navigation />
      <Banner />
      <Sponsored />
      <WorkHome />
      <Statistics />
      <Nextmatch />
      <ControledSlider />      
      <NewsPoint />
      <Video />
      <Products />
      <Travel />
      <Fans />
      <CountSlider />
      <Footer />
      
    </div>
  );
};

export default Home;
