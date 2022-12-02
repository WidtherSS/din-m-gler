const Info = () => {
  return (
    <div className="absolute top-[273px] left-[405px] w-[444px] h-[434px] text-left text-base text-gray-1400 font-roboto">
      <div className="absolute top-[0px] left-[0px] rounded-[4px] bg-white shadow-[0px_10px_30px_rgba(0,_115,_225,_0.06)] w-[444px] h-[434px]" />
      <div className="absolute top-[324px] left-[50px] leading-[30px] inline-block w-[344px] h-[60px]">
        <p className="[margin-block-start:0] [margin-block-end:0px]">{`Din Mægler Roskilde, er din `}</p>
        <p className="m-[0]">boligibutik i lokalområdet.</p>
      </div>
      <div className="absolute top-[234px] left-[50px] w-[336px] h-[60px]">
        <div className="absolute top-[27px] left-[72px] leading-[30px] font-medium inline-block">
          Stændertorvet 78, 4000 Roskilde
        </div>
        <div className="absolute top-[3px] left-[72px] text-xs leading-[20px] text-gray-500 inline-block">
          Butik
        </div>
        <img
          className="absolute top-[0px] left-[0px] w-[60px] h-[60px]"
          alt=""
          src="../icon.svg"
        />
      </div>
      <div className="absolute top-[142px] left-[50px] w-[259px] h-[60px]">
        <div className="absolute top-[27px] left-[72px] leading-[30px] font-medium inline-block">
          4000@dinmaegler.com
        </div>
        <div className="absolute top-[3px] left-[72px] text-xs leading-[20px] text-gray-500 inline-block">
          Send en mail
        </div>
        <img
          className="absolute top-[0px] left-[0px] w-[60px] h-[60px]"
          alt=""
          src="../icon22.svg"
        />
      </div>
      <div className="absolute top-[50px] left-[50px] w-[194px] h-[60px]">
        <div className="absolute top-[27px] left-[72px] leading-[30px] font-medium inline-block">
          +45 7070 4000
        </div>
        <div className="absolute top-[3px] left-[72px] text-xs leading-[20px] text-gray-500 inline-block">
          Ring til os
        </div>
        <img
          className="absolute top-[0px] left-[0px] w-[60px] h-[60px]"
          alt=""
          src="../icon23.svg"
        />
      </div>
    </div>
  );
};

export default Info;
