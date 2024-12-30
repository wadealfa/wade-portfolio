import { useEffect } from "react";
import { useState } from "react";

function Navigation() {

  const [lastScrollTop, setLastScrollTop] = useState(0);
  const [showNavbar, setShowNavbar] = useState(true);

  useEffect(() => {
    const handleScroll = () => {
      const currentScroll = window.pageYOffset || document.documentElement.scrollTop;

      if (currentScroll > lastScrollTop + 10) {
        // Scrolling down, hide navbar
        setShowNavbar(false);
      } else if (currentScroll < lastScrollTop - 10) {
        // Scrolling up, show navbar
        setShowNavbar(true);
      }

      setLastScrollTop(currentScroll <= 0 ? 0 : currentScroll);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, [lastScrollTop]);

  const navItems = ["about", "my skills", "projects", "contact me"];

  const theThree = navItems.slice(0, 3);
  return (
    <div className={`fixed top-0 w-full z-10 bg-gray-800 text-white py-3 px-4 transition-transform duration-300 ${
      showNavbar ? 'translate-y-0' : '-translate-y-full'
    }`} >
      <ul className=" hidden md:flex p-4 flex-row justify-between bg-blue-500">
        {navItems.map((navItem, i) => (
          <li key={i}>{navItem}</li>
        ))}
      </ul>
      <ul className=" md:hidden   flex p-2 justify-center w-full bg-lime-500 text-center gap-5">
        {theThree.map((navItem, i) => (
          <li key={i}>{navItem}</li>
        ))}
      </ul>
    </div>
  );
}



export default Navigation;
