import mailSvg from "../assets/mail.svg";
import facebookSvg from "../assets/facebook.svg";
import twitterSvg from "../assets/twitter.svg";
import instagramSvg from "../assets/instagram.svg";
import linkedinSvg from "../assets/linkedin.svg";
import logo from "../assets/logo.png";
import { Link } from "react-router-dom";

function Navbar() {
  const changeToggleHandler = () => {
    const btn = document.getElementById("menu-btn");
    const nav = document.getElementById("menu");
    btn.classList.toggle("open");
    nav.classList.toggle("flex");
    nav.classList.toggle("hidden");
  };

  //     btn.addEventListener('click', () => {
  //
  // })
  return (
    <>
      {/* <!-- Contact Navbar --> */}
      <div className="bg-primaryDark p-2">
        <div className="container mx-auto flex justify-between items-center">
          <div className="flex items-center space-x-2 text-sm text-white font-semibold">
            <img className="w-[14px] h-[14px]" src={mailSvg} alt="mail" />
            <span>info@auraed.org</span>
          </div>

          {/* <!-- Social Links --> */}
          <div className="flex items-center justify-between space-x-2">
            <a className="w-[9px] h-[14px] text-primary" href="#">
              <img src={facebookSvg} alt="mail" />
            </a>
            <a className="w-[14px] h-[14px]" href="#">
              <img src={twitterSvg} alt="mail" />
            </a>
            <a className="w-[14px] h-[14px]" href="#">
              <img src={instagramSvg} alt="mail" />
            </a>
            <a className="w-[14px] h-[14px]" href="#">
              <img src={linkedinSvg} alt="mail" />
            </a>
          </div>
        </div>
      </div>

      {/* <!-- Navbar --> */}
      <nav className="container mx-auto py-3 px-2 md:px-0 z-10">
        <div className="flex items-center justify-between">
          {/* <!-- Logo --> */}
          <Link to="/">
            <img className="w-[100px] h-[60px]" src={logo} alt="auraed" />
          </Link>

          {/* <!-- Nav Items --> */}
          <div className="hidden text-dark space-x-6 md:flex">
            <Link
              to="/"
              className="text-primaryDark font-bold hover:text-primaryDark hover:font-bold"
            >
              Home
            </Link>

            <Link
              to="/blogs"
              className="hover:text-primaryDark hover:font-bold"
            >
              Blogs
            </Link>

            <Link
              to="/albums"
              className="hover:text-primaryDark hover:font-bold"
            >
              Albums
            </Link>

            <Link
              to="/events"
              className="hover:text-primaryDark hover:font-bold"
            >
              Events
            </Link>

            <Link
              to="/about"
              className="hover:text-primaryDark hover:font-bold"
            >
              About
            </Link>

            <a href="#" className="hover:text-primaryDark hover:font-bold">
              Contact
            </a>
          </div>
          <Link
            to="/donate"
            className="hidden py-2 px-6 font-bold text-white bg-primary rounded-xl baseline hover:bg-primaryDark md:block"
          >
            Donate Us
          </Link>

          {/* <!-- Hamburger Icon --> */}
          <button
            id="menu-btn"
            onClick={changeToggleHandler}
            className="block hamburger md:hidden focus:outline-none"
          >
            <span className="hamburger-top"></span>
            <span className="hamburger-middle"></span>
            <span className="hamburger-bottom"></span>
          </button>
        </div>
        {/* <!-- Mobile Menu --> */}
        <div className="md:hidden">
          <div
            id="menu"
            className="z-20 absolute flex-col items-center hidden self-end py-8 mt-10 space-y-6 font-bold bg-white sm:w-auto sm:self-center left-6 right-6 drop-shadow-md"
          >
            <Link
              to="/"
              className="text-primaryDark font-bold hover:text-primaryDark hover:font-bold"
            >
              Home
            </Link>
            <Link
              to="/blogs"
              className="hover:text-primaryDark hover:font-bold"
            >
              Blogs
            </Link>

            <Link
              to="/albums"
              className="hover:text-primaryDark hover:font-bold"
            >
              Albums
            </Link>

            <Link
              to="/about"
              className="hover:text-primaryDark hover:font-bold"
            >
              Events
            </Link>

            <Link
              to="/about"
              className="hover:text-primaryDark hover:font-bold"
            >
              About
            </Link>

            <a href="#" className="hover:text-primaryDark hover:font-bold">
              Contact
            </a>

            <Link
              to="/donate"
              className="py-2 px-6 font-bold text-white bg-primary rounded-xl baseline hover:bg-primaryDark md:block"
            >
              Donate Us
            </Link>
          </div>
        </div>
      </nav>
    </>
  );
}

export default Navbar;
