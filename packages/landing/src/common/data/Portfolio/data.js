
import { socialFacebook } from 'react-icons-kit/ionicons/socialFacebook';
import { socialGithub } from 'react-icons-kit/ionicons/socialGithub';

import Awardee1 from '../../assets/image/portfolio/awardee-1.png';
import Awardee2 from '../../assets/image/portfolio/awardee-2.png';
import Awardee3 from '../../assets/image/portfolio/awardee-3.png';
import Awardee4 from '../../assets/image/portfolio/awardee-4.png';
import AwardImage1 from '../../assets/image/portfolio/award-1.png';
import AwardImage2 from '../../assets/image/portfolio/award-2.png';
import AwardImage3 from '../../assets/image/portfolio/award-3.png';
import AwardImage4 from '../../assets/image/portfolio/award-4.png';

import PortfolioImage1 from '../../assets/image/portfolio/portfolio-1.png';
import PortfolioImage2 from '../../assets/image/portfolio/portfolio-2.png';

import Step1 from '../../assets/image/portfolio/step-1.png';
import Step2 from '../../assets/image/portfolio/step-2.png';
import Step3 from '../../assets/image/portfolio/step-3.png';

import SkillIcon1 from '../../assets/image/portfolio/skill-1.svg';
import SkillIcon2 from '../../assets/image/portfolio/skill-2.svg';
import SkillIcon3 from '../../assets/image/portfolio/skill-3.svg';
import SkillIcon4 from '../../assets/image/portfolio/skill-4.svg';

import Client1 from '../../assets/image/portfolio/client-1.png';
import Client2 from '../../assets/image/portfolio/client-2.png';
import Client3 from '../../assets/image/portfolio/client-3.png';
import Client4 from '../../assets/image/portfolio/client-4.png';
import Client5 from '../../assets/image/portfolio/client-5.png';
import Client6 from '../../assets/image/portfolio/client-6.png';

import Reviewer1 from '../../assets/image/portfolio/client-avatar-1.jpg';
import Reviewer2 from '../../assets/image/portfolio/client-avatar-2.jpg';
import Reviewer3 from '../../assets/image/portfolio/client-avatar-3.jpg';

export const SOCIAL_PROFILES = [
  {
    icon: socialFacebook,
    url: '#',
  },
  {
    icon: socialGithub,
    url: '#',
  },
];

export const MENU_ITEMS = [
  {
    label: 'ME',
    path: '#banner_section',
    offset: '0',
  },
  {
    label: 'PROJECT',
    path: '#portfolio_section',
    offset: '0',
  },
  {
    label: 'WHY ME?',
    path: '#process_section',
    offset: '0',
  },
];

export const AWARDS = [
  {
    awardLogo: AwardImage1,
    awardName: 'Free Software Advice',
    awardDetails: 'Top Rated App Development Companies USA',
    awardeeLogo: Awardee1,
    awardeeName: 'Awardee',
    date: 'The Jury 2018',
  },
  {
    awardLogo: AwardImage2,
    awardName: 'Free Software Advice',
    awardDetails: 'Top Rated App Development Companies USA',
    awardeeLogo: Awardee2,
    awardeeName: 'Awardee',
    date: 'The Jury 2018',
  },
  {
    awardLogo: AwardImage3,
    awardName: 'Free Software Advice',
    awardDetails: 'Top Rated App Development Companies USA',
    awardeeLogo: Awardee3,
    awardeeName: 'Awardee',
    date: 'The Jury 2018',
  },
  {
    awardLogo: AwardImage4,
    awardName: 'Free Software Advice',
    awardDetails: 'Top Rated App Development Companies USA',
    awardeeLogo: Awardee4,
    awardeeName: 'Awardee',
    date: 'The Jury 2018',
  },
];

