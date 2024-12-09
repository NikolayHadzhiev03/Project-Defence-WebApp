# Project-Defence-WebApp

# Overview
This is a forum application developed using **Angular**, where users can interact by creating topics and commenting. Key functionalities include comment management, liking, profile editing, topic search, delete comments and edit. 

# Features

## For Logged-In Users:
Create topics.
Add comments to topics.
Edit and delete their own comments.
Like comments made by others.
View and edit their user profile (username and email).

## For Non-Logged-In Users:
View topics and their details.
Search for topics.

# Technologies Used
**Framework**: Angular
**Date Formatting**: date-fns library.
**Custom Directive**: Email validator.
**Guards**: To check user status (logged in or not).
**Interceptor**: Modifies API requests by replasing /api to URLs.
**Css** : for styling;


# To start the project 
 ## Restore the Database
The application uses MongoDB as the database. You need to restore the provided database files before running the backend.

Navigate to The folder Back-End/forum where the database files are located.
Run the following command in cmd to restore the database:

mongorestore -d forum C:\(put the path to the folder containing the data here)

If the process completes successfully, the database should be restored and ready for use.
 ## Install the dependencies
Now u need to install dependencies for the BackEnd:
cd Back-End/Rest-api 
npm install
To start the Server u need to type (node .)
If everything is set up correctly, you should see the following message:
Listening on port 3000!

 ## Start the Angular Application
Navigate to the Angular project directory:
cd Front-End/ForumApplication/src/app

Open another terminal or command prompt.
Start the Angular application by running:
ng serve

The application will start, and you can access it in your browser at:

http://localhost:4200

## About the Api informations and Endpoint there is a Read.ME in Back-End/Rest-api.
