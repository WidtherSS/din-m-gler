const CompanyInfo = () => {
  return (
    <div className="absolute top-[336px] left-[1070px] w-[445px] h-[710px] overflow-hidden text-center text-base text-gray-1400 font-roboto">
      <div className="absolute top-[0px] left-[0px] rounded-[2px] bg-white [border:1px_solid_#d3dee8] box-border w-[445px] h-[710px]" />
      <div className="absolute top-[500px] left-[80px] w-[286px] h-[168px]">
        <div className="absolute top-[108px] left-[0px] leading-[30px] inline-block w-[286px] h-[60px]">
          <p className="[margin-block-start:0] [margin-block-end:0px]">
            Stændertorvet 78,
          </p>
          <p className="m-[0]">4000 Roskilde</p>
        </div>
        <div className="absolute top-[62px] left-[74px] text-lg leading-[30px] font-medium text-gray-1600 inline-block">
          Besøg butikken
        </div>
        <img
          className="absolute top-[0px] left-[118px] w-[50px] h-[50px]"
          alt=""
          src="../address-icon.svg"
        />
      </div>
      <div className="absolute top-[466px] left-[32px] bg-gray-400 w-[381px] h-[2px]" />
      <div className="absolute top-[285px] left-[80px] w-[286px] h-[140px]">
        <div className="absolute top-[108px] left-[0px] leading-[30px] inline-block w-[286px] h-[32px]">
          4000@dinmaegler.dk
        </div>
        <div className="absolute top-[62px] left-[86px] text-lg leading-[30px] font-medium text-gray-1600 inline-block">
          send en mail
        </div>
        <img
          className="absolute top-[0px] left-[118px] w-[50px] h-[50px]"
          alt=""
          src="../address-icon1.svg"
        />
      </div>
      <div className="absolute top-[232px] left-[32px] bg-gray-400 w-[381px] h-[2px]" />
      <div className="absolute top-[51px] left-[80px] w-[286px] h-[136px]">
        <div className="absolute top-[108px] left-[0px] leading-[30px] inline-block w-[286px] h-[28px]">
          ++45 7070 4000
        </div>
        <div className="absolute top-[62px] left-[99px] text-lg leading-[30px] font-medium text-gray-1600 inline-block">
          Ring til os
        </div>
        <img
          className="absolute top-[0px] left-[118px] w-[50px] h-[50px]"
          alt=""
          src="../address-icon2.svg"
        />
      </div>
    </div>
  );
};

export default CompanyInfo;
