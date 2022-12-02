import Footer2 from "../components/Footer2";
import BG3 from "../components/BG3";
import GroupComponent from "../components/GroupComponent";
import Feature1 from "../components/Feature1";
import Nav3 from "../components/Nav3";
import Property1 from "../components/Property1";
import NamePrice1 from "../components/NamePrice1";
import OverlayGallery from "../components/OverlayGallery";
import FrameComponent2 from "../components/FrameComponent2";

const PropertyDetailsOverlayF = () => {
  return (
    <div className="relative bg-white w-full h-[2939px] overflow-hidden">
      <Footer2
        icon="../icon22.svg"
        icon1="../icon23.svg"
        dinMaegler="../din-maegler13.svg"
      />
      <BG3 />
      <GroupComponent />
      <img
        className="absolute top-[150px] left-[0px] w-[1920px] h-[780px] object-cover"
        alt=""
        src="../main-photo@2x.png"
      />
      <Feature1 />
      <Nav3 />
      <Property1 />
      <NamePrice1 />
      <OverlayGallery />
      <FrameComponent2 group57Href="/favorites" />
    </div>
  );
};

export default PropertyDetailsOverlayF;