export const PORTFOLIO_SHOWCASE = [
  {
    title: 'WEB',
    portfolioItem: [
      {
        title: 'Japanese Tobacco International',
        description:
          "This custom CRM was developed to serve as the central operational hub for JTI's marketing ambassador program. It efficiently manages customer data collected by ambassadors in the field via a dedicated mobile application. The platform provides full visibility into ambassador activities, including real-time GPS tracking and digital attendance. Furthermore, it serves as a powerful event management tool for planning and overseeing JTI-sponsored events. A core feature is its automated payroll engine, which accurately calculates performance-based fees and bonuses for both ambassadors and their team leaders, ensuring transparency and efficiency.",
        image: PortfolioImage1,
        link: 'As A Fullstack Develeper At Coda Prapanca Technology',
        featuredIn: 'AWWWARDS',
        featuredLink: 'As A Fullstack Develeper At Coda Prapanca Technology',
        view: '4.5K',
        love: '1.5K',
        feedback: '1.2K',
        buildWith: [
          {
            content: 'CakePHP',
          },
          {
            content: 'HTML, CSS, JS',
          },
          {
            content: 'Android Native',
          },
        ],
      },
      {
        title: 'Djarum MLD Code 2 Ibiza',
        description:
          "Developed a full-stack CRM solution for a nationwide marketing campaign spanning 20+ cities. The system featured a native Android app for field ambassadors to scan QR codes and capture customer data at events, paired with a powerful PHP web admin panel for customer/point management, QR code generation, and real-time sales and attendance reporting.",
        image: PortfolioImage2,
        link: 'As A Fullstack Develeper At Coda Prapanca Technology',
        featuredIn: 'AppStore',
        featuredLink: 'As A Fullstack Develeper At Coda Prapanca Technology',
        view: '8.5K',
        love: '5.5K',
        feedback: '3.2K',
        buildWith: [
          {
            content: 'CakePHP',
          },
          {
            content: 'HTML, CSS, JS',
          },
          {
            content: 'Android Native',
          },
        ],
      },
    ],
  },
  {
    title: 'APPLICATION',
    portfolioItem: [
      {
        title: 'Japanese Tobacco International',
        description:
          "This custom CRM was developed to serve as the central operational hub for JTI's marketing ambassador program. It efficiently manages customer data collected by ambassadors in the field via a dedicated mobile application. The platform provides full visibility into ambassador activities, including real-time GPS tracking and digital attendance. Furthermore, it serves as a powerful event management tool for planning and overseeing JTI-sponsored events. A core feature is its automated payroll engine, which accurately calculates performance-based fees and bonuses for both ambassadors and their team leaders, ensuring transparency and efficiency.",
        image: PortfolioImage1,
        link: 'As A Fullstack Develeper At Coda Prapanca Technology',
        featuredIn: 'AWWWARDS',
        featuredLink: 'As A Fullstack Develeper At Coda Prapanca Technology',
        view: '4.5K',
        love: '1.5K',
        feedback: '1.2K',
        buildWith: [
          {
            content: 'CakePHP',
          },
          {
            content: 'HTML, CSS, JS',
          },
          {
            content: 'Android Native',
          },
        ],
      },
      {
        title: 'Djarum MLD Code 2 Ibiza',
        description:
          "Developed a full-stack CRM solution for a nationwide marketing campaign spanning 20+ cities. The system featured a native Android app for field ambassadors to scan QR codes and capture customer data at events, paired with a powerful PHP web admin panel for customer/point management, QR code generation, and real-time sales and attendance reporting.",
        image: PortfolioImage2,
        link: 'As A Fullstack Develeper At Coda Prapanca Technology',
        featuredIn: 'AppStore',
        featuredLink: 'As A Fullstack Develeper At Coda Prapanca Technology',
        view: '8.5K',
        love: '5.5K',
        feedback: '3.2K',
        buildWith: [
          {
            content: 'CakePHP',
          },
          {
            content: 'HTML, CSS, JS',
          },
          {
            content: 'Android Native',
          },
        ],
      },
    ],
  },
  {
    title: 'DIGITAL MARKETING',
    portfolioItem: [
      {
        title: 'Canada Media Site',
        description:
          "An effective and immersive user experience is what catches the attention and spreads a clear message. That's why we attach great importance to the fact that ergonomics serves the design, and that this design is innovative and neat.",
        image: PortfolioImage1,
        link: '#',
        featuredIn: 'AWWWARDS',
        featuredLink: '#',
        view: '4.5K',
        love: '1.5K',
        feedback: '1.2K',
        buildWith: [
          {
            content: 'React JS',
          },
          {
            content: 'Next JS',
          },
          {
            content: 'Styled Component',
          },
        ],
      },
      {
        title: 'RedQ, Inc. mobile app',
        description:
          "An effective and immersive user experience is what catches the attention and spreads a clear message. That's why we attach great importance to the fact that ergonomics serves the design, and that this design is innovative and neat.",
        image: PortfolioImage2,
        link: '#',
        featuredIn: 'AppStore',
        featuredLink: '#',
        view: '8.5K',
        love: '5.5K',
        feedback: '3.2K',
        buildWith: [
          {
            content: 'React Native',
          },
          {
            content: 'Firebase',
          },
          {
            content: 'Styled Component',
          },
        ],
      },
    ],
  },
];

