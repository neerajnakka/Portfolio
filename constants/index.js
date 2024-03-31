import qrispyImage from '../src/assets/projects/qrispy.png';
import kreativesImage from '../src/assets/projects/kreatives.png';

export const HERO_CONTENT = `As a passionate full-stack developer, I thrive on crafting robust and scalable web applications. With a solid foundation in both front-end and back-end technologies, including React, Next.js, Node.js, Express, MySQL, and MongoDB, I am dedicated to creating innovative solutions that drive business growth and deliver exceptional user experiences.`;

export const ABOUT_TEXT = `I am Neeraj Chandra Nakka, a recent Computer Science graduate from CVR College of Engineering in Hyderabad, India. My journey in web development began with a deep curiosity for how things work, and it has evolved into a career where I continuously strive to learn and adapt to new challenges. When I'm not coding, you can find me immersed in novels, listening to music, or indulging in my passion for gardening. I believe in the power of collaboration and enjoy solving complex problems to deliver high-quality solutions.`;

// export const EXPERIENCES = [
//   {
//     year: '2023 - Present',
//     role: 'Senior Full Stack Developer',
//     company: 'Google Inc.',
//     description: `Led a team in developing and maintaining web applications using JavaScript, React.js, and Node.js. Implemented RESTful APIs and integrated with MongoDB databases. Collaborated with stakeholders to define project requirements and timelines.`,
//     technologies: ['Javascript', 'React.js', 'Next.js', 'mongoDB'],
//   },
//   {
//     year: '2022 - 2023',
//     role: 'Frontend Developer',
//     company: 'Adobe',
//     description: `Designed and developed user interfaces for web applications using Next.js and React. Worked closely with backend developers to integrate frontend components with Node.js APIs. Implemented responsive designs and optimized frontend performance.`,
//     technologies: ['HTML', 'CSS', 'Vue.js', 'mySQL'],
//   },
//   {
//     year: '2021 - 2022',
//     role: 'Full Stack Developer',
//     company: 'Facebook',
//     description: `Developed and maintained web applications using JavaScript, React.js, and Node.js. Designed and implemented RESTful APIs for data communication. Collaborated with cross-functional teams to deliver high-quality software products on schedule.`,
//     technologies: ['Python', 'Svelte', 'Three.js', 'Postgres'],
//   },
//   {
//     year: '2020 - 2021',
//     role: 'Software Engineer',
//     company: 'Paypal',
//     description: `Contributed to the development of web applications using JavaScript, React.js, and Node.js. Managed databases and implemented data storage solutions using MongoDB. Worked closely with product managers to prioritize features and enhancements.`,
//     technologies: ['Ruby', 'Rails', 'PHP', 'Sqlite'],
//   },
// ];

export const PROJECTS = [
  {
    title: 'Qrispy: Responsive Restaurant Website',
    image: qrispyImage,
    description:
      'Developed qrispy using HTML, CSS, JavaScript, and Bootstrap, with sections for Home, About, Menu, Features, Team, Reservation, and Blog, alongside a dynamic menu featuring ratings and enticing descriptions. Backend with Node.js and REST API: Utilized Node.js for backend development and REST API handling to facilitate seamless communication between frontend and backend, ensuring efficient data retrieval and manipulation. MongoDB Integration: Integrated MongoDB for data management, storing menu items, user reservations, blog posts, and client testimonials, leveraging its document-based structure for efficient data storage and retrieval.',
    technologies: [
      'HTML',
      'CSS',
      'JavaScript',
      'Bootstrap',
      'React',
      'Node.js',
      'MongoDB',
    ],
  },
  {
    title: 'Kreatives: Website Builder Site',
    image: kreativesImage,
    description:
      'Created a responsive landing page using HTML, CSS, and Bootstrap. Integrated smooth scrolling navigation and collapsible mobile menu. Designed engaging sections for services, features, projects, pricing, and team. Utilized CSS animations and Bootstrap components for user interaction. Ensured cross-browser compatibility and best web development practices.',
    technologies: ['HTML', 'CSS', 'Bootstrap'],
  },
];

export const CONTACT = {
  address: 'Hyderabad, India - 500039 ',
  phoneNo: '+91 9000600559 ',
  email: 'neerajnakka.n@gmail.com',
};
