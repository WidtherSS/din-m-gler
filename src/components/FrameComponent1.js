import { Link } from "react-router-dom";

const FrameComponent1 = ({ vector, vector1 }) => {
  return (
    <div className="absolute top-[1056px] left-[807px] w-[408.09px] h-[56px] overflow-hidden">
      <Link
        className="cursor-pointer [text-decoration:none] absolute h-[96%] w-[14.37%] top-[4%] right-[0%] bottom-[0%] left-[85.63%]"
        to="/favorites"
      >
        <img
          className="absolute h-[101.86%] w-[101.7%] top-[-1.86%] right-[0%] bottom-[0%] left-[-1.71%] max-w-full overflow-hidden max-h-full"
          alt=""
          src="../vector21.svg"
        />
      </Link>
      <Link
        className="cursor-pointer [text-decoration:none] absolute h-[96%] w-[9.12%] top-[4%] right-[27.21%] bottom-[0%] left-[63.67%]"
        to="/property-details-overlay-map"
      >
        <img
          className="absolute h-[101.86%] w-[105.37%] top-[-1.86%] right-[-2.69%] bottom-[0%] left-[-2.69%] max-w-full overflow-hidden max-h-full"
          alt=""
          src="../vector22.svg"
        />
        <img
          className="absolute h-[26.8%] w-[38.71%] top-[21.22%] right-[30.64%] bottom-[51.98%] left-[30.65%] max-w-full overflow-hidden max-h-full"
          alt=""
          src="../vector23.svg"
        />
      </Link>
      <Link
        className="cursor-pointer [text-decoration:none] absolute h-full w-[13.73%] top-[0%] right-[53.89%] bottom-[0%] left-[32.38%]"
        to="/property-details-overlay-floorplan"
      >
        <img
          className="absolute h-full w-[103.55%] top-[0%] right-[-1.79%] bottom-[0%] left-[-1.76%] max-w-full overflow-hidden max-h-full"
          alt=""
          src={vector}
        />
        <img
          className="absolute h-[39.91%] w-[103.57%] top-[34.8%] right-[-1.78%] bottom-[25.3%] left-[-1.79%] max-w-full overflow-hidden max-h-full"
          alt=""
          src={vector1}
        />
      </Link>
      <Link
        className="cursor-pointer [text-decoration:none] absolute h-[96%] w-[15.57%] top-[1.48%] right-[84.43%] bottom-[2.52%] left-[0%] shadow-[0px_4px_4px_rgba(0,_0,_0,_0.25)]"
        to="/property-details"
      >
        <img
          className="absolute h-[103.4%] w-[101.57%] top-[-1.54%] right-[-1.57%] bottom-[-1.86%] left-[0%] max-w-full overflow-hidden max-h-full"
          alt=""
          src="../vector26.svg"
        />
        <img
          className="absolute h-[21.9%] w-[18.53%] top-[16.32%] right-[21.5%] bottom-[61.78%] left-[59.96%] max-w-full overflow-hidden max-h-full"
          alt=""
          src="../vector27.svg"
        />
        <img
          className="absolute h-[59.42%] w-[101.57%] top-[42.44%] right-[-1.57%] bottom-[-1.86%] left-[0%] max-w-full overflow-hidden max-h-full"
          alt=""
          src="../vector28.svg"
        />
      </Link>
    </div>
  );
};

export default FrameComponent1;
