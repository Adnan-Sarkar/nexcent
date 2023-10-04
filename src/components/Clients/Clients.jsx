import clientImage1 from "../../assets/client1.png";
import clientImage2 from "../../assets/client2.png";
import clientImage3 from "../../assets/client3.png";
import clientImage4 from "../../assets/client4.png";
import clientImage5 from "../../assets/client5.png";
import clientImage6 from "../../assets/client6.png";
import clientImage7 from "../../assets/client7.png";

const Clients = () => {
  return (
    <section className="font-inter py-10">
      <div className="container">
        <div className="text-center">
          <h2 className="text-secondary text-4xl font-semibold leading-[44px]">
            Our Clients
          </h2>
          <p className="text-base text-gray leading-6 mt-2">
            We have been working with some Fortune 500+ clients
          </p>
        </div>
        <div className="flex justify-between items-center mt-[45px]">
          <img
            src={clientImage1}
            alt="client image"
          />
          <img
            src={clientImage2}
            alt="client image"
          />
          <img
            src={clientImage3}
            alt="client image"
          />
          <img
            src={clientImage4}
            alt="client image"
          />
          <img
            src={clientImage5}
            alt="client image"
          />
          <img
            src={clientImage6}
            alt="client image"
          />
          <img
            src={clientImage7}
            alt="client image"
          />
        </div>
      </div>
    </section>
  );
};

export default Clients;
