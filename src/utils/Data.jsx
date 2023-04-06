import { FaReact, FaNode, FaCss3Alt } from 'react-icons/fa';
import { SiJavascript } from 'react-icons/si';

import Project1 from '../assets/project1.jpg'
import Project2 from '../assets/project2.jpg'
import Project3 from '../assets/project3.jpg'
import Project4 from '../assets/project4.jpg'
import Project5 from '../assets/project5.jpg'
import Project6 from '../assets/project6.jpg'

export const Skills = [
    {
        id: 0,
        tech: 'React JS',
        icon: <FaReact />
    },
    {
        id: 1,
        tech: 'Node JS',
        icon: <FaNode />
    },
    {
        id: 2,
        tech: 'CSS',
        icon: <FaCss3Alt />
    },
    {
        id: 3,
        tech: 'JavaScript',
        icon: <SiJavascript />
    }
];

export const ProjectDetails = [
    {
        id: 5,
        project_name: 'SoundDesign',
        project_desc: 'Fully responsive. Designed in Figma and built using Vite/ReactJS. The blog posts and student testimonials are stored on Sanity.io and retrieved through their API.',
        tech_stack: ['Figma','ReactJS','Sanity.io', 'Vite'],
        project_img: Project1,
        project_url: 'https://kaleidoscopic-taiyaki-5389e7.netlify.app/',
        github: 'https://github.com/Jimbojuicebox/soundfront',
        reverse: false
    },
    {
        id: 4,
        project_name: 'Web3 GoFundMe',
        project_desc: 'Fully responsive. Built using React/Vite with Tailwind styling. Web3 enabled using the ThirdWeb SDK. Solidity contracts are live on Ethereum testnet and functional if you have a MetaMask setup for Goerli.',
        tech_stack: ['ReactJS','ThirdWeb','Tailwind CSS', 'Vite'],
        project_img: Project2,
        project_url: 'https://magical-churros-8a35ee.netlify.app/',
        github: 'https://github.com/Jimbojuicebox/web3-gofundme',
        reverse: true
    },
    {
        id: 3,
        project_name: 'AI Chatbot App',
        project_desc: 'Fully responsive. A typical chat app built in ReactJS using the chatengine.io SDK. Hooked up to the OpenAI API to allow chatGPT3.5 level of conversation. Login using the demo details and chat with AiBotSteve!',
        tech_stack: ['ReactJS','ChatEngine.io','OpenAI'],
        project_img: Project3,
        project_url: 'https://meek-belekoy-4db97f.netlify.app/',
        github: 'https://github.com/Jimbojuicebox/ai-chat',
        reverse: false
    },
    {
        id: 2,
        project_name: 'Degen Clothing Store',
        project_desc: 'A desktop web store made in ReactJS with Styled-Components. User login and authentication handled by Google Firebase and product database on Google FireStore. Cart management through Redux.',
        tech_stack: ['ReactJS','Redux','Styled Components','Firebase'],
        project_img: Project4,
        project_url: 'https://keen-jelly-fefc2a.netlify.app/',
        github: 'https://github.com/Jimbojuicebox?tab=repositories',
        reverse: true
    },
    {
        id: 1,
        project_name: 'Task Tracker',
        project_desc: 'Fully responsive. A smart looking task manager built in ReactJS using local storage for persistant lists on each device.',
        tech_stack: ['ReactJS','Vite','CSS Modules'],
        project_img: Project6,
        project_url: 'https://incomparable-cupcake-c278c0.netlify.app/',
        github: 'https://github.com/Jimbojuicebox/task-app',
        reverse: false
    },
    /* {
        id: 0,
        project_name: 'DevilFi dapp',
        project_desc: 'A re-design of a Web3 dapp for a cleaner interface with api to fetch price data.',
        tech_stack: ['HTML5','CSS'],
        project_img: Project5,
        project_url: 'https://starlit-cactus-a682b1.netlify.app/',
        github: 'https://github.com/Jimbojuicebox?tab=repositories',
        reverse: true
    }, */
];

export const NavLinks = [
    {
        id: 0,
        name: 'Home',
        href: 'Home'
    },
    {
        id: 1,
        name: 'My Skills',
        href: 'Skills'
    },
    {
        id: 2,
        name: 'My Projects',
        href: 'Projects'
    },
    {
        id: 3,
        name: 'Contact Me',
        href: 'Contact'
    },
];