/* Change this file to get your personal Portfolio */

// Your Summary And Greeting Section

import emoji from "react-easy-emoji";

const greeting = {
  /* Your Summary And Greeting Section */
  username: "Dante Kim",
  title: "Dante Kim",
  subTitle: emoji(
    "University Student Majoring in Computer Science. Passionate Software Developer 🚀  and Data Science/Machine Learning 🤖 enthusiast. "
  ),
  resumeLink:
    "https://drive.google.com/file/d/1YqSW3ai4gnAlGWjyuOFlWVd8shQaH-Wu/view?usp=sharing",
};

// Your Social Media Link

const socialMediaLinks = {
  github: "https://gitlab.com/danteshub",
  linkedin: "https://www.linkedin.com/in/dante-kim-4483ba191/",
  gmail: "d4ntedoes@gmail.com",
  medium: "https://medium.com/@tfkim67",
  // Instagram and Twitter are also supported in the links!
};

// Your Skills Section

const skillsSection = {
  title: "What do I do",
  subTitle:
    "Over the past 5 years I've built projects using a variety of different stacks and have become accustomed to picking up new technologies fairly quickly",
  skills: [
    emoji(
      "⚡ Develop highly interactive, responsive web applications using the MERN stack or RoR"
    ),
    emoji("⚡ Develop Mobile applications using UIKit, SwiftUI or Flutter"),
    emoji(
      "⚡ Analyze data and create custom machine learning algorithms using various python libraries and tensorflow"
    ),
  ],

  /* Make Sure You include correct Font Awesome Classname to view your icon
https://fontawesome.com/icons?d=gallery */

  softwareSkills: [
    {
      skillName: "html-5",
      fontAwesomeClassname: "fab fa-html5",
    },
    {
      skillName: "css3",
      fontAwesomeClassname: "fab fa-css3-alt",
    },
    {
      skillName: "JavaScript",
      fontAwesomeClassname: "fab fa-js",
    },
    {
      skillName: "reactjs",
      fontAwesomeClassname: "fab fa-react",
    },
    {
      skillName: "nodejs",
      fontAwesomeClassname: "fab fa-node",
    },
    {
      skillName: "swift",
      fontAwesomeClassname: "fab fa-swift",
    },
    {
      skillName: "flutter",
      fontAwesomeClassname: "fas fa-dove",
    },
    {
      skillName: "Ruby on Rails",
      fontAwesomeClassname: "fas fa-gem",
    },
    {
      skillName: "npm",
      fontAwesomeClassname: "fab fa-npm",
    },
    {
      skillName: "SQL",
      fontAwesomeClassname: "fas fa-database",
    },
    {
      skillName: "MongoDB",
      fontAwesomeClassname: "fab fa-envira",
    },
    {
      skillName: "CouchDB",
      fontAwesomeClassname: "fas fa-couch",
    },
    {
      skillName: "firebase",
      fontAwesomeClassname: "fas fa-fire",
    },
    {
      skillName: "python",
      fontAwesomeClassname: "fab fa-python",
    },
    {
      skillName: "docker",
      fontAwesomeClassname: "fab fa-docker",
    },
  ],
};

// Your top 3 proficient stacks/tech experience

const techStack = {
  viewSkillBars: false, //Set it to true to show Proficiency Section
  experience: [
    {
      Stack: "Frontend/Design", //Insert stack or technology you have experience in
      progressPercentage: "90%", //Insert relative proficiency in percentage
    },
    {
      Stack: "Backend",
      progressPercentage: "70%",
    },
    {
      Stack: "Programming",
      progressPercentage: "60%",
    },
  ],
};

// Your top 3 work experiences

const workExperiences = {
  viewExperiences: true, //Set it to true to show workExperiences Section
  experience: [
    {
      role: "Full Stack Engineer",
      company: "Ethical Identity",
      companylogo: require("./assets/images/elogo4.png"),
      date: "July 2020 – September 2020",
      desc:
        "Features I worked on: creating an audit dashboard that tracked the number of blocks and audit requests in the blockchain, and worked on implementing various small features such as setting up email confirmations using rails, the redesign of login/register screens, and auto-filling/generating pdfs from the backend..",
      descBullets: [
        "Used ruby on rails, couchdb and bootstrap throughout the internship",
        " Worked with docker and gitlab and worked in an agile environment..",
      ],
    },

    {
      role: "Freelance IOS Developer",
      company: "Alarm & Calm",
      companylogo: require("./assets/images/alarm2.png"),
      date: "September 2020 – Present",
      desc:
        "Freelance IOS developer for app marketing company located in Paris, France. Currently working on an SwiftUI app with two other freelance developers and a professional designer. We use Ice Scrum as our task managment system and have weekly standup meetings.",
    },
  ],
};

/* Your Open Source Section to View Your Github Pinned Projects
To know how to get github key look at readme.md */

const openSource = {
  githubConvertedToken: process.env.REACT_APP_GITHUB_TOKEN,
  githubUserName: "danteshub", // Change to your github username to view your profile in Contact Section.
  showGithubProfile: "true", // Set true or false to show Contact profile using Github, defaults to false
};

// Some Big Projects You have worked with your company

