import Banner from "./components/Banner/Banner";
import Clients from "./components/Clients/Clients";
import Community from "./components/Community/Community";
import LearnMore from "./components/LearnMore/LearnMore";
import Navbar from "./components/Navbar/Navbar";
import Success from "./components/Success/Success";

import learnMoreImage1 from "./assets/spend.png";
import learnMoreImage2 from "./assets/design-your-site.png";
import Customer from "./components/Customer/Customer";
import Blog from "./components/Blog/Blog";
import Demo from "./components/Demo/Demo";
import Footer from "./components/Footer/Footer";

const App = () => {
  return (
    <>
      <Navbar />
      <Banner />
      <Clients />
      <Community />
      <LearnMore
        image={learnMoreImage1}
        heading={"The unseen of spending three years at Pixelgrade"}
        details={
          "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed sit amet justo ipsum. Sed accumsan quam vitae est varius fringilla. Pellentesque placerat vestibulum lorem sed porta. Nullam mattis tristique iaculis. Nullam pulvinar sit amet risus pretium auctor. Etiam quis massa pulvinar, aliquam quam vitae, tempus sem. Donec elementum pulvinar odio."
        }
      />
      <Success />
      <LearnMore
        image={learnMoreImage2}
        heading={"How to design your site footer like we did"}
        details={
          "Donec a eros justo. Fusce egestas tristique ultrices. Nam tempor, augue nec tincidunt molestie, massa nunc varius arcu, at scelerisque elit erat a magna. Donec quis erat at libero ultrices mollis. In hac habitasse platea dictumst. Vivamus vehicula leo dui, at porta nisi facilisis finibus. In euismod augue vitae nisi ultricies, non aliquet urna tincidunt. Integer in nisi eget nulla commodo faucibus efficitur quis massa. Praesent felis est, finibus et nisi ac, hendrerit venenatis libero. Donec consectetur faucibus ipsum id gravida."
        }
      />
      <Customer />
      <Blog />
      <Demo />
      <Footer />
    </>
  );
};

export default App;
