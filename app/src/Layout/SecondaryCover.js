import logo from "../assets/logo.png";
import CoverImage from "../assets/cover-bg.svg";

function SecondaryCover(props) {
  return (
    <section
      id="hero"
      style={{
        backgroundImage: `url(${CoverImage})`,
        backgroundRepeat: "no-repeat",
        backgroundSize: "auto 100%",
      }}
      className="relative h-[50vh]"
    >
      <div className="flex container mx-auto px-2 h-full md:px-0">
        <div className="flex md:w-1/2 -mt-6 h-full flex-col space-y-5 items-center text-center md:mt-0 md:text-start md:items-start md:jusity-start justify-center">
          <h1 className="text-4xl max-w-5xl font-bold">{props.title}</h1>
          <p className="text-sm font-semibold text-dark">{props.description}</p>
        </div>
        <div className="hidden md:flex md:w-1/2 self-center justify-center">
          <img src={logo} alt="logo" />
        </div>
      </div>
    </section>
  );
}

export default SecondaryCover;
