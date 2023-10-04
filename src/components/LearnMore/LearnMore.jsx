const LearnMore = (props) => {
  const { image, heading, details } = props || {};

  return (
    <section className="py-[52px] font-inter">
      <div className="container">
        <div className="flex items-center justify-between">
          <div>
            <picture>
              <img
                src={image}
                alt="spend"
              />
            </picture>
          </div>
          <div className="w-[661px]">
            <div className="w-[601px] mb-[46px]">
              <h2 className="text-secondary text-4xl font-semibold leading-[44px]">
                {heading}
              </h2>
              <p className="text-gray text-[14px] leading-5 font-normal mt-4">
                {details}
              </p>
            </div>
            <a
              href="#"
              className="bg-primary text-white py-[14px] px-8 rounded"
            >
              Learn More
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default LearnMore;
