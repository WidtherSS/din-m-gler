import { useCallback } from "react";
import { useNavigate } from "react-router-dom";

const FeatureProperty = () => {
  const navigate = useNavigate();

  const onButton1Click = useCallback(() => {
    navigate("/propertylist");
  }, [navigate]);

  return (
    <div className="absolute top-[1871px] left-[0px] w-[1920px] h-[1474px] overflow-hidden text-right text-lg text-gray-1400 font-roboto">
      <div className="absolute top-[0px] left-[0px] bg-gray-100 w-[1920px] h-[1474px]" />
      <button
        className="cursor-pointer [border:none] p-[16px_32px] bg-gray-1700 absolute top-[1292px] left-[881px] rounded-[2px] flex flex-row box-border items-center justify-center hover:bg-gray-600 hover:animate-[1s_ease-in-out_0s_infinite_normal_both_scale-up] hover:opacity-[1]"
        onClick={onButton1Click}
      >
        <div className="relative text-base leading-[30px] font-medium font-roboto text-white text-left inline-block">
          Se alle boliger
        </div>
      </button>
      <div className="absolute top-[312px] left-[405px] w-[1110px] h-[922px]">
        <div className="absolute top-[474px] left-[0px] w-[540px] h-[446px]">
          <div className="absolute top-[0px] left-[0px] rounded-[4px] bg-white shadow-[0px_10px_30px_rgba(0,_115,_225,_0.06)] w-[540px] h-[446px]" />
          <img
            className="absolute top-[0px] left-[0px] w-[540px] h-[225px] object-cover"
            alt=""
            src="../mask-group4@2x.png"
          />
          <div className="absolute top-[390px] left-[24px] w-[492px] h-[30px]">
            <div className="absolute top-[0px] left-[372px] w-[120px] h-[30px]">
              <div className="absolute top-[0px] left-[0px] leading-[30px] font-medium inline-block">
                Kr. 4.567.890
              </div>
            </div>
            <div className="absolute top-[0px] left-[57px] w-[139px] h-[28px] text-left text-sm">
              <div className="absolute top-[0px] left-[0px] leading-[28px] inline-block">
                4 værelser • 156 m²
              </div>
            </div>
            <div className="absolute top-[0px] left-[0px] w-[30px] h-[30px] text-center text-white">
              <div className="absolute top-[0px] left-[0px] bg-orange w-[30px] h-[30px]" />
              <div className="absolute top-[0px] left-[0px] leading-[30px] font-medium inline-block w-[30px]">
                C
              </div>
            </div>
          </div>
          <div className="absolute top-[249px] left-[24px] w-[492px] h-[110px] text-left">
            <div className="absolute top-[40px] left-[0px] text-sm leading-[28px] inline-block w-[492px] h-[32px]">
              4000 Roskilde
            </div>
            <div className="absolute top-[0px] left-[0px] leading-[30px] font-medium text-gray-1600 inline-block">
              Fjordager 234 • Gevninge
            </div>
            <div className="absolute top-[80px] left-[0px] w-[190px] h-[30px]">
              <div className="absolute top-[0px] left-[0px] inline-block">
                <span className="leading-[30px] font-medium">Villa</span>
                <span className="text-sm leading-[28px]">
                  {" "}
                  • Ejerudgift: 4.567 kr.
                </span>
              </div>
            </div>
          </div>
          <div className="absolute top-[373px] left-[24px] bg-gray-400 w-[492px] h-[1px]" />
        </div>
        <div className="absolute top-[0px] left-[0px] w-[540px] h-[446px]">
          <div className="absolute top-[0px] left-[0px] rounded-[4px] bg-white shadow-[0px_10px_30px_rgba(0,_115,_225,_0.06)] w-[540px] h-[446px]" />
          <img
            className="absolute top-[0px] left-[0px] w-[540px] h-[225px] object-cover"
            alt=""
            src="../mask-group5@2x.png"
          />
          <div className="absolute top-[390px] left-[24px] w-[492px] h-[30px]">
            <div className="absolute top-[0px] left-[372px] w-[120px] h-[30px]">
              <div className="absolute top-[0px] left-[0px] leading-[30px] font-medium inline-block">
                Kr. 4.567.890
              </div>
            </div>
            <div className="absolute top-[0px] left-[57px] w-[139px] h-[28px] text-left text-sm">
              <div className="absolute top-[0px] left-[0px] leading-[28px] inline-block">
                4 værelser • 156 m²
              </div>
            </div>
            <div className="absolute top-[0px] left-[0px] w-[30px] h-[30px] text-center text-white">
              <div className="absolute top-[0px] left-[0px] bg-turquoise w-[30px] h-[30px]" />
              <div className="absolute top-[0px] left-[0px] leading-[30px] font-medium inline-block w-[30px]">
                A
              </div>
            </div>
          </div>
          <div className="absolute top-[249px] left-[24px] w-[492px] h-[110px] text-left">
            <div className="absolute top-[40px] left-[0px] text-sm leading-[28px] inline-block w-[492px] h-[32px]">
              4000 Roskilde
            </div>
            <div className="absolute top-[0px] left-[0px] leading-[30px] font-medium text-gray-1600 inline-block">
              Klosterengen 234
            </div>
            <div className="absolute top-[80px] left-[0px] w-[190px] h-[30px]">
              <div className="absolute top-[0px] left-[0px] inline-block">
                <span className="leading-[30px] font-medium">Villa</span>
                <span className="text-sm leading-[28px]">
                  {" "}
                  • Ejerudgift: 4.567 kr.
                </span>
              </div>
            </div>
          </div>
          <div className="absolute top-[373px] left-[24px] bg-gray-400 w-[492px] h-[1px]" />
        </div>
        <div className="absolute top-[0px] left-[570px] w-[540px] h-[446px]">
          <div className="absolute top-[0px] left-[0px] rounded-[4px] bg-white shadow-[0px_10px_30px_rgba(0,_115,_225,_0.06)] w-[540px] h-[446px]" />
          <img
            className="absolute top-[0px] left-[0px] w-[540px] h-[225px] object-cover"
            alt=""
            src="../mask-group6@2x.png"
          />
          <div className="absolute top-[390px] left-[24px] w-[492px] h-[30px]">
            <div className="absolute top-[0px] left-[372px] w-[120px] h-[30px]">
              <div className="absolute top-[0px] left-[0px] leading-[30px] font-medium inline-block">
                Kr. 4.567.890
              </div>
            </div>
            <div className="absolute top-[0px] left-[57px] w-[139px] h-[28px] text-left text-sm">
              <div className="absolute top-[0px] left-[0px] leading-[28px] inline-block">
                4 værelser • 156 m²
              </div>
            </div>
            <div className="absolute top-[0px] left-[0px] w-[30px] h-[30px] text-center text-white">
              <div className="absolute top-[0px] left-[0px] bg-gold w-[30px] h-[30px]" />
              <div className="absolute top-[0px] left-[0px] leading-[30px] font-medium inline-block w-[30px]">
                B
              </div>
            </div>
          </div>
          <div className="absolute top-[249px] left-[24px] w-[492px] h-[110px] text-left">
            <div className="absolute top-[40px] left-[0px] text-sm leading-[28px] inline-block w-[492px] h-[32px]">
              4000 Roskilde
            </div>
            <div className="absolute top-[0px] left-[0px] leading-[30px] font-medium text-gray-1600 inline-block">
              Lønbjergparken 22 • Vindinge
            </div>
            <div className="absolute top-[80px] left-[0px] w-[190px] h-[30px]">
              <div className="absolute top-[0px] left-[0px] inline-block">
                <span className="leading-[30px] font-medium">Villa</span>
                <span className="text-sm leading-[28px]">
                  {" "}
                  • Ejerudgift: 4.567 kr.
                </span>
              </div>
            </div>
          </div>
          <div className="absolute top-[373px] left-[24px] bg-gray-400 w-[492px] h-[1px]" />
        </div>
        <div className="absolute top-[476px] left-[570px] w-[540px] h-[446px]">
          <div className="absolute top-[0px] left-[0px] rounded-[4px] bg-white shadow-[0px_10px_30px_rgba(0,_115,_225,_0.06)] w-[540px] h-[446px]" />
          <img
            className="absolute top-[0px] left-[0px] w-[540px] h-[225px] object-cover"
            alt=""
            src="../mask-group7@2x.png"
          />
          <div className="absolute top-[390px] left-[24px] w-[492px] h-[30px]">
            <div className="absolute top-[0px] left-[372px] w-[120px] h-[30px]">
              <div className="absolute top-[0px] left-[0px] leading-[30px] font-medium inline-block">
                Kr. 4.567.890
              </div>
            </div>
            <div className="absolute top-[0px] left-[57px] w-[139px] h-[28px] text-left text-sm">
              <div className="absolute top-[0px] left-[0px] leading-[28px] inline-block">
                4 værelser • 156 m²
              </div>
            </div>
            <div className="absolute top-[0px] left-[0px] w-[30px] h-[30px] text-center text-white">
              <div className="absolute top-[0px] left-[0px] bg-brown-100 w-[30px] h-[30px]" />
              <div className="absolute top-[0px] left-[0px] leading-[30px] font-medium inline-block w-[30px]">
                A
              </div>
            </div>
          </div>
          <div className="absolute top-[249px] left-[24px] w-[492px] h-[110px] text-left">
            <div className="absolute top-[40px] left-[0px] text-sm leading-[28px] inline-block w-[492px] h-[32px]">
              4000 Roskilde
            </div>
            <div className="absolute top-[0px] left-[0px] leading-[30px] font-medium text-gray-1600 inline-block">
              Sivholmvej 123 • Veddelev
            </div>
            <div className="absolute top-[80px] left-[0px] w-[190px] h-[30px]">
              <div className="absolute top-[0px] left-[0px] inline-block">
                <span className="leading-[30px] font-medium">Villa</span>
                <span className="text-sm leading-[28px]">
                  {" "}
                  • Ejerudgift: 4.567 kr.
                </span>
              </div>
            </div>
          </div>
          <div className="absolute top-[373px] left-[24px] bg-gray-400 w-[492px] h-[1px]" />
        </div>
      </div>
      <div className="absolute top-[120px] left-[637px] w-[646px] h-[130px] text-center text-5xl text-gray-1500">
        <b className="absolute top-[0px] left-[181px] leading-[54px] inline-block">
          Udvalgte Boliger
        </b>
        <div className="absolute top-[70px] left-[0px] text-base leading-[30px] text-gray-1400 inline-block w-[646px] h-[60px]">
          There are many variations of passages of Lorem Ipsum available but the
          this in majority have suffered alteration in some
        </div>
      </div>
    </div>
  );
};

export default FeatureProperty;
