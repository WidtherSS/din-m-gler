import Footer1 from "../components/Footer1";
import AppDownload from "../components/AppDownload";
import Agents from "../components/Agents";
import Subscribe from "../components/Subscribe";
import FeatureProperty from "../components/FeatureProperty";
import AboutUs from "../components/AboutUs";
import Hero from "../components/Hero";
import NavigationBar1 from "../components/NavigationBar1";

const Home01 = () => {
  return (
    <div className="relative bg-white w-full h-[6002px] overflow-hidden">
      <Footer1
        icon="../icon13.svg"
        icon1="../icon14.svg"
        dinMaegler="../din-maegler7.svg"
      />
      <AppDownload />
      <Agents />
      <Subscribe />
      <FeatureProperty />
      <AboutUs />
      <Hero />
      <NavigationBar1 />
    </div>
  );
};

export default Home01;
