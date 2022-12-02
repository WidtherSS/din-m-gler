const OverlayGallery = () => {
  return (
    <div className="absolute top-[0px] left-[0px] [backdrop-filter:blur(10px)] w-[1920px] h-[2939px]">
      <img
        className="absolute top-[0px] left-[0px] w-[1920px] h-[2939px] opacity-[0.9]"
        alt=""
        src="../bg.svg"
      />
      <div className="absolute top-[150px] left-[150px] w-[1620px] h-[850px] overflow-hidden">
        <div className="absolute top-[0px] left-[0px] bg-white w-[1620px] h-[850px]" />
        <img
          className="absolute top-[74px] left-[236px] w-[1116px] h-[702.57px] object-cover"
          alt=""
          src="../06-4@2x.png"
        />
      </div>
    </div>
  );
};

export default OverlayGallery;
