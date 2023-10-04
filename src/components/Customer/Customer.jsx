import customerImage from "../../assets/customer-review.png";
import customerImage1 from "../../assets/customer1.svg";
import customerImage2 from "../../assets/customer2.svg";
import customerImage3 from "../../assets/customer3.svg";
import customerImage4 from "../../assets/customer4.svg";
import customerImage5 from "../../assets/customer5.svg";
import customerImage6 from "../../assets/customer6.svg";
import rightArrow from "../../assets/right-arrow.svg";

const Customer = () => {
  return (
    <section className="bg-light py-8 font-inter">
      <div className="container">
        <div className="flex items-center justify-between">
          <div className="rounded-lg overflow-hidden flex items-center">
            <picture>
              <img
                src={customerImage}
                alt="customer"
              />
            </picture>
          </div>
          <div className="w-[748px]">
            <p className="text-gray text-base font-medium leading-6">
              Maecenas dignissim justo eget nulla rutrum molestie. Maecenas
              lobortis sem dui, vel rutrum risus tincidunt ullamcorper. Proin eu
              enim metus. Vivamus sed libero ornare, tristique quam in, gravida
              enim. Nullam ut molestie arcu, at hendrerit elit. Morbi laoreet
              elit at ligula molestie, nec molestie mi blandit. Suspendisse
              cursus tellus sed augue ultrices, quis tristique nulla sodales.
              Suspendisse eget lorem eu turpis vestibulum pretium. Suspendisse
              potenti. Quisque malesuada enim sapien, vitae placerat ante
              feugiat eget. Quisque vulputate odio neque, eget efficitur libero
              condimentum id. Curabitur id nibh id sem dignissim finibus ac sit
              amet magna.
            </p>

            <h2 className="text-primary text-xl font-semibold leading-7 mt-4 mb-2">
              Tim Smith
            </h2>
            <p className="text-[#89939E]">
              British Dragon Boat Racing Association
            </p>

            <div className="flex items-center text-base leading-6 mt-8 gap-x-8">
              <div className="flex items-center gap-x-[41px]">
                <img
                  src={customerImage1}
                  alt="customer"
                />
                <img
                  src={customerImage2}
                  alt="customer"
                />
                <img
                  src={customerImage3}
                  alt="customer"
                />
                <img
                  src={customerImage4}
                  alt="customer"
                />
                <img
                  src={customerImage5}
                  alt="customer"
                />
                <img
                  src={customerImage6}
                  alt="customer"
                />
              </div>
              <a
                href="#"
                className="flex items-center gap-x-2 text-xl font-semibold leading-7 text-primary"
              >
                Meet all customers{" "}
                <img
                  src={rightArrow}
                  alt="right arrow"
                />
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Customer;
