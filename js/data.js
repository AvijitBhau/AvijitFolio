window.portfolioData = {
  developer: {
    name: { first: 'Avijit', last: 'Agarwal' },
    tagline: 'Frontend by focus. Engineer by ambition.',
    roles: ['Frontend Developer', 'Web Developer', 'Aspiring Full-Stack Engineer', 'AI & Web Enthusiast'],
    bio: [
      'I\'m Avijit Agarwal, a BCA student at the University of Allahabad with a strong interest in web development and software engineering.',
      'I enjoy turning ideas into functional, thoughtful interfaces while continuously exploring the technologies behind them.',
      'Currently focused on strengthening my frontend skills, building real-world projects, and gradually expanding toward full-stack development and AI-powered applications.'
    ],
    currentFocus: 'Currently exploring → Frontend Development · JavaScript · AI-powered applications',
    goals: 'Long term, I want to combine full-stack engineering with AI to build products that are not only technically capable, but genuinely useful to people.',
    location: 'Uttar Pradesh, India',
    email: 'avijitxdev@gmail.com',
    university: 'University of Allahabad',
    degree: 'Bachelor of Computer Applications (BCA)',
    period: '2025 – 2028',
    yearsExperience: 1,
    projectsBuilt: 10,
    technologiesUsed: 12,
    interests: ['Full-Stack Engineering', 'UI/UX Design', 'Open Source', 'Artificial Intelligence', 'Hackathons & Workshops']
  },
  social: [
    { name: 'LinkedIn', url: 'https://www.linkedin.com/in/avijit-agarwal-a2063b374/', icon: 'linkedin', professional: true },
    { name: 'GitHub', url: 'https://github.com/AvijitBhau', icon: 'github', professional: true },
    { name: 'Email', url: 'mailto:avijitxdev@gmail.com', icon: 'email', professional: true },
    { name: 'ORCID', url: 'https://orcid.org/0009-0000-9451-6726', icon: 'orcid', professional: false },
    { name: 'YouTube', url: 'https://www.youtube.com/@avijitfolio', icon: 'youtube', professional: false },
    { name: 'X (Twitter)', url: 'https://x.com/avijitfolio', icon: 'twitter', professional: false },
    { name: 'Instagram', url: 'https://www.instagram.com/avijitfolio/', icon: 'instagram', professional: false },
    { name: 'Facebook', url: 'https://www.facebook.com/profile.php?id=61578415162143', icon: 'facebook', professional: false }
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
        id: 'gemmanotes',
        number: '01',
        label: 'Featured Project',
        title: 'Gemma Smart Notes',
        description: 'Gemma Smart Notes is an AI-powered study assistant that transforms students’ notes into smart summaries, key points, and interactive practice quizzes using Google Gemma.',
        image: 'assets/images/Proj1-gemma.png',
        stack: ['HTML5', 'CSS3', 'JavaScript', 'Java', 'Spring Boot', 'Google Gemma API', 'Maven', 'Vercel', 'Render'],
        github: 'https://github.com/AvijitBhau/gemma-smart-notes',
        demo: 'https://gemma-smart-notes.vercel.app/',
        reverse: false
      },
      {
        id: 'fixmycampus',
        number: '02',
        label: 'Featured Project',
        title: 'FixMyCampus',
        description: 'FixMyCampus is a campus-focused platform designed to help students report, track, and manage issues around their campus through a centralized digital system.',
        image: 'assets/images/Proj2-fixmycampus.png',
        stack: ['HTML5', 'CSS3', 'JavaScript', 'FireBase'],
        github: 'https://github.com/AvijitBhau/FixMyCampus',
        demo: 'https://fixmycampus-d4824.web.app/',
        reverse: true
      },
      {
        id: 'skypulse',
        number: '03',
        label: 'Featured Project',
        title: 'SkyPulse',
        description: 'SkyPulse is a modern weather application built with HTML, CSS, and JavaScript, using real-time weather, geocoding, and location APIs. It provides current conditions, hourly forecasts, 5-day predictions, detailed weather statistics, and responsive location-based weather updates.',
        image: 'assets/images/Proj3-Skypulse.png',
        stack: ['HTML5', 'CSS3', 'JavaScript', 'Open-Meteo API', 'OpenStreetMap Nominatim API', 'Browser Geolocation API'],
        github: 'https://github.com/AvijitBhau/SkyPulse',
        demo: 'https://avijitbhau.github.io/SkyPulse/',
        reverse: false
      }
    ],
    other: [
      {
        id: 'campusrecover',
        title: 'Campus Recover',
        description: 'CampusRecover is a secure Lost & Found portal for college students to report, search, and recover misplaced belongings. It includes an ownership verification system to prevent false claims and protect users\' contact information.',
        stack: ['HTML5', 'CSS3', 'JavaScript', 'Firebase'],
        github: 'https://github.com/AvijitBhau/CampusRecover',
        demo: 'https://campus-recover1.netlify.app/'
      },
      {
        id: 'devtoolbox',
        title: 'DevToolBox',
        description: 'A practical collection of browser-based developer utilities including a JSON formatter, password generator, QR code generator, and live word/text counter.',
        stack: ['JavaScript', 'HTML5', 'CSS3', 'QR Code Library', 'Git', 'GitHub'],
        github: 'https://github.com/AvijitBhau/DevToolBox',
        demo: 'https://dev-tool-box-six.vercel.app/'
      },
      {
        id: 'currencyflow',
        title: 'Currency Flow',
        description: 'A responsive currency converter supporting 160+ currencies and cryptocurrencies, with real-time exchange rates, currency swapping, dynamic symbols, and error handling.',
        stack: ['HTML5', 'CSS3', 'JavaScript', 'Currency API', 'Git', 'GitHub'],
        github: 'https://github.com/AvijitBhau/CurrencyFlow',
        demo: 'https://avijitbhau.github.io/CurrencyFlow/'
      }
    ]
  },
  certifications: [
    {
      id: 'cert1',
      name: 'Google AI Essentials',
      issuer: 'Google / Coursera',
      date: 'May 2026',
      image: null,
      credentialId: 'EX3Z8YW3EFSF',
      verifyUrl: 'https://www.coursera.org/account/accomplishments/specialization/EX3Z8YW3EFSF',
      credlyUrl: 'https://www.credly.com/badges/b83303b0-140e-4030-bed2-e13d3d6b3905/public_url',
      verified: true
    },
    {
      id: 'cert2',
      name: 'Google Prompting Essentials',
      issuer: 'Google / Coursera',
      date: 'May 2026',
      image: null,
      credentialId: '0KEMDDM1XHQ7',
      verifyUrl: 'https://www.coursera.org/account/accomplishments/specialization/0KEMDDM1XHQ7',
      credlyUrl: 'https://www.credly.com/badges/089c41a9-0a91-4762-9869-2d9f1567689b/public_url',
      verified: true
    },
    {
      id: 'cert3',
      name: 'Chatgpt for Everyone',
      issuer: 'HCL GUVI',
      date: 'January 2024',
      image: null,
      credentialId: 'V8x351N817k15T800w',
      verifyUrl: 'https://www.guvi.in/verify-certificate?id=V8x351N817k15T800w',
      credlyUrl: null,
      verified: true
    },
    {
      id: 'cert4',
      name: 'Python Programming Course',
      issuer: 'HCL GUVI',
      date: 'January 2024',
      image: null,
      credentialId: '5Gr52q107x33c750T8',
      verifyUrl: 'https://www.guvi.in/verify-certificate?id=5Gr52q107x33c750T8',
      credlyUrl: null,
      verified: true
    },
    {
      id: 'cert5',
      name: 'AI for India 2.0',
      issuer: 'HCL GUVI',
      date: 'August 2023',
      image: null,
      credentialId: '590N69e96211B6UYO1',
      verifyUrl: 'https://www.guvi.in/verify-certificate?id=590N69e96211B6UYO1',
      credlyUrl: null,
      verified: true
    }
  ],
  achievements: [
    {
      id: 'ach1',
      category: 'hackathon',
      categoryLabel: 'Hackathons',
      title: '4th Place — GDG Prayagraj Vibe-Coding Hackathon',
      organization: 'Institute of Professional Studies, University of Allahabad',
      date: 'July 2026',
      description: 'Built a campus-focused Lost & Found platform in just 2 hours during the GDG Prayagraj Vibe-Coding Hackathon, featuring centralized item reporting and an ownership-verification flow. Finished 4th among the Top 10 finalists.',
      result: '4th Place out of 50+ teams',
      verified: true,
      verifyUrl: 'https://certificate.givemycertificate.com/c/046e4cc2-f2bf-45db-9e05-576e5b04ec11',
      image: null
    },
    // {
    //   id: 'ach2',
    //   category: 'award',
    //   categoryLabel: 'Awards',
    //   title: 'Best UI Design Award — CodeFest 2023',
    //   organization: 'Bay Area Developer Community',
    //   date: 'November 2023',
    //   description: 'Recognized for delivering the most polished and accessible user interface at the annual CodeFest design challenge, competing against over 80 participants.',
    //   result: 'Best UI Design',
    //   verified: true,
    //   verifyUrl: '#',
    //   image: null
    // },
    {
      id: 'ach3',
      category: 'workshop',
      categoryLabel: 'Workshops',
      title: 'DevFest Prayagraj 2025',
      organization: 'United Institute of Technology, Prayagraj',
      date: 'November 2025',
      description: 'Participated in Google DevFest, attending technical seminars and hands-on workshops while engaging with the developer community and exploring modern development technologies.',
      result: null,
      verified: false,
      verifyUrl: null,
      image: null
    },
    {
      id: 'ach4',
      category: 'workshop',
      categoryLabel: 'Workshops',
      title: 'AWS Student Community Day',
      organization: 'Motilal Nehru National Institute of Technology, Prayagraj',
      date: 'April 2026',
      description: 'Attended AWS Student Community Day at MNNIT Allahabad, participating in technical sessions and hands-on learning activities focused on cloud and AWS technologies. The event provided an opportunity to explore practical concepts, learn from the developer community, and connect with fellow students and technology enthusiasts.',
      result: null,
      verified: false,
      verifyUrl: null,
      image: null
    },
    {
      id: 'ach5',
      category: 'seminar',
      categoryLabel: 'Seminars',
      title: 'National Seminar on AI-enabled Computing and Communication (AICC-2026)',
      organization: 'Institute of Professional Studies, University of Allahabad',
      date: 'February 2026',
      description: 'Participated in the National Seminar on AI-enabled Computing and Communication (AICC-2026), a pre-summit event under the India-AI Impact Summit 2026, organized by the Department of Electronics and Communication and the Centre of Computer Education & Training, IPS, University of Allahabad.',
      result: null,
      verified: false,
      verifyUrl: null,
      image: null
    },
    // {
    //   id: 'ach6',
    //   category: 'participation',
    //   categoryLabel: 'Participation',
    //   title: 'Google Developer Student Club — Active Member',
    //   organization: 'GDSC Stanford Chapter',
    //   date: '2022 – Present',
    //   description: 'Active participant in weekly technical talks, study jams, and build sessions. Contributed to two community web projects as a frontend volunteer.',
    //   result: null,
    //   verified: false,
    //   verifyUrl: null,
    //   image: null
    // }
  ],
  testimonials: [
    {
      id: 'test1',
      name: 'Hitanshu Yadav',
      role: 'Cloud and DevOps',
      organization: 'University of Allahabad',
      photo: 'assets/images/hitanshu-photo.png',
      relation: 'Friend and Client',
      text: 'I highly recommend <strong> Avijit Agarwal </strong> for his exceptional development skills, problem-solving ability, and dedication. Avijit built my portfolio website, and I was genuinely impressed by the quality of his work. He has a strong understanding of development, pays attention to details, and knows how to turn ideas into a polished and functional product.',
      source: 'LinkedIn',
      sourceUrl: 'https://www.linkedin.com/in/hitanshu-yadav-b0467a38a/'
    }
  ],
  gallery: [
    { id: 'g1', src: 'assets/images/SIET duo.jpeg', caption: 'TFUG 2026 — Photography after hands-on session', category: 'Hackathon' },
    { id: 'g2', src: 'assets/images/SIET group.jpeg', caption: 'Photography after hackathon', category: 'Hackathon' },
    { id: 'g3', src: 'assets/images/vibe-coding finalist.jpeg', caption: 'Won 4th place in Vibe-Coding Hackathon', category: 'Hackathon' },
    { id: 'g4', src: 'assets/images/siet-single.jpeg', caption: 'Experiencing new tech at SIET by GDG Prayagraj', category: 'Community' },
    { id: 'g5', src: 'assets/images/devfest.jpeg', caption: 'Devfest Prayagraj 2025 — Attended at United University', category: 'Workshop' },
    { id: 'g6', src: 'assets/images/mnnit.jpeg', caption: 'AWS Student Community Day — Organized by MNNIT Allahabad from Amazon', category: 'Workshop' },
    { id: 'g7', src: 'assets/images/first sem end.jpeg', caption: 'First year Friends at University', category: 'University' },
    { id: 'g8', src: 'assets/images/fresher.jpeg', caption: 'Freshers for us', category: 'Community' }
  ],
  resume: {
    viewUrl: './assets/files/AA Professional Resume.pdf',
    downloadUrl: './assets/files/AA Professional Resume.pdf',
    highlights: [
      { number: '1+', label: 'Years Learning & Building' },
      { number: '6+', label: 'Projects Completed' },
      { number: '5', label: 'Certifications' }
    ]
  }
};
