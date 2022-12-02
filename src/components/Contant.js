import { Link } from "react-router-dom";

const Contant = () => {
  return (
    <div className="absolute top-[152px] left-[0px] w-[1920px] h-[700px] overflow-hidden text-center text-base text-white font-roboto">
      <div className="absolute top-[0px] left-[0px] bg-gray-200 w-[1920px] h-[700px]" />
      <Link
        className="cursor-pointer [text-decoration:none] absolute top-[518px] left-[853px] rounded-[2px] bg-gray-1700 flex flex-row p-[16px_32px] box-border items-start justify-start text-[inherit]"
        to="/home-01"
      >
        <div className="relative leading-[30px] font-medium inline-block">
          Tilbage til forsiden
        </div>
      </Link>
      <div className="absolute top-[418px] left-[731px] leading-[30px] text-gray-1400 inline-block w-[458px]">
        Det er vi kede af! Vi har sendt en besked af sted til vores
        internetbureau, og bedt dem se på fejlen.
      </div>
      <div className="absolute top-[360px] left-[690px] text-3xl leading-[42px] font-medium text-gray-1600 inline-block">{`Du er havnet på en side som ikke findes! `}</div>
      <div className="absolute top-[230px] left-[744px] bg-gray-1700 w-[432px] h-[90px]" />
      <b className="absolute top-[120px] left-[756px] text-8xl leading-[200px] inline-block [-webkit-text-stroke:1px_#000]">
        Hov!
      </b>
    </div>
  );
};

export default Contant;
