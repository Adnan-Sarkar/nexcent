import logo from "../../assets/logo-white.png";
import instagramIcon from "../../assets/instagram.svg";
import dribbleIcon from "../../assets/dribble.svg";
import twitterIcon from "../../assets/twitter.svg";
import youtubeIcon from "../../assets/youtube.svg";
import sendIcon from "../../assets/send-icon.svg";

const Footer = () => {
  return (
    <footer className="bg-[#263238] py-16 font-inter">
      <div className="container">
        <div className="grid grid-cols-2 gap-x-[125px] lg:gap-x-0">
          <div className="lg:w-[250px]">
            <picture>
              <img
                src={logo}
                alt="nexcent"
              />
            </picture>

            <div className="my-10">
              <p className="text-light text-[14px] leading-5 mb-2">
                Copyright &copy; 2020 Nexcent ltd.
              </p>
              <p className="text-light text-[14px] leading-5">
                All rights reserved
              </p>
            </div>

            <div className="flex items-center gap-x-4">
              <div>
                <a
                  href="#"
                  className="w-8 h-8 rounded-full flex items-center justify-center bg-white/10"
                >
                  <img
                    src={instagramIcon}
                    alt="instagram"
                  />
                </a>
              </div>

              <div>
                <a
                  href="#"
                  className="w-8 h-8 rounded-full flex items-center justify-center bg-white/10"
                >
                  <img
                    src={dribbleIcon}
                    alt="dribble"
                  />
                </a>
              </div>

              <div>
                <a
                  href="#"
                  className="w-8 h-8 rounded-full flex items-center justify-center bg-white/10"
                >
                  <img
                    src={twitterIcon}
                    alt="twitter"
                  />
                </a>
              </div>

              <div>
                <a
                  href="#"
                  className="w-8 h-8 rounded-full flex items-center justify-center bg-white/10"
                >
                  <img
                    src={youtubeIcon}
                    alt="youtube"
                  />
                </a>
              </div>
            </div>
          </div>

          <div className="grid grid-cols-4 gap-[30px]">
            <div className="text-white">
              <h2 className="text-[20px] font-semibold leading-7 mb-6">
                Company
              </h2>
              <ul className="flex flex-col gap-y-3">
                <li>
                  <a
                    href="#"
                    className="text-light text-[14px] leading-5"
                  >
                    About us
                  </a>
                </li>
                <li>
                  <a
                    href="#"
                    className="text-light text-[14px] leading-5"
                  >
                    Blog
                  </a>
                </li>
                <li>
                  <a
                    href="#"
                    className="text-light text-[14px] leading-5"
                  >
                    Contact us
                  </a>
                </li>
                <li>
                  <a
                    href="#"
                    className="text-light text-[14px] leading-5"
                  >
                    Pricing
                  </a>
                </li>
                <li>
                  <a
                    href="#"
                    className="text-light text-[14px] leading-5"
                  >
                    Testimonials
                  </a>
                </li>
              </ul>
            </div>

            <div className="text-white">
              <h2 className="text-[20px] font-semibold leading-7 mb-6">
                Support
              </h2>
              <ul className="flex flex-col gap-y-3">
                <li>
                  <a
                    href="#"
                    className="text-light text-[14px] leading-5"
                  >
                    Help center
                  </a>
                </li>
                <li>
                  <a
                    href="#"
                    className="text-light text-[14px] leading-5"
                  >
                    Terms of service
                  </a>
                </li>
                <li>
                  <a
                    href="#"
                    className="text-light text-[14px] leading-5"
                  >
                    Legal
                  </a>
                </li>
                <li>
                  <a
                    href="#"
                    className="text-light text-[14px] leading-5"
                  >
                    Privacy policy
                  </a>
                </li>
                <li>
                  <a
                    href="#"
                    className="text-light text-[14px] leading-5"
                  >
                    Status
                  </a>
                </li>
              </ul>
            </div>

            <div className="text-white col-span-2">
              <h2 className="text-[20px] font-semibold leading-7 mb-6">
                Stay up to date
              </h2>

              <div>
                <form className="relative">
                  <input
                    type="text"
                    className="w-[255px] text-lightGray text-[14px] leading-5 pl-3 pt-[9px] pb-[11px] pr-[35px] bg-white/20 outline-none rounded-[8px]"
                    placeholder="Your email address"
                  />
                  <button
                    type="submit"
                    className="absolute bottom-[10px] right-[30px]"
                  >
                    <img
                      src={sendIcon}
                      alt="send"
                    />
                  </button>
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
