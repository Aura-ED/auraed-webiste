import mailSvg from '../assets/mail.svg';
import facebookSvg from '../assets/facebook.svg';
import twitterSvg from '../assets/twitter.svg';
import instagramSvg from '../assets/instagram.svg';
import linkedinSvg from '../assets/linkedin.svg';
import logo from '../assets/logo.png';
import { Link, useLocation } from 'react-router-dom';

function Navbar() {

  const {pathname} = useLocation();

  const changeToggleHandler = () => {
    const btn = document.getElementById('menu-btn');
    const nav = document.getElementById('menu');
    btn.classList.toggle('open');
    nav.classList.toggle('flex');
    nav.classList.toggle('hidden');
  };

  const activeClass = "text-primaryDark font-bold hover:text-primaryDark hover:font-bold"
  const defaultClass = "hover:text-primaryDark hover:font-bold"

  return (
    <>
      {/* <!-- Contact Navbar --> */}
    <div class="bg-primaryDark p-2">
      <div class="container mx-auto flex justify-between items-center">
        <div
          class="flex items-center space-x-2 text-sm text-white font-semibold"
        >
          <img class="w-[14px] h-[14px]" src={mailSvg} alt="mail" />
          <a href='mailto:info@auraed.org'>info@auraed.org</a>
        </div>

        {/* <!-- Social Links --> */}
        <div class="flex items-center space-x-2">
          <a class="w-[8px] h-[13px] text-primary" href=" https://www.facebook.com/auraednepal">
            <img src={facebookSvg} alt="facebook" />
          </a>
          {/* <a class="w-[14px] h-[14px]" href="#">
            <img src={twitterSvg} alt="twitter" />
          </a> */}
          <a class="w-[14px] h-[14px]" href="https://www.instagram.com/auraednepal/">
            <img src={instagramSvg} alt="instagram" />
          </a>
          <a class="w-[14px] h-[14px]" href="https://www.linkedin.com/company/71598016/">
            <img src={linkedinSvg} alt="linkedin" />
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
              className={(pathname === '/') ? activeClass : defaultClass}
              
            >
              Home
            </Link>

            <Link
              to="/blogs"
              className={(pathname === '/blogs') ? activeClass : defaultClass}
              
            >
              Blogs
            </Link>

            <Link
              to="/albums"
              className={(pathname === '/albums') ? activeClass : defaultClass}
              
            >
              Albums
            </Link>

            <Link
              to="/events"
              className={(pathname === '/events') ? activeClass : defaultClass}
              
            >
              Events
            </Link>

            <Link
              to="/about"
              className={(pathname === '/about') ? activeClass : defaultClass}
              
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
            Donate
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
              onClick={changeToggleHandler}
              className={(pathname === '/') ? activeClass : defaultClass}
            >
              Home
            </Link>
            <Link
              to="/blogs"
              onClick={changeToggleHandler}
              className={(pathname === '/blogs') ? activeClass : defaultClass}
            >
              Blogs
            </Link>

            <Link
              to="/albums"
              onClick={changeToggleHandler}
              className={(pathname === '/albums') ? activeClass : defaultClass}
            >
              Albums
            </Link>

            <Link
              to="/events"
              onClick={changeToggleHandler}
              className={(pathname === '/events') ? activeClass : defaultClass}
            >
              Events
            </Link>

            <Link
              to="/about"
              onClick={changeToggleHandler}
              className={(pathname === '/about') ? activeClass : defaultClass}
            >
              About
            </Link>

            <a href="#" className="hover:text-primaryDark hover:font-bold">
              Contact
            </a>

            <Link
              to="/donate"
              onClick={changeToggleHandler}
              className="py-2 px-6 font-bold text-white bg-primary rounded-xl baseline hover:bg-primaryDark md:block"
            >
              Donate
            </Link>
          </div>
        </div>
      </nav>
    </>
  );
}

export default Navbar;
