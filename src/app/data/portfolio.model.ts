export const portfolio_list = [
    {
        name: 'Travel App',
        route_url: 'travelapp',
        short_desc: 'An app to organize your travel destinations and costs.',
        description: 'This web application was created for those who like to travel, but may not have an easy way to keep track of all of their desired destinations and associated expenses. With Travel App (pardon the lack of inticing app name), a user can create, update, and delete a "trip", filling in details such as the trip destination, travel dates, and list of costs one might incur while traveling. This app also calls the Unsplash API that allows the user to find high resolution, beautiful photographs of just about anything, and could maybe help remind them of the beauties that their destinations hold.A MongoDB database was set up to store the users trips, meaning that anyone can access anyone\'s trips. This was implemented more on a proof-of-concept basis than an actual user authentication app. I may add this implementation in the future.',
        img: '../assets/images/project-desc-travelapp.png'
    },
    {
        name: 'Weather App',
        route_url: 'weatherapp',
        short_desc: 'Get current weather data for any city/country in the world.',
        description: 'This application was my first exposure to building an application using the AngularJS framework. A simple, single page application that makes call to the OpenWeatherMap API via a city/zip code and country combination. The weather data is retrieved via JSON and displayed with a high resolution background image to indicate the type of weather at the current time and place. The user can switch between Farenheit and Celcius. A Google Map is also embedded to indicate the latitude and longitude of the location the user has requested.',
        img: '../assets/images/project-desc-weatherapp.png'
    }
];
