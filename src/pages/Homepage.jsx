import Drama from "../components/Drama";
import Hero from "../components/Hero";

import Navigation from "../components/Navigation";

function Homepage() {
  return (
    <div className=" bg-[url('public/image1.png')] bg-cover bg-center bg-no-repeat  ">
      <div className="bg-[#2b2b2b6c]">
        <Navigation />
        <Drama />
        <Hero />
      </div>
    </div>
  );
}

export default Homepage;
