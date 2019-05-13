 const caseStudies = [
    {
        "pageTitle":"Edge Motors Museum",
        "objectives":[
            "Car photo android mobile app deployed to a kiosk for a vintage car museum located south of downtown Memphis.",
            "The admin will set each kiosk to display one car, two cars, or a gallery of cars.",
            "The patrons can view the displayed car, click a photo to view a summary page of the car, or click a button to see additional photos of the selected car."
        ],
        "myRole":"I worked on the development team as a software developer along side a UI Designer/Developer. A design firm, Baby Grand, designed the app and passed to us photoshop documents, technical specs, copy, and images.",
        "techStack":[
            "HTML, CSS, and JavaScript for app structuring, styling, and functionality",
            "React Native using Expo for quick scaffolding of the android mobile app file structure, streamline development processes, and building the app’s SDK.",
            "Android Studio to emulate the kiosk device for testing.",
            "Microsoft Visual Studio was the team’s code editor of choice.",
            "Trello to organize tasks from idea to completion.",
            "Communication between team members was done with Slack.",
            "Version control with Github as the online repository and GitKraken as the software.",
            "Photoshop documents was transformed into wire-frames to be developed with Adobe XD."
        ],
        "development":[
            "A component is scaffold using the wireframes and PSD as a guide",
            "Backend functionality (navigation between pages, updating state, and inserting mock data to be displayed) is then added to the component.",
            "When completed, the component’s Trello board and Git branch is updated along with a communique via Slack on the progress to the development team.",
            "The component is then passed on to the UI/UX designer on the team for styling and functionality testing.", 
            "The component is integrated into the app.",
            "The app is tested for user experience, functionality, and navigation between pages",
            "Agile style stand ups every other day",
            "The final stage of the app was inserting the actual copy and photos to the app, building the mobile app SDK, and testing on the actual device that will be used."
        ],
        "results":"The project started and ended in April 2019. We finished the app on time. The app passed the initial stress test of 700 patrons on the grand opening day."
    },
    {
        "pageTitle":"Chasing the 10 Pound Monster",
        "objectives":[
            "A biggest loser style web app where players compete to be the first player to lose 10 pounds.",
            "Players will enter their weight daily into the web app.",
            "The web app will show only the gain or loss, not the actual weight, for players"
        ],
        "myRole":"I developed this app. I work in an office of 25 people. Throughout the year I hosted several biggest loser style challenges using a chalk board to show weekly weight loss for participants.I wanted a web-based app that will allow each participant to weigh-in at their own convenient time and place, perfect calculation of weight-loss, and transparency in who won. This would allow me more time to encourage participate to lose weight instead of administration of challenge.",
        "techStack":[
            "Bootstrap: Web development framework for developing responsive, mobile first front-end projects",
            "AngularJS: JavaScript-based front-end framework for building single page web applications.",
            "GitHub: web-based version control repository and Internet hosting service",
            "JavaScript: Object-oriented programming language for web pages",
            "HTML: Mark-up language for creating web pages",
            "CSS: A formatting language for styling web pages",
            "Heroku: A cloud platform (PaaS) for deploying web apps",
            "Node.js Server side development platform created to run JavaScript",
            "ExpressJS: A Node.js web application server framework "
        ],
        "development":[
            "Used pencil and paper to draw a lo-fi wireframe of the idea.",
            "I developed the app with dummy data",
            "Based on the feedback from co-workers I would make more changes and then ask for another round of feedback",
            "The best feedback was the request to move the player’s data from the client and to a backend server for privacy. This prompt me to use a Node/Express server on the Heroku platform with a MongoDB to save data."
        ],
        "results":"In July 2018 I ran two successful weight loss challenges with the app in which participants raced to losing 10 pounds. The first was a select group 5 co-workers and the second was 6 family members."
    },
    {
        "pageTitle":"Active Cases",
        "objectives":[
            "A case management app designed to keep the user informed of the current status of each case",
            "Allow management of the user's portfolio of cases.",
            "It's deployed as a progressive web app designed for the desktop.",
            "Separate status for legal and regulatory cases.",
            "Provide information about the case via color-coding (quick peek) or text (in-depth study)"
        ],
        "myRole":"I developed this app. As a senior law enforcement/regulatory agent I have seen work cases lost, forgotten, and mismanaged due to inexperience or an overloaded case load. This will implement a formal process to organize cases and provide a quick summary of workload for management. The app will introduce a system of controls to assign status to cases and prioritize time sensitive cases.",
        "techStack":[
            "React: JavaScript front-end library for building user interfaces.",
            "Heroku: A cloud platform (PaaS) for deploying web apps",
            "Node.js Server side development platform created to run JavaScript",
            "ExpressJS A Node.js web application server framework",
            "Git-Hub: web-based version control repository and Internet hosting service",
            "Bootstrap: Web development framework for developing responsive, mobile first front-end projects",
            "JavaScript: object-oriented programming language for web pages",
            "HTML5: Mark-up language for creating web pages and local storage of data in the browser",
            "CSS: A formatting language for styling web pages"
        ],
        "development":[
            "Used pencil and paper to draw a lo-fi wireframe of the idea.",
            "I developed the app with dummy data",
            "Based on the feedback from co-workers I would make more changes and then ask for another round of feedback",
            "The best feedback was the request to more legat status for cases. I didn't think through all the ways a case can be lost in the legal process."
        ],
        "results":"The app is currently in use by myself and one other agent."
    }        
];

export default caseStudies;