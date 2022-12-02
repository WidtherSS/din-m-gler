const Subscribe = () => {
  return (
    <div className="absolute top-[3345px] left-[0px] w-[1920px] h-[284px] overflow-hidden text-left text-3xl text-white font-roboto">
      <div className="absolute top-[0px] left-[0px] bg-gray-1000 w-[1920px] h-[284px]" />
      <img
        className="absolute top-[0px] left-[0px] w-[1920px] h-[284px] object-cover opacity-[0.2] mix-blend-multiply"
        alt=""
        src="../mask-group3@2x.png"
      />
      <input
        className="[border:none] font-roboto text-base bg-white absolute top-[105px] left-[975px] rounded-[4px] flex flex-row p-[22px] box-border items-center justify-center"
        type="text"
        placeholder="Indtast din email adresse"
      />
      <b className="absolute top-[100px] left-[405px] leading-[42px] inline-block w-[540px]">
        <p className="[margin-block-start:0] [margin-block-end:0px]">{`Tilmeld dig vores nyhedsbrev og `}</p>
        <p className="m-[0]">hold dig opdateret på boligmarkedet</p>
      </b>
    </div>
  );
};

export default Subscribe;
