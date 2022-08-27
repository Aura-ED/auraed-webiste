import mailSvg from "../assets/mail.svg";
import facebookSvg from "../assets/facebook-primary.svg";
import twitterSvg from "../assets/twitter-primary.svg";
import instagramSvg from "../assets/instagram-primary.svg";
import linkedinSvg from "../assets/linkedin-primary.svg";
import logo from "../assets/logo.png";

function Footer() {
  return (
    <section id="footer" className="mt-20 px-2 md:px-0">
      <div className="p-6 container mx-auto bg-primaryLight rounded-2xl space-y-5 md:p-12">
        <div className="text-center md:text-start flex flex-col justify-between items-center space-y-10 md:items-start md:flex-row md:space-x-8 md:space-y-0">
          {/* <!-- Footer Info --> */}
          <div className="w-full text-center md:w-1/3 md:text-start space-y-3">
            <div className="flex justify-center md:justify-start">
              <img
                className="self-center w-[100px] h-[60px]"
                src={logo}
                alt="auraed"
              />
            </div>
            <p className="text-sm">
              We're proud to say that Project AuraEd has successfully reached
              five schools and taught over a thousand students from different
              districts of Nepal.
            </p>
          </div>

          {/* <!-- Links --> */}
          <div className="w-full flex md:w-2/5 justify-between">
            {/* <!-- Pages --> */}
            <div className="text-center md:text-start items-center space-y-3">
              <h3 className="text-xl font-bold text-primary">Pages</h3>
              <div className="flex flex-col space-y-2">
                <a href="#" className="text-sm font-semibold">
                  About Us
                </a>
                <a href="#" className="text-sm font-semibold">
                  Portfolio
                </a>
                <a href="#" className="text-sm font-semibold">
                  Blogs
                </a>
              </div>
            </div>

            {/* <!-- Contact --> */}
            <div className="text-center md:text-start space-y-3">
              <h3 className="text-xl font-bold text-primary">Contact Us</h3>
              <div className="flex flex-col space-y-2">
                <a href="#" className="text-sm font-semibold">
                  Kathmandu, Nepal
                </a>
                <a href="#" className="text-sm font-semibold">
                  Help Center
                </a>

                {/* <!-- Social Links --> */}
                <div className="flex justify-center md:justify-start space-x-2 pt-2">
                  <a className="w-[8px] h-[9px] text-primary" href="#">
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
          </div>
        </div>
        <hr className="text-dark" />

        {/* <!-- Copyright --> */}
        <div className="flex flex-col space-y-2 justify-center text-center md:text-start md:flex-row md:justify-between">
          <p className="text-sm font-bold">&copy; 2022 Aura Ed</p>
          <p className="text-sm text-dark font-semibold">
            Developed with ❤️ and ☕
          </p>
        </div>
      </div>
    </section>
  );
}

export default Footer;
