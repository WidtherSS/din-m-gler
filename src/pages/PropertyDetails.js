import BG4 from "../components/BG4";
import GroupComponent1 from "../components/GroupComponent1";
import Section from "../components/Section";
import NavigationBar4 from "../components/NavigationBar4";

const PropertyDetails = () => {
  return (
    <div className="relative bg-white w-full h-[2939px] overflow-hidden">
      <BG4 />
      <GroupComponent1 />
      <img
        className="absolute top-[150px] left-[0px] w-[1920px] h-[780px] overflow-hidden object-cover"
        alt=""
        src="../main-photo@2x.png"
      />
      <Section />
      <NavigationBar4 />
    </div>
  );
};

export default PropertyDetails;
