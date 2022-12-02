import { useCallback } from "react";
import { Button, TextField, Input, Icon } from "@mui/material";
import { Link, useNavigate } from "react-router-dom";

const Favorites = () => {
  const navigate = useNavigate();

  const onLoginButtonClick = useCallback(() => {
    navigate("/login");
  }, [navigate]);

  return (
    <div className="relative bg-white w-full h-[3414px] overflow-hidden text-left text-lg text-gray-1400 font-roboto">
      <div className="absolute top-[464px] left-[405px] w-[1110px] h-[59px] overflow-hidden">
        <div className="absolute top-[58px] left-[0px] bg-gray-400 w-[1110px] h-[1px]" />
        <input
          className="[border:none] font-roboto text-sm bg-[transparent] absolute top-[0px] left-[0px] w-[300px] h-[42px]"
          type="search"
          placeholder="Søg i favoritter"
        />
      </div>
      <div className="absolute top-[calc(50%_-_1145px)] left-[calc(50%_-_554px)] w-[1110px] h-[204px] overflow-hidden text-right">
        <div className="absolute top-[0px] left-[0px] rounded-[4px] bg-white shadow-[0px_10px_30px_rgba(0,_115,_225,_0.06)] [border:1px_solid_#d5e0ea] box-border w-[1110px] h-[204px]" />
        <img
          className="absolute top-[34px] left-[36px] w-[282px] h-[137px] object-cover"
          alt=""
          src="../mask-group31@2x.png"
        />
        <div className="absolute top-[32px] left-[668px] w-[397px] h-[32px]">
          <div className="absolute top-[0px] left-[277px] w-[120px] h-[30px]">
            <div className="absolute top-[0px] left-[0px] leading-[30px] font-medium inline-block [-webkit-text-stroke:1px_#d5e0ea]">
              Kr. 4.567.890
            </div>
          </div>
          <div className="absolute top-[2px] left-[57px] w-[139px] h-[28px] text-left text-sm">
            <div className="absolute top-[0px] left-[0px] leading-[28px] inline-block [-webkit-text-stroke:1px_#d5e0ea]">
              4 værelser • 156 m²
            </div>
          </div>
          <div className="absolute top-[2px] left-[0px] w-[30px] h-[30px] text-center text-white">
            <div className="absolute top-[0px] left-[0px] bg-turquoise [border:1px_solid_#d5e0ea] box-border w-[30px] h-[30px]" />
            <div className="absolute top-[0px] left-[0px] leading-[30px] font-medium inline-block w-[30px] [-webkit-text-stroke:1px_#d5e0ea]">
              A
            </div>
          </div>
        </div>
        <div className="absolute top-[34px] left-[366px] w-[492px] h-[110px] text-left">
          <div className="absolute top-[40px] left-[0px] text-sm leading-[28px] inline-block w-[492px] h-[32px] [-webkit-text-stroke:1px_#d5e0ea]">
            4000 Roskilde
          </div>
          <div className="absolute top-[0px] left-[0px] leading-[30px] font-medium text-gray-1600 inline-block [-webkit-text-stroke:1px_#d5e0ea]">
            Klosterengen 234
          </div>
          <div className="absolute top-[80px] left-[0px] w-[190px] h-[30px]">
            <div className="absolute top-[0px] left-[0px] inline-block [-webkit-text-stroke:1px_#d5e0ea]">
              <span className="leading-[30px] font-medium">Villa</span>
              <span className="text-sm leading-[28px]">
                {" "}
                • Ejerudgift: 4.567 kr.
              </span>
            </div>
          </div>
        </div>
        <Button
          className="absolute top-[117px] left-[859px]"
          variant="contained"
        >
          Fjern fra favotitter
        </Button>
      </div>
      <div className="absolute top-[805px] left-[406px] w-[1110px] h-[204px] overflow-hidden text-right">
        <div className="absolute top-[0px] left-[0px] rounded-[4px] bg-white shadow-[0px_10px_30px_rgba(0,_115,_225,_0.06)] [border:1px_solid_#d5e0ea] box-border w-[1110px] h-[204px]" />
        <img
          className="absolute top-[34px] left-[36px] w-[282px] h-[137px] object-cover"
          alt=""
          src="../mask-group31@2x.png"
        />
        <div className="absolute top-[32px] left-[668px] w-[397px] h-[32px]">
          <div className="absolute top-[0px] left-[277px] w-[120px] h-[30px]">
            <div className="absolute top-[0px] left-[0px] leading-[30px] font-medium inline-block [-webkit-text-stroke:1px_#d5e0ea]">
              Kr. 4.567.890
            </div>
          </div>
          <div className="absolute top-[2px] left-[57px] w-[139px] h-[28px] text-left text-sm">
            <div className="absolute top-[0px] left-[0px] leading-[28px] inline-block [-webkit-text-stroke:1px_#d5e0ea]">
              4 værelser • 156 m²
            </div>
          </div>
          <div className="absolute top-[2px] left-[0px] w-[30px] h-[30px] text-center text-white">
            <div className="absolute top-[0px] left-[0px] bg-turquoise [border:1px_solid_#d5e0ea] box-border w-[30px] h-[30px]" />
            <div className="absolute top-[0px] left-[0px] leading-[30px] font-medium inline-block w-[30px] [-webkit-text-stroke:1px_#d5e0ea]">
              A
            </div>
          </div>
        </div>
        <div className="absolute top-[34px] left-[366px] w-[492px] h-[110px] text-left">
          <div className="absolute top-[40px] left-[0px] text-sm leading-[28px] inline-block w-[492px] h-[32px] [-webkit-text-stroke:1px_#d5e0ea]">
            4000 Roskilde
          </div>
          <div className="absolute top-[0px] left-[0px] leading-[30px] font-medium text-gray-1600 inline-block [-webkit-text-stroke:1px_#d5e0ea]">
            Klosterengen 234
          </div>
          <div className="absolute top-[80px] left-[0px] w-[190px] h-[30px]">
            <div className="absolute top-[0px] left-[0px] inline-block [-webkit-text-stroke:1px_#d5e0ea]">
              <span className="leading-[30px] font-medium">Villa</span>
              <span className="text-sm leading-[28px]">
                {" "}
                • Ejerudgift: 4.567 kr.
              </span>
            </div>
          </div>
        </div>
        <TextField
          className="[border:none] bg-[transparent] absolute top-[117px] left-[859px]"
          variant="standard"
          label="Fjern fra favotitter"
        />
      </div>
      <div className="absolute top-[1048px] left-[406px] w-[1110px] h-[933px] overflow-hidden">
        <div className="absolute top-[0px] left-[0px] rounded-[4px] bg-white shadow-[0px_10px_30px_rgba(0,_115,_225,_0.06)] [border:1px_solid_#d5e0ea] box-border w-[1110px] h-[204px]" />
        <img
          className="absolute top-[34px] left-[36px] w-[282px] h-[137px] object-cover"
          alt=""
          src="../mask-group31@2x.png"
        />
        <div className="absolute top-[32px] left-[668px] w-[397px] h-[32px] text-right">
          <div className="absolute top-[0px] left-[277px] w-[120px] h-[30px]">
            <div className="absolute top-[0px] left-[0px] leading-[30px] font-medium inline-block [-webkit-text-stroke:1px_#d5e0ea]">
              Kr. 4.567.890
            </div>
          </div>
          <div className="absolute top-[2px] left-[57px] w-[139px] h-[28px] text-left text-sm">
            <div className="absolute top-[0px] left-[0px] leading-[28px] inline-block [-webkit-text-stroke:1px_#d5e0ea]">
              4 værelser • 156 m²
            </div>
          </div>
          <div className="absolute top-[2px] left-[0px] w-[30px] h-[30px] text-center text-white">
            <div className="absolute top-[0px] left-[0px] bg-turquoise [border:1px_solid_#d5e0ea] box-border w-[30px] h-[30px]" />
            <div className="absolute top-[0px] left-[0px] leading-[30px] font-medium inline-block w-[30px] [-webkit-text-stroke:1px_#d5e0ea]">
              A
            </div>
          </div>
        </div>
        <div className="absolute top-[34px] left-[366px] w-[492px] h-[110px]">
          <div className="absolute top-[40px] left-[0px] text-sm leading-[28px] inline-block w-[492px] h-[32px] [-webkit-text-stroke:1px_#d5e0ea]">
            4000 Roskilde
          </div>
          <div className="absolute top-[0px] left-[0px] leading-[30px] font-medium text-gray-1600 inline-block [-webkit-text-stroke:1px_#d5e0ea]">
            Klosterengen 234
          </div>
          <div className="absolute top-[80px] left-[0px] w-[190px] h-[30px]">
            <div className="absolute top-[0px] left-[0px] inline-block [-webkit-text-stroke:1px_#d5e0ea]">
              <span className="leading-[30px] font-medium">Villa</span>
              <span className="text-sm leading-[28px]">
                {" "}
                • Ejerudgift: 4.567 kr.
              </span>
            </div>
          </div>
        </div>
        <div className="absolute top-[117px] left-[859px] rounded-[2px] bg-gray-1700 [border:1px_solid_#d5e0ea] box-border flex flex-row p-[16px_32px] items-start justify-start text-base text-white">
          <div className="relative leading-[30px] font-medium inline-block">
            Fjern fra favotitter
          </div>
        </div>
        <div className="absolute top-[486px] left-[0px] w-[1110px] h-[204px]">
          <div className="absolute top-[0px] left-[0px] rounded-[4px] bg-white shadow-[0px_10px_30px_rgba(0,_115,_225,_0.06)] [border:1px_solid_#d5e0ea] box-border w-[1110px] h-[204px]" />
          <img
            className="absolute top-[34px] left-[36px] w-[282px] h-[137px] object-cover"
            alt=""
            src="../mask-group31@2x.png"
          />
          <div className="absolute top-[32px] left-[668px] w-[397px] h-[32px] text-right">
            <div className="absolute top-[0px] left-[277px] w-[120px] h-[30px]">
              <div className="absolute top-[0px] left-[0px] leading-[30px] font-medium inline-block [-webkit-text-stroke:1px_#d5e0ea]">
                Kr. 4.567.890
              </div>
            </div>
            <div className="absolute top-[2px] left-[57px] w-[139px] h-[28px] text-left text-sm">
              <div className="absolute top-[0px] left-[0px] leading-[28px] inline-block [-webkit-text-stroke:1px_#d5e0ea]">
                4 værelser • 156 m²
              </div>
            </div>
            <div className="absolute top-[2px] left-[0px] w-[30px] h-[30px] text-center text-white">
              <div className="absolute top-[0px] left-[0px] bg-turquoise [border:1px_solid_#d5e0ea] box-border w-[30px] h-[30px]" />
              <div className="absolute top-[0px] left-[0px] leading-[30px] font-medium inline-block w-[30px] [-webkit-text-stroke:1px_#d5e0ea]">
                A
              </div>
            </div>
          </div>
          <div className="absolute top-[34px] left-[366px] w-[492px] h-[110px]">
            <div className="absolute top-[40px] left-[0px] text-sm leading-[28px] inline-block w-[492px] h-[32px] [-webkit-text-stroke:1px_#d5e0ea]">
              4000 Roskilde
            </div>
            <div className="absolute top-[0px] left-[0px] leading-[30px] font-medium text-gray-1600 inline-block [-webkit-text-stroke:1px_#d5e0ea]">
              Klosterengen 234
            </div>
            <div className="absolute top-[80px] left-[0px] w-[190px] h-[30px]">
              <div className="absolute top-[0px] left-[0px] inline-block [-webkit-text-stroke:1px_#d5e0ea]">
                <span className="leading-[30px] font-medium">Villa</span>
                <span className="text-sm leading-[28px]">
                  {" "}
                  • Ejerudgift: 4.567 kr.
                </span>
              </div>
            </div>
          </div>
          <div className="absolute top-[117px] left-[859px] rounded-[2px] bg-gray-1700 [border:1px_solid_#d5e0ea] box-border flex flex-row p-[16px_32px] items-start justify-start text-base text-white">
            <div className="relative leading-[30px] font-medium inline-block">
              Fjern fra favotitter
            </div>
          </div>
        </div>
        <div className="absolute top-[729px] left-[0px] w-[1110px] h-[204px]">
          <div className="absolute top-[0px] left-[0px] rounded-[4px] bg-white shadow-[0px_10px_30px_rgba(0,_115,_225,_0.06)] [border:1px_solid_#d5e0ea] box-border w-[1110px] h-[204px]" />
          <img
            className="absolute top-[34px] left-[36px] w-[282px] h-[137px] object-cover"
            alt=""
            src="../mask-group31@2x.png"
          />
          <div className="absolute top-[32px] left-[668px] w-[397px] h-[32px] text-right">
            <div className="absolute top-[0px] left-[277px] w-[120px] h-[30px]">
              <div className="absolute top-[0px] left-[0px] leading-[30px] font-medium inline-block [-webkit-text-stroke:1px_#d5e0ea]">
                Kr. 4.567.890
              </div>
            </div>
            <div className="absolute top-[2px] left-[57px] w-[139px] h-[28px] text-left text-sm">
              <div className="absolute top-[0px] left-[0px] leading-[28px] inline-block [-webkit-text-stroke:1px_#d5e0ea]">
                4 værelser • 156 m²
              </div>
            </div>
            <div className="absolute top-[2px] left-[0px] w-[30px] h-[30px] text-center text-white">
              <div className="absolute top-[0px] left-[0px] bg-turquoise [border:1px_solid_#d5e0ea] box-border w-[30px] h-[30px]" />
              <div className="absolute top-[0px] left-[0px] leading-[30px] font-medium inline-block w-[30px] [-webkit-text-stroke:1px_#d5e0ea]">
                A
              </div>
            </div>
          </div>
          <div className="absolute top-[34px] left-[366px] w-[492px] h-[110px]">
            <div className="absolute top-[40px] left-[0px] text-sm leading-[28px] inline-block w-[492px] h-[32px] [-webkit-text-stroke:1px_#d5e0ea]">
              4000 Roskilde
            </div>
            <div className="absolute top-[0px] left-[0px] leading-[30px] font-medium text-gray-1600 inline-block [-webkit-text-stroke:1px_#d5e0ea]">
              Klosterengen 234
            </div>
            <div className="absolute top-[80px] left-[0px] w-[190px] h-[30px]">
              <div className="absolute top-[0px] left-[0px] inline-block [-webkit-text-stroke:1px_#d5e0ea]">
                <span className="leading-[30px] font-medium">Villa</span>
                <span className="text-sm leading-[28px]">
                  {" "}
                  • Ejerudgift: 4.567 kr.
                </span>
              </div>
            </div>
          </div>
          <div className="absolute top-[117px] left-[859px] rounded-[2px] bg-gray-1700 [border:1px_solid_#d5e0ea] box-border flex flex-row p-[16px_32px] items-start justify-start text-base text-white">
            <div className="relative leading-[30px] font-medium inline-block">
              Fjern fra favotitter
            </div>
          </div>
        </div>
      </div>
      <div className="absolute top-[1291px] left-[406px] w-[1110px] h-[933px] overflow-hidden">
        <div className="absolute top-[0px] left-[0px] rounded-[4px] bg-white shadow-[0px_10px_30px_rgba(0,_115,_225,_0.06)] [border:1px_solid_#d5e0ea] box-border w-[1110px] h-[204px]" />
        <img
          className="absolute top-[34px] left-[36px] w-[282px] h-[137px] object-cover"
          alt=""
          src="../mask-group31@2x.png"
        />
        <div className="absolute top-[32px] left-[668px] w-[397px] h-[32px] text-right">
          <div className="absolute top-[0px] left-[277px] w-[120px] h-[30px]">
            <div className="absolute top-[0px] left-[0px] leading-[30px] font-medium inline-block [-webkit-text-stroke:1px_#d5e0ea]">
              Kr. 4.567.890
            </div>
          </div>
          <div className="absolute top-[2px] left-[57px] w-[139px] h-[28px] text-left text-sm">
            <div className="absolute top-[0px] left-[0px] leading-[28px] inline-block [-webkit-text-stroke:1px_#d5e0ea]">
              4 værelser • 156 m²
            </div>
          </div>
          <div className="absolute top-[2px] left-[0px] w-[30px] h-[30px] text-center text-white">
            <div className="absolute top-[0px] left-[0px] bg-turquoise [border:1px_solid_#d5e0ea] box-border w-[30px] h-[30px]" />
            <div className="absolute top-[0px] left-[0px] leading-[30px] font-medium inline-block w-[30px] [-webkit-text-stroke:1px_#d5e0ea]">
              A
            </div>
          </div>
        </div>
        <div className="absolute top-[34px] left-[366px] w-[492px] h-[110px]">
          <div className="absolute top-[40px] left-[0px] text-sm leading-[28px] inline-block w-[492px] h-[32px] [-webkit-text-stroke:1px_#d5e0ea]">
            4000 Roskilde
          </div>
          <div className="absolute top-[0px] left-[0px] leading-[30px] font-medium text-gray-1600 inline-block [-webkit-text-stroke:1px_#d5e0ea]">
            Klosterengen 234
          </div>
          <div className="absolute top-[80px] left-[0px] w-[190px] h-[30px]">
            <div className="absolute top-[0px] left-[0px] inline-block [-webkit-text-stroke:1px_#d5e0ea]">
              <span className="leading-[30px] font-medium">Villa</span>
              <span className="text-sm leading-[28px]">
                {" "}
                • Ejerudgift: 4.567 kr.
              </span>
            </div>
          </div>
        </div>
        <div className="absolute top-[117px] left-[859px] rounded-[2px] bg-gray-1700 [border:1px_solid_#d5e0ea] box-border flex flex-row p-[16px_32px] items-start justify-start text-base text-white">
          <div className="relative leading-[30px] font-medium inline-block">
            Fjern fra favotitter
          </div>
        </div>
        <div className="absolute top-[486px] left-[0px] w-[1110px] h-[204px]">
          <div className="absolute top-[0px] left-[0px] rounded-[4px] bg-white shadow-[0px_10px_30px_rgba(0,_115,_225,_0.06)] [border:1px_solid_#d5e0ea] box-border w-[1110px] h-[204px]" />
          <img
            className="absolute top-[34px] left-[36px] w-[282px] h-[137px] object-cover"
            alt=""
            src="../mask-group31@2x.png"
          />
          <div className="absolute top-[32px] left-[668px] w-[397px] h-[32px] text-right">
            <div className="absolute top-[0px] left-[277px] w-[120px] h-[30px]">
              <div className="absolute top-[0px] left-[0px] leading-[30px] font-medium inline-block [-webkit-text-stroke:1px_#d5e0ea]">
                Kr. 4.567.890
              </div>
            </div>
            <div className="absolute top-[2px] left-[57px] w-[139px] h-[28px] text-left text-sm">
              <div className="absolute top-[0px] left-[0px] leading-[28px] inline-block [-webkit-text-stroke:1px_#d5e0ea]">
                4 værelser • 156 m²
              </div>
            </div>
            <div className="absolute top-[2px] left-[0px] w-[30px] h-[30px] text-center text-white">
              <div className="absolute top-[0px] left-[0px] bg-turquoise [border:1px_solid_#d5e0ea] box-border w-[30px] h-[30px]" />
              <div className="absolute top-[0px] left-[0px] leading-[30px] font-medium inline-block w-[30px] [-webkit-text-stroke:1px_#d5e0ea]">
                A
              </div>
            </div>
          </div>
          <div className="absolute top-[34px] left-[366px] w-[492px] h-[110px]">
            <div className="absolute top-[40px] left-[0px] text-sm leading-[28px] inline-block w-[492px] h-[32px] [-webkit-text-stroke:1px_#d5e0ea]">
              4000 Roskilde
            </div>
            <div className="absolute top-[0px] left-[0px] leading-[30px] font-medium text-gray-1600 inline-block [-webkit-text-stroke:1px_#d5e0ea]">
              Klosterengen 234
            </div>
            <div className="absolute top-[80px] left-[0px] w-[190px] h-[30px]">
              <div className="absolute top-[0px] left-[0px] inline-block [-webkit-text-stroke:1px_#d5e0ea]">
                <span className="leading-[30px] font-medium">Villa</span>
                <span className="text-sm leading-[28px]">
                  {" "}
                  • Ejerudgift: 4.567 kr.
                </span>
              </div>
            </div>
          </div>
          <div className="absolute top-[117px] left-[859px] rounded-[2px] bg-gray-1700 [border:1px_solid_#d5e0ea] box-border flex flex-row p-[16px_32px] items-start justify-start text-base text-white">
            <div className="relative leading-[30px] font-medium inline-block">
              Fjern fra favotitter
            </div>
          </div>
        </div>
        <div className="absolute top-[729px] left-[0px] w-[1110px] h-[204px]">
          <div className="absolute top-[0px] left-[0px] rounded-[4px] bg-white shadow-[0px_10px_30px_rgba(0,_115,_225,_0.06)] [border:1px_solid_#d5e0ea] box-border w-[1110px] h-[204px]" />
          <img
            className="absolute top-[34px] left-[36px] w-[282px] h-[137px] object-cover"
            alt=""
            src="../mask-group31@2x.png"
          />
          <div className="absolute top-[32px] left-[668px] w-[397px] h-[32px] text-right">
            <div className="absolute top-[0px] left-[277px] w-[120px] h-[30px]">
              <div className="absolute top-[0px] left-[0px] leading-[30px] font-medium inline-block [-webkit-text-stroke:1px_#d5e0ea]">
                Kr. 4.567.890
              </div>
            </div>
            <div className="absolute top-[2px] left-[57px] w-[139px] h-[28px] text-left text-sm">
              <div className="absolute top-[0px] left-[0px] leading-[28px] inline-block [-webkit-text-stroke:1px_#d5e0ea]">
                4 værelser • 156 m²
              </div>
            </div>
            <div className="absolute top-[2px] left-[0px] w-[30px] h-[30px] text-center text-white">
              <div className="absolute top-[0px] left-[0px] bg-turquoise [border:1px_solid_#d5e0ea] box-border w-[30px] h-[30px]" />
              <div className="absolute top-[0px] left-[0px] leading-[30px] font-medium inline-block w-[30px] [-webkit-text-stroke:1px_#d5e0ea]">
                A
              </div>
            </div>
          </div>
          <div className="absolute top-[34px] left-[366px] w-[492px] h-[110px]">
            <div className="absolute top-[40px] left-[0px] text-sm leading-[28px] inline-block w-[492px] h-[32px] [-webkit-text-stroke:1px_#d5e0ea]">
              4000 Roskilde
            </div>
            <div className="absolute top-[0px] left-[0px] leading-[30px] font-medium text-gray-1600 inline-block [-webkit-text-stroke:1px_#d5e0ea]">
              Klosterengen 234
            </div>
            <div className="absolute top-[80px] left-[0px] w-[190px] h-[30px]">
              <div className="absolute top-[0px] left-[0px] inline-block [-webkit-text-stroke:1px_#d5e0ea]">
                <span className="leading-[30px] font-medium">Villa</span>
                <span className="text-sm leading-[28px]">
                  {" "}
                  • Ejerudgift: 4.567 kr.
                </span>
              </div>
            </div>
          </div>
          <div className="absolute top-[117px] left-[859px] rounded-[2px] bg-gray-1700 [border:1px_solid_#d5e0ea] box-border flex flex-row p-[16px_32px] items-start justify-start text-base text-white">
            <div className="relative leading-[30px] font-medium inline-block">
              Fjern fra favotitter
            </div>
          </div>
        </div>
      </div>
      <div className="absolute top-[1291px] left-[406px] w-[1110px] h-[933px] overflow-hidden">
        <div className="absolute top-[0px] left-[0px] rounded-[4px] bg-white shadow-[0px_10px_30px_rgba(0,_115,_225,_0.06)] [border:1px_solid_#d5e0ea] box-border w-[1110px] h-[204px]" />
        <img
          className="absolute top-[34px] left-[36px] w-[282px] h-[137px] object-cover"
          alt=""
          src="../mask-group31@2x.png"
        />
        <div className="absolute top-[32px] left-[668px] w-[397px] h-[32px] text-right">
          <div className="absolute top-[0px] left-[277px] w-[120px] h-[30px]">
            <div className="absolute top-[0px] left-[0px] leading-[30px] font-medium inline-block [-webkit-text-stroke:1px_#d5e0ea]">
              Kr. 4.567.890
            </div>
          </div>
          <div className="absolute top-[2px] left-[57px] w-[139px] h-[28px] text-left text-sm">
            <div className="absolute top-[0px] left-[0px] leading-[28px] inline-block [-webkit-text-stroke:1px_#d5e0ea]">
              4 værelser • 156 m²
            </div>
          </div>
          <div className="absolute top-[2px] left-[0px] w-[30px] h-[30px] text-center text-white">
            <div className="absolute top-[0px] left-[0px] bg-turquoise [border:1px_solid_#d5e0ea] box-border w-[30px] h-[30px]" />
            <div className="absolute top-[0px] left-[0px] leading-[30px] font-medium inline-block w-[30px] [-webkit-text-stroke:1px_#d5e0ea]">
              A
            </div>
          </div>
        </div>
        <div className="absolute top-[34px] left-[366px] w-[492px] h-[110px]">
          <div className="absolute top-[40px] left-[0px] text-sm leading-[28px] inline-block w-[492px] h-[32px] [-webkit-text-stroke:1px_#d5e0ea]">
            4000 Roskilde
          </div>
          <div className="absolute top-[0px] left-[0px] leading-[30px] font-medium text-gray-1600 inline-block [-webkit-text-stroke:1px_#d5e0ea]">
            Klosterengen 234
          </div>
          <div className="absolute top-[80px] left-[0px] w-[190px] h-[30px]">
            <div className="absolute top-[0px] left-[0px] inline-block [-webkit-text-stroke:1px_#d5e0ea]">
              <span className="leading-[30px] font-medium">Villa</span>
              <span className="text-sm leading-[28px]">
                {" "}
                • Ejerudgift: 4.567 kr.
              </span>
            </div>
          </div>
        </div>
        <div className="absolute top-[117px] left-[859px] rounded-[2px] bg-gray-1700 [border:1px_solid_#d5e0ea] box-border flex flex-row p-[16px_32px] items-start justify-start text-base text-white">
          <div className="relative leading-[30px] font-medium inline-block">
            Fjern fra favotitter
          </div>
        </div>
        <div className="absolute top-[486px] left-[0px] w-[1110px] h-[204px]">
          <div className="absolute top-[0px] left-[0px] rounded-[4px] bg-white shadow-[0px_10px_30px_rgba(0,_115,_225,_0.06)] [border:1px_solid_#d5e0ea] box-border w-[1110px] h-[204px]" />
          <img
            className="absolute top-[520px] left-[36px] w-[282px] h-[137px] object-cover hidden"
            alt=""
            src="../mask-group31@2x.png"
          />
          <div className="absolute top-[32px] left-[668px] w-[397px] h-[32px] text-right">
            <div className="absolute top-[0px] left-[277px] w-[120px] h-[30px]">
              <div className="absolute top-[0px] left-[0px] leading-[30px] font-medium inline-block [-webkit-text-stroke:1px_#d5e0ea]">
                Kr. 4.567.890
              </div>
            </div>
            <div className="absolute top-[2px] left-[57px] w-[139px] h-[28px] text-left text-sm">
              <div className="absolute top-[0px] left-[0px] leading-[28px] inline-block [-webkit-text-stroke:1px_#d5e0ea]">
                4 værelser • 156 m²
              </div>
            </div>
            <div className="absolute top-[2px] left-[0px] w-[30px] h-[30px] text-center text-white">
              <div className="absolute top-[0px] left-[0px] bg-turquoise [border:1px_solid_#d5e0ea] box-border w-[30px] h-[30px]" />
              <div className="absolute top-[0px] left-[0px] leading-[30px] font-medium inline-block w-[30px] [-webkit-text-stroke:1px_#d5e0ea]">
                A
              </div>
            </div>
          </div>
          <div className="absolute top-[34px] left-[366px] w-[492px] h-[110px]">
            <div className="absolute top-[40px] left-[0px] text-sm leading-[28px] inline-block w-[492px] h-[32px] [-webkit-text-stroke:1px_#d5e0ea]">
              4000 Roskilde
            </div>
            <div className="absolute top-[0px] left-[0px] leading-[30px] font-medium text-gray-1600 inline-block [-webkit-text-stroke:1px_#d5e0ea]">
              Klosterengen 234
            </div>
            <div className="absolute top-[80px] left-[0px] w-[190px] h-[30px]">
              <div className="absolute top-[0px] left-[0px] inline-block [-webkit-text-stroke:1px_#d5e0ea]">
                <span className="leading-[30px] font-medium">Villa</span>
                <span className="text-sm leading-[28px]">
                  {" "}
                  • Ejerudgift: 4.567 kr.
                </span>
              </div>
            </div>
          </div>
          <div className="absolute top-[117px] left-[859px] rounded-[2px] bg-gray-1700 [border:1px_solid_#d5e0ea] box-border flex flex-row p-[16px_32px] items-start justify-start text-base text-white">
            <div className="relative leading-[30px] font-medium inline-block">
              Fjern fra favotitter
            </div>
          </div>
        </div>
        <div className="absolute top-[729px] left-[0px] w-[1110px] h-[204px]">
          <div className="absolute top-[0px] left-[0px] rounded-[4px] bg-white shadow-[0px_10px_30px_rgba(0,_115,_225,_0.06)] [border:1px_solid_#d5e0ea] box-border w-[1110px] h-[204px]" />
          <img
            className="absolute top-[34px] left-[36px] w-[282px] h-[137px] object-cover"
            alt=""
            src="../mask-group31@2x.png"
          />
          <div className="absolute top-[32px] left-[668px] w-[397px] h-[32px] text-right">
            <div className="absolute top-[0px] left-[277px] w-[120px] h-[30px]">
              <div className="absolute top-[0px] left-[0px] leading-[30px] font-medium inline-block [-webkit-text-stroke:1px_#d5e0ea]">
                Kr. 4.567.890
              </div>
            </div>
            <div className="absolute top-[2px] left-[57px] w-[139px] h-[28px] text-left text-sm">
              <div className="absolute top-[0px] left-[0px] leading-[28px] inline-block [-webkit-text-stroke:1px_#d5e0ea]">
                4 værelser • 156 m²
              </div>
            </div>
            <div className="absolute top-[2px] left-[0px] w-[30px] h-[30px] text-center text-white">
              <div className="absolute top-[0px] left-[0px] bg-turquoise [border:1px_solid_#d5e0ea] box-border w-[30px] h-[30px]" />
              <div className="absolute top-[0px] left-[0px] leading-[30px] font-medium inline-block w-[30px] [-webkit-text-stroke:1px_#d5e0ea]">
                A
              </div>
            </div>
          </div>
          <div className="absolute top-[34px] left-[366px] w-[492px] h-[110px]">
            <div className="absolute top-[40px] left-[0px] text-sm leading-[28px] inline-block w-[492px] h-[32px] [-webkit-text-stroke:1px_#d5e0ea]">
              4000 Roskilde
            </div>
            <div className="absolute top-[0px] left-[0px] leading-[30px] font-medium text-gray-1600 inline-block [-webkit-text-stroke:1px_#d5e0ea]">
              Klosterengen 234
            </div>
            <div className="absolute top-[80px] left-[0px] w-[190px] h-[30px]">
              <div className="absolute top-[0px] left-[0px] inline-block [-webkit-text-stroke:1px_#d5e0ea]">
                <span className="leading-[30px] font-medium">Villa</span>
                <span className="text-sm leading-[28px]">
                  {" "}
                  • Ejerudgift: 4.567 kr.
                </span>
              </div>
            </div>
          </div>
          <div className="absolute top-[117px] left-[859px] rounded-[2px] bg-gray-1700 [border:1px_solid_#d5e0ea] box-border flex flex-row p-[16px_32px] items-start justify-start text-base text-white">
            <div className="relative leading-[30px] font-medium inline-block">
              Fjern fra favotitter
            </div>
          </div>
        </div>
      </div>
      <div className="absolute top-[152px] left-[0px] w-[1920px] h-[192px] overflow-hidden text-center text-7xl text-white">
        <div className="absolute top-[0px] left-[0px] bg-gray-1200 w-[1920px] h-[192px]" />
        <img
          className="absolute top-[0px] left-[0px] w-[1920px] h-[192px] object-cover mix-blend-multiply"
          alt=""
          src="../mask-group10@2x.png"
        />
        <b className="absolute top-[57px] left-[704px] leading-[80px] inline-block">
          Mine favoritboliger
        </b>
      </div>
      <div className="absolute top-[2537px] left-[0px] w-[1920px] h-[877px] text-base">
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
        <div className="absolute top-[273px] left-[405px] w-[444px] h-[434px] hidden">
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
              src="../icon28.svg"
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
              src="../icon29.svg"
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
            src="../din-maegler20.svg"
          />
        </div>
      </div>
      <div className="absolute top-[0px] left-[0px] flex flex-col items-center justify-center text-2xl text-gray-1600">
        <div className="relative w-[1920px] h-[147px] shrink-0">
          <div className="absolute top-[62px] left-[0px] bg-white w-[1920px] flex flex-row p-[18px_405px] box-border items-center justify-between">
            <div className="relative w-[148px] h-[40px] shrink-0 hidden">
              <div className="absolute top-[0px] left-[30px] leading-[40px] font-medium inline-block">
                Ghor Bari
              </div>
              <img
                className="absolute top-[0px] left-[0px] w-[22px] h-[40px] overflow-hidden"
                alt=""
                src="../frame12.svg"
              />
            </div>
            <img
              className="relative w-[296px] h-[49px] shrink-0 overflow-hidden"
              alt=""
              src="../din-maegler21.svg"
            />
            <a className="[text-decoration:none] flex flex-row items-center justify-center gap-[65px] text-base text-gray-1400">
              <button className="cursor-pointer [border:none] p-[0] bg-black relative w-[24px] h-[24px] shrink-0 overflow-hidden hidden md:flex">
                <img
                  className="absolute w-[75%] top-[41.67%] right-[12.5%] left-[12.5%] max-w-full overflow-hidden h-[0px]"
                  alt=""
                  src="../vector1.svg"
                />
                <img
                  className="absolute w-[75%] top-[25%] right-[12.5%] left-[12.5%] max-w-full overflow-hidden h-[0px]"
                  alt=""
                  src="../vector1.svg"
                />
                <img
                  className="absolute w-[75%] top-[58.33%] right-[12.5%] left-[12.5%] max-w-full overflow-hidden h-[0px]"
                  alt=""
                  src="../vector1.svg"
                />
                <img
                  className="absolute w-[75%] top-[75%] right-[12.5%] left-[12.5%] max-w-full overflow-hidden h-[0px]"
                  alt=""
                  src="../vector1.svg"
                />
              </button>
              <div className="relative w-[583px] h-[30px] shrink-0 md:hidden">
                <Link
                  className="cursor-pointer [text-decoration:none] absolute top-[0px] left-[0px] leading-[30px] text-[inherit] inline-block hover:animate-[1s_ease-in-out_0s_1_normal_none_scale-down-center] hover:opacity-[1]"
                  to="/propertylist"
                >
                  Boliger til salg
                </Link>
                <Link
                  className="cursor-pointer [text-decoration:none] absolute top-[0px] left-[179px] leading-[30px] text-[inherit] inline-block hover:cursor-pointer"
                  to="/agents-2"
                >
                  Mæglere
                </Link>
                <Link
                  className="cursor-pointer [text-decoration:none] absolute top-[0px] left-[315px] leading-[30px] text-[inherit] inline-block hover:cursor-pointer"
                  to="/favorites"
                >
                  Mine favoritter
                </Link>
                <a className="[text-decoration:none] absolute top-[0px] left-[497px] leading-[30px] text-[inherit] inline-block cursor-pointer hover:animate-[1s_ease_0s_infinite_normal_none_shadow-drop-bottom] hover:opacity-[1]">
                  Kontakt os
                </a>
              </div>
            </a>
          </div>
          <div className="absolute top-[0px] left-[0px] bg-gray-1700 flex flex-row p-[16px_405px] box-border items-start justify-start gap-[328px] text-base text-white">
            <a className="[text-decoration:none] relative w-[218px] h-[30px] shrink-0 text-[inherit]">
              <div className="absolute top-[0px] left-[32px] leading-[30px] inline-block">
                4000@dinmaegler.com
              </div>
              <img
                className="absolute top-[3px] left-[0px] w-[24px] h-[24px] overflow-hidden"
                alt=""
                src="../paperplane-1-116.svg"
              />
            </a>
            <a className="[text-decoration:none] relative w-[151px] h-[30px] shrink-0 text-[inherit]">
              <div className="absolute top-[0px] left-[30px] leading-[30px] inline-block">
                +45 7070 4000
              </div>
              <img
                className="absolute top-[3px] left-[0px] w-[22px] h-[22px] overflow-hidden"
                alt=""
                src="../call-116.svg"
              />
            </a>
            <button
              className="cursor-pointer [border:none] p-[0] bg-[transparent] relative w-[85px] h-[30px] shrink-0 hover:animate-[1s_ease-in-out_1s_1_reverse_none_scale-up] hover:opacity-[1]"
              onClick={onLoginButtonClick}
            >
              <img
                className="absolute top-[calc(50%_-_9px)] left-[calc(50%_-_42.5px)] w-[18px] h-[18px] overflow-hidden"
                alt=""
                src="../user-4-1.svg"
              />
              <img
                className="absolute top-[6px] left-[2px] w-[16px] h-[18px] hidden"
                alt=""
                src="../login.svg"
              />
              <div className="absolute top-[calc(50%_-_15px)] left-[calc(50%_-_16.5px)] text-base leading-[30px] font-roboto text-white text-left inline-block [-webkit-text-stroke:1px_#000]">
                Log ind
              </div>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Favorites;
