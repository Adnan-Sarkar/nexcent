import membershipIcon from "../../assets/membership-icon.svg";
import associationIcon from "../../assets/association-icon.svg";
import clubIcon from "../../assets/club-icon.svg";

const Community = () => {
  return (
    <section className="font-inter mb-[42px]">
      <div className="container">
        <div className="text-center mb-4">
          <h2 className="text-secondary text-4xl font-semibold leading-[44px] md:w-[542px] md:mx-auto">
            Manage your entire community in a single system
          </h2>
          <p className="text-base text-gray leading-6 mt-2">
            Who is Nextcent suitable for?
          </p>
        </div>
        <div className="grid grid-cols-3 justify-items-center">
          <div className="w-[299px] py-6 px-8 text-center shadow-light">
            <picture>
              <img
                className="mx-auto"
                src={membershipIcon}
                alt="memebership"
              />
            </picture>
            <h3 className="text-secondary text-[28px] font-bold leading-9 mb-2 mt-4">
              Membership Organisations
            </h3>
            <p className="text-gray text-sm leading-5">
              Our membership management software provides full automation of
              membership renewals and payments
            </p>
          </div>

          <div className="w-[299px] py-6 px-8 text-center shadow-light">
            <picture>
              <img
                className="mx-auto"
                src={associationIcon}
                alt="association"
              />
            </picture>
            <h3 className="text-secondary text-[28px] font-bold leading-9 mb-2 mt-4">
              National Associations
            </h3>
            <p className="text-gray text-sm leading-5">
              Our membership management software provides full automation of
              membership renewals and payments
            </p>
          </div>

          <div className="w-[299px] py-6 px-8 text-center shadow-light">
            <picture>
              <img
                className="mx-auto"
                src={clubIcon}
                alt="club"
              />
            </picture>
            <h3 className="text-secondary text-[28px] font-bold leading-9 mb-2 mt-4">
              Clubs And Groups
            </h3>
            <p className="text-gray text-sm leading-5">
              Our membership management software provides full automation of
              membership renewals and payments
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Community;
