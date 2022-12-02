import Footer2 from "../components/Footer2";
import BG5 from "../components/BG5";
import AnsvarligMgler from "../components/AnsvarligMgler";
import Feature from "../components/Feature";
import Property2 from "../components/Property2";
import NamePrice2 from "../components/NamePrice2";
import FrameComponent1 from "../components/FrameComponent1";

const PropertyDetailsOverlayM = () => {
  return (
    <div className="relative bg-white w-full h-[2939px] overflow-hidden">
      <Footer2
        icon="../icon25.svg"
        icon1="../icon26.svg"
        dinMaegler="../din-maegler15.svg"
      />
      <BG5 />
      <AnsvarligMgler
        paperPlane11="../paperplane-1-19.svg"
        call1="../call-19.svg"
      />
      <img
        className="absolute top-[150px] left-[0px] w-[1920px] h-[780px] object-cover"
        alt=""
        src="../main-photo@2x.png"
      />
      <Feature />
      <Property2 />
      <NamePrice2 />
      <img
        className="absolute top-[0px] left-[0px] w-[1920px] h-[2939px] object-cover"
        alt=""
        src="../overlay-gallery1@2x.png"
      />
      <FrameComponent1 vector="vector40.svg" vector1="vector41.svg" />
    </div>
  );
};

export default PropertyDetailsOverlayM;
