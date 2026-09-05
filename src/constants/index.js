import { baseUrl } from '../config';
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
// export const clientReviews = [
//     {
//         id: 1,
//         name: 'Emily Johnson',
//         position: 'Marketing Director at GreenLeaf',
//         img: '/assets/review1.png',
//         review:
//             'Working with Adrian was a fantastic experience. He transformed our outdated website into a modern, user-friendly platform. His attention to detail and commitment to quality are unmatched. Highly recommend him for any web dev projects.',
//     },
// ];

export const myProjects = [
    {
        title: 'BOT - BlOcking Toolkit',
        desc: 'BOT is a Python research sandbox for developing and testing interactive quad and hex mesh blocking algorithms, with a focus on programmatic and potentially AI-driven workflows.',
        subdesc: 'BOT is an open source project created to help the prototyping of CEA doctoral students during their theses directly or indirectly linked to curved meshes.',
        href: 'https://github.com/LIHPC-Computational-Geometry/bot',
        logo: `${baseUrl}assets/projects/LIHPC.png`,
        logoStyle: {
            backgroundColor: '#543b57',
            border: '0.2px solid #2214a6',
            boxShadow: '0px 0px 60px 0px #AAA2304D',
        },
        spotlight: `${baseUrl}assets/spotlight/spotlight1.png`,
        tags: [
            {
                id: 1,
                name: 'Python',
                path: `${baseUrl}assets/languages/python.svg`,
            },
        ],
    },
    {
        title: 'FerriSpline',
        desc: 'High-performance library for creating, evaluating, and manipulating NURBS and Bézier curves. A pure Rust computational core (core_rust) provides memory-safe geometry algorithms; a Python extension (ferrispline) exposes them through PyO3 and Maturin.',
        subdesc: 'FerriSpline is an open source project, use in the BOT project. It is possible to use it into another project than BOT.',
        href: 'https://github.com/LIHPC-Computational-Geometry/ferrispline',
        logo: `${baseUrl}assets/projects/LIHPC.png`,
        logoStyle: {
            backgroundColor: '#543b57',
            border: '0.2px solid #2214a6',
            boxShadow: '0px 0px 60px 0px #AAA2304D',
        },
        spotlight: `${baseUrl}assets/spotlight/spotlight1.png`,
        tags: [
            {
                id: 1,
                name: 'Rust',
                path: `${baseUrl}assets/languages/rust.svg`,
            },
        ],

    },
    {
        title: 'Apollo',
        desc: 'Apollo is a scripting language designed to be as easy to use as Bash while offering a clearer and more accessible syntax.',
        subdesc:
            'Apollo is an imperative, statically typed language with mutable variables. It was proposed as part of a project at Epitech in collaboration with three other students.',
        href: 'https://github.com/iddeko/Apollo/tree/main',
        // texture: '/textures/project/project1.mp4',
        logo: `${baseUrl}assets/projects/apollo.png`,
        logoStyle: {
            backgroundColor: '#2A2A16',
            border: '0.2px solid #32361D',
            boxShadow: '0px 0px 60px 0px #AAA2304D',
        },
        spotlight: `${baseUrl}assets/spotlight/spotlight1.png`,
        tags: [
            {
                id: 1,
                name: 'Haskell',
                path: `${baseUrl}assets/languages/haskell.svg`,
            },
        ],
    },
    {
        title: 'Wormhole',
        desc: 'Wormhole is a data decentralisation solution. It aims to create one single virtual stockage space between many computers. You can think if it as the Kubernetes of storage space.',
        subdesc:
            'Inspired by great declarative software of modern times like docker, we are aming to provide users with a very flexible solution, allowing all kinds of usages while staying declarative, simple and shareable.',
        href: 'https://github.com/Agartha-Software/Wormhole',
        // texture: '/textures/project/project2.mp4',
        logo: `${baseUrl}assets/projects/wormhole.png`,
        logoStyle: {
            backgroundColor: '#13202F',
            border: '0.2px solid #17293E',
            boxShadow: '0px 0px 60px 0px #2F6DB54D',
        },
        spotlight: `${baseUrl}assets/spotlight/spotlight2.png`,
        tags: [
            {
                id: 1,
                name: 'Rust',
                path: `${baseUrl}assets/languages/rust.svg`,
            },
        ],
    },
];

export const calculateSizes = (isSmall, isMobile, isTablet) => {
    return {
        deskScale: isSmall ? 0.8 : isMobile ? 1 : isTablet ? 1.2 : 1.5,
        deskPosition: isMobile ? [0.5, -4.5, 0] : isTablet ? [0.35, -4, 0] : [0.25, -3.5, 0],
        cubePosition: isSmall ? [4, -5, 0] : isMobile ? [5, -5, 0] : isTablet ? [5, -5, 0] : [9, -5.5, 0],
        reactLogoPosition: isSmall ? [3, 4, 0] : isMobile ? [5, 4, 0] : isTablet ? [5, 4, 0] : [12, 3, 0],
        ringPosition: isSmall ? [-5, 7, 0] : isMobile ? [-10, 10, 0] : isTablet ? [-12, 10, 0] : [-24, 10, 0],
        targetPosition: isSmall ? [-5, -10, -10] : isMobile ? [-9, -10, -10] : isTablet ? [-11, -7, -10] : [-13, -13, -10],
    };
};
export const workExperiences = [
    {
        id: 6,
        name: 'KEPLER HR (WeCare@Work)',
        pos: 'Fullstack Developer',
        duration: 'July 2022 - December 2022',
        title: "Developed a Bash script for automated file processing and carried out a comprehensive backend refactoring of the web application.",
        icon: `${baseUrl}assets/compagny/wecareatwork.png`,
    },
    {
        id: 5,
        name: 'BPCE-IT',
        pos: 'Technological Transition Developer',
        duration: 'February 2024 - June 2024',
        title: "Incubation of internal projects supporting technological transition, including the development of an intelligent organizational chart and an event website.",
        icon: `${baseUrl}assets/compagny/bpce.png`,
    },
    {
        id: 4,
        name: 'Solteo',
        pos: 'Freelance Web Developer',
        duration: 'July 2024 - November 2024',
        title: "Creation of a visualization tool for rooftop solar panels (in collaboration with other freelancers).",
        icon: `${baseUrl}assets/compagny/solteo.svg`,
    },
    {
        id: 3,
        name: 'Kepler HR (WeCare@Work)',
        pos: 'Freelance Web Developer',
        duration: '2024 - 2026',
        title: "Content integration on the Alex platform (WeCare@Work).",
        icon: `${baseUrl}assets/compagny/wecareatwork.png`,
    },
    {
        id: 2,
        name: 'KEPLER HR (WeCare@Work)',
        pos: 'Fullstack Developer',
        duration: 'September 2025 - February 2026',
        title: "Designed a monorepo architecture (Next.js, TypeScript, GraphQL, Prisma) to migrate a legacy PHP/MVC monolith toward a modular system. Implemented a reverse proxy to ensure service continuity between legacy and new modules.",
        icon: `${baseUrl}assets/compagny/wecareatwork.png`,
    },
    {
        id: 1,
        name: 'CEA',
        pos: 'R&D Software Engineer',
        duration: 'March 2026 - August 2026',
        title: "Developed a parametric curve modeling engine in Rust featuring state management and indexed geometry storage (FerriSpline). Built a Python API and created an interactive Python modeling environment (BOT).",
        icon: `${baseUrl}assets/compagny/cea.svg`,
    },
];

