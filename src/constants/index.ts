import {
  mobile,
  backend,
  creator,
  web,
  javascript,
  typescript,
  html,
  css,
  reactjs,
  redux,
  tailwind,
  nodejs,
  mongodb,
  git,
  figma,
  docker,
  python,
  cpp,
  angular,
  java,
  recoilJs,
  rust,
  aws,
  flask,
  functionup,
  w3dev,
  altius_tech,
  quiz_bot,
  promptopia,
  online_shop,
  health_challenge_tracker,
  password_manager,
  chat_app,
} from "../assets";

export const navLinks = [
  {
    id: "about",
    title: "About",
  },
  {
    id: "work",
    title: "Work",
  },
  {
    id: "projects",
    title: "Projects",
  },
  {
    id: "contact",
    title: "Contact",
  },
];

const services = [
  {
    title: "Web Development",
    icon: web,
  },
  {
    title: "NodeJs Developer",
    icon: mobile,
  },
  {
    title: "Backend Development",
    icon: backend,
  },
  {
    title: "Python Programming",
    icon: creator,
  },
];

const technologies = [
  {
    name: "JavaScript",
    icon: javascript,
  },
  {
    name: "TypeScript",
    icon: typescript,
  },
  {
    name: "Python",
    icon: python,
  },
  {
    name: "Java",
    icon: java,
  },
  {
    name: "Cpp",
    icon: cpp,
  },
  {
    name: "Rust",
    icon: rust,
  },
  {
    name: "HTML 5",
    icon: html,
  },
  {
    name: "CSS 3",
    icon: css,
  },
  {
    name: "React JS",
    icon: reactjs,
  },
  {
    name: "Angular",
    icon: angular,
  },
  {
    name: "Redux Toolkit",
    icon: redux,
  },
  {
    name: "Recoil JS",
    icon: recoilJs,
  },
  {
    name: "Tailwind CSS",
    icon: tailwind,
  },
  {
    name: "Node JS",
    icon: nodejs,
  },
  {
    name: "Flask",
    icon: flask,
  },
  {
    name: "MongoDB",
    icon: mongodb,
  },
  {
    name: "git",
    icon: git,
  },
  {
    name: "AWS",
    icon: aws,
  },
  {
    name: "figma",
    icon: figma,
  },
  {
    name: "docker",
    icon: docker,
  },
];

const experiences = [
  {
    title: "FunctionUp Developer Experience",
    company_name: "FunctionUp",
    icon: functionup,
    iconBg: "#001378",
    date: "Jan 2024 - Feb 2024",
    points: [
      "Developing and maintaining Flask APIs to create a Notification Engine for internal team",
      "Collaborating with other developers to create high-quality products.",
      "Created an Admin panel for getting the data for scheduling WhatsApp messages with AppSmith a no code tool for creting User Interfaces.",
      "Learned how to use AWS lambda functions and EventBridge Scheduler for scheduling events. Also worked with WhatsApp Cloud API services.",
    ],
  },
  {
    title: "JavaScript Developer Intern",
    company_name: "W3Dev ",
    icon: w3dev,
    iconBg: "#E6DEDD",
    date: "May 2024 - Current",
    points: [
      "Developing and maintaining express APIs and Optimizing Backend and database.",
      "Implementing captcha responsive design and ensuring cross-browser compatibility.",
      "Participating in code reviews and providing constructive feedback to other developers.",
    ],
  },
  {
    title: "MERN Stack Developer",
    company_name: "Altius Technologies",
    icon: altius_tech,
    iconBg: "#383E56",
    date: "Aug 2024 - Current",
    points: [
      "Developing and maintaining web applications using React.js and other related technologies.",
      "Collaborating with cross-functional teams including designers, product managers, and other developers to create high-quality products.",
      "Implementing responsive design and ensuring cross-browser compatibility.",
      "Participating in code reviews and providing constructive feedback to other developers.",
    ],
  },
];

