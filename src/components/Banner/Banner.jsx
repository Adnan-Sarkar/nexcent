import bannerImage from "../../assets/banner.png";

const Banner = () => {
  return (
    <section className="font-inter bg-light py-[96px] relative">
      <div className="container">
        <div className="flex items-center justify-between">
          <div>
            <h1 className="text-secondary text-[64px] font-semibold leading-[76px]">
              Lessons and insights{" "}
              <span className="block text-primary">from 8 years</span>
            </h1>
            <p className="text-gray text-base leading-[24px] mt-[16px] mb-[46px]">
              Where to grow your business as a photographer: site or social
              media?
            </p>
            <a
              href="#"
              className="text-white text-base font-medium leading-[24px] bg-primary px-[32px] py-[14px] rounded-[4px]"
            >
              Register
            </a>
          </div>
          <div>
            <picture>
              <img
                src={bannerImage}
                alt="banner"
              />
            </picture>
          </div>
        </div>
      </div>
      <div className="absolute bottom-4 left-1/2 -translate-x-1/2 flex items-center gap-x-2">
        <div className="w-[10px] h-[10px] rounded-full bg-primary cursor-pointer"></div>
        <div className="w-[10px] h-[10px] rounded-full bg-primary opacity-30 cursor-pointer"></div>
        <div className="w-[10px] h-[10px] rounded-full bg-primary opacity-30 cursor-pointer"></div>
      </div>
    </section>
  );
};

export default Banner;
