import facebookSvg from '../../assets/facebook.svg';
import twitterSvg from '../../assets/twitter.svg';
import instagramSvg from '../../assets/instagram.svg';
import linkedinSvg from '../../assets/linkedin.svg';
import githubSvg from '../../assets/github.svg';

function Members() {
  const members = [
    {
      name: 'Roman Shrestha',
      imageLink:
        'https://media.discordapp.net/attachments/980147436196597820/1023048038723375165/romanpic.png',
      position: 'Co-Founder',
      socialLinks: [
        {
          link: 'https://facebook.com',
        },
      ],
    },
    {
      name: 'Johnson Subedi',
      imageLink:
        'https://media.discordapp.net/attachments/980147436196597820/1048307104324264026/image.png?width=819&height=656',
      position: 'Co-Founder',
      socialLinks: [
        {
          link: 'https://facebook.com',
        },
      ],
    },
    {
      name: 'Priyanshu Pyakurel',
      imageLink:
        'https://cdn.discordapp.com/attachments/980147436196597820/1048308657089159188/Priyanshu_Pyakurel_Co-Founder.png',
      position: 'Co-Founder',
      socialLinks: [
        {
          link: 'https://facebook.com',
        },
      ],
    },
    {
      name: 'Sovit Lekhak',
      imageLink:
        'https://media.discordapp.net/attachments/980147436196597820/1013209746267967531/unknown.png',
      position: 'Backend Developer/Executive Committee Member',
      socialLinks: [
        {
          link: 'https://facebook.com',
        },
      ],
    },
    {
      name: 'Samrid Pandit',
      imageLink:
        'https://media.discordapp.net/attachments/980147436196597820/1013205461329248338/unknown.png',
      position: 'Technical Lead',
      socialLinks: [
        {
          link: 'https://facebook.com',
        },
      ],
    }, 
    {
      name: 'Diwas Lamichhane',
      imageLink:
        'https://cdn.discordapp.com/attachments/980147436196597820/1059778386312036382/318855047_1196656940937143_568029862979930107_n.png',
      position: 'Frontend Developer/ Tutor',
      socialLinks: [
        {
          link: 'https://facebook.com',
        },
      ],
    },
    {
      name: 'Prabin Tiwari',
      imageLink:
        'https://cdn.discordapp.com/attachments/980147436196597820/1048307602892804239/image.png',
      position: 'Executive Member',
      socialLinks: [
        {
          link: 'https://facebook.com',
        },
      ],
    },
    {
      name: 'Prashant Panta',
      imageLink:
        'https://cdn.discordapp.com/attachments/980147436196597820/1048308266398122034/image.png',
      position: 'Executive Member',
      socialLinks: [
        {
          link: 'https://facebook.com',
        },
      ],
    },
    {
      name: 'Prem Singh Pun Magar',
      imageLink:
        'https://cdn.discordapp.com/attachments/980147436196597820/1048308461651365999/Prem_Singh_Pun_Magar_-_Head_of_Content_Creation.jpg',
      position: 'Lead Content Creation',
      socialLinks: [
        {
          link: 'https://facebook.com',
        },
      ],
    },
    {
      name: 'Priyanka Karki',
      imageLink:
        'https://cdn.discordapp.com/attachments/980147436196597820/1048308656480989204/Priyanka_karki-_District_Representative.png',
      position: 'District Representative',
      socialLinks: [
        {
          link: 'https://facebook.com',
        },
      ],
    },
    {
      name: 'Ramika Pandey',
      imageLink:
        'https://cdn.discordapp.com/attachments/980147436196597820/1048308657420513290/Ramika_Pandey-_Program_manager.jpg',
      position: 'Program Manager',
      socialLinks: [
        {
          link: 'https://facebook.com',
        },
      ],
    },
  ];
  return (
    <section id="members" class="mt-20">
      <div class="container px-2 mx-auto flex flex-col md:px-0">
        {/* <!-- Album Info --> */}
        <div class="self-center text-center space-y-3">
          <h2 class="text-3xl font-bold">Meet Our Team</h2>
          <p class="text-sm max-w-2xl font-semibold text-dark">
            We are a non-profit organization focusing on child education with
            technology.
          </p>
        </div>

        {/* <!--  Cards --> */}
        <div class="flex flex-col justify-between mt-10 space-y-5 md:grid md:grid-cols-3 lg:grid-cols-4 md:gap-4 md:space-y-0">
          {/* <!-- Memeber 1 --> */}
          {members.map((member, idx) => (
            <div key={idx} class="relative cursor-pointer ">
              <img
                class="rounded-xl w-full h-[200px] md:h-[300px] object-cover"
                src={member.imageLink}
                alt=""
              />
              <div class="absolute flex flex-col p-6 rounded-b-xl justify-between bottom-0 w-full h-3/3 bg-primary bg-opacity-70">
                <div class=" self-right text-center justify-between text-white">
                  <h4 class="text-xl font-bold">{member.name}</h4>
                  <p class="mt-1 text-md font-semibold">{member.position}</p>
                </div>
                {/* <!-- Social Links --> */}
                <div class="flex justify-center space-x-2 pt-2">
                  <a
                    class="w-[8px] h-[9px] text-primary"
                    href={member.socialLinks[0].link}
                  >
                    <img src={facebookSvg} alt="facebook" />
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Members;
