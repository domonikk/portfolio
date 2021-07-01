import { nanoid } from 'nanoid';

// HEAD DATA
export const headData = {
  title: 'Domonique Eccleston | Portfolio', // e.g: 'Name | Developer'
  lang: '', // e.g: en, es, fr, jp
  description: '', // e.g: Welcome to my website
};

// HERO DATA
export const heroData = {
  title: '',
  name: 'Domonique Eccleston',
  subtitle: 'Web Developer',
  cta: '',
};

// ABOUT DATA
export const aboutData = {
  img: 'image0.jpeg',
  paragraphOne:
    'I am a Freelance Web Developer who became involved in numerous extra curricular activities where I found my passion for problem solving. I was first exposed to Computer Science at the prestigous St.Andrew High School for Girls where I fell involve with it. I graduated from the Unviersity of the West Indies, Mona with a BSc in Computer Science and I continue to hone my skills in Web Development by working on numerous projects.',
  paragraphTwo: '',
  paragraphThree: '',
  resume: '', // if no resume, the button will not show up
};

// PROJECTS DATA
export const projectsData = [
  {
    id: nanoid(),
    img: 'paper.jpg',
    title: 'Paper Boat',
    info: 'A wordpress e-commerce website which displays the services and products of the company',
    info2: 'as well as allows users to buy products and book services.',
    url: 'https://www.paperboatja.com/',
    repo: '', // if no repo, the button will not show up
  },
  {
    id: nanoid(),
    img: 'chatapp.jpg',
    title: 'Hang Out  ',
    info: 'A react chat app which allows users to send messages and pictures to each other.It utilizes a chat engine which stores the data.',
    info2: '',
    url: 'https://hang-app.netlify.app/',
    repo: 'https://github.com/domonikk/messaging-app', // if no repo, the button will not show up
  },
  {
    id: nanoid(),
    img: '95express.jpg',
    title: '95 Express',
    info: 'A shipping wordpress site which allows users to track their shippments,generates invoices and allows the customers to create their own accounts.',
    info2: '',
    url: 'https://www.95expressja.com/',
    repo: '', // if no repo, the button will not show up
  },
  {
    id: nanoid(),
    img: 'facebookclone.jpg',
    title: 'Facebook Clone',
    info: 'An angular app which replicates the login page and homepage of facebook allowing users to create a status in realtime. It utilizes firebase as the database.',
    info2: '',
    url: '',
    repo: 'https://github.com/domonikk/facebookclone', // if no repo, the button will not show up
  },
];

// CONTACT DATA
export const contactData = {
  cta: '',
  btn: '',
  email: 'domonique.eccleston@gmail.com',
};

// FOOTER DATA
export const footerData = {
  networks: [
    {
      id: nanoid(),
      name: 'linkedin',
      url: 'https://www.linkedin.com/in/domonique-eccleston-733a06192/',
    },
    {
      id: nanoid(),
      name: 'github',
      url: 'https://github.com/domonikk',
    },
  ],
};

// Github start/fork buttons
export const githubButtons = {
  isEnabled: false, // set to false to disable the GitHub stars/fork buttons
};
