import MiniFooter from "../components/MiniFooter";
import Dms from "../components/Dms";
import QuickLinks from "../components/QuickLinks";
import Info from "../components/Info";
import AboutLogo from "../components/AboutLogo";

const Footer = () => {
  return (
    <div className="relative w-full h-[877px] overflow-hidden">
      <MiniFooter />
      <Dms />
      <QuickLinks />
      <Info />
      <AboutLogo />
    </div>
  );
};

export default Footer;
