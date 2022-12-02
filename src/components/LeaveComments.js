const LeaveComments = () => {
  return (
    <div className="absolute top-[336px] left-[405px] w-[635px] h-[710px] text-left text-base text-gray-500 font-roboto">
      <div className="absolute top-[0px] left-[0px] rounded-[4px] bg-white [border:1px_solid_#d3dee8] box-border w-[635px] h-[710px]" />
      <button className="cursor-pointer [border:none] p-[16px_32px] bg-gray-1700 absolute top-[608px] left-[40px] rounded-[2px] flex flex-row box-border items-start justify-start">
        <div className="relative text-base leading-[30px] font-medium font-roboto text-white text-left inline-block">
          Send besked
        </div>
      </button>
      <div className="absolute top-[276px] left-[40px] w-[554px] h-[252px] text-gray-1400">
        <input
          className="[border:1px_solid_#d3dee8] bg-white absolute top-[38px] left-[0px] rounded-[2px] box-border w-[554px] h-[214px]"
          type="text"
        />
        <div className="absolute top-[0px] left-[0px] leading-[30px] inline-block">
          Besked
        </div>
        <div className="absolute top-[54px] left-[16px] leading-[30px] text-gray-500 inline-block">{`Indtast din besked... `}</div>
      </div>
      <div className="absolute top-[40px] left-[327px] w-[267px] h-[98px]">
        <input
          className="[border:1px_solid_#d3dee8] bg-white absolute top-[38px] left-[0px] rounded-[2px] box-border w-[267px] h-[60px]"
          type="email"
        />
        <div className="absolute top-[53px] left-[15px] leading-[30px] inline-block">
          Indtast din email
        </div>
        <div className="absolute top-[0px] left-[0px] leading-[30px] text-gray-1400 inline-block">
          Email
        </div>
      </div>
      <div className="absolute top-[40px] left-[40px] w-[267px] h-[98px]">
        <input
          className="[border:1px_solid_#d3dee8] bg-white absolute top-[38px] left-[0px] rounded-[2px] box-border w-[267px] h-[60px]"
          type="text"
        />
        <div className="absolute top-[53px] left-[15px] leading-[30px] inline-block">
          Indtast dit navn
        </div>
        <div className="absolute top-[0px] left-[0px] leading-[30px] text-gray-1400 inline-block">
          Navn
        </div>
      </div>
      <div className="absolute top-[158px] left-[40px] w-[554px] h-[98px]">
        <input
          className="[border:1px_solid_#d3dee8] bg-white absolute top-[38px] left-[0px] rounded-[2px] box-border w-[554px] h-[60px]"
          type="text"
        />
        <div className="absolute top-[53px] left-[15px] leading-[30px] inline-block">
          Indtast emne
        </div>
        <div className="absolute top-[0px] left-[0px] leading-[30px] text-gray-1400 inline-block">
          Emne
        </div>
      </div>
      <div className="absolute top-[548px] left-[40px] w-[422px] h-[28px] text-sm text-gray-1400">
        <input
          className="cursor-pointer absolute top-[0px] left-[0px] bg-white [border:1.5px_solid_#d3dee8] box-border w-[28px] h-[28px]"
          type="checkbox"
          defaultChecked={true}
        />
        <div className="absolute top-[0px] left-[36px] leading-[28px] inline-block">
          Ja tak, jeg vil gerne modtage Din Mæglers nyhedsbrev.
        </div>
      </div>
    </div>
  );
};

export default LeaveComments;