const bigProjects = {
  title: "Big Projects",
  subtitle:
    "The following are all personal projects. Click on any picture and be taken to an example or source code.",
  projects: [
    {
      title: "Brainstack",
      image: require("./assets/images/bstack.png"),
      link: "brainstack.so",
      description:
        "Blog built using Ruby on Rails, HTML, CSS and Javascript. Features include OAuth, custom markdown CMS to write articles, and responsive CSS. ",
    },
    {
      title: "Focusbyte",
      image: require("./assets/images/pomo.png"),
      link: "focusbyte.io",
      description:
        "Productivity app built using UIKit, swift and firebase (programatically, no storyboard). Features include charts that display user data, push notifications, in-app purchases, and custom oauth. In 3 months: 9000+ downloads, and 500 daily active users. ",
    },
    {
      title: "DevBook (Linkedin Clone)",
      image: require("./assets/images/devbook.png"),
      link: "https://murmuring-inlet-91453.herokuapp.com/",
      description:
        "You can create a profile, add social network links, experience and education. There is an explore page where you can see all other developers. You can also create posts, which can be liked and commented on. Must be logged in, and have an account to view posts, create a profile. (Built using the MERN Stack) ",
    },
    {
      title: "Path Finding Visualizer",
      image: require("./assets/images/pfv.png"),
      link: "https://danteshub.github.io/Path-Finding-Visualizer/",
      description:
        "Visualizer built with CSS and React, that shows the user how the dijkstra's, Breath First Search, Depth First Search and A*'s algorithms work visually. Users can add walls by dragging on the screen and the algorithms will take this into account.",
    },
    {
      title: "Breast Cancer Detection",
      image: require("./assets/images/breastcancer.png"),
      link: "https://github.com/DantesHub/Breast-Cancer-Detection",
      description:
        "Using python, numpy, matplotlib, seaborn and scikit-learn, cleaned and analyzed breast cancer dataset from UCI archives. I then used four different machine learning models (SVM, random forest, decision tree and logistic regression) from scikit-learn to predict whether a patient had breast cancer based on the patients features given by the dataset.",
    },
    {
      title: "Pokemon Classifier",
      image: require("./assets/images/pokedex.png"),
      link: "https://github.com/DantesHub/Pokemon-Classifier",
      description:
        "IOS app built using Swift, CreateML, and Wikapedia API. Data: thousands of images of Pokemon (from kaggle labeled by me). Using the data trained and created model using Apple's MLImageClassifier. User can take a photo of a Pokemon, and will be then be given the name of the Pokemon, as well as a short description and image from Wikapedia.",
    },
    ,
  ],
};

// Your Achievement Section Include Your Certification Talks and More

const achievementSection = {
  title: emoji("Education And Certifications "),
  subtitle: "",

  achivementsCards: [
    {
      title: "Computer Science Bachelors",
      subtitle:
        "Currently attending Villanova University as a computer science major with a 3.84 (in-major) GPA, 3.6 overall GPA. I will be graduating in the Spring of 2022.",
      image: require("./assets/images/V.png"),
      footerLink: [],
    },
    {
      title: "Stanford University Machine Learning MOOC",
      subtitle:
        "During this 12 week course I covered the basics of the most famous machine-learning algorithms. Things covered ranged from  Linear Regression to building our own recommender systems using a collaborative filtering algorithm",
      image: require("./assets/images/stanford.png"),
      footerLink: [
        {
          name: "View Certification",
          url: "https://www.linkedin.com/in/dante-kim-4483ba191/",
        },
      ],
    },

    {
      title: "Deep Learning Specialization",
      subtitle:
        "Taken and succesfully have completed all 5 courses within the speciliazation. During this 3 month long process I covered the following topics: Neural Networks, Hyperparameter tuning, Regularization, Optimization, Convolutional Neural Networks and Sequence Models",
      image: require("./assets/images/deeplearning.png"),
      footerLink: [
        {
          name: "View Certifications",
          url: "https://www.linkedin.com/in/dante-kim-4483ba191/",
        },
      ],
    },
  ],
};

// Blogs Section

const blogSection = {
  title: "Blogs",
  subtitle:
    "With Love for Developing cool stuff, I love to write and teach others what I have learnt.",

  blogs: [
    {
      url:
        "https://blog.usejournal.com/create-a-google-assistant-action-and-win-a-google-t-shirt-and-cloud-credits-4a8d86d76eae",
      title: "Win a Google Assistant Tshirt and $200 in Google Cloud Credits",
      description:
        "Do you want to win $200 and Google Assistant Tshirt by creating a Google Assistant Action in less then 30 min?",
    },
    {
      url: "https://medium.com/@saadpasta/why-react-is-the-best-5a97563f423e",
      title: "Why REACT is The Best?",
      description:
        "React is a JavaScript library for building User Interface. It is maintained by Facebook and a community of individual developers and companies.",
    },
  ],
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
      event_url: "https://www.facebook.com/events/2339906106275053/",
    },
  ],
};

// Podcast Section

const podcastSection = {
  title: emoji("Podcast 🎙️"),
  subtitle: "I LOVE TO TALK ABOUT MYSELF AND TECHNOLOGY",

  // Please Provide with Your Podcast embeded Link
  podcast: [
    "https://anchor.fm/codevcast/embed/episodes/DevStory---Saad-Pasta-from-Karachi--Pakistan-e9givv/a-a15itvo",
  ],
};

const contactInfo = {
  title: emoji("Contact Me ☎️"),
  subtitle:
    "Discuss a project or just want to say hi? Looking forward to talking :) ",
  number: "",
  email_address: "teamdomics@gmail.com",
};

//Twitter Section

const twitterDetails = {
  userName: "twitter", //Replace "twitter" with your twitter username without @
};
export {
  greeting,
  socialMediaLinks,
  skillsSection,
  techStack,
  workExperiences,
  openSource,
  bigProjects,
  achievementSection,
  blogSection,
  talkSection,
  podcastSection,
  contactInfo,
  twitterDetails,
};
