/* Change this file to get your personal Portfolio */

// To change portfolio colors globally go to the  _globalColor.scss file

import emoji from "react-easy-emoji";
import splashAnimation from "./assets/lottie/splashAnimation"; // Rename to your file name for custom animation

// Splash Screen

const splashScreen = {
  enabled: true, // set false to disable splash screen
  animation: splashAnimation,
  duration: 2000 // Set animation duration as per your animation
};

// Summary And Greeting Section

const illustration = {
  animated: true // Set to false to use static SVG
};

const greeting = {
  username: "Shreeya Phapale",
  title: "Hi, I'm Shreeya",
  subTitle: emoji(
    "A passionate Full Stack Software Developer 🚀 having an experience of building Web applications with JavaScript / Reactjs / Nodejs and some other cool libraries and frameworks."
  ),
  resumeLink:
    "https://drive.google.com/uc?export=download&id=1xVDLqh16HnkEDIOvdEl7dcCCH_5KvJvx", // Set to empty to hide the button
  displayGreeting: true // Set false to hide this section, defaults to true
};

// Social Media Links

const socialMediaLinks = {
  github: "https://github.com/Shreeya-2006",
  linkedin: "https://www.linkedin.com/in/shreeya-phapale/",
  gmail: "shreeya.phapale@gmail.com",

  // Instagram, Twitter and Kaggle are also supported in the links!
  // To customize icons and social links, tweak src/components/SocialMedia
  display: true // Set true to display this section, defaults to false
};

// Skills Section

const skillsSection = {
  title: "What I do",
  subTitle: "CRAZY FULL STACK DEVELOPER WHO WANTS TO EXPLORE EVERY TECH STACK",
  skills: [
    emoji(
      "⚡Develop dynamic full-stack web applications using React, Node.js, and MySQL"
    ),
    emoji("⚡ Strong coding skills in C, C++, Java, and JavaScript for efficient algorithms and backend logic"),
    emoji(
      "⚡ Build and deploy scalable projects with cloud services like Firebase"
    )
  ],

  /* Make Sure to include correct Font Awesome Classname to view your icon
https://fontawesome.com/icons?d=gallery */

  softwareSkills: [
    {
      skillName: "html-5",
      fontAwesomeClassname: "fab fa-html5"
    },
    {
      skillName: "css3",
      fontAwesomeClassname: "fab fa-css3-alt"
    },
    {
      skillName: "sass",
      fontAwesomeClassname: "fab fa-sass"
    },
    {
      skillName: "JavaScript",
      fontAwesomeClassname: "fab fa-js"
    },
    {
      skillName: "reactjs",
      fontAwesomeClassname: "fab fa-react"
    },
    {
      skillName: "nodejs",
      fontAwesomeClassname: "fab fa-node"
    },
    {
      skillName: "Java",
      fontAwesomeClassname: "fab fa-java"
    },
    {
      skillName: "Git",
      fontAwesomeClassname: "fab fa-git-alt"
    },
    {
      skillName: "GitHub",
      fontAwesomeClassname: "fab fa-github"
    },
     {
      skillName: "npm",
      fontAwesomeClassname: "fab fa-npm"
    },
    {
      skillName: "sql-database",
      fontAwesomeClassname: "fas fa-database"
    },
    {
      skillName: "python",
      fontAwesomeClassname: "fab fa-python"
    },
    {
      skillName: "docker",
      fontAwesomeClassname: "fab fa-docker"
    }
  ],
  display: true // Set false to hide this section, defaults to true
};

// Education Section

const educationInfo = {
  display: true, // Set false to hide this section, defaults to true
  schools: [
    {
      schoolName: "MIT ADT University",
      logo: require("./assets/images/MITADT.jpeg"),
      subHeader: "Bachelor of Technology in Computer Science & Engineering(Core)",
      duration: "June 2023 - June 2027",
      desc: "Awarded as one of the top performers with 9+ CGPA"
    }
  ]
};

