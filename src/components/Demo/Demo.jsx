import rightArrow from "../../assets/right-arrow-white.svg";

const Demo = () => {
  return (
    <section className="bg-light py-8 font-inter">
      <div className="container">
        <div className="text-center">
          <h2 className="lg:w-[887px] lg:mx-auto text-[#263238] text-[64px] font-semibold leading-[76px] mb-[46px]">
            Pellentesque suscipit fringilla libero eu.
          </h2>

          <div className="flex justify-center">
            <a
              href="#"
              className="flex items-center gap-x-2 text-xl font-semibold leading-7 text-white bg-primary px-8 py-[14px] rounded-[4px]"
            >
              Readmore{" "}
              <img
                src={rightArrow}
                alt="right arrow"
              />
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Demo;
