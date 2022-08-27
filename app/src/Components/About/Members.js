import facebookSvg from "../../assets/facebook.svg";
import twitterSvg from "../../assets/twitter.svg";
import instagramSvg from "../../assets/instagram.svg";
import linkedinSvg from "../../assets/linkedin.svg";
import githubSvg from "../../assets/github.svg";

function Members() {
  return (
    <section id="members" class="mt-20">
      <div class="container px-2 mx-auto flex flex-col md:px-0">
        {/* <!-- Album Info --> */}
        <div class="self-center text-center space-y-3">
          <h2 class="text-3xl font-bold">Meet Our Team</h2>
          <p class="text-sm max-w-2xl font-semibold text-dark">
            We are a non-profital organization focusing on child education with
            technology.
          </p>
        </div>

        {/* <!--  Cards --> */}
        <div class="flex flex-col justify-between mt-10 space-y-5 md:grid md:grid-cols-3 lg:grid-cols-4 md:gap-4 md:space-y-0">
          {/* <!-- Memebers 1 --> */}
          <div>
            <img
              class="rounded-xl w-full h-[200px] md:h-[300px] object-cover"
              src="https://d2cdo4blch85n8.cloudfront.net/wp-content/uploads/2021/02/Rick-Astley-Music-Video-Remastered-in-4K-Featured-image-1568x882.jpg"
              alt=""
            />
          </div>

          {/* <!-- Memebers 2 --> */}
          <div class="relative">
            <img
              class="rounded-xl w-full h-[200px] md:h-[300px] object-cover"
              src="https://d2cdo4blch85n8.cloudfront.net/wp-content/uploads/2021/02/Rick-Astley-Music-Video-Remastered-in-4K-Featured-image-1568x882.jpg"
              alt=""
            />
            <div class="absolute flex flex-col p-6 rounded-b-xl justify-between bottom-0 w-full h-2/3 bg-primary bg-opacity-70">
              <div class="self-center text-center justify-between text-white">
                <h4 class="text-xl font-bold">Coding Bootcamp</h4>
                <p class="mt-1 text-md font-semibold">Youtube</p>
              </div>
              {/* <!-- Social Links --> */}
              <div class="flex justify-center space-x-2 pt-2">
                <a class="w-[8px] h-[9px] text-primary" href="#">
                  <img src={facebookSvg} alt="facebook" />
                </a>
                <a class="w-[14px] h-[14px]" href="#">
                  <img src={twitterSvg} alt="twitter" />
                </a>
                <a class="w-[14px] h-[14px]" href="#">
                  <img src={instagramSvg} alt="instagram" />
                </a>
                <a class="w-[14px] h-[14px]" href="#">
                  <img src={linkedinSvg} alt="linkedin" />
                </a>
                <a class="w-[14px] h-[14px]" href="#">
                  <img src={githubSvg} alt="github" />
                </a>
              </div>
            </div>
          </div>

          {/* <!-- Memebers 3 --> */}
          <div>
            <img
              class="rounded-xl w-full h-[200px] md:h-[300px] object-cover"
              src="https://d2cdo4blch85n8.cloudfront.net/wp-content/uploads/2021/02/Rick-Astley-Music-Video-Remastered-in-4K-Featured-image-1568x882.jpg"
              alt=""
            />
          </div>

          {/* <!-- Memebers 4 --> */}
          <div>
            <img
              class="rounded-xl w-full h-[200px] md:h-[300px] object-cover"
              src="https://d2cdo4blch85n8.cloudfront.net/wp-content/uploads/2021/02/Rick-Astley-Music-Video-Remastered-in-4K-Featured-image-1568x882.jpg"
              alt=""
            />
          </div>

          {/* <!-- Memebers 5 --> */}
          <div>
            <img
              class="rounded-xl w-full h-[200px] md:h-[300px] object-cover"
              src="https://d2cdo4blch85n8.cloudfront.net/wp-content/uploads/2021/02/Rick-Astley-Music-Video-Remastered-in-4K-Featured-image-1568x882.jpg"
              alt=""
            />
          </div>

          {/* <!-- Memebers 6 --> */}
          <div>
            <img
              class="rounded-xl w-full h-[200px] md:h-[300px] object-cover"
              src="https://d2cdo4blch85n8.cloudfront.net/wp-content/uploads/2021/02/Rick-Astley-Music-Video-Remastered-in-4K-Featured-image-1568x882.jpg"
              alt=""
            />
          </div>

          {/* <!-- Memebers 7 --> */}
          <div>
            <img
              class="rounded-xl w-full h-[200px] md:h-[300px] object-cover"
              src="https://d2cdo4blch85n8.cloudfront.net/wp-content/uploads/2021/02/Rick-Astley-Music-Video-Remastered-in-4K-Featured-image-1568x882.jpg"
              alt=""
            />
          </div>

          {/* <!-- Memebers 8 --> */}
          <div>
            <img
              class="rounded-xl w-full h-[200px] md:h-[300px] object-cover"
              src="https://d2cdo4blch85n8.cloudfront.net/wp-content/uploads/2021/02/Rick-Astley-Music-Video-Remastered-in-4K-Featured-image-1568x882.jpg"
              alt=""
            />
          </div>
        </div>
      </div>
    </section>
  );
}

export default Members;
