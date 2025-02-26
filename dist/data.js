const websiteData = {
    // Basic information
    basics: {
        name: "Ayon Chakraborty",
        birthYear: 2001,
        title: "Cybersecurity Engineer & Software Developer",
        email: "💌 iamayon.ch@gmail.com",
        profilePic: "https://avatars.githubusercontent.com/u/33594352", // GitHub avatar
        objective: [
            "Aspiring Cybersecurity Engineer with a strong foundation in penetration testing, web security, and secure software development.",
            "Passionate about identifying vulnerabilities, improving security posture, and building resilient applications.",
            "Seeking an opportunity to apply my technical expertise in a challenging cybersecurity role while continuously learning and growing in the field."
        ]
    },

    // Social media links
    socials: [
        {
            name: "Youtube",
            url: "//youtube.com/@iamskidrow/",
            icon: "fab fa-youtube"
        },
        {
            name: "Twitter",
            url: "//twitter.com/ayon1337",
            icon: "fab fa-twitter"
        },
        {
            name: "Linkedin",
            url: "//www.linkedin.com/in/iamayon/",
            icon: "fab fa-linkedin"
        },
        {
            name: "Github",
            url: "//github.com/iamskidrow",
            icon: "fab fa-github"
        },
        {
            name: "Download Resume",
            url: "#",
            icon: "fas fa-file-download"
        }
    ],

    // Qualifications
    qualifications: [
        "🔍 5+ Years experience with Web-Application Penetration-Testing",
        "⚡ Expertise in Security Automation and Vulnerability Assessment",
        "💻 Full-Stack Development with MEVN Stack",
        {
            prefix: "🎓 MCA student at ",
            university: "Sister Nivedita University",
            link: "https://www.snuniv.ac.in/"
        },
        {
            prefix: "🎓 BCA Graduate from ",
            university: "Adamas University",
            link: "https://adamasuniversity.ac.in/"
        }
    ],

    // Tech stack
    techStack: {
        "Cybersecurity": [
            "Penetration Testing",
            "Exploit Development",
            "Security Automation",
            "Vulnerability Assessment"
        ],
        "Security Tools": [
            "Burp Suite",
            "Metasploit",
            "Nmap",
            "Wireshark",
            "Hashcat",
            "SQLMap"
        ],
        "Programming": [
            "Python",
            "JavaScript (MEVN Stack)",
            "TypeScript",
            "Shell Scripting"
        ],
        "DevOps & Cloud": [
            "Docker",
            "AWS",
            "Linux",
            "Git",
            "CI/CD Pipelines"
        ],
        "Database & Web APIs": [
            "PostgreSQL",
            "MongoDB",
            "Redis",
            "REST"
        ]
    },

    // Certifications
    certifications: [
        {
            title: "Cybersecurity Engineer - Internship",
            issuer: "Sketch Me Global",
            year: "2022",
            description: "Conducted 20+ web application penetration tests, identifying critical security vulnerabilities such as SQLi, RCE, XSS, and IDOR. Automated security testing workflows, reducing manual effort by 40%.",
            certificateImage: "assets/internship.jpg",
            certificateUrl: "#",
            skills: ["Penetration Testing", "Application Security", "Security Automation", "Vulnerability Assessment"]
        },
        {
            title: "Responsive Web Design",
            issuer: "freeCodeCamp",
            year: "2020",
            description: "Completed the Responsive Web Design certification covering HTML5, CSS3, Flexbox, CSS Grid, and responsive design principles.",
            certificateImage: "assets/fcc_web.png",
            certificateUrl: "https://www.freecodecamp.org/certification/iamskidrow/responsive-web-design",
            skills: ["HTML5", "CSS3", "Responsive Design", "Flexbox", "CSS Grid"]
        }
    ],

    // Work experience
    experience: [
        {
            role: "🔒 Cybersecurity Engineer - Internship",
            company: "Sketch Me Global",
            companyUrl: "//sketchmeglobal.com",
            period: "09/2022 - 11/2022",
            description: "Worked in a professional security testing environment to identify and mitigate vulnerabilities in web applications.",
            responsibilities: [
                "🔍 Conducted 20+ web application penetration tests, identifying critical security vulnerabilities (SQLi, RCE, XSS, IDOR)",
                "🛠️ Automated security testing workflows, reducing manual effort by 40% and improving efficiency",
                "👥 Led a team of three junior testers, enhancing productivity by 25%"
            ]
        }
    ],

    // Security testing & achievements
    securityWork: [
        {
            company: "Paytm",
            year: "2020",
            description: "Reported XSS and Clickjacking on <a href='https://paytm.com/'>Paytm</a>'s subdomain.",
            certificateImage: "assets/paytm.jpg",
            certificateAlt: "Paytm Certificate of Appreciation",
            achievements: [
                {text: "POC of XSS", link: "https://www.youtube.com/watch?v=kRYomFiRVyw", icon: "🔗"},
                {text: "POC of Clickjacking", link: "https://www.youtube.com/watch?v=R7oKxW2jOts", icon: "🔗"}
            ]
        },
        {
            company: "Issuu",
            year: "2018",
            description: "Reported XSS and Open Redirect on <a href='https://issuu.com/'>Issuu</a>'s core domain.",
            certificateImage: "/api/placeholder/400/300",
            certificateAlt: "Issuu Hall of Fame",
            achievements: [
                {text: "Received T-Shirt & goodies", icon: "🎁"},
                {text: "Listed in Hall of Fame", link: "https://issuu.com/responsible-disclosure", icon: "🏆"},
                {text: "POC of XSS", link: "https://www.youtube.com/watch?v=J0iqNdzwSrI", icon: "🔗"},
                {text: "POC of Open Redirect", link: "https://www.youtube.com/watch?v=UuWrO2IQcRA", icon: "🔗"}
            ]
        },
        {
            company: "Intel",
            year: "2018",
            description: "Reported XSS on <a href='https://www.intel.com'>Intel</a>'s core domain.",
            certificateImage: "assets/intel2.jpg",
            certificateAlt: "Intel Certificate 2018",
            achievements: [
                {text: "Certificate of appreciation", icon: "🏆"},
                {text: "POC of XSS", link: "https://www.youtube.com/watch?v=fAuACx2De6c", icon: "🔗"}
            ]
        },
        {
            company: "GeeksForGeeks",
            year: "2018",
            description: "Reported CSRF on <a href='https://www.geeksforgeeks.org/'>GeeksForGeeks</a>, allowing email takeover.",
            certificateImage: "assets/gfg.jpg",
            certificateAlt: "GeeksForGeeks Hall of Fame",
            achievements: [
                {text: "Received T-Shirt & goodies", icon: "🎁"},
                {text: "Listed in Hall of Fame", link: "https://www.geeksforgeeks.org/certificates/", icon: "🏆"},
            ]
        },
        {
            company: "Intel",
            year: "2017",
            description: "Reported XSS on <a href='https://www.intel.com'>Intel</a>'s core domain.",
            certificateImage: "assets/intel1.jpg",
            certificateAlt: "Intel Certificate 2017"
        }
    ],

    // Projects
    projects: [
        {
            title: "🎓 Unione - Comprehensive University Management System",
            url: "https://github.com/iamskidrow/unione",
            description: "Built a secure university management system with authentication, role-based access, and encryption, protecting against SQL Injection and XSS. Earned Outstanding grade and university-wide adoption."
        },
        {
            title: "🌐 TenderPoint - Centralized Tender Management System",
            url: "https://tenderpoint.in/",
            description: "Platform that scrapes and centralizes tender data with filtering and download capabilities."
        },
        {
            title: "🛒 RetailFlow - Secure Retail Management Solution",
            url: "https://github.com/iamskidrow/retailflow",
            description: "Enhances stock tracking, invoicing, and reporting with security features like input validation, rate limiting, and encryption."
        },
        {
            title: "🧪 ApiSure - Automated API Testing Framework",
            url: "https://github.com/iamskidrow/apisure",
            description: "Automates API testing with schema validation, CI/CD integration, and response monitoring, ensuring security with OWASP API Top 10 compliance."
        },
        {
            title: "⚙️ Automate - Web Application Penetration Testing Framework",
            url: "https://github.com/iamskidrow/automate",
            description: "Framework to automate common web security testing tasks with enhanced efficiency."
        },
        {
            title: "🔄 Aadhar+Pan_link_status - Verification Tool",
            url: "https://github.com/iamskidrow/aadhar_pan_link_status",
            description: "Tool to verify if Aadhaar and PAN are linked through Income Tax portal with automated processing."
        },
        {
            title: "🍎 iPrice - iPhone Price Comparison Tool",
            url: "https://github.com/iamskidrow/iPrice",
            description: "Advanced web scraper to compare iPhone prices across different retailers with real-time updates."
        },
        {
            title: "🤖 redditsave_api - Content Download API",
            url: "https://github.com/iamskidrow/redditsave_api",
            description: "Unofficial API to download Reddit content through efficient data scraping techniques."
        },
        {
            title: "🛡️ c0rs3r - CORS-Misconfiguration Checker",
            url: "https://github.com/iamskidrow/c0rs3r",
            description: "Advanced tool to detect and report CORS misconfigurations in web applications."
        },
        {
            title: "🔍 dork3r - Google Dorking Security Tool",
            url: "https://github.com/iamskidrow/dork3r",
            description: "Automated Google dork tool for efficiently identifying security vulnerabilities and information leaks."
        }
    ]
};