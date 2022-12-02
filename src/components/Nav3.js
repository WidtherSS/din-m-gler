const Nav3 = () => {
  return (
    <div className="absolute top-[0px] left-[0px] w-[1920px] h-[152px] text-left text-base text-gray-1400 font-roboto">
      <div className="absolute top-[62px] left-[0px] w-[1920px] h-[90px]">
        <div className="absolute top-[0px] left-[0px] bg-white w-[1920px] h-[90px]" />
        <div className="absolute top-[30px] left-[1007px] w-[508px] h-[30px]">
          <div className="absolute top-[0px] left-[422px] leading-[30px] inline-block">
            Kontakt os
          </div>
          <div className="absolute top-[0px] left-[265px] leading-[30px] inline-block">
            Mine favoritter
          </div>
          <div className="absolute top-[0px] left-[154px] leading-[30px] inline-block">
            Mæglere
          </div>
          <div className="absolute top-[0px] left-[0px] leading-[30px] inline-block">
            Boliger til salg
          </div>
        </div>
        <img
          className="absolute top-[18px] left-[405px] w-[296px] h-[49px] overflow-hidden"
          alt=""
          src="../din-maegler14.svg"
        />
        <div className="absolute top-[25px] left-[405px] w-[148px] h-[40px] hidden text-2xl text-gray-1600">
          <div className="absolute top-[0px] left-[30px] leading-[40px] font-medium inline-block">
            Ghor Bari
          </div>
          <img
            className="absolute top-[0px] left-[0px] w-[22px] h-[40px] overflow-hidden"
            alt=""
            src="../frame8.svg"
          />
        </div>
      </div>
      <div className="absolute top-[0px] left-[0px] w-[1920px] h-[62px] text-white">
        <div className="absolute top-[0px] left-[0px] bg-gray-1700 w-[1920px] h-[62px]" />
        <div className="absolute top-[16px] left-[1430px] w-[85px] h-[30px]">
          <img
            className="absolute top-[22px] left-[1432px] w-[16px] h-[18px] hidden"
            alt=""
            src="../login.svg"
          />
          <img
            className="absolute top-[6px] left-[0px] w-[18px] h-[18px] overflow-hidden"
            alt=""
            src="../user-4-11.svg"
          />
          <div className="absolute top-[0px] left-[26px] leading-[30px] inline-block">
            Log ind
          </div>
        </div>
        <div className="absolute top-[16px] left-[640px] w-[151px] h-[30px]">
          <div className="absolute top-[0px] left-[30px] leading-[30px] inline-block">
            +45 7070 4000
          </div>
          <img
            className="absolute top-[3px] left-[0px] w-[22px] h-[22px] overflow-hidden"
            alt=""
            src="../call-111.svg"
          />
        </div>
        <div className="absolute top-[16px] left-[405px] w-[218px] h-[30px]">
          <div className="absolute top-[0px] left-[32px] leading-[30px] inline-block">
            4000@dinmaegler.com
          </div>
          <img
            className="absolute top-[3px] left-[0px] w-[24px] h-[24px] overflow-hidden"
            alt=""
            src="../paperplane-1-111.svg"
          />
        </div>
      </div>
    </div>
  );
};

export default Nav3;
