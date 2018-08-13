export const portfolio_list = [
    {
        name: 'circlebreak',
        route_url: 'circlebreak',
        short_desc: 'Conference networking website.',
        completed_date: 'July 2018',
        description: 'I developed a WordPress site for a a nascent startup that was in need of a landing page and eCommerce functionality in order to sell eTickets for their platform. I decided to use WordPress because it allowed me to deliver the site to the client quickly with a professional feel and eCommerce capabilities built in. The site includes the WooCommerce plugin as well as a custom plugin and child-theme that I developed to allow me to write custom CSS and Javascript.',
        technologies: ['WordPress', 'PHP', 'WooCommerce', 'Stripe', 'jQuery'],
        img: '../assets/images/project-desc-circlebreak.png'
    },
    {
        name: 'Roomies',
        route_url: 'roomies',
        short_desc: 'Roommate management and organization app.',
        completed_date: 'March 2018',
        description: 'At one point in our lives, most of us have lived with someone else. Maybe a family member, friend, or complete stranger. Living shared spaces can get complicated and sometimes our roommates can get on our nerves. Chores are forgotten, guests overstay their welcome, and household purchases are left unreimbursed. Roomies is an interactive application that lets people create a group for their household, manage chores, schedule visitors, and create a household items list so that purchases can be tracked and roommates can be reimbursed easily. Roommates may join multiple groups, if say, they are in the process of moving and would like to join their new household, but are still living in their current household. Roomates can add their phone numbers to be automatically notified about chore dates, visitor arrivals, and household item\'s bills.',
        technologies: ['PHP', 'MySQL', 'jQuery', 'Bootstrap4', 'AJAX'],
        img: '../assets/images/project-desc-roomies.png'
    },
    {
        name: 'Travel App',
        route_url: 'travelapp',
        short_desc: 'An app to organize your travel destinations and costs.',
        completed_date: 'May 2018',
        description: 'This web application was created for those who like to travel, but may not have an easy way to keep track of all of their desired destinations and associated expenses. With Travel App (pardon the lack of inticing app name), a user can create, update, and delete a "trip", filling in details such as the trip destination, travel dates, and list of costs one might incur while traveling. This app also calls the Unsplash API that allows the user to find high resolution, beautiful photographs of just about anything, and could maybe help remind them of the beauties that their destinations hold.A MongoDB database was set up to store the users trips, meaning that anyone can access anyone\'s trips. This was implemented more on a proof-of-concept basis than an actual user authentication app. I may add this implementation in the future.',
        technologies: ['Angular 6', 'SASS', 'NodeJS', 'Express', 'MongoDB'],
        img: '../assets/images/project-desc-travelapp.png'
    },
    {
        name: 'Weather App',
        route_url: 'weatherapp',
        short_desc: 'Get current weather data for any city/country in the world.',
        completed_date: 'May 2018',
        description: 'This application was my first exposure to building an application using the AngularJS framework. A simple, single page application that makes call to the OpenWeatherMap API via a city/zip code and country combination. The weather data is retrieved via JSON and displayed with a high resolution background image to indicate the type of weather at the current time and place. The user can switch between Farenheit and Celcius. A Google Map is also embedded to indicate the latitude and longitude of the location the user has requested.',
        technologies: ['AngularJS', 'Webpack', 'Express', 'SASS'],
        img: '../assets/images/project-desc-weatherapp.png'
    },
    {
        name: 'Bayground',
        route_url: 'bayground',
        short_desc: 'A set of small games and apps created to enhance my ES6 skills.',
        completed_date: 'January 2018',
        description: 'The Bayground is a collection of small, simple to complex applications. They range from finding a set of prime numbers to playing a game of concentration.This project was created to enhance javascript and programming skills. Namely, creating and using functions in different ways, writing loops, manipulating the DOM (without jQuery), adhering to ECMAScript 6 specifications, and much more.',
        technologies: ['Vanilla Javascript'],
        img: '../assets/images/project-desc-bayground.png'
    },
    {
        name: 'New York Junior Tennis League',
        route_url: 'nyjtl',
        short_desc: 'Redesign concept for existing NYJTL website.',
        completed_date: 'November 2017',
        description: 'I chose to build this project out of my love for tennis (it was also a midterm project for my CUNY City Tech Course). This project was built by using content from NYJTL and creating a new look and feel. Using Bootstrap4, the site includes many modern features that makes Bootstrap so easy to use as a front-end framework: Carousels, modals, accordians, hamburger menu, etc. Many of the links do not work, as this is more of a concept site. The donation page is set up, though, and functions like a typical donation system would work.',
        technologies: ['Bootstrap4', 'Javascript'],
        img: '../assets/images/project-desc-nyjtl.png'
    }
];
