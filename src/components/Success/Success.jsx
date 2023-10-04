import memebersIcon from "../../assets/members-icon.svg";
import clubsIcon from "../../assets/clubs-icon.png";
import eventBookingIcon from "../../assets/event-booking-icon.svg";
import paymentsIcon from "../../assets/payments-icon.svg";

const Success = () => {
  return (
    <section className="bg-light py-16 font-inter">
      <div className="container">
        <div className="flex items-center justify-between">
          <div className="w-[45%]">
            <h2 className="text-secondary text-4xl font-semibold leading-[44px]">
              Helping a local{" "}
              <span className="text-primary md:block">
                business reinvent itself
              </span>
            </h2>
            <p className="text-[#18191F] text-base leading-6 mt-2">
              We reached here with our hard work and dedication
            </p>
          </div>
          <div className="w-[45%]">
            <div className="grid grid-cols-2 gap-x-[30px] gap-y-[40px]">
              <div className="flex items-center gap-x-4">
                <div>
                  <picture>
                    <img
                      src={memebersIcon}
                      alt="memeber"
                    />
                  </picture>
                </div>
                <div>
                  <h3 className="text-secondary text-[28px] font-bold leading-9">
                    2,245,341
                  </h3>
                  <p className="text-gray text-base leading-6">Members</p>
                </div>
              </div>

              <div className="flex items-center gap-x-4">
                <div>
                  <picture>
                    <img
                      src={clubsIcon}
                      alt="clubs"
                    />
                  </picture>
                </div>
                <div>
                  <h3 className="text-secondary text-[28px] font-bold leading-9">
                    46,328
                  </h3>
                  <p className="text-gray text-base leading-6">Clubs</p>
                </div>
              </div>

              <div className="flex items-center gap-x-4">
                <div>
                  <picture>
                    <img
                      src={eventBookingIcon}
                      alt="event booking"
                    />
                  </picture>
                </div>
                <div>
                  <h3 className="text-secondary text-[28px] font-bold leading-9">
                    828,867
                  </h3>
                  <p className="text-gray text-base leading-6">
                    Event Bookings
                  </p>
                </div>
              </div>

              <div className="flex items-center gap-x-4">
                <div>
                  <picture>
                    <img
                      src={paymentsIcon}
                      alt="payment"
                    />
                  </picture>
                </div>
                <div>
                  <h3 className="text-secondary text-[28px] font-bold leading-9">
                    1,926,436
                  </h3>
                  <p className="text-gray text-base leading-6">Payments</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Success;
