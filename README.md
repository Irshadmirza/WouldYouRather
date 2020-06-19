# Would You Rather...? Project

This project represents the second course project for Udacity's React Nanodegree course.

In this project the user can answers the question which is created by other user and the user rank is calculated by adding number of questions user has answerd and number of question user has created

## Requirements
* npm

## How to Run:

1. Run `npm install` to install the project dependencies.
2. Run the app using `npm start`.


## How to Use the App
### Login & Logout
Login page is the entry page for the app. User will be redirected to home path only after successful authentication. If user manually input the desired path, he/she will be asked to authenticate before redirecting it to desired path. If user is logged in, Logout button is displayed at the top-right corner which provides user ability to log out from the app and gets redirected to login screen.


### Navigation Bar
As the app is designed to run on mobile devices as well as desktop browsers, the horizontal menu items will be shrinked into Dropdown menu while using app on mobile browsers. When the user is logged in, avatar as well as welcome message is shown on the right side of the navigation bar.

### Home Screen
Home screen is available at `/` path. It displays feed of answered and unanswered questions. They are categorised in "Answered" and "Unanswered" tabs. They are arranged in decreasing order of their timestamp.


### Poll View
Poll Screen is available at `/questions/:question_id` path. It provides user ability to vote on poll ( only if Unanswered by user ) otherwise it shows the poll details page with vote percentage for each option.




### New Question
This form provides user ability to create new poll. It is available at `/add` path.


### Leaderboard
Leaderboard screen is available at `/leaderboard` path. It shows informational cards of all users arranged in the descending order of their score. The individual score is calculated as sum of total questions answered and total questions asked by user.


### Redux State
Using generated logs, Changes in the Redux state can be observed in browser console window.

## Data

The `_DATA.js` file represents a fake database and methods that let you access the data.
There are two types of objects stored in the database:

* Users
* Questions


Code will talk to the database via 4 methods:

* `_getUsers()` :  Get all of the existing users from the database.
* `_getQuestions()`: Get all of the existing questions from the database.
* `_saveQuestion(question)`: Save the polling question in the database.
* `_saveQuestionAnswer(object)`: Save the answer to a particular polling question in the database.

