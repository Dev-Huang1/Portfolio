import { Icons } from "@/components/icons";
import { Description } from "@radix-ui/react-dialog";
import { url } from "inspector";
import { HomeIcon, NotebookIcon, ThumbsDown, VideoIcon, FolderIcon } from "lucide-react";
import { title } from "process";

export const DATA = {
  name: "Evan Huang",
  initials: "Evan",
  url: "https://github.com/Dev-Huang1/",
  location: "China",
  locationLink: "",
  description:
    "A Frontend Developer from China. Let's connect!🔥",
  summary:
    "Hello 👋 My name is Evan, I'm an engineer specializing in web development, mastering React, Next.js, TypeScript. I'm currently focus on front-end development.  As for the future development direction, I look forward to continuous learning and growth.",
  avatarUrl: "/Evan.jpg",
  skills: [
    "React",
    "Next.js",
    "Typescript",
    "JavaScript",
    "TailwindCSS",
  ],
  videos: [
    {
      title: "Track Your Coding time for free",
      description: "Learn how to track your code time with complete analytics and insights.",
      thumbnail: "/video1.avif",
      url: "https://youtu.be/tBatfQjWxCg?si=sy2vZbCHoIYNME-3",
      date: "2024-05-15"
    },
    {
      title: "Fix multi-cursor in VS Code",
      description: "Simple trick to fix multi-cursor in VS Code.",
      thumbnail: "/video2.avif",
      url: "https://youtu.be/E9h7M6ZK_tA?si=ykzV7ARU4VMnbBRo",
      date: "2024-07-01"
    },
    {
     title: "Twitter(X)'s monetization (Hindi)",
     description: "Is the policy broken? Let's find out.",
     thumbnail: "/video3.avif",
     url: "https://youtu.be/Z3h1jt6jKLY?si=blL4l4FNco9WW9FT",
     date: "2024-11-04"
    },
    {
      title:"How to fix any kind of ban in twitter (Hindi)",
      description: "Learn how to fix any kind of ban in twitter.",
      thumbnail: "/video4.avif",
      url:"https://youtu.be/P7JRFrcXlQU",
      date: "2024-12-24"
    },
    {
      title:"Microsoft's new shocking move (Hindi)",
      description: "GitHub Copilot is now free for everyone, let's see what's the catch.",
      thumbnail: "/video5.avif",
      url:"https://www.youtube.com/watch?v=uIJOUe8T3_I",
      date: "2024-12-19"
    },
    {
      title:"How to run DeepSeek R1 model locally (Hindi)",
      description:"Learn how to run DeepSeek R1 model locally, in easy steps",
      thumbnail: "/video6.avif",
      url:"https://youtu.be/BgB2pW6QgVg",
      date: "2025-01-29"
    },
    {
      title:"How to do zoom in and out video recording in Windows for free. (Hindi)",
      description:"Learn how to do zoom in and out video recording in Windows for free.",
      thumbnail: "/video7.avif",
      url:"https://youtu.be/WziGdEiT9fE",
      date: "2025-03-16"
    }
    
  ],
  navbar: [
    { href: "/", icon: HomeIcon, label: "Home" },
    { href: "/blog", icon: NotebookIcon, label: "Blog" },
    { href: "/projects", icon: FolderIcon, label: "Projects" },
    { href: "/gadgets", icon: Icons.shop, label: "Cart" },
  ],
  contact: {
    email: "evan.huang000@proton.me",
    tel: "",
    social: {
      GitHub: {
        name: "GitHub",
        url: "https://github.com/Dev-Huang1",
        icon: Icons.github,

        navbar: true,
      },
      X: {
        name: "X",
        url: "https://x.com/Dev_Huang1",
        icon: Icons.x,

        navbar: true,
      },
      Youtube: {
        name: "Youtube",
        url: "https://youtube.com/@Dev_Huang",
        icon: Icons.youtube,
        navbar: true,
      },
      Instagram: {
        name: "Instagram",
        url: "https://instagram.com/dev.huang",
        icon: Icons.instagram,
        navbar: true,
      },
      email: {
        name: "Send Email",
        url: "mailto: evan.huang000@proton.me",
        icon: Icons.email,
        navbar: false,
      },
    },
  },

  work: [
    {
      company: "Atomic Finance",
      href: "https://atomic.finance",
      badges: [],
      location: "Remote",
      title: "Bitcoin Protocol Engineer",
      logoUrl: "/atomic.png",
      start: "May 2021",
      end: "Oct 2022",
      description:
        "Implemented the Bitcoin discreet log contract (DLC) protocol specifications as an open source Typescript SDK. Dockerized all microservices and setup production kubernetes cluster. Architected a data lake using AWS S3 and Athena for historical backtesting of bitcoin trading strategies. Built a mobile app using react native and typescript.",
    },
    {
      company: "Shopify",
      badges: [],
      href: "https://shopify.com",
      location: "Remote",
      title: "Software Engineer",
      logoUrl: "/shopify.svg",
      start: "January 2021",
      end: "April 2021",
      description:
        "Implemented a custom Kubernetes controller in Go to automate the deployment of MySQL and ProxySQL custom resources in order to enable 2,000+ internal developers to instantly deploy their app databases to production. Wrote several scripts in Go to automate MySQL database failovers while maintaining master-slave replication topologies and keeping Zookeeper nodes consistent with changes.",
    },
    {
      company: "Nvidia",
      href: "https://nvidia.com/",
      badges: [],
      location: "Santa Clara, CA",
      title: "Software Engineer",
      logoUrl: "/nvidia.png",
      start: "January 2020",
      end: "April 2020",
      description:
        "Architected and wrote the entire MVP of the GeForce Now Cloud Gaming internal admin and A/B testing dashboard using React, Redux, TypeScript, and Python.",
    },
    {
      company: "Splunk",
      href: "https://splunk.com",
      badges: [],
      location: "San Jose, CA",
      title: "Software Engineer",
      logoUrl: "/splunk.svg",
      start: "January 2019",
      end: "April 2019",
      description:
        "Co-developed a prototype iOS app with another intern in Swift for the new Splunk Phantom security orchestration product (later publicly demoed and launched at .conf annual conference in Las Vegas). Implemented a realtime service for the iOS app in Django (Python) and C++; serialized data using protobufs transmitted over gRPC resulting in an approximate 500% increase in data throughput.",
    },
    {
      company: "Lime",
      href: "https://li.me/",
      badges: [],
      location: "San Francisco, CA",
      title: "Software Engineer",
      logoUrl: "/lime.svg",
      start: "January 2018",
      end: "April 2018",
      description:
        "Proposed and implemented an internal ruby API for sending/receiving commands to scooters over LTE networks. Developed a fully automated bike firmware update system to handle asynchronous firmware updates of over 100,000+ scooters worldwide, and provide progress reports in real-time using React, Ruby on Rails, PostgreSQL and AWS EC2 saving hundreds of developer hours.",
    },
    {
      company: "Mitre Media",
      href: "https://mitremedia.com/",
      badges: [],
      location: "Toronto, ON",
      title: "Software Engineer",
      logoUrl: "/mitremedia.png",
      start: "May 2017",
      end: "August 2017",
      description:
        "Designed and implemented a robust password encryption and browser cookie storage system in Ruby on Rails. Leveraged the Yahoo finance API to develop the dividend.com equity screener",
    },
  ],
  education: [
    {
      school: "Trident Academy Of Technology",
      href: "https://tat.ac.in/",
      degree: "B.Tech in Computer Science and Information Technology",
      logoUrl: "/buildspace.webp",
      start: "2020",
      end: "2024",
    },
    {
      school: "Netaji Subhas Memorial City College",
      href: "https://www.nsmcity.ac.in/index.asp",
      degree: "Higher Secondary",
      logoUrl: "/waterloo.webp",
      start: "2019",
      end: "2021",
    },
  ],
  projects: [
    {
      title: "One Calendar",
      href: "https://calendar.xyehr.cn",
      dates: "September 2024 - Now",
      active: true,
      description:
        "One Calendar is a calendar web app that uses React + Vercel/blob for storage. It has rich features: address book, notes, bookmarks, to-do lists and analysis features! 📅",
      technologies: [
        "Next.js",
        "React",
        "TailwindCSS",
        "TypeScript",
        "shadcnUI",
      ],
      links: [
        {
          type: "Website",
          href: "https://calendar.xyehr.cn",
          icon: <Icons.globe className="size-3" />,
        },
        {
          type: "Source",
          href: "https://github.com/Dev-Huang1/One-Calendar",
          icon: <Icons.github className="size-3" />,
        },
      ],
      image: "/Banner.jpg",
      video: "",
    },
    {
      title: "One Captcha",
      href: "https://captcha.xyehr.cn",
      dates: "Jul 2024 - Now",
      active: true,
      description:
        "🤖🛡️A free human-machine verification product project that is secure and privacy-protecting. ",
      technologies: [
        "HTML",
        "javascript",
        "CSS",
      ],
      links: [
        {
          type: "Website",
          href: "https://calendar.xyehr.cn/",
          icon: <Icons.globe className="size-3" />,
        },
        {
          type: "Source",
          href: "https://github.com/Dev-Huang1/One-Captcha",
          icon: <Icons.github className="size-3" />,
        },
      ],
      
      image: "/One-Captcha-Banner.png",
      video: "",
    },
    {
      title: "EAuth",
      href: "https://auth.xyehr.cn",
      dates: "Jan 2025 - Now",
      active: true,
      description:
        "A 2FA Code app built with NextJS",
      technologies: [
        "React.js",
        "OtpLib",
        "shadcnUI",
        "TypeScript",
        "Next.js",
      ],
      links: [
        {
          type: "Website",
          href: "https://auth.xyehr.cn/",
          icon: <Icons.globe className="size-3" />,
        },
        {
          type: "Source",
          href: "https://github.com/Dev-Huang1/EAuth",
          icon: <Icons.github className="size-3" />,
        },
      ],
      image: "/EAuth.png",
      video: "",
    },
    {
      title: "Easy Note",
      href: "https://note.xyehr.cn/",
      dates: "July 2024 - Now",
      active: true,
      description:
        "📃 A web notepad developed by Tech-Art Studio. Data is stored in local cookies",
      technologies: [
        "React.js",
        "Typescript",
        "Tiptap",
        "CSS",
        "Next.js",
      ],
      links: [
        {
          type: "Website",
          href: "https://note.xyehr.cn/",
          icon: <Icons.globe className="size-3" />,
        },
        {
          type: "Source",
          href: "https://github.com/Dev-Huang1/Easy-Note",
          icon: <Icons.github className="size-3" />,
        },
      ],
      image: "",
      video:
        "",
    },
    {
      title: "Mail",
      href: "https://mail.xyehr.cn/",
      dates: "January 2025 - Now",
      active: true,
      description:
        "This is a resend email sending web application built with NextJS, Password protected.",
      technologies: [
        "React.js",
        "Resend",
        "shadcnUI",
        "Next.js",
        "Typescript",
      ],
      links: [
        {
          type: "Website",
          href: "https://mail.xyehr.cn/",
          icon: <Icons.globe className="size-3" />,
        },
        {
          type: "Source",
          href: "https://github.com/Dev-Huang1/Mail",
          icon: <Icons.github className="size-3" />,
        },
      ],
      image: "Mail.jpg",
      video: "",
    },
    {
      title: "3D Carousel Gallery",
      href: "https://3dcarousell.vercel.app/",
      dates: "December 2024 - January 2025",
      active: true,
      description:
        "A beautiful and interactive 3D carousel gallery built with Next.js, featuring image and video support with an integrated music player.",
      technologies: [
        "Next.js",
        "CSS 3D Transform",
        "SoundCloud Widget API",
        "Modern-Javascript",
        "Vercel",
        "Git",
      ],
      links: [
        {
          type: "Website",
          href: "https://3dcarousell.vercel.app/",
          icon: <Icons.globe className="size-3" />,
        },
        {
          type: "Source",
          href: "https://github.com/StarKnightt/3D-Carousel",
          icon: <Icons.github className="size-3" />,
        },
      ],
      image: "",
      video:
        "https://video.gumlet.io/6745e593080b60408ca085f7/67912b93d696a7af3b2e38ef/download.mp4",
    }
  ],
  hackathons: [
    {
      title: "Smart India Hackathon",
      dates: "March 23rd - 25th, 2022",
      location: "Bhubaneswar, India",
      description:
        "Developed a learing portal with some free education content with the best paid contents too, the project was called as 'EducationX'.",
      image:
        "/smart-india-hackathon.webp",
      mlh: "https://github.com/Synchrotek/E-LearningX",
      links: [],
    },
    {
      title: "Smart India Hackathon",
      dates: "December 19th - 23rd, 2023",
      location: "Bhubaneswar, India",
      description:
        "Developed A collaborative coding web platform that enables Multiuser collboration on a coding project in real-time with features of group chat, to-do lists.",
      image:
        "/logo.webp",
      mlh: "https://nexuslink01v.netlify.app/",
      links: [],
    },
  ],
} as const;
