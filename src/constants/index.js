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
  meta,
  starbucks,
  tesla,
  shopify,
  carrent,
  jobit,
  tripguide,
  threejs,
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
    id: "contact",
    title: "Contact",
  },
];

const services = [
  {
    title: "Web Developer",
    icon: web,
  },
  {
    title: "Front-End Developer",
    icon: mobile,
  },
  {
    title: "Three.JS Developer",
    icon: backend,
  },
  {
    title: "React.js Developer",
    icon: creator,
  },
];

const technologies = [
  {
    name: "HTML 5",
    icon: html,
  },
  {
    name: "CSS 3",
    icon: css,
  },
  {
    name: "JavaScript",
    icon: javascript,
  },
  // {
  //   name: "TypeScript",
  //   icon: typescript,
  // },
  {
    name: "React JS",
    icon: reactjs,
  },
  {
    name: "Redux Toolkit",
    icon: redux,
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
    name: "MongoDB",
    icon: mongodb,
  },
  {
    name: "Three JS",
    icon: threejs,
  },
  {
    name: "git",
    icon: git,
  },
  {
    name: "figma",
    icon: figma,
  },
  // {
  //   name: "docker",
  //   icon: docker,
  // },
];

const experiences = [
  {
    title: "React.js Trainee",
    company_name: "Solitaire Infosys",
    icon: starbucks,
    iconBg: "#383E56",
    date: "July 2023 - July 2023",
    points: [
      "Developing and maintaining web applications using React.js and other related technologies.",
      "Learning tech stack like HTML, CSS, JavaScript with React.js and Tailwind CSS framework. Worked on React.js projects with a dynamic team of four people.", 
      "Used tools like Git & Github for version control and netlify to host the project.",
    ],
  },
  {
    title: "Frontend Development Libraries",
    company_name: "FreeCodeCamp",
    icon: tesla,
    iconBg: "#E6DEDD",
    date: "July 2024",
    points: [
      "Learn how to use Bootstrap to create responsive layouts and components that adapt to different screen sizes, enhancing user experience across devices.",
      "The course introduces you to React basics, like components and state management. Once you grasp these concepts, you'll be able to build interactive and dynamic user interfaces with ease",
      "Discover how to utilize Sass (Syntactically Awesome Style Sheets) for advanced styling techniques, including variables, nesting, and mixins, which streamline CSS development.",
    ],
  },
  {
    title: "Cloud Practioner",
    company_name: "AWS",
    icon: shopify,
    iconBg: "#383E56",
    date: "August 2024",
    points: [
      "Understanding the core concepts of cloud computing, including the benefits of cloud services, deployment models (public, private, hybrid), and key terminology relevant to AWS.",
      "Familiarity with essential AWS services such as Amazon EC2 (compute), Amazon S3 (storage), Amazon RDS (database), and AWS Lambda (serverless computing) along with their use cases and pricing models.",
      "Awareness of AWS security features like IAM (Identity and Access Management), shared responsibility model, compliance certifications, and best practices for securing applications in the cloud",
    ],
  },
  {
    title: "Front-end Development",
    company_name: "Meta",
    icon: meta,
    iconBg: "#E6DEDD",
    date: "January 2023",
    points: [
      "Mastery of essential web technologies including HTML, CSS, and JavaScript, which form the backbone of front-end development and enable the creation of responsive and interactive user interfaces.",
      "Proficiency in using React to build dynamic single-page applications (SPAs), including understanding components, state management, props, hooks, and the component lifecycle.",
      "Understanding the principles of user experience design that influence front-end development decisions. This encompasses usability best practices, accessibility considerations (a11y), and designing intuitive interfaces for end users",
    ],
  },
];

const testimonials = [
  {
    testimonial:
      "Currently persuing Bachelor's of Technology in Computer Science and Engineering from Chandigarh Group of Colleges, Landran.",
    name: "8.1 CGPA",
    designation: "2022-",
    company: "Current",
    image: "https://pbs.twimg.com/profile_images/1691690431787188224/niHZoByK_400x400.jpg",
  },
  {
    testimonial:
      "Diploma in Electrical Engineering from Dayalbagh Educational Institute, Agra.",
    name: "8.6 CGPA",
    designation: "2019-",
    company: "2022",
    image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQTMMuJcymxCix33ek5a4MBg9xfA-4CQrCh7g&s",
  },
  // {
  //   testimonial:
  //     "After Rick optimized our website, our traffic increased by 50%. We can't thank them enough!",
  //   name: "Lisa Wang",
  //   designation: "CTO",
  //   company: "456 Enterprises",
  //   image: "https://randomuser.me/api/portraits/women/6.jpg",
  // },
];

const projects = [
  {
    name: "React Admin Dashboard",
    description:
      "It is a web app for managing data with an intuitive interface. Key features include responsive design, reusable UI components and data visualization (e.g., Chart.js). It streamlines access to critical information for administrators.",
    tags: [
      {
        name: "react",
        color: "blue-text-gradient",
      },
      {
        name: "syncfusion",
        color: "green-text-gradient",
      },
      {
        name: "tailwind",
        color: "pink-text-gradient",
      },
    ],
    image: carrent,
    source_code_link: "https://github.com/",
  },
  {
    name: "E-Commerce",
    description:
      "An e-commerce website project enables online buying and selling of products. Key features include a user-friendly interface, product catalog, shopping cart, secure payment processing, and order management.",
    tags: [
      {
        name: "react",
        color: "blue-text-gradient",
      },
      {
        name: "restapi",
        color: "green-text-gradient",
      },
      {
        name: "tailwind",
        color: "pink-text-gradient",
      },
    ],
    image: jobit,
    source_code_link: "https://github.com/",
  },
  // {
  //   name: "Trip Guide",
  //   description:
  //     "A comprehensive travel booking platform that allows users to book flights, hotels, and rental cars, and offers curated recommendations for popular destinations.",
  //   tags: [
  //     {
  //       name: "nextjs",
  //       color: "blue-text-gradient",
  //     },
  //     {
  //       name: "supabase",
  //       color: "green-text-gradient",
  //     },
  //     {
  //       name: "css",
  //       color: "pink-text-gradient",
  //     },
  //   ],
  //   image: tripguide,
  //   source_code_link: "https://github.com/",
  // },
];

export { services, technologies, experiences, testimonials, projects };
