import logo from "../../assets/logo.png";

const Navbar = () => {
  return (
    <nav className="py-[22px] font-inter bg-light">
      <div className="container">
        <div className="flex items-center justify-between">
          <div>
            <a href="#">
              <picture>
                <img
                  src={logo}
                  alt="nexcent"
                />
              </picture>
            </a>
          </div>
          <div className="flex items-center gap-x-[100px]">
            <ul className="flex items-center gap-x-[50px] text-base font-medium leading-[24px]">
              <li>
                <a href="#">Home</a>
              </li>
              <li>
                <a href="#">Service</a>
              </li>
              <li>
                <a href="#">Feature</a>
              </li>
              <li>
                <a href="#">Product</a>
              </li>
              <li>
                <a href="#">Testimonial</a>
              </li>
              <li>
                <a href="#">FAQ</a>
              </li>
            </ul>

            <div className="flex items-center gap-x-[14px]">
              <a
                href="#"
                className="px-[20px] py-[10px] text-primary font-medium"
              >
                Login
              </a>
              <a
                href="#"
                className="bg-primary text-white px-[20px] py-[10px] rounded-[6px] text-[14px] font-medium leading-[20px]"
              >
                Sign up
              </a>
            </div>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