const projects = [
  {
    name: "WhatsApp Quiz Bot",
    description:
      "Developed a Quiz Bot for WhatsApp. It conducts a simple quiz on WhatsApp and shows the results accordingly. Used Flask APIs for sending and managing messages.",
    tags: [
      {
        name: "python",
        color: "blue-text-gradient",
      },
      {
        name: "twilio",
        color: "green-text-gradient",
      },
      {
        name: "flask",
        color: "pink-text-gradient",
      },
    ],
    image: quiz_bot,
    project_link:
      "https://drive.google.com/file/d/1gjRTsG4wvgwFR8Z5RmoEGjoL3w7KFEYA/view?usp=drive_link",
    source_code_link:
      "https://github.com/VivekSite/send-whatsapp-messages-twilio",
  },
  {
    name: "Promptopia",
    description:
      "Social media platform where users can share interesting posts. Users can sign in with their Gmail Id And create interesting posts and share it. Search User by their name and post tags.",
    tags: [
      {
        name: "NextJs",
        color: "blue-text-gradient",
      },
      {
        name: "Prisma",
        color: "green-text-gradient",
      },
      {
        name: "Tailwind CSS",
        color: "pink-text-gradient",
      },
    ],
    image: promptopia,
    project_link: "https://promptopia-psi-umber.vercel.app/",
    source_code_link: "https://github.com/VivekSite/promptverse",
  },
  {
    name: "Online Shop",
    description:
      "Online Shop is an ecommerce application where you can purchase variety of products. We can search for products add it to cart and place order. We also manage our address and orders.",
    tags: [
      {
        name: "Angular",
        color: "blue-text-gradient",
      },
      {
        name: "Primeng",
        color: "green-text-gradient",
      },
      {
        name: "ExpressJs",
        color: "pink-text-gradient",
      },
      {
        name: "MongoDB",
        color: "blue-text-gradient",
      },
    ],
    image: online_shop,
    project_link: "https://online-shop-ten-ruddy.vercel.app/",
    source_code_link: "https://github.com/VivekSite/online-shop",
  },
  {
    name: "Chat Application",
    description:
      "Developed a Chat application with NextJS. Login with credentials or OAuth and start chatting with anyone who is active. Used Pusher to send the message on realtime.",
    tags: [
      {
        name: "NextJS",
        color: "blue-text-gradient",
      },
      {
        name: "AuthJS",
        color: "green-text-gradient",
      },
      {
        name: "Pusher",
        color: "pink-text-gradient",
      },
      {
        name: "MongoDB",
        color: "blue-text-gradient",
      },
    ],
    image: chat_app,
    project_link: "https://messenger-clone-ten-lovat.vercel.app/",
    source_code_link: "https://github.com/VivekSite/messenger-clone",
  },
  {
    name: "Health Challenge Tracker",
    description:
      "Responsive web application where we can list down our health challenges and track them. We can filter and search the data by name, workout type and workout duration. ",
    tags: [
      {
        name: "Angular",
        color: "blue-text-gradient",
      },
      {
        name: "Primeng",
        color: "green-text-gradient",
      },
      {
        name: "Tailwind CSS",
        color: "pink-text-gradient",
      },
    ],
    image: health_challenge_tracker,
    project_link: "https://health-challenge-tracker-seven.vercel.app/",
    source_code_link: "https://github.com/VivekSite/health-challenge-tracker",
  },
  {
    name: "Password Manager",
    description:
      "A CLI tool to store passwords in encypted form. We can add and get passwords easily. For encryption I used GnuPG which provides a powerful encryption algorithm.",
    tags: [
      {
        name: "Python",
        color: "blue-text-gradient",
      },
      {
        name: "GnuPG",
        color: "green-text-gradient",
      },
      {
        name: "Encryption",
        color: "pink-text-gradient",
      },
    ],
    image: password_manager,
    project_link: password_manager,
    source_code_link: "https://github.com/VivekSite/password_manager",
  },
];

export { services, technologies, experiences, projects };
