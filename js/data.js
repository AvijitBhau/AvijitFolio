window.portfolioData = {
  developer: {
    name: { first: 'Alex', last: 'Rivera' },
    tagline: 'Building elegant experiences for the modern web',
    roles: ['Frontend Developer', 'UI/UX Enthusiast', 'Open Source Contributor', 'Problem Solver', 'Web Craftsman'],
    bio: [
      'I am a final-year Computer Science student at Stanford University passionate about crafting web experiences that are both beautiful and functional.',
      'My journey into development began at age 16 when I built my first website for a local community center. Since then, I have been continuously learning — from vanilla HTML/CSS/JS to modern tooling, backend integrations, and design systems.',
      'I care deeply about the intersection of design and engineering. I believe great software is not just about what it does, but how it feels to use.'
    ],
    currentFocus: 'Building full-stack web applications and contributing to open source projects while pursuing my final year at Stanford.',
    goals: 'Seeking frontend engineering or full-stack roles where I can contribute to products used by real people and grow alongside a strong team.',
    location: 'San Francisco, CA',
    email: 'alex.rivera@email.com',
    university: 'Stanford University',
    degree: 'B.S. Computer Science',
    period: '2022 – 2026',
    yearsExperience: 4,
    projectsBuilt: 20,
    technologiesUsed: 12,
    interests: ['Open Source', 'UI/UX Design', 'System Design', 'Dev Tooling', 'Photography']
  },
  social: [
    { name: 'LinkedIn', url: '#', icon: 'linkedin', professional: true },
    { name: 'GitHub', url: '#', icon: 'github', professional: true },
    { name: 'ORCID', url: '#', icon: 'orcid', professional: true },
    { name: 'YouTube', url: '#', icon: 'youtube', professional: false },
    { name: 'X (Twitter)', url: '#', icon: 'twitter', professional: false },
    { name: 'Instagram', url: '#', icon: 'instagram', professional: false },
    { name: 'Facebook', url: '#', icon: 'facebook', professional: false }
  ],
  skills: [
    {
      category: 'Frontend',
      icon: 'monitor',
      items: [
        { name: 'HTML', icon: 'html5' },
        { name: 'CSS', icon: 'css3' },
        { name: 'JavaScript', icon: 'javascript' }
      ]
    },
    {
      category: 'Programming Languages',
      icon: 'code',
      items: [
        { name: 'Java', icon: 'java' },
        { name: 'Python', icon: 'python' },
        { name: 'C', icon: 'c' }
      ]
    },
    {
      category: 'Database',
      icon: 'database',
      items: [
        { name: 'MySQL', icon: 'mysql' }
      ]
    },
    {
      category: 'Dev & Version Control',
      icon: 'git-branch',
      items: [
        { name: 'Git', icon: 'git' },
        { name: 'GitHub', icon: 'github' }
      ]
    }
  ],
  projects: {
    featured: [
      {
        id: 'devboard',
        number: '01',
        label: 'Featured Project',
        title: 'DevBoard',
        description: 'A real-time developer analytics dashboard that integrates with the GitHub API to visualize contribution graphs, repository stats, pull request activity, and code frequency — all in a beautifully dark, responsive interface.',
        image: 'assets/images/project-devboard.jpg',
        stack: ['HTML', 'CSS', 'JavaScript', 'GitHub API', 'Chart.js'],
        github: '#',
        demo: '#',
        reverse: false
      },
      {
        id: 'shopflow',
        number: '02',
        label: 'Featured Project',
        title: 'ShopFlow',
        description: 'A full-featured e-commerce web application with product browsing, cart management, user authentication, and a MySQL-backed inventory system. Built with a clean vanilla JS frontend and a Java servlet backend.',
        image: 'assets/images/project-shopflow.jpg',
        stack: ['HTML', 'CSS', 'JavaScript', 'Java', 'MySQL'],
        github: '#',
        demo: null,
        reverse: true
      },
      {
        id: 'datalens',
        number: '03',
        label: 'Featured Project',
        title: 'DataLens',
        description: 'An interactive data visualization platform built with Python and Flask, enabling users to upload CSV datasets and generate beautiful, interactive charts and statistical summaries powered by Matplotlib and D3.js.',
        image: 'assets/images/project-datalens.jpg',
        stack: ['Python', 'Flask', 'D3.js', 'MySQL', 'CSS'],
        github: '#',
        demo: '#',
        reverse: false
      }
    ],
    other: [
      {
        id: 'portfolio',
        title: 'Portfolio Website',
        description: 'This very portfolio — designed and built from scratch with vanilla HTML, CSS, and JavaScript. Fully responsive, accessible, and optimized.',
        stack: ['HTML', 'CSS', 'JavaScript'],
        github: '#',
        demo: '#'
      },
      {
        id: 'weatherapp',
        title: 'WeatherNow',
        description: 'A clean weather web app using the OpenWeatherMap API to display current conditions and a 7-day forecast with smooth animations and geolocation support.',
        stack: ['JavaScript', 'HTML', 'CSS', 'OpenWeather API'],
        github: '#',
        demo: '#'
      },
      {
        id: 'taskmanager',
        title: 'TaskFlow',
        description: 'A productivity-focused task manager with drag-and-drop boards, local storage persistence, priority labels, and a clean minimal UI.',
        stack: ['HTML', 'CSS', 'JavaScript'],
        github: '#',
        demo: null
      }
    ]
  },
  certifications: [
    {
      id: 'cert1',
      name: 'Google UX Design Professional Certificate',
      issuer: 'Google / Coursera',
      date: 'March 2024',
      image: null,
      credentialId: 'GUXD-2024-AR-9821',
      verifyUrl: '#',
      credlyUrl: '#',
      verified: true
    },
    {
      id: 'cert2',
      name: 'Meta Front-End Developer Professional Certificate',
      issuer: 'Meta / Coursera',
      date: 'January 2024',
      image: null,
      credentialId: 'META-FED-2024-AR-4412',
      verifyUrl: '#',
      credlyUrl: '#',
      verified: true
    },
    {
      id: 'cert3',
      name: 'JavaScript Algorithms and Data Structures',
      issuer: 'freeCodeCamp',
      date: 'October 2023',
      image: null,
      credentialId: 'FCC-JSADS-AR',
      verifyUrl: '#',
      credlyUrl: null,
      verified: true
    },
    {
      id: 'cert4',
      name: 'Python for Everybody Specialization',
      issuer: 'University of Michigan / Coursera',
      date: 'July 2023',
      image: null,
      credentialId: 'UMICH-PY4E-AR-7751',
      verifyUrl: '#',
      credlyUrl: '#',
      verified: true
    }
  ],
  achievements: [
    {
      id: 'ach1',
      category: 'hackathon',
      categoryLabel: 'Hackathons',
      title: '2nd Place — HackX 2024',
      organization: 'Stanford Computer Science Department',
      date: 'April 2024',
      description: 'Developed a real-time accessibility checker Chrome extension with a team of 3 in under 24 hours. Judged on innovation, technical execution, and real-world impact.',
      result: '2nd Place out of 48 teams',
      verified: true,
      verifyUrl: '#',
      image: null
    },
    {
      id: 'ach2',
      category: 'award',
      categoryLabel: 'Awards',
      title: 'Best UI Design Award — CodeFest 2023',
      organization: 'Bay Area Developer Community',
      date: 'November 2023',
      description: 'Recognized for delivering the most polished and accessible user interface at the annual CodeFest design challenge, competing against over 80 participants.',
      result: 'Best UI Design',
      verified: true,
      verifyUrl: '#',
      image: null
    },
    {
      id: 'ach3',
      category: 'workshop',
      categoryLabel: 'Workshops',
      title: 'Advanced React Patterns Workshop',
      organization: 'React Summit 2024',
      date: 'June 2024',
      description: 'Intensive 2-day workshop covering compound components, render props, custom hooks, and performance optimization strategies in React.',
      result: null,
      verified: false,
      verifyUrl: null,
      image: null
    },
    {
      id: 'ach4',
      category: 'workshop',
      categoryLabel: 'Workshops',
      title: 'Web Accessibility (a11y) Bootcamp',
      organization: 'Google Developer Groups — SF',
      date: 'February 2024',
      description: 'Full-day hands-on bootcamp focused on WCAG 2.1 guidelines, screen reader testing, ARIA roles, and building accessible design systems.',
      result: null,
      verified: true,
      verifyUrl: '#',
      image: null
    },
    {
      id: 'ach5',
      category: 'seminar',
      categoryLabel: 'Seminars',
      title: 'The Future of the Web Platform',
      organization: 'Google I/O Extended 2024 — San Francisco',
      date: 'May 2024',
      description: 'Attended keynote sessions and technical seminars on WebAssembly, CSS Houdini, and the evolving browser rendering pipeline.',
      result: null,
      verified: false,
      verifyUrl: null,
      image: null
    },
    {
      id: 'ach6',
      category: 'participation',
      categoryLabel: 'Participation',
      title: 'Google Developer Student Club — Active Member',
      organization: 'GDSC Stanford Chapter',
      date: '2022 – Present',
      description: 'Active participant in weekly technical talks, study jams, and build sessions. Contributed to two community web projects as a frontend volunteer.',
      result: null,
      verified: false,
      verifyUrl: null,
      image: null
    }
  ],
  testimonials: [
    {
      id: 'test1',
      name: 'Dr. Sarah Chen',
      role: 'Associate Professor, Computer Science',
      organization: 'Stanford University',
      photo: 'assets/images/avatar-sarah.jpg',
      relation: 'Academic Advisor & Instructor',
      text: 'Alex is one of the most technically curious students I have worked with in my ten years of teaching. He does not just complete assignments — he thinks deeply about design decisions and often raises questions that push the entire class forward. His final-year project demonstrated genuine engineering maturity.',
      source: 'LinkedIn',
      sourceUrl: '#'
    },
    {
      id: 'test2',
      name: 'Mark Johnson',
      role: 'Senior Software Engineer',
      organization: 'Stripe',
      photo: 'assets/images/avatar-mark.jpg',
      relation: 'Mentor during internship',
      text: 'I mentored Alex during his summer internship and was consistently impressed by his speed of learning and the quality of his UI work. He shipped polished, accessible components that went directly into our design system. Rare to see that level of craft and attention to detail from an intern.',
      source: 'LinkedIn',
      sourceUrl: '#'
    },
    {
      id: 'test3',
      name: 'Priya Patel',
      role: 'Full Stack Developer',
      organization: 'Freelance / Open Source',
      photo: 'assets/images/avatar-priya.jpg',
      relation: 'Hackathon teammate',
      text: 'Alex and I collaborated on two hackathon projects and he is the kind of teammate every developer wants — calm under pressure, extremely fast at translating designs to pixel-perfect code, and genuinely collaborative. We placed in both events, and his frontend work was a huge reason why.',
      source: 'LinkedIn',
      sourceUrl: '#'
    }
  ],
  gallery: [
    { id: 'g1', src: 'assets/images/gallery-hackathon.jpg', caption: 'HackX 2024 — Team celebration after final presentation', category: 'Hackathon' },
    { id: 'g2', src: 'assets/images/gallery-workspace.jpg', caption: 'My development setup — where the magic happens', category: 'Workspace' },
    { id: 'g3', src: 'assets/images/gallery-seminar.jpg', caption: 'Presenting at Google I/O Extended SF 2024', category: 'Seminar' },
    { id: 'g4', src: 'assets/images/gallery-campus.jpg', caption: 'Stanford campus — home for four incredible years', category: 'University' },
    { id: 'g5', src: 'assets/images/gallery-hackathon.jpg', caption: 'CodeFest 2023 — Best UI Design award ceremony', category: 'Award' },
    { id: 'g6', src: 'assets/images/gallery-workspace.jpg', caption: 'Late night debugging session before the deadline', category: 'Workspace' },
    { id: 'g7', src: 'assets/images/gallery-seminar.jpg', caption: 'React Summit Workshop — Day 2', category: 'Workshop' },
    { id: 'g8', src: 'assets/images/gallery-campus.jpg', caption: 'GDSC Stanford — Community build session', category: 'Community' }
  ],
  resume: {
    viewUrl: '#',
    downloadUrl: '#',
    highlights: [
      { number: '4+', label: 'Years of Experience' },
      { number: '20+', label: 'Projects Completed' },
      { number: '4', label: 'Certifications' }
    ]
  }
};
