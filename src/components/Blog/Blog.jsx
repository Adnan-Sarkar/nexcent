import rightArrow from "../../assets/right-arrow.svg";
import blogImage1 from "../../assets/blog1.png";
import blogImage2 from "../../assets/blog2.png";
import blogImage3 from "../../assets/blog3.png";

const Blog = () => {
  return (
    <section className="pt-[48px] pb-[94px] font-inter">
      <div className="container">
        <div className="text-center">
          <h2 className="text-secondary text-4xl font-semibold leading-[44px]">
            Caring is the new marketing
          </h2>
          <p className="text-gray text-base leading-6 md:w-[628px] md:mx-auto mt-2">
            {`The Nexcent blog is the best place to read about the latest
            membership insights, trends and more. See who's joining the
            community, read about how our community are increasing their
            membership income and lot's more.`}
          </p>
        </div>

        <div className="grid grid-cols-3 mt-4">
          <div className="w-[368px]">
            <div>
              <picture>
                <img
                  className="rounded-[8px]"
                  src={blogImage1}
                  alt="blog"
                />
              </picture>
            </div>
            <div className="w-[317px] bg-light rounded-[8px] mx-auto shadow-medium p-4 text-center -translate-y-[90px]">
              <h3 className="text-gray text-xl font-semibold leading-7 mb-4">
                Creating Streamlined Safeguarding Processes with OneRen
              </h3>
              <div className="flex justify-center">
                <a
                  href="#"
                  className="flex items-center gap-x-2 text-xl font-semibold leading-7 text-primary"
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

          <div className="w-[368px]">
            <div>
              <picture>
                <img
                  className="rounded-[8px]"
                  src={blogImage2}
                  alt="blog"
                />
              </picture>
            </div>
            <div className="w-[317px] bg-light rounded-[8px] mx-auto shadow-medium p-4 text-center -translate-y-[90px]">
              <h3 className="text-gray text-xl font-semibold leading-7 mb-4">
                What are your safeguarding responsibilities and how can you
                manage them?
              </h3>
              <div className="flex justify-center">
                <a
                  href="#"
                  className="flex items-center gap-x-2 text-xl font-semibold leading-7 text-primary"
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

          <div className="w-[368px]">
            <div>
              <picture>
                <img
                  className="rounded-[8px]"
                  src={blogImage3}
                  alt="blog"
                />
              </picture>
            </div>
            <div className="w-[317px] bg-light rounded-[8px] mx-auto shadow-medium p-4 text-center -translate-y-[90px]">
              <h3 className="text-gray text-xl font-semibold leading-7 mb-4">
                Revamping the Membership Model with Triathlon Australia
              </h3>
              <div className="flex justify-center">
                <a
                  href="#"
                  className="flex items-center gap-x-2 text-xl font-semibold leading-7 text-primary"
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
        </div>
      </div>
    </section>
  );
};

export default Blog;
