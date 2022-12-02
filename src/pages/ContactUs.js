import Map1 from "../components/Map1";
import Content from "../components/Content";
import Banner2 from "../components/Banner2";
import Footer1 from "../components/Footer1";
import NavigationBar3 from "../components/NavigationBar3";

const ContactUs = () => {
  return (
    <div className="relative bg-white w-full h-[2887px] overflow-hidden">
      <Map1 />
      <Content />
      <Banner2 />
      <Footer1
        icon="../icon16.svg"
        icon1="../icon17.svg"
        dinMaegler="../din-maegler9.svg"
      />
      <NavigationBar3
        frame="../frame4.svg"
        dinMaegler="../din-maegler10.svg"
        paperPlane11="../paperplane-1-15.svg"
        call1="../call-15.svg"
        user41="../user-4-11.svg"
      />
    </div>
  );
};

export default ContactUs;
