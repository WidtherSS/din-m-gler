const Footer1 = ({ icon, icon1, dinMaegler }) => {
  return (
    <div className="absolute top-[5125px] left-[0px] w-[1920px] h-[877px] overflow-hidden text-left text-base text-gray-1400 font-roboto">
      <div className="absolute top-[787px] left-[0px] w-[1920px] h-[90px] text-white">
        <div className="absolute top-[90px] left-[0px] bg-gray-1700 w-[1920px] h-[90px]" />
        <div className="absolute top-[30px] left-[846px] leading-[30px] inline-block">
          Layout By Jit Banik 2020
        </div>
      </div>
      <div className="absolute top-[0px] left-[0px] bg-gray-100 w-[1920px] h-[560px]" />
      <div className="absolute top-[618px] left-[975px] w-[593px] h-[102px] text-sm text-gray-500">
        <div className="absolute top-[59px] left-[0px] leading-[28px] inline-block w-[593px] h-[43px]">
          Dansk Mægler Sammenslutning
        </div>
        <div className="absolute top-[0px] left-[0px] text-xs leading-[20px] inline-block w-[593px] h-[27px]">{`Medlem af `}</div>
        <b className="absolute top-[12px] left-[0px] text-5xl leading-[54px] inline-block w-[121px] h-[53px]">
          DMS
        </b>
      </div>
      <div className="absolute top-[273px] left-[975px] w-[255px] h-[208px] text-xl text-gray-1600">
        <div className="absolute top-[0px] left-[0px] leading-[32px] font-medium inline-block">
          Quick Links
        </div>
        <div className="absolute top-[48px] left-[0px] text-base leading-[40px] text-gray-1400 inline-block w-[255px]">
          <p className="[margin-block-start:0] [margin-block-end:0px]">
            Boliger til salg
          </p>
          <p className="[margin-block-start:0] [margin-block-end:0px]">
            Mæglere
          </p>
          <p className="[margin-block-start:0] [margin-block-end:0px]">
            Kontakt os
          </p>
          <p className="m-[0]">Log ind / bliv bruger</p>
        </div>
      </div>
      <div className="absolute top-[273px] left-[405px] w-[444px] h-[434px]">
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
            src={icon}
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
            src={icon1}
          />
        </div>
      </div>
      <div className="absolute top-[80px] left-[405px] w-[728px] h-[133px]">
        <div className="absolute top-[73px] left-[0px] leading-[30px] inline-block w-[728px] h-[60px]">
          There are many variations of passages of Lorem Ipsum available, but
          the majority have suffered alteration in some form, by injected
          humour, or randomised words.
        </div>
        <img
          className="absolute top-[0px] left-[1px] w-[296px] h-[49px] overflow-hidden"
          alt=""
          src={dinMaegler}
        />
      </div>
    </div>
  );
};

export default Footer1;
