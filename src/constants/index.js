export const navLinks = [
    {
        id: 1,
        name: 'Home',
        href: '#Home',
        position: [0.27, 1.529, -2.613],
        rotation: [0, 0, 0],
    },
    {
        id: 2,
        name: 'About',
        href: '#About',
        position: [-1.43, 2.496, -1.8],
        rotation: [0, 1.002, 0],
    },
    {
        id: 3,
        name: 'Work',
        href: '#Work',
        position: [-2.731, 0.629, -0.522],
        rotation: [0, 1.087, 0],
    },
    {
        id: 4,
        name: 'Contact',
        href: '#Contact',
        position: [3.11, 2.145, -0.18],
        rotation: [0, -0.793, 0],
    },
];

//NOTE - Exemple
export const clientReviews = [
    {
        id: 1,
        name: 'Emily Johnson',
        position: 'Marketing Director at GreenLeaf',
        img: 'assets/review1.png',
        review:
            'Working with Adrian was a fantastic experience. He transformed our outdated website into a modern, user-friendly platform. His attention to detail and commitment to quality are unmatched. Highly recommend him for any web dev projects.',
    },
];

export const myProjects = [
    {
        title: 'Apollo',
        desc: 'Apollo is a scripting language designed to be as easy to use as Bash while offering a clearer and more accessible syntax.',
        subdesc:
            'Apollo is an imperative, statically typed language with mutable variables. It was proposed as part of a project at Epitech in collaboration with three other students.',
        href: 'https://github.com/iddeko/Apollo/tree/main',
        texture: '/textures/project/project1.mp4',
        logo: '/assets/apollo.png',
        logoStyle: {
            backgroundColor: '#2A2A16',
            border: '0.2px solid #32361D',
            boxShadow: '0px 0px 60px 0px #AAA2304D',
        },
        spotlight: '/assets/spotlight1.png',
        tags: [
            {
                id: 1,
                name: 'Haskell',
                path: '/assets/haskell.svg',
            },
        ],
    },
    {
        title: 'Wormhole',
        desc: 'Wormhole is a data decentralisation solution. It aims to create one single virtual stockage space between many computers. You can think if it as the Kubernetes of storage space.',
        subdesc:
            'Inspired by great declarative software of modern times like docker, we are aming to provide users with a very flexible solution, allowing all kinds of usages while staying declarative, simple and shareable.',
        href: 'https://github.com/Agartha-Software/Wormhole',
        texture: '/textures/project/project2.mp4',
        logo: '/assets/project-logo2.png',
        logoStyle: {
            backgroundColor: '#13202F',
            border: '0.2px solid #17293E',
            boxShadow: '0px 0px 60px 0px #2F6DB54D',
        },
        spotlight: '/assets/spotlight2.png',
        tags: [
            {
                id: 1,
                name: 'Rust',
                path: '/assets/rust.svg',
            },
        ],
    },
];

export const calculateSizes = (isSmall, isMobile, isTablet) => {
    return {
        deskScale: isSmall ? 0.8 : isMobile ? 1 : 1.5,
        deskPosition: isMobile ? [0.5, -4.5, 0] : [0.25, -3.5, 0],
        cubePosition: isSmall ? [4, -5, 0] : isMobile ? [5, -5, 0] : isTablet ? [5, -5, 0] : [9, -5.5, 0],
        reactLogoPosition: isSmall ? [3, 4, 0] : isMobile ? [5, 4, 0] : isTablet ? [5, 4, 0] : [12, 3, 0],
        ringPosition: isSmall ? [-5, 7, 0] : isMobile ? [-10, 10, 0] : isTablet ? [-12, 10, 0] : [-24, 10, 0],
        targetPosition: isSmall ? [-5, -10, -10] : isMobile ? [-9, -10, -10] : isTablet ? [-11, -7, -10] : [-13, -13, -10],
    };
};

export const workExperiences = [
    {
        id: 1,
        name: 'Framer',
        pos: 'Lead Web Developer',
        duration: '2022 - Present',
        title: "Framer serves as my go-to tool for creating interactive prototypes. I use it to bring designs to  life, allowing stakeholders to experience the user flow and interactions before development.",
        icon: '/assets/framer.svg',
        animation: 'victory',
    },
    {
        id: 2,
        name: 'Figma',
        pos: 'Web Developer',
        duration: '2020 - 2022',
        title: "Figma is my collaborative design platform of choice. I utilize it to work seamlessly with team members and clients, facilitating real-time feedback and design iterations. Its cloud-based.",
        icon: '/assets/figma.svg',
        animation: 'clapping',
    },
    {
        id: 3,
        name: 'Notion',
        pos: 'Junior Web Developer',
        duration: '2019 - 2020',
        title: "Notion helps me keep my projects organized. I use it for project management, task tracking, and as a central hub for documentation, ensuring that everything from design notes to.",
        icon: '/assets/notion.svg',
        animation: 'salute',
    },
];