// Your top 3 proficient stacks/tech experience

const techStack = {
  viewSkillBars: true, //Set it to true to show Proficiency Section
  experience: [
    {
      Stack: "Frontend/Design", //Insert stack or technology you have experience in
      progressPercentage: "90%" //Insert relative proficiency in percentage
    },
    {
      Stack: "Backend",
      progressPercentage: "70%"
    },
    {
      Stack: "Programming/DSA",
      progressPercentage: "90%"
    }
  ],
  displayCodersrank: false // Set true to display codersrank badges section need to changes your username in src/containers/skillProgress/skillProgress.js:17:62, defaults to false
};

// Work experience section

const workExperiences = {
  display: true, //Set it to true to show workExperiences Section
  experience: [
    {
      role: "Full Stack Web Development Intern",
      company: "Future Interns",
      companylogo: require("./assets/images/FutureInterns.jpeg"),
      date: "May 2025 – Present",
      desc: "A Project-Based Internship ",
      descBullets: [
        "Exploring Real-World Full Stack Development",
        "Sharpening Problem-Solving & Independent Thinking"
      ]
    }
  ]
};


/* Your Open Source Section to View Your Github Pinned Projects
To know how to get github key look at readme.md */

const openSource = {
  showGithubProfile: "true", // Set true or false to show Contact profile using Github, defaults to true
  display:false // Set false to hide this section, defaults to true
};

// Some big projects you have worked on

const bigProjects = {
  title: "Projects",
  subtitle: "SOME PROJECTS I WORKED ON TO GAIN HANDS-ON EXPERIENCE IN MY SKILLS.",
  projects: [
    {
      image: require("./assets/images/CloudburstPredictionSystem.png"),
      projectName: "Cloudburst Prediction System",
      projectDesc: "Analyzes weather data and make predictions.",
      footerLink: [
        {
          name: "View Project",
          url: "https://github.com/Shreeya-2006/Clouburst-Prediction-System.git"
        }
        
      ]
    },
    {
      image: require("./assets/images/Netflix.jpeg"),
      projectName: "Netflix Clone",
      projectDesc: "Exploring UI design and responsive layouts using HTML, CSS, JavaScript.",
      footerLink: [
        {
          name: "View Project",
          url: "https://github.com/Shreeya-2006/Netflix-Clone.git"
        }
      ]
    },
    {
      image: require("./assets/images/Amazon.jpeg"),
      projectName: "Amazon.com Clone",
      projectDesc: "Learning front-end technologies through HTML and CSS.",
      footerLink: [
        {
          name: "View Project",
          url: "https://github.com/Shreeya-2006/Amazon.com-Clone.git"
        }
      ]
    }
    
  ],
  display: true // Set false to hide this section, defaults to true
};

// Achievement Section
// Include certificates, talks etc

const achievementSection = {
  title: emoji("Certifications 🏆 "),
  subtitle:
    "Certifications and some cool stuff that I have done !",

  achievementsCards: [
    {
      title: "Google Girl Hackathon 2025",
      subtitle:
        "Participated in the Google Girl Hackathon, collaborating on innovative tech solutions while enhancing problem-solving and teamwork skills.",
      image: require("./assets/images/GirlHackathon.jpeg"),
      imageAlt: "Google Girl Hackathon Logo",
      footerLink: [
        {
          name: "View Post",
          url: "https://www.linkedin.com/posts/shreeya-phapale_googlegirlhackathon-womenintech-hackathonexperience-activity-7301506023494762497-blUf?utm_source=share&utm_medium=member_desktop&rcm=ACoAAEkwPMUBpWrAshCHObClpaBWWj0SUrnfAwU"
        }
      ]
    },
    {
      title: "Database Structures and Management with MySQL by META",
      subtitle: "Utilize the MySQL DBMS to build and modify relational databases with SQL.",
      image: require("./assets/images/Meta.png"),
      imageAlt: "Meta Certificate",
      footerLink: [
        {name: "Certification", url: "https://www.coursera.org/account/accomplishments/verify/55240PSG0OEH"},
      ]
    },
    {
      title: "Google Cloud Arcade 2025",
      subtitle:
        "Participated in Google Cloud Arcade, gaining hands-on experience with Google Cloud technologies through interactive labs and real-world scenarios.",
      image: require("./assets/images/GoogleCloud.png"),
      imageAlt: "Google Cloud Logo",
      footerLink: [
        {
          name: "View Post",
          url: "https://www.linkedin.com/posts/shreeya-phapale_googlecloud-cloudcomputing-apis-activity-7331261139802107904-wdYP?utm_source=share&utm_medium=member_desktop&rcm=ACoAAEkwPMUBpWrAshCHObClpaBWWj0SUrnfAwU"
        }
      ]
    }
  ],
  display: true // Set false to hide this section, defaults to true
};

