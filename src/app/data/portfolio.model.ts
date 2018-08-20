export const portfolio_list = [
    {
        name: 'circlebreak',
        route_url: 'circlebreak',
        abs_url: 'https://circlebreak.com',
        short_desc: 'Conference networking website',
        completed_date: 'July 2018',
        description: 'I developed a WordPress site for a development team that was in need of a landing page and eCommerce functionality in order to sell eTickets for their concept networking platform. I decided to use WordPress because it allowed me to deliver the site to the client quickly with a professional feel and eCommerce capabilities built in. \n\nThe site includes the WooCommerce plugin as well as a custom plugin and child-theme that I developed to allow me to write custom CSS and Javascript.',
        technologies: ['WordPress', 'PHP', 'WooCommerce', 'Stripe', 'jQuery'],
        desc_img: '../assets/images/portfolio/circlebreak/project-desc-circlebreak.png',
        home_screenshots:
        {
            laptop: '../assets/images/portfolio/circlebreak/home-screenshot-laptop.png',
            ipad: '../assets/images/portfolio/circlebreak/home-screenshot-ipad.png',
            iphone: '../assets/images/portfolio/circlebreak/home-screenshot-iphone.png'
        },
        other_screenshots: [
            '../assets/images/portfolio/circlebreak/home-fullpage.png',
            '../assets/images/portfolio/circlebreak/ticketstore-page.png',
            '../assets/images/portfolio/circlebreak/checkout-page.png',
            '../assets/images/portfolio/circlebreak/contact-us-page.png',
        ]
    },
    {
        name: 'Roomies',
        route_url: 'roomies',
        abs_url: 'https://roomies.zachbayoff.com/',
        short_desc: 'Roommate management and organization app',
        completed_date: 'March 2018',
        description: 'Roomies is an application that lets roommates easily manage their chores, schedule visitors, and keep track of household purchases. Roommates are part of a "group" and may join several groups. Roommates can add their phone numbers to be automatically notified by phone about upcoming chore due dates, visitor arrivals, and household item\'s bills.',
        technologies: ['PHP', 'MySQL', 'jQuery', 'Bootstrap4', 'AJAX'],
        desc_img: '../assets/images/portfolio/roomies/project-desc-roomies.png',
        home_screenshots:
        {
            laptop: '../assets/images/portfolio/roomies/home-screenshot-laptop.png',
            ipad: '../assets/images/portfolio/roomies/home-screenshot-ipad.png',
            iphone: '../assets/images/portfolio/roomies/home-screenshot-iphone.png'
        },
        other_screenshots: [
            '../assets/images/portfolio/roomies/login-page.png', '../assets/images/portfolio/roomies/signup-page.png',
            '../assets/images/portfolio/roomies/groups-page.png', '../assets/images/portfolio/roomies/chores-page.png', '../assets/images/portfolio/roomies/items-page.png', '../assets/images/portfolio/roomies/visitors-page.png', '../assets/images/portfolio/roomies/preferences-page.png'
        ]
    },
    {
        name: 'Travel App',
        route_url: 'travelapp',
        abs_url: 'https://zb-travel-app.herokuapp.com',
        short_desc: 'An app to organize your travel destinations and costs',
        completed_date: 'May 2018',
        description: 'This web application was created for those who like to travel, but may not have an easy way to keep track of all of their desired destinations and associated expenses. With Travel App, a user can create, update, and delete a "trip", filling in details such as the trip destination, travel dates, and list of costs one might incur while traveling. \n\nThis app also calls the Unsplash API that allows the user to find high resolution, beautiful photographs of just about anything, and could maybe help remind them of the beauties that their destinations hold. A MongoDB database was set up to store the users trips, meaning that anyone can access anyone\'s trips. This was implemented more on a proof-of-concept basis than an actual user authentication app. I may add this implementation in the future.',
        technologies: ['Angular 6', 'SASS', 'NodeJS', 'Express', 'MongoDB'],
        desc_img: '../assets/images/portfolio/travelapp/project-desc-travelapp.png',
        home_screenshots:
        {
            laptop: '../assets/images/portfolio/travelapp/home-screenshot-laptop.png',
            ipad: '../assets/images/portfolio/travelapp/home-screenshot-ipad.png',
            iphone: '../assets/images/portfolio/travelapp/home-screenshot-iphone.png'
        },
        other_screenshots: [
            '../assets/images/portfolio/travelapp/travel-app-screenshot.png',
            '../assets/images/portfolio/travelapp/travel-app-screenshot2.png',
            '../assets/images/portfolio/travelapp/travel-app-screenshot3.png'
        ]
    },
    {
        name: 'Weather App',
        route_url: 'weatherapp',
        abs_url: 'https://zb-weather-app.herokuapp.com',
        short_desc: 'Get current weather data for any world city/country',
        completed_date: 'May 2018',
        description: 'Weather App is a simple, single page application that makes a call to the OpenWeatherMap API via a city/zip code and country combination. The weather data is retrieved via JSON and displayed with a high resolution background image to indicate the type of weather at the current time and place. The user can switch between Fahrenheit and Celcius. A Google Map is also embedded to indicate the latitude and longitude of the location the user has requested.',
        technologies: ['AngularJS', 'Webpack', 'Express', 'SASS'],
        desc_img: '../assets/images/portfolio/weatherapp/project-desc-weatherapp.png',
        home_screenshots:
        {
            laptop: '../assets/images/portfolio/weatherapp/home-screenshot-laptop.png',
            ipad: '../assets/images/portfolio/weatherapp/home-screenshot-ipad.png',
            iphone: '../assets/images/portfolio/weatherapp/home-screenshot-iphone.png'
        },
        other_screenshots: [
            '../assets/images/portfolio/weatherapp/full-page.png',
        ]
    },
    {
        name: 'Portfolio Site',
        route_url: 'portfoliosite',
        abs_url: '',
        short_desc: 'My portfolio site',
        completed_date: 'August 2018',
        description: 'As with any project, this site is bound to change and improve. After multiple iterations, I\'ve settled on using Angular to present my portfolio, as it allows me to add numerous projects by simply editing a JSON file rather than copying and pasting copius amounts of HTML and CSS.',
        technologies: ['Angular 6', 'SASS'],
        desc_img: '../assets/images/portfolio/portfolio-site/home-screenshot-laptop.png',
        home_screenshots:
        {
            laptop: '../assets/images/portfolio/portfolio-site/home-screenshot-laptop.png',
            ipad: '../assets/images/portfolio/portfolio-site/home-screenshot-ipad.png',
            iphone: '../assets/images/portfolio/portfolio-site/home-screenshot-iphone.png'
        },
        other_screenshots: []
    },
    {
        name: 'The Bayground',
        route_url: 'bayground',
        abs_url: 'https://zbayoff.github.io/bayground/',
        short_desc: 'Mini javascript games and apps.',
        completed_date: 'January 2018',
        description: 'The Bayground is a collection of small, simple to complex applications. They range from finding a set of prime numbers to playing a game of concentration. This project was created to enhance javascript and programming skills. Namely, creating and using functions in different ways, writing loops, manipulating the DOM (without jQuery), adhering to ECMAScript 6 specifications, and much more.',
        technologies: ['Vanilla Javascript, SASS'],
        desc_img: '../assets/images/portfolio/bayground/project-desc-bayground.png',
        home_screenshots:
        {
            laptop: '../assets/images/portfolio/bayground/home-screenshot-laptop.png',
            ipad: '../assets/images/portfolio/bayground/home-screenshot-ipad.png',
            iphone: '../assets/images/portfolio/bayground/home-screenshot-iphone.png'
        },
        other_screenshots: [
            '../assets/images/portfolio/bayground/concentration-module.png',
            '../assets/images/portfolio/bayground/speedtyping-module.png',
            '../assets/images/portfolio/bayground/prime-numbers-module.png'
        ]
    },
    {
        name: 'New York Junior Tennis League',
        route_url: 'nyjtl',
        abs_url: 'https://zbayoff.github.io/nyjtl/',
        short_desc: 'Redesign concept for existing NYJTL website.',
        completed_date: 'November 2017',
        description: 'I chose to build this project out of my love for tennis (it was also a midterm project for my CUNY City Tech Course). This project was built by using content from NYJTL and creating a new look and feel. Using Bootstrap4, the site includes many modern features that makes Bootstrap so easy to use as a front-end framework: Carousels, modals, accordians, hamburger menu, etc. Many of the links do not work, as this is more of a concept site. The donation page is set up, though, and functions like a typical donation system would work.',
        technologies: ['Bootstrap4', 'Javascript'],
        desc_img: '../assets/images/portfolio/nyjtl/project-desc-nyjtl.png',
        home_screenshots:
        {
            laptop: '../assets/images/portfolio/nyjtl/home-screenshot-laptop.png',
            ipad: '../assets/images/portfolio/nyjtl/home-screenshot-ipad.png',
            iphone: '../assets/images/portfolio/nyjtl/home-screenshot-iphone.png'
        },
        other_screenshots: [
            '../assets/images/portfolio/nyjtl/home-fullpage.png',
            '../assets/images/portfolio/nyjtl/donations-screenshot.png'
        ]
    }
];
