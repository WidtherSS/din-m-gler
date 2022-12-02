const Banner = () => {
  return (
    <div className="absolute top-[152px] left-[0px] w-[1920px] h-[192px] overflow-hidden text-center text-7xl text-white font-roboto">
      <div className="absolute top-[0px] left-[0px] bg-gray-1200 w-[1920px] h-[192px]" />
      <img
        className="absolute top-[0px] left-[0px] w-[1920px] h-[192px] object-cover mix-blend-multiply"
        alt=""
        src="../mask-group10@2x.png"
      />
      <b className="absolute top-[57px] left-[766px] leading-[80px] inline-block">
        Boliger til salg
      </b>
    </div>
  );
};

export default Banner;
