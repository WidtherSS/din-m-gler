import { useCallback } from "react";
import { Link, useNavigate } from "react-router-dom";

const Login = () => {
  const navigate = useNavigate();

  const onLoginButtonClick = useCallback(() => {
    navigate("/login");
  }, [navigate]);

  return (
    <div className="relative bg-white w-full h-[2365px] overflow-hidden text-left text-base text-gray-1400 font-roboto">
      <a className="[text-decoration:none] absolute top-[502px] left-[calc(50%_-_960px)] bg-white w-[1920px] h-[986px]" />
      <div className="absolute top-[622px] left-[500px] w-[920px] h-[746px] text-center">
        <div className="absolute top-[0px] left-[0px] rounded-[4px] bg-white shadow-[0px_10px_30px_rgba(0,_115,_225,_0.06)] [border:1px_solid_#d3dee8] box-border w-[920px] h-[746px]" />
        <div className="absolute top-[644px] left-[320px] leading-[30px] inline-block">
          <span>{`Har du ikke en konto? `}</span>
          <span className="text-indigo">Opret bruger.</span>
          <span className="text-gray-1700">{` `}</span>
        </div>
        <div className="absolute top-[544px] left-[560px] w-[170px] h-[60px] text-lg text-white">
          <div className="absolute top-[0px] left-[0px] rounded-[2px] bg-gray-1700 w-[170px] h-[60px]" />
          <div className="absolute top-[15px] left-[54px] leading-[30px] font-medium inline-block">
            Twitter
          </div>
        </div>
        <div className="absolute top-[544px] left-[375px] w-[170px] h-[60px] text-lg text-white">
          <div className="absolute top-[0px] left-[0px] rounded-[2px] bg-gray-800 w-[170px] h-[60px]" />
          <div className="absolute top-[15px] left-[41px] leading-[30px] font-medium inline-block">
            Facebook
          </div>
        </div>
        <div className="absolute top-[544px] left-[190px] w-[170px] h-[60px] text-lg text-white">
          <div className="absolute top-[0px] left-[0px] rounded-[2px] bg-brown-200 w-[170px] h-[60px]" />
          <div className="absolute top-[15px] left-[53px] leading-[30px] font-medium inline-block">
            Google
          </div>
        </div>
        <div className="absolute top-[498px] left-[190px] leading-[30px] text-left inline-block">{`Log ind med `}</div>
        <div className="absolute top-[398px] left-[190px] w-[540px] h-[60px] text-lg text-white">
          <div className="absolute top-[0px] left-[0px] rounded-[2px] bg-gray-1700 w-[540px] h-[60px]" />
          <div className="absolute top-[15px] left-[237px] leading-[30px] font-medium inline-block">
            Log ind
          </div>
        </div>
        <div className="absolute top-[276px] left-[190px] w-[540px] h-[98px] text-left">
          <div className="absolute top-[38px] left-[0px] rounded-[2px] bg-white [border:1px_solid_#d3dee8] box-border w-[540px] h-[60px]" />
          <div className="absolute top-[0px] left-[0px] leading-[30px] inline-block">
            Password
          </div>
          <div className="absolute top-[53px] left-[15px] leading-[30px] text-gray-500 inline-block">
            Password
          </div>
        </div>
        <div className="absolute top-[154px] left-[190px] w-[540px] h-[98px] text-left">
          <div className="absolute top-[38px] left-[0px] rounded-[2px] bg-white [border:1px_solid_#d3dee8] box-border w-[540px] h-[60px]" />
          <div className="absolute top-[0px] left-[0px] leading-[30px] inline-block">
            Email
          </div>
          <div className="absolute top-[53px] left-[15px] leading-[30px] text-gray-500 inline-block">
            Email
          </div>
        </div>
        <div className="absolute top-[72px] left-[324px] text-3xl leading-[42px] font-medium text-gray-1600 inline-block">
          Log ind på din konto
        </div>
      </div>
      <div className="absolute top-[152px] left-[0px] w-[1920px] h-[350px] overflow-hidden text-gray-1700">
        <div className="absolute top-[0px] left-[0px] bg-gray-1200 w-[1920px] h-[350px]" />
        <img
          className="absolute top-[0px] left-[0px] w-[1920px] h-[350px] object-cover mix-blend-multiply"
          alt=""
          src="../mask-group30@2x.png"
        />
        <div className="absolute top-[193px] left-[896px] w-[128px] h-[30px]">
          <a className="[text-decoration:none] absolute top-[0px] left-[83px] leading-[30px] text-[inherit] inline-block">
            Login
          </a>
          <div className="absolute top-[8px] left-[65px] bg-white w-[2px] h-[14px] opacity-[0.6]" />
          <Link
            className="cursor-pointer [text-decoration:none] absolute top-[0px] left-[0px] leading-[30px] text-white text-center inline-block"
            to="/home-01"
          >
            Home
          </Link>
        </div>
        <b className="absolute top-[127px] left-[882px] text-xl leading-[50px] inline-block text-white text-center">
          Account Login
        </b>
      </div>
      <div className="absolute top-[1488px] left-[0px] w-[1920px] h-[877px] overflow-hidden">
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
              src="../icon34.svg"
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
              src="../icon35.svg"
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
            src="../din-maegler24.svg"
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
                src="../frame14.svg"
              />
            </div>
            <img
              className="relative w-[296px] h-[49px] shrink-0 overflow-hidden"
              alt=""
              src="../din-maegler25.svg"
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
                src="../paperplane-1-118.svg"
              />
            </a>
            <a className="[text-decoration:none] relative w-[151px] h-[30px] shrink-0 text-[inherit]">
              <div className="absolute top-[0px] left-[30px] leading-[30px] inline-block">
                +45 7070 4000
              </div>
              <img
                className="absolute top-[3px] left-[0px] w-[22px] h-[22px] overflow-hidden"
                alt=""
                src="../call-118.svg"
              />
            </a>
            <button
              className="cursor-pointer [border:none] p-[0] bg-[transparent] relative w-[85px] h-[30px] shrink-0 hover:animate-[1s_ease-in-out_1s_1_reverse_none_scale-up] hover:opacity-[1]"
              onClick={onLoginButtonClick}
            >
              <img
                className="absolute top-[calc(50%_-_9px)] left-[calc(50%_-_42.5px)] w-[18px] h-[18px] overflow-hidden"
                alt=""
                src="../user-4-12.svg"
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

export default Login;
