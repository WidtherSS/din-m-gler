const Hero = () => {
  return (
    <div className="absolute top-[152px] left-[0px] w-[1920px] h-[698px] overflow-hidden text-left text-sm text-gray-1400 font-roboto">
      <div className="absolute top-[0px] left-[0px] bg-gray-1300 w-[1920px] h-[698px]" />
      <img
        className="absolute top-[0px] left-[0px] w-[1920px] h-[698px] overflow-hidden object-cover mix-blend-soft-light"
        alt=""
        src="../mask-group9@2x.png"
      />
      <div className="absolute top-[371.99px] left-[500px] w-[920px] h-[165.88px] overflow-hidden sm:bg-white sm:flex sm:[border:1px_solid_#000] sm:box-border">
        <div className="absolute top-[0px] left-[0px] bg-white w-[920px] h-[165.88px]" />
        <button className="cursor-pointer [border:none] p-[10px_46px] bg-gray-1700 absolute top-[100.18px] left-[769px] rounded-[2px] flex flex-row box-border items-center justify-center hover:[background:linear-gradient(#fff,_#fff),_#162a41] hover:animate-[1s_ease-in-out_0.7s_1_normal_none_scale-up] hover:opacity-[1] sm:flex-col">
          <div className="relative text-sm leading-[28px] font-roboto text-white text-left inline-block">
            Søg
          </div>
        </button>
        <div className="absolute top-[54.2px] left-[32px] bg-gray-1700 w-[43px] h-[3.28px]" />
        <div className="absolute top-[73.91px] left-[32px] w-[728px] h-[65.69px]">
          <div className="absolute top-[0px] left-[0px] leading-[28px] inline-block w-[257px] h-[22.99px]">
            Hvad skal din næste bolig indeholde
          </div>
          <input
            className="[border:1px_solid_#d3dee8] bg-white absolute top-[26.28px] left-[0px] rounded-[2px] box-border w-[728px] h-[39.42px] sm:w-full"
            type="text"
          />
          <div className="absolute top-[34.49px] left-[10px] leading-[28px] text-gray-500 inline-block w-[447px] h-[22.99px]">
            Søg på fx. glaskeramisk komfur, bryggers, kælder eller lignende
          </div>
        </div>
        <div className="absolute top-[26.28px] left-[32px] text-lg leading-[30px] font-medium text-gray-1600 inline-block w-[382px] h-[24.64px]">{`Søg blandt 158 boliger til salg i 74 butikker `}</div>
      </div>
      <h1 className="m-[0] absolute top-[calc(50%_-_64.05px)] left-[658px] text-6xl leading-[66px] font-bold font-inherit text-white text-center inline-block w-[602px] h-[54.2px] sm:text-4xl">
        Søg efter din drømmebolig
      </h1>
    </div>
  );
};

export default Hero;