export const PROCESS_STEPS = [
  {
    image: Step1,
    title: '1. Discover',
    description:
      'We begin by understanding your business challenges. Through collaborative discussions and lean research, we help you map the problems and outline the right digital solution.',
  },
  {
    image: Step2,
    title: '2. Plan & Design',
    description:
      'With the insights gathered, our team develops system flows, information architecture, and user-friendly designs to ensure intuitive and efficient user experiences.',
  },
  {
    image: Step3,
    title: '3. Build & Launch',
    description:
      'Using modern frameworks and agile development, we build, test, and deploy your solution with iterative releases every 1–2 weeks, allowing continuous feedback and improvements.',
  },
];

export const SERVICE_LIST = [
  {
    title: 'Digital Marketing',
    listItems: [
      {
        content: 'Add Strategy & Planning',
      },
      {
        content: 'Copywriting & Creative',
      },
      {
        content: 'Campaign Setup',
      },
      {
        content: 'Campaign Setup',
      },
      {
        content: 'Chat Bot',
      },
      {
        content: 'Campaign Setup',
      },
    ],
  },
  {
    title: 'Web Development',
    listItems: [
      {
        content: 'ReactJS',
      },
      {
        content: 'AngularJS',
      },
      {
        content: 'Laravel',
      },
      {
        content: 'WordPress',
      },
      {
        content: 'NodeJS',
      },
      {
        content: 'GO',
      },
      {
        content: 'Java Spring Boot',
      },
    ],
  },
  {
    title: 'Mobile App Development',
    listItems: [
      {
        content: 'iOS',
      },
      {
        content: 'Android',
      },
      {
        content: 'React Native',
      },
      {
        content: 'Flutter',
      },
    ],
  },
];

export const SKILLS = [
  {
    title: 'Graphic Design',
    description:
      'We craft purposeful visual designs to support your brand identity and enhance user experiences across digital platforms.',
    icon: SkillIcon1,
    successRate: '85',
  },
  {
    title: 'Digital Marketing',
    description:
      'From landing pages to analytics, we build systems that empower your digital marketing efforts to perform better and scale faster.',
    icon: SkillIcon2,
    successRate: '95',
  },
  {
    title: 'Web Application',
    description:
      'We develop scalable and secure web applications using modern frameworks like Laravel, tailored to meet your business needs.',
    icon: SkillIcon3,
    successRate: '90',
  },
  {
    title: 'Mobile Application',
    description:
      'Our team builds cross-platform mobile apps, ensuring optimal performance and seamless user experience.',
    icon: SkillIcon4,
    successRate: '70',
  },
];

export const CLIENTS = [
  {
    image: Client1,
    title: 'Microsoft',
  },
  {
    image: Client2,
    title: 'Airbnb',
  },
  {
    image: Client3,
    title: 'Adidas',
  },
  {
    image: Client4,
    title: 'IBM',
  },
  {
    image: Client5,
    title: 'Amazon',
  },
  {
    image: Client6,
    title: 'Google',
  },
];

export const TESTIMONIAL = [
  {
    image: Reviewer1,
    review:
      'Another quality React-based product from RedQ Team. Manage to turn highly complex tech into simple components.',
    name: 'Jon Doe',
    designation: 'Founder & CEO',
    twitterProfile: 'https://twitter.com/redqinc',
    organization: '@Tonquin',
    organizationURL: 'https://redq.io/',
  },
  {
    image: Reviewer2,
    review:
      'Another quality React-based product from RedQ Team. Manage to turn highly complex tech into simple components.',
    name: 'Jeny Doe',
    designation: 'Co-Founder & CTO',
    twitterProfile: 'https://twitter.com/redqinc',
    organization: '@Tonquin',
    organizationURL: 'https://redq.io/',
  },
  {
    image: Reviewer3,
    review:
      'Another quality React-based product from RedQ Team. Manage to turn highly complex tech into simple components.',
    name: 'Jon Doe',
    designation: 'Co-Founder & COO',
    twitterProfile: 'https://twitter.com/redqinc',
    organization: '@Tonquin',
    organizationURL: 'https://redq.io/',
  },
];

export const FOOTER_MENU = [
  {
    label: 'Contact',
    path: '#',
  },
];
