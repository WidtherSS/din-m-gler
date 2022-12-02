import CompanyInfo from "../components/CompanyInfo";
import LeaveComments from "../components/LeaveComments";
import Ptext from "../components/Ptext";
import Heading from "../components/Heading";

const Content = () => {
  return (
    <div className="absolute top-[344px] left-[0px] w-[1920px] h-[1166px] overflow-hidden text-left text-base text-gray-1400 font-roboto">
      <div className="absolute top-[0px] left-[0px] bg-white w-[1920px] h-[1166px]" />
      <CompanyInfo />
      <LeaveComments />
      <Ptext />
      <Heading />
    </div>
  );
};

export default Content;
