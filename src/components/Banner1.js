const Banner1 = () => {
  return (
    <div className="absolute top-[152px] left-[0px] w-[1920px] h-[350px] text-left text-base text-gray-1700 font-roboto">
      <div className="absolute top-[0px] left-[0px] bg-gray-1200 w-[1920px] h-[350px]" />
      <img
        className="absolute top-[0px] left-[0px] w-[1920px] h-[350px] object-cover mix-blend-multiply"
        alt=""
        src="../mask-group30@2x.png"
      />
      <div className="absolute top-[193px] left-[886px] w-[149px] h-[30px]">
        <div className="absolute top-[0px] left-[83px] leading-[30px] inline-block">
          Register
        </div>
        <div className="absolute top-[8px] left-[65px] bg-white w-[2px] h-[14px] opacity-[0.6]" />
        <div className="absolute top-[0px] left-[0px] leading-[30px] text-white text-center inline-block">
          Home
        </div>
      </div>
      <b className="absolute top-[127px] left-[867px] text-xl leading-[50px] inline-block text-white text-center">
        Account Register
      </b>
    </div>
  );
};

export default Banner1;