// Blogs Section

const blogSection = {
  title: "Blogs",
  subtitle:
    "With Love for Developing cool stuff, I love to write and teach others what I have learnt.",
  displayMediumBlogs: "false", // Set true to display fetched medium blogs instead of hardcoded ones
  blogs: [
    {
      url: "https://blog.usejournal.com/create-a-google-assistant-action-and-win-a-google-t-shirt-and-cloud-credits-4a8d86d76eae",
      title: "Win a Google Assistant Tshirt and $200 in Google Cloud Credits",
      description:
        "Do you want to win $200 and Google Assistant Tshirt by creating a Google Assistant Action in less then 30 min?"
    },
    {
      url: "https://medium.com/@saadpasta/why-react-is-the-best-5a97563f423e",
      title: "Why REACT is The Best?",
      description:
        "React is a JavaScript library for building User Interface. It is maintained by Facebook and a community of individual developers and companies."
    }
  ],
  display: false // Set false to hide this section, defaults to true
};

// Talks Sections

const talkSection = {
  title: "TALKS",
  subtitle: emoji(
    "I LOVE TO SHARE MY LIMITED KNOWLEDGE AND GET A SPEAKER BADGE 😅"
  ),

  talks: [
    {
      title: "Build Actions For Google Assistant",
      subtitle: "Codelab at GDG DevFest Karachi 2019",
      slides_url: "https://bit.ly/saadpasta-slides",
      event_url: "https://www.facebook.com/events/2339906106275053/"
    }
  ],
  display: false // Set false to hide this section, defaults to true
};

// Podcast Section

const podcastSection = {
  title: emoji("Podcast 🎙️"),
  subtitle: "I LOVE TO TALK ABOUT MYSELF AND TECHNOLOGY",

  // Please Provide with Your Podcast embeded Link
  podcast: [
    "https://anchor.fm/codevcast/embed/episodes/DevStory---Saad-Pasta-from-Karachi--Pakistan-e9givv/a-a15itvo"
  ],
  display: false // Set false to hide this section, defaults to true
};

// Resume Section
const resumeSection = {
  title: "Resume",
  subtitle: "Feel free to download my resume",

  // Please Provide with Your Podcast embeded Link
  display: true // Set false to hide this section, defaults to true
};

const contactInfo = {
  title: emoji("Contact Me ☎️"),
  subtitle:
    "Discuss a project or just want to say hi? My Inbox is open for all.",
  number: "+918149015686",
  email_address: "shreeya.phapale@gmail.com"
};

// Twitter Section

const twitterDetails = {
  userName: "twitter", //Replace "twitter" with your twitter username without @
  display: false // Set true to display this section, defaults to false
};

const isHireable = true; // Set false if you are not looking for a job. Also isHireable will be display as Open for opportunities: Yes/No in the GitHub footer

export {
  achievementSection, bigProjects, blogSection, contactInfo, educationInfo, greeting, illustration, isHireable, openSource, podcastSection, resumeSection, skillsSection, socialMediaLinks,
  splashScreen, talkSection, techStack, twitterDetails, workExperiences
};
