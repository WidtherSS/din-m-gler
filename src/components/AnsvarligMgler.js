const AnsvarligMgler = ({ paperPlane11, call1 }) => {
  return (
    <div className="absolute top-[1306px] left-[987px] w-[730px] h-[408px] text-center text-lg text-white font-fontawesome">
      <div className="absolute top-[54px] left-[0px] w-[730px] h-[354px]">
        <div className="absolute top-[0px] left-[0px] bg-white [border:1px_solid_#d3dee8] box-border w-[730px] h-[354px]" />
        <div className="absolute top-[40px] left-[40px] w-[280px] h-[280px]">
          <img
            className="absolute top-[0px] left-[0px] w-[280px] h-[280px] object-cover"
            alt=""
            src="../mask-group18@2x.png"
          />
          <div className="absolute top-[210px] left-[0px] w-[134px] h-[40px]">
            <div className="absolute top-[0px] left-[0px] bg-gray-1700 w-[134px] h-[40px]" />
            <div className="absolute top-[5px] left-[96px] leading-[30px] inline-block">
              
            </div>
            <div className="absolute top-[5px] left-[58px] leading-[30px] inline-block">
              
            </div>
            <div className="absolute top-[5px] left-[20px] leading-[30px] inline-block">
              
            </div>
          </div>
        </div>
        <div className="absolute top-[50px] left-[350px] w-[273px] h-[176px] text-left text-base text-gray-1400 font-roboto">
          <div className="absolute top-[146px] left-[0px] w-[223px] h-[30px]">
            <div className="absolute top-[0px] left-[36px] leading-[30px] inline-block">
              peter@dinmaegler.com
            </div>
            <img
              className="absolute top-[4px] left-[0px] w-[20px] h-[20px] overflow-hidden"
              alt=""
              src={paperPlane11}
            />
          </div>
          <div className="absolute top-[104px] left-[0px] w-[157px] h-[30px]">
            <div className="absolute top-[0px] left-[36px] leading-[30px] inline-block">
              +45 7070 4012
            </div>
            <img
              className="absolute top-[5px] left-[0px] w-[20px] h-[20px] overflow-hidden"
              alt=""
              src={call1}
            />
          </div>
          <div className="absolute top-[0px] left-[0px] w-[273px] h-[84px] text-gray-500">
            <div className="absolute top-[82px] left-[0px] bg-gray-400 w-[58px] h-[2px]" />
            <div className="absolute top-[36px] left-[0px] leading-[30px] inline-block">
              Statsautoriseret ejendomsmægler
            </div>
            <div className="absolute top-[0px] left-[0px] text-xl leading-[32px] font-medium text-gray-1600 inline-block">
              Peter Sørensen
            </div>
          </div>
        </div>
      </div>
      <div className="absolute top-[0px] left-[0px] text-xl leading-[32px] font-medium font-roboto text-gray-1600 text-left inline-block">{`Ansvalig mægler `}</div>
    </div>
  );
};

export default AnsvarligMgler;
