const caseStudies = [

    {

        "pageTitle":"Edge Motors Museum",

        "objectives":[

            "Car photo android mobile app deployed to a kiosk for a vintage car museum located south of downtown Memphis.",

            "The admin will set each kiosk to display one car, two cars, or a gallery of cars.",

            "The patrons can view the displayed car, click a photo to view a summary page of the car, or click a button to see additional photos of the selected car."

        ],
        "photo1":require('./img/car-boy.jpg'),

        "myRole":"I worked on the development team as a software developer along side a UI Designer/Developer. A design firm, Baby Grand, designed the app and passed to us photoshop documents, technical specs, copy, and images.",
        "photo2":require('./img/lotscars-app.jpg'),
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
        "photo3":require('./img/twocar-app.jpg'),
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
        "photo4":require('./img/redcar-app.jpg'),
        "results":"The project started and ended in April 2019. We finished the app on time. The app passed the initial stress test of 700 patrons on the grand opening day.",
        "photo5":require('./img/car-peoples.jpg'),
    },

    {

        "pageTitle":"Chasing the 10 Pound Monster",

        "objectives":[

            "A biggest loser style web app where players compete to be the first player to lose 10 pounds.",

            "Players will enter their weight daily into the web app.",

            "The web app will show only the gain or loss, not the actual weight, for players"

        ],
        "photo1":require('./img/10MON2.png'),
        "myRole":"I developed this app. I work in an office of 25 people. Throughout the year I hosted several biggest loser style challenges using a chalk board to show weekly weight loss for participants.I wanted a web-based app that will allow each participant to weigh-in at their own convenient time and place, perfect calculation of weight-loss, and transparency in who won. This would allow me more time to encourage participate to lose weight instead of administration of challenge.",
        "photo2":require('./img/10MON3.png'),
        "techStack":[

            "Bootstrap: Web development framework for developing responsive, mobile first front-end projects",

            "AngularJS: JavaScript-based front-end framework for building single page web applications.",

            "GitHub: web-based version control repository and Internet hosting service",

            "JavaScript: Object-oriented programming language for web pages",

            "HTML: Mark-up language for creating web pages",

            "CSS: A formatting language for styling web pages",

            "Heroku: A cloud platform (PaaS) for deploying web apps",
			"MongoDB: A document-oriented NoSQL database used to structured data in a JSON format.",

            "Node.js Server side development platform created to run JavaScript",

            "ExpressJS: A Node.js web application server framework "

        ],
        "photo3":require('./img/10MON4.png'),
        "development":[

            "Used pencil and paper to draw a lo-fi wireframe of the idea.",

            "I used this app to learn how to make API calls to a MongoDB database.",

            "Based on the feedback from co-workers I would make more changes and then ask for another round of feedback",

            "The best feedback was the request to move the player’s data from the client and to a backend server for privacy. This prompt me to use a Node/Express server on the Heroku platform with a MongoDB to save data."

        ],
        "photo4":require('./img/10MON5.png'),
        "results":"In July 2018 I ran two successful weight loss challenges with the app in which participants raced to losing 10 pounds. The first was a select group 5 co-workers and the second was 6 family members.",
        "photo5":require('./img/10MON6.png')
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
        "photo1":require('./img/active-case-a-compressor.png'),
        "myRole":"I developed this app. As a senior law enforcement/regulatory agent I have seen work cases lost, forgotten, and mismanaged due to inexperience or an overloaded case load. This will implement a formal process to organize cases and provide a quick summary of workload for management. The app will introduce a system of controls to assign status to cases and prioritize time sensitive cases.",
        "photo2":require('./img/active-case2.png'),
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
        "photo3":require('./img/active-case3.png'),
        "development":[

            "Used pencil and paper to draw a lo-fi wireframe of the idea.",
            "The biggest challenge was failing to convert the demo into a Electron desktop app. The solution was to learn about progressive web apps and successfully re-develop the app as one.",
			"A major hurdle was learning React and redesigning the app after user testing came back negative.",
            "The best feedback was the request for more legal statuses for cases. I didn't think through all the ways a case can be lost in the legal process."

        ],
        "photo4":require('./img/active-case4.png'),
        "results":"The app is currently in use by myself and one other agent. It was created in July 2018",
        "photo5":require('./img/active-case1.png')
    },

    {

        "pageTitle":"Agent-pedia",

        "objectives":[

            "Online field guide for gaming law enforcement agents.",
            "Search the gaming regulations by short practical topics for recurring problems.",
			"List re-occurring violations as a short practical name topic",
			"State the gaming regulation that is being violated",
			"List the standard operating procedure associated with the regulation",
			"State helpful hints on what to do when the problem is identified",
			"Give examples of additional violations to investigate based on the current violation",
        ],
        "photo1":require('./img/agent1.png'),
        "myRole":"I wanted a tool to list all the different ways to apply the gaming regulation to violations found in the casino. A cheat-sheet to make writing violations easier instead of spending time searching for the rules that was broken. A quick reminder of past strategies that have proven useful based on certain situation.",
        "photo2":require('./img/agent-pedia-version2-main.png'),
        "techStack":[
			"Materialize CSS: Web development framework for developing responsive, mobile first front-end projects",
			"AngularJS: JavaScript-based front-end framework for building single page web applications.",
			"GitHub: web-based version control repository and Internet hosting service",
			"JavaScript: object-oriented programming language for web pages",
			"HTML5: Mark-up language for creating web pages and local storage of data in the browser",
			"CSS: A formatting language for styling web pages",
			"Heroku: A cloud platform (PaaS) for deploying web apps",
			"Node: Server side development platform created to run JavaScript",
			"Express: A Node.js web application server framework" 
        ],
        "photo3":require('./img/agent-wireframe.png'),
        "development":[
            "Used pencil and paper to draw a lo-fi wireframe of the idea.",
            "I used this project to learn MaterializeCSS.",
            "Based on feedback from co-workers I would make changes and then ask for another round of feedback",
            "The best feedback was the the challenge of deploying the app behind a login page and hiding sensitive information."
        ],
        "photo4":require('./img/agentpedia-version2-b-compressor.png'),
        "results":"The project was created in May 2017.",
        "photo5":require('./img/agent-Pedia mobile-200.png')
    },

    {

        "pageTitle":"Index-Cards",

        "objectives":[

            "Online vocabulary test based on high school subjects.",
            "Online version of using index cards as a effective learning strategy.",
			"The test is split into two types, multiple choice and a matching.",
			"The online test would show a constant grade for feedback.",
			"The online test should show the correct answer if the student chooses incorrectly.",
			"Bonus if the test can be reuse weeks later to study for final exams."
        ],
        "photo1":require('./img/indexcards9.png'),
        "myRole":"This is my child’s first year in high school and she is not adjusting well. I watched her dedicated many hours writing vocabulary terms and definitions on index cards to study for tests. Sometime she would lose the cards, damage them with food or water, get side tracked and lose her place, or not know if she have done well or not.",
        "photo2":require('./img/indexcards8.png'),
        "techStack":[
			"Bootstrap: Web development framework for developing responsive, mobile first front-end projects",
			"AngularJS: JavaScript-based front-end framework for building single page web applications.",
			"Git-Hub: web-based version control repository and Internet hosting service",
			"JavaScript: object-oriented programming language for web pages",
			"HTML5: Mark-up language for creating web pages and local storage of data in the browser",
			"CSS: A formatting language for styling web pages"
        ],
        "photo3":require('./img/indexcards1.png'),
        "development":[
            "Used pencil and paper to draw a lo-fi wireframe of the idea.",
			"The biggest challenge was constantly redesigning the app for the growing needs of my daughter. The app needed to display a range of tests, different types of tests, and combined tests to repersent final exams by subject.",
            "Based on feedback from the student a 'Hot streak' feature was added that celebrated a student answering multiple questions correctly.",
            "Based on feedback from the student a 'Beat your Top Score' feature hat displayed the highest score the student achevied for that test.",
			"Because of the above feature requests, I had to learn HTML5's local-storage, animation, and new functionality was develop to enhanace the user experience and build confidence."
        ],
        "photo4":require('./img/indexcards10.png'),
        "results":"The project was created in Sept. 2017.",
        "photo5":require('./img/indexcards4.png')
    },

    {

        "pageTitle":"I Love Math",

        "objectives":[

            "A math practice app for a child",
            "The user is given a choice of practicing addition, subtraction, division, or multiplication",
			"The user will be given 10 problems with the numbers being 1-10",
			"The user is constantly reminded of the number of questions remaining and the score",
            "A non-distracting boy theme animation to make it fun",
            "This app was original built with Angular and later with React Native"
        ],

        "myRole":"I was inspired by my daughter who wanted to help her little brother learn math with a app. She described how she wanted it to look and the functionality.",

        "techStack":[
			"Bootstrap: Web development framework for developing responsive, mobile first front-end projects",
			"Angular: JavaScript-based front-end framework for building single page web applications.",
			"GitHub: web-based version control repository and Internet hosting service",
			"JavaScript: object-oriented programming language for web pages",
			"HTML5: Mark-up language for creating web pages and local storage of data in the browser",
            "CSS: A formatting language for styling web pages",
            "Flexbox: A CSS based layout technology for building responsive websites",
            "React Native: JavaScript mobile app framework"
        ],

        "development":[
            "Pencil and paper were used to draw a lo-fi wireframe of the idea.",
            "I used this app to update my previous knowlegde of AngularJS with the modern Angular versions",
            "The biggest challenge was rebuilding the app with React Native to practice for the 'Edge Motor Museum' project."
			
        ],

        "results":"The project was created in February of 2019."

    },

    {

        "pageTitle":"Wheel of Fortune",

        "objectives":[

            "The user can spin the wheel to get a award amount for each letter correctly chosen or get the Bankrupt award.",
            "The user can pick letters and increase the score based on correctly chosen letters.",
            "The user is score is subtracted by -250 for each vowel",
            "The user can choose to solve the phrase and win the game"
        ],
        "photo1":require('./img/WOF-Wireframe.PNG'),
        "myRole":"This project was used to practice developing with React Native in preparation for the 'Edge Motor Museum' project",
        "photo2":require('./img/WOF2.jpg'),
        "techStack":[
            "React Native: JavaScript mobile app framework", 
 
            "Git-Hub: Web-based version control repository and Internet hosting service",
             
            "Flexbox: A CSS based layout technology for building responsive websites",
            
            "Abode XD: A wire-framing tool used to create a mockup/visual of what is to be coded",
              
            "JavaScript: Object-oriented programming language for web pages",
             
            "HTML: Mark-up language for creating web pages",
             
            "CSS: A formatting language for styling web pages"
        ],
        "photo3":require('./img/WOF3.jpg'),
        "development":[
            "Pencil and paper were used to draw a lo-fi wireframe of the idea.",
            "Adobe XD were used to create a hi-fi wireframe of the idea",
            "The app was develop with Expo.io"
        ],
        "photo4":require('./img/WOF5.jpg'),
        "results":"The project was created in March of 2019.",
        "photo5":require('./img/WOF4.jpg')
    },

    {

        "pageTitle":"Calculator",

        "objectives":[

            "A calculator app for the android mobile device",
            "The user can do calculations with any two numbers and a operator.",
            "The user can clear the display screen.",
            "The user can use the previous total as the first number in the calculation."
        ],
        "photo1":require('./img/calculator1.png'),
        "myRole":"I was inspired by a LinkedIn user who posted his calculator app. I used his design to practice with the React Native framework.",
        "photo2":require('./img/calculator2.png'),
        "techStack":[
            "React Native: JavaScript mobile app framework", 
 
            "Git-Hub: Web-based version control repository and Internet hosting service",
             
            "Flexbox: A CSS based layout technology for building responsive websites",
              
            "JavaScript: Object-oriented programming language for web pages",
             
            "HTML: Mark-up language for creating web pages",
             
            "CSS: A formatting language for styling web pages"
        ],
        "photo3":require('./img/calculator3.png'),
        "development":[
            "Pencil and paper were used to draw a lo-fi wireframe of the idea.",
            "The app was develop with Expo.io"
        ],
        "photo4":require('./img/calculator4.png'),
        "results":"The project was created in February of 2019.",
        "photo5":require('./img/calculator5.png')
    },

    {

        "pageTitle":"Black Jack",

        "objectives":[

            "A traditional Black-Jack card game developed as a React web app."
        ],
        "photo1":require('./img/blackjack2-0.JPG'),
        "myRole":"The goal was to practice building apps in shorter time periods, write cleaner code, and improve user experience with animation.",
        "photo2":require('./img/blackjack2-0a.JPG'),
        "techStack":[
            "React: JavaScript front-end library for building user interfaces",

            "Git-Hub: Web-based version control repository and Internet hosting service",
            
            "Abode XD A wire-framing tool used to create a mockup/visual of what is to be coded",
            
            "JavaScript: Object-oriented programming language for web pages",
            
            "HTML: Mark-up language for creating web pages",
            
            "CSS: A formatting language for styling web pages"
        ],
        "photo3":require('./img/blackjack2-0b.JPG'),
        "development":[
            "Pencil and paper were used to draw a lo-fi wireframe of the idea.",
            "Adobe XD was used to create a hi-fi wireframe of the idea",
            "Based on feedback from co-workers, I improved the animation of the card being dealt"
        ],
        "photo4":require('./img/blackjack2-0c.JPG'),
        "results":"The project was created in June of 2019.",
        "photo5":require('./img/blackjack2-0d.JPG')
    }                               

];

export default caseStudies;