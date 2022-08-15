# Welcome to the Twttr README!
Twttr was built with the intentions of being an Twitter clone. On Twttr, you can expect to be able to do things you would be able to do on Twitter like commenting on tweets and tweeting tweets!

# Technologies Used
* Frontend: React
* Backend: PostgreSQL, Python
* Heroku(website hosting)

# Live Site Demo
[DEMO LINK](https://twttrapp.herokuapp.com/)

# Installation
Clone twttrapp into your desired directory:
* run `npm install` in the `react-app` (frontend) directory to install required dependencies
* run `pipenv install` in the main root directory to install (backend) required dependencies
* create an `.env` file in the root of the directory and refer to the `.env.example` file provided for you
* refer to [SEQUELIZE DOCUMENTATION](https://sequelize.org/docs/v6/other-topics/migrations/) on how to create a database
* to run the app in development mode `CD` into the root directory and `flask run` (make sure you ran `pipenv shell`)
* next `CD` into `react-app` (frontend) and npm start, wait a minute for the localhost to start up, and you have Polagram up and running!

# Wiki Docs
[DATABASE SCHEMA](https://github.com/jackmtran/twttrapp/wiki/DATABASE-SCHEMA)

[FEATURE LIST](https://github.com/jackmtran/twttrapp/wiki/FEATURE-LIST)

[USER STORIES](https://github.com/jackmtran/twttrapp/wiki/USER-STORIES)

[WIREFRAMES](https://github.com/jackmtran/twttrapp/wiki/WIREFRAMES)

# Login / SignUp Page
<img width="1435" alt="Screen Shot 2022-08-11 at 11 00 49 AM" src="https://user-images.githubusercontent.com/99513086/184207641-5bd86034-f5d2-4285-bf8e-9bc60172a8ac.png">

# Twttr Timeline
<img width="1438" alt="Screen Shot 2022-08-11 at 11 04 58 AM" src="https://user-images.githubusercontent.com/99513086/184208589-2cc00176-e4bf-4bf3-8172-749ddd03a42e.png">


# Challenges
* A challenge I ran into while building Twttr was the implementing of modals. Using values from other components in my project was difficult to understand at first but then things became routine, luckily. I'd like to say this was worth it to bring a smoother functionality to the site, rather than having to jump from page to page.

# Future Features
* Liking / Retweeting Tweets
* Explore Page to search tags/users
* Working Home page using algorithms
