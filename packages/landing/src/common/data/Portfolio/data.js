
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
import PortfolioImage3 from '../../assets/image/portfolio/portfolio-3.png';
import PortfolioImage4 from '../../assets/image/portfolio/portfolio-4.png';
import PortfolioImage5 from '../../assets/image/portfolio/portfolio-5.png';
import PortfolioImage6 from '../../assets/image/portfolio/portfolio-6.png';
import PortfolioImage7 from '../../assets/image/portfolio/portfolio-7.png';
import PortfolioImage8 from '../../assets/image/portfolio/portfolio-8.png';

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
    label: 'US',
    path: '#banner_section',
    offset: '0',
  },
  {
    label: 'PROJECT',
    path: '#portfolio_section',
    offset: '0',
  },
  {
    label: 'WHY US?',
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
    title: 'OUR PROJECTS',
    portfolioItem: [
      {
        title: 'Japanese Tobacco International (JTI) - CRM Web App',
        description:
          "A comprehensive, web-based CRM solution designed specifically for Japanese Tobacco International. This application serves as a centralized analytics dashboard, enabling the management team to monitor sales metrics, track the performance of field teams, and analyze customer data in real-time. With intuitive data visualization, JTI can make more strategic and effective business decisions.",
        image: PortfolioImage1,
        link: 'As A Fullstack Develeper At Amaya Perdana Kreasindo',
        featuredIn: 'AWWWARDS',
        featuredLink: 'As A Fullstack Develeper At Amaya Perdana Kreasindo',
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
        ],
      },
      {
        title: 'Japanese Tobacco International (JTI) - Brand Ambassador Application',
        description:
          "This Android application was built to empower JTI's Brand Ambassadors. Through the app, they can easily manage daily tasks, report promotional activities, and monitor their achievements and incentives. The user-friendly interface ensures that fieldwork becomes more efficient, measurable, and directly connected to the central office.",
        image: PortfolioImage2,
        link: 'As A Fullstack Develeper At Amaya Perdana Kreasindo',
        featuredIn: 'AppStore',
        featuredLink: 'As A Fullstack Develeper At Amaya Perdana Kreasindo',
        view: '8.5K',
        love: '5.5K',
        feedback: '3.2K',
        buildWith: [
          {
            content: 'Android Native',
          },
        ],
      },
      {
        title: 'Djarum - MLD Code 2 Ibiza',
        description:
          "This project is an integrated digital platform for the Djarum Super MLD Code 2 Ibiza campaign. We developed a web app and an Android application that served as the central hub for participant interaction. Users could register, participate in challenges, and collect points. The underlying CRM system was designed to manage data from thousands of participants and ensure a seamless user experience throughout the campaign period.",
        image: PortfolioImage3,
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
      {
        title: 'Trupower Genset - Company Profile & Digital Marketing',
        description:
          "We built a modern and responsive corporate profile website for Trupower Genset. This website serves not only as a digital showcase for their generator products but also as a powerful marketing tool. With a professional design and comprehensive information, the site aims to enhance Trupower's online visibility, attract prospective customers, and build a trustworthy brand image in the power solution industry.",
        image: PortfolioImage4,
        link: 'As A Freelancer Web Developer',
        featuredIn: 'AppStore',
        featuredLink: 'As A Freelancer Web Developer',
        view: '8.5K',
        love: '5.5K',
        feedback: '3.2K',
        buildWith: [
          {
            content: 'PHP Native',
          },
          {
            content: 'HTML, CSS, JS',
          },
          {
            content: 'Google Ads',
          },
          { 
            content: 'Meta Ads', 
          },
        ],
      },
      {
        title: 'Dipetikmart ID - E-commerce Web App',
        description:
          "Dipetikmart ID is an e-commerce platform we developed to meet the demand for online grocery and daily necessities shopping. The web application was designed with a focus on user-friendliness, from product search and item selection to a quick and secure checkout process. Its clean layout and easy navigation provide a pleasant online shopping experience for customers.",
        image: PortfolioImage5,
        link: 'As A Freelancer Web Developer',
        featuredIn: 'AppStore',
        featuredLink: 'As A Freelancer Web Developer',
        view: '8.5K',
        love: '5.5K',
        feedback: '3.2K',
        buildWith: [
          {
            content: 'Laravel',
          },
          {
            content: 'HTML, CSS, JS',
          },
        ],
      },
      {
        title: 'Athena - Agent Store Dashboard',
        description:
          "This is an integrated ERP (Enterprise Resource Planning) and CRM system consolidated into a single web dashboard for Athena. The application is designed to efficiently manage a network of agents and stores. Key features include agent information management, sales monitoring, client registration tracking, and performance reporting. This dashboard serves as a vital tool for Athena to optimize its business operations and relationships with its agents.",
        image: PortfolioImage6,
        link: 'As A Freelancer Web Developer',
        featuredIn: 'AppStore',
        featuredLink: 'As A Freelancer Web Developer',
        view: '8.5K',
        love: '5.5K',
        feedback: '3.2K',
        buildWith: [
          {
            content: 'Laravel',
          },
          {
            content: 'HTML, CSS, JS',
          },
        ],
      },
      {
        title: 'Corepadel Sport - POS & Booking System',
        description:
          "A complete digital solution for Corepadel Sport, integrating a court booking system with a Point of Sale (POS) system. Through the website, customers can easily view schedules and book padel courts. Meanwhile, for the management, the application facilitates schedule administration, payment processing, and transaction tracking, streamlining the entire business workflow.",
        image: PortfolioImage7,
        link: 'As A Fullstack Develeper At Coda Prapanca Technology',
        featuredIn: 'AppStore',
        featuredLink: 'As A Fullstack Develeper At Coda Prapanca Technology',
        view: '8.5K',
        love: '5.5K',
        feedback: '3.2K',
        buildWith: [
          {
            content: 'Laravel',
          },
          {
            content: 'HTML, CSS, JS, Thailwind',
          },
        ],
      },
      {
        title: 'Minum 24 - E-commerce Web App',
        description:
          "Minum 24 is an e-commerce platform specializing in the sale of various beverage products. We built a responsive and visually appealing online store, fully accessible from desktops, tablets, and smartphones. Featuring an organized product catalog and a simple checkout process, Minum 24 makes it easy for customers to find and purchase their favorite drinks online.",
        image: PortfolioImage8,
        link: 'As A Freelancer Web Developer',
        featuredIn: 'AppStore',
        featuredLink: 'As A Freelancer Web Developer',
        view: '8.5K',
        love: '5.5K',
        feedback: '3.2K',
        buildWith: [
          {
            content: 'Laravel',
          },
          {
            content: 'HTML, CSS, JS, Thailwind',
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
