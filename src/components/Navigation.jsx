import { useEffect } from "react";
import { useState } from "react";

function Navigation() {
  const [lastScrollTop, setLastScrollTop] = useState(0);
  const [showNavbar, setShowNavbar] = useState(true);

  useEffect(() => {
    const handleScroll = () => {
      const currentScroll =
        window.pageYOffset || document.documentElement.scrollTop;

      if (currentScroll > lastScrollTop + 10) {
        // Scrolling down, hide navbar
        setShowNavbar(false);
      } else if (currentScroll < lastScrollTop - 10) {
        // Scrolling up, show navbar
        setShowNavbar(true);
      }

      setLastScrollTop(currentScroll <= 0 ? 0 : currentScroll);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, [lastScrollTop]);

  const navItems = ["about", "my skills", "projects", "contact me"];

  const theThree = navItems.slice(0, 3);
  return (
    <>
      <div
        className={`fixed top-0 w-full z-10 bg-blue-800 bg-opacity-60  capitalize  text-white py-1 rounded-b-xl px-4 transition-transform duration-300 ${
          showNavbar ? "translate-y-0" : "-translate-y-full"
        }`}>
        <ul className=" hidden md:flex p-4 flex-row justify-between ">
          {navItems.map((navItem, i) => (
            <li
              key={i}
              className="cursor-pointer">
              {navItem}
            </li>
          ))}
        </ul>
        <ul className=" md:hidden   flex p-2 justify-center w-fulltext-center gap-7">
          {theThree.map((navItem, i) => (
           <a key={i}  href={`#${navItem}`}> <li className=" border-2 py-1 px-2 italic font-bold  rounded-2xl">{navItem}</li></a>
          ))}
        </ul>
        <div className="  border  blur-sm"></div>
      </div>
      <div className="  border-4  blur-sm"></div>
    </>
  );
}

export default Navigation;
