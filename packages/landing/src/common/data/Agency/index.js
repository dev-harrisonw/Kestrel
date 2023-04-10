import BlogImage1 from '../../assets/image/agency/blog/blog-img1.png';
import BlogImage2 from '../../assets/image/agency/blog/blog-img2.png';
import BlogImage3 from '../../assets/image/agency/blog/blog-img3.png';
import Member1 from '../../assets/image/agency/team/member-1.jpg';
import Member2 from '../../assets/image/agency/team/member-2.jpg';
import Member3 from '../../assets/image/agency/team/member-3.jpg';
import Denny from '../../assets/image/agency/client/denny.png';
import Menny from '../../assets/image/agency/client/menny.png';

const data = {
  menuItems: [
    {
      label: 'Services',
      path: '#featureSection',
      offset: '80',
    },
    {
      label: 'Testimonial',
      path: '#testimonialSection',
      offset: '100',
    },
    {
      label: 'FAQ',
      path: '#faqSection',
      offset: '67',
    },
  ],
  aboutus: [
    {
      id: 1,
      title: 'Proven success supporting SMEs',
      icon: 'flaticon-next',
    },
    {
      id: 2,
      title: 'Personalized and responsive support',
      icon: 'flaticon-next',
    },
    {
      id: 3,
      title: 'Experienced and professional IT experts',
      icon: 'flaticon-next',
    },
    {
      id: 4,
      title: 'Proactive maintenance/monitoring for smooth operations',
      icon: 'flaticon-next',
    },
  ],
  features: [
    {
      id: 1,
      icon: 'flaticon-atom',
      title: 'Network Management',
      description:
        'Keep your computers connected and secure with our reliable and efficient network management services.',
    },
    {
      id: 2,
      icon: 'flaticon-atom',
      title: 'IT Consulting',
      description:
        'Let us help you make informed decisions about your technology investments to achieve your business goals.',
    },
    {
      id: 3,
      icon: 'flaticon-atom',
      title: 'Backup & Recovery',
      description:
        'Don\t let a data loss disaster ruin your day! We can help you protect your data with reliable backup solutions.',
    },
    {
      id: 4,
      icon: 'flaticon-atom',
      title: 'Cybersecurity',
      description:
        'Protect your business from online threats with our cybersecurity services, keeping your data and systems safe.',
    },
    {
      id: 5,
      icon: 'flaticon-atom',
      title: 'Cloud Solutions',
      description:
        'Access your data and applications from anywhere with our cloud solutions, providing secure and flexible solutions to suit your business.',
    },
    {
      id: 6,
      icon: 'flaticon-atom',
      title: 'Hardware/Software',
      description:
        'Get the hardware and software you need to get the job done, installed and supported by our expert team.',
    },
  ],
  qualityFeature: [
    {
      id: 1,
      icon: 'flaticon-flask',
      title: 'Search Optimization',
      description:
        'By using Search Engine Optimization, You will get more Clients.',
    },
    {
      id: 2,
      icon: 'flaticon-pencil-case',
      title: 'Wireframing Task',
      description:
        'We respect our customer opinions and deals with them with perfect wireframing.',
    },
    {
      id: 3,
      icon: 'flaticon-ruler',
      title: 'Ui/Ux Design',
      description:
        'We provide the best UI/UX Design by following the latest trends of the market .',
    },
    {
      id: 4,
      icon: 'flaticon-briefing',
      title: 'Content Writting',
      description:
        'Proper Content Management is important to find out the real clients for your agencies .',
    },
  ],
  blog: [
    {
      id: 1,
      title: 'Real home corporation',
      thumbnail_url: BlogImage1,
      date: 'November 02, 2018',
      postLink: '#1',
    },
    {
      id: 2,
      title: 'Sheltech developer ltd.',
      thumbnail_url: BlogImage2,
      date: 'November 12, 2018',
      postLink: '#2',
    },
    {
      id: 3,
      title: 'Alt architecture co.',
      thumbnail_url: BlogImage3,
      date: 'December 09, 2018',
      postLink: '#3',
    },
  ],
  teamMember: [
    {
      id: 1,
      name: 'Jessica Fanddy',
      thumbnail_url: Member1,
      designation: 'Co Founder',
      social_links: [
        {
          id: 1,
          icon: 'flaticon-facebook-logo',
          url: '#',
        },
        {
          id: 1,
          icon: 'flaticon-twitter-logo-silhouette',
          url: '#',
        },
        {
          id: 1,
          icon: 'flaticon-instagram',
          url: '#',
        },
        {
          id: 1,
          icon: 'flaticon-dribble-logo',
          url: '#',
        },
      ],
    },
    {
      id: 2,
      name: 'Devid Justingul',
      thumbnail_url: Member2,
      designation: 'Senior Ui/UX Designer',
      social_links: [
        {
          id: 1,
          icon: 'flaticon-facebook-logo',
          url: '#',
        },
        {
          id: 1,
          icon: 'flaticon-twitter-logo-silhouette',
          url: '#',
        },
        {
          id: 1,
          icon: 'flaticon-instagram',
          url: '#',
        },
        {
          id: 1,
          icon: 'flaticon-dribble-logo',
          url: '#',
        },
      ],
    },
    {
      id: 3,
      name: 'Handdy Albuzz',
      thumbnail_url: Member3,
      designation: 'Article Writer',
      social_links: [
        {
          id: 1,
          icon: 'flaticon-facebook-logo',
          url: '#',
        },
        {
          id: 1,
          icon: 'flaticon-twitter-logo-silhouette',
          url: '#',
        },
        {
          id: 1,
          icon: 'flaticon-instagram',
          url: '#',
        },
        {
          id: 1,
          icon: 'flaticon-dribble-logo',
          url: '#',
        },
      ],
    },
  ],
  testimonial: [
    {
      id: 1,
      name: 'John Smith',
      designation: 'CEO of ABC Company',
      comment:
        'Kestrel IT has been instrumental in helping us navigate the challenges of remote work.',
      avatar_url: Denny,
    },
    {
      id: 2,
      name: 'Sarah Lee',
      designation: 'COO of XYZ Corp',
      comment:
        'Kestrel IT is knowledgeable, responsive, and dedicated to our success.',
      avatar_url: Menny,
    },
    {
      id: 3,
      name: 'Michael Johnson',
      designation: 'Director of Operations at LMN Corp',
      comment:
        'Their personalized approach and attention to detail is unmatched.',
      avatar_url: Denny,
    },
    {
      id: 4,
      name: 'Lisa Chen',
      designation: 'Owner of LMNOP LLC',
      comment:
        'Kestrel IT has been a lifesaver. They provide expert support and guidance.',
      avatar_url: Menny,
    },
  ],
  faq: [
    {
      id: 1,
      expend: true,
      title: 'What type of businesses do you typically work with?',
      description:
        'We work with small and medium-sized businesses across various industries, including healthcare, finance, legal, and more.',
    },
    {
      id: 2,
      title: 'What kind of technology solutions do you offer?',
      description:
        'We offer a range of technology solutions, including server installation, cloud solutions, cybersecurity, disaster recovery, and more. We also provide customized solutions tailored to your unique needs and goals.',
    },
    {
      id: 3,
      title: 'How do you ensure the security of our data and systems?',
      description:
        'We prioritize the security of your data and systems, and utilize various measures, such as firewalls, antivirus software, and data backup solutions to ensure the integrity and confidentiality of your information.',
    },
    {
      id: 4,
      title: 'How do you provide support and handle technical issues or emergencies?',
      description:
        'We provide personalized and responsive support to handle technical issues and emergencies. Our experienced and professional IT experts are available to assist you via phone, email, or remote access, and are proactive in monitoring and maintaining your systems to minimize downtime and disruption',
    },
  ],
  menuWidget: [
    {
      id: 1,
      title: 'Our Information',
      menuItems: [
        {
          id: 1,
          url: '#1',
          text: 'Return Policy',
        },
        {
          id: 2,
          url: '#2',
          text: 'Privacy Policy',
        },
        {
          id: 3,
          url: '#2',
          text: 'Terms & Conditions',
        },
        {
          id: 4,
          url: '#4',
          text: 'Site Map',
        },
        {
          id: 5,
          url: '#5',
          text: 'Store Hours',
        },
      ],
    },
  ],
  social_profile: [
    {
      id: 1,
      icon: 'flaticon-facebook-logo',
      link: '#1',
    },
    {
      id: 2,
      icon: 'flaticon-twitter-logo-silhouette',
      link: '#2',
    },
    {
      id: 3,
      icon: 'flaticon-instagram',
      link: '#3',
    },
    {
      id: 4,
      icon: 'flaticon-tumblr-logo',
      link: '#4',
    },
    {
      id: 5,
      icon: 'flaticon-dribble-logo',
      link: '#5',
    },
  ],
};
export default data;
