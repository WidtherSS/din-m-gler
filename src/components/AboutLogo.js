const AboutLogo = () => {
  return (
    <div className="absolute top-[80px] left-[405px] w-[728px] h-[133px] text-left text-base text-gray-1400 font-roboto">
      <div className="absolute top-[73px] left-[0px] leading-[30px] inline-block w-[728px] h-[60px]">
        There are many variations of passages of Lorem Ipsum available, but the
        majority have suffered alteration in some form, by injected humour, or
        randomised words.
      </div>
      <img
        className="absolute top-[0px] left-[1px] w-[296px] h-[49px] overflow-hidden"
        alt=""
        src="../din-maegler17.svg"
      />
    </div>
  );
};

export default AboutLogo;
