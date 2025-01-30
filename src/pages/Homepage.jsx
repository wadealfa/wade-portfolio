import Drama from "../components/Drama";
import Hero from "../components/Hero";

import Navigation from "../components/Navigation";

function Homepage() {
  return (
    <div className="  ">
      <div className="bg-[#2b2b2b6c]">
        <Navigation />
        <Drama />
        <Hero />
      </div>
    </div>
  );
}

export default Homepage;
