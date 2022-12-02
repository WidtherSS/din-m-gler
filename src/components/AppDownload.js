const AppDownload = () => {
  return (
    <div className="absolute top-[4613px] left-[0px] w-[1920px] h-[512px] overflow-hidden text-left text-base text-white font-roboto">
      <div className="absolute top-[0px] left-[0px] bg-gray-1700 w-[1920px] h-[512px]" />
      <img
        className="absolute top-[87px] left-[1241px] w-[271.07px] h-[425px] object-cover"
        alt=""
        src="../579231-1@2x.png"
      />
      <img
        className="absolute top-[87px] left-[1076px] w-[270px] h-[425px] object-cover"
        alt=""
        src="../57923-1@2x.png"
      />
      <button className="cursor-pointer [border:1px_solid_#fff] p-[0] bg-[transparent] absolute top-[348px] left-[610px] rounded-[2px] box-border w-[186px] h-[62px] hover:animate-[1s_ease_0s_1_normal_none_scale-up] hover:opacity-[1]">
        <button className="cursor-pointer [border:none] p-[0] bg-[transparent] absolute top-[19px] left-[32px] w-[24px] h-[24px] overflow-hidden">
          <img
            className="absolute h-[24.07%] w-[20.59%] top-[0%] right-[31.07%] bottom-[75.93%] left-[48.34%] max-w-full overflow-hidden max-h-full"
            alt=""
            src="../group.svg"
          />
          <img
            className="absolute h-[76.59%] w-[85.42%] top-[23.4%] right-[7.29%] bottom-[0%] left-[7.29%] max-w-full overflow-hidden max-h-full"
            alt=""
            src="../group1.svg"
          />
        </button>
        <div className="absolute top-[16px] left-[60px] text-base leading-[30px] font-medium font-roboto text-white text-left inline-block hover:text-gray-1700">
          Apple Store
        </div>
      </button>
      <button className="cursor-pointer [border:none] p-[0] bg-white absolute top-[348px] left-[405px] rounded-[2px] w-[189px] h-[62px] hover:bg-gray-1700 hover:[border:1px_solid_#000] hover:box-border hover:animate-[1s_ease_0s_1_normal_none_scale-up] hover:opacity-[1]">
        <button className="cursor-pointer [border:none] p-[0] bg-[transparent] absolute top-[19px] left-[calc(50%_-_62.5px)] w-[24px] h-[24px] overflow-hidden">
          <img
            className="absolute h-full w-[89.53%] top-[0%] right-[5.23%] bottom-[0%] left-[5.24%] max-w-full overflow-hidden max-h-full hover:bg-white"
            alt=""
            src="../vector.svg"
          />
        </button>
        <div className="absolute top-[16px] left-[calc(50%_-_34.5px)] text-base leading-[30px] font-medium font-roboto text-gray-1700 text-left inline-block hover:text-white">
          Google Play
        </div>
      </button>
      <div className="absolute top-[234px] left-[405px] leading-[30px] inline-block w-[634px] h-[90px]">
        Når du sælger din bolig hos Din Mægler, kommunikerer du nemt med den
        ansvarlige mægler eller butik med vores app. Her kan du også se
        statistik på interessen for din bolig i alle vores salgskanaler.
      </div>
      <b className="absolute top-[102px] left-[405px] text-5xl leading-[54px] inline-block w-[535px]">
        <p className="[margin-block-start:0] [margin-block-end:4px]">{`Hold dig opdateret `}</p>
        <p className="m-[0]">på salgsprocessen</p>
      </b>
    </div>
  );
};

export default AppDownload;
