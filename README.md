# ANITU Files

## System Architecture
![alt text](https://github.com/jroygalvez17/ANITU/blob/master/Screenshots/System%20Architecture.png "System Architecture")

## Demo
### Introduction
<a href="http://www.youtube.com/watch?feature=player_embedded&v=2Y7Ce4jzWuY
" target="_blank"><img src="http://img.youtube.com/vi/YOUTUBE_VIDEO_ID_HERE/0.jpg" 
alt="IMAGE ALT TEXT HERE" width="240" height="180" border="10" /></a>

### Demo in Action
## Create Database
```
create database called FinalExam
create table called sound_tb
configure table with columns for SignalID, Samples, Averge, Hertz, date
```
## Project setup
```
1. Adding .gitignore file in root folder
2. Creating Base File: npm init
3. Install the dependencies (packages): npm i express config request mysql
4. Install other dependencies (packages): npm i -D nodemon concurrently
5. Modify the scripts items in the package json.
6. In the root folder create server.js and define the port where it will run and use command npm run server
7. Create a folder in the root folder and name it config. Create inside it a db.js for the connection with SQL.
8. Create a folder in the root folder and name it routes. Create inside it a folder named api. Create first route and name it sound.js containing all the routes ADD, VIEW, UPDATE, and DELETE
```

## Arduino and Raspberry PI Setup
```
1. Connect the pins (GND, 5V, Analog Output) of Sound Sensor to Arduino R3 Uno (GND, 5V, A0).
2. Upload the file soundFFT to Arduino and check the Serial Monitor if working
3. Connect Arduino to Raspberry Pi using Serial Connector
4. Upload ConnectToArduino.py to Raspberry Pi then run the code
5. Make sure to include POST Data Function in the python code as it contains the POST Request to our SQL.
6. When the code is run, the data will be added in the SQL and log will be displayed in our terminal.
```

## Create Webapp
```
1. Create a new folder in the root folder named frontend.
2. Navigate to frontend and in the terminal run: vue create raspi-gui to create the necessary files. Make sure to include Babel and Router as this will serve as the template for our project especially routing to other pages.
3. When done install chartjs using: npm i vue-chartjs chart.js
4. Edit the main.js and app.vue for the router link and router view
5. Check folder named components inside frontend/raspi/gui/src/ and add the necessary files in creating line chart
6. Check folder named views inside frontend/raspi/gui/src/ and add Home, Application, About which will be the pages of our webapp.
7. Make sure to import the pages and routes in frontend/raspi/gui/src/ index.js
8. Refresh the page and click the Application page to view the chart of Samples and Hertz as you add values to SQL.
```

## Pages and Views

### Home Page
![alt text](https://github.com/jroygalvez17/ANITU/blob/master/Screenshots/Home%20Page.png "Home Page")

### Application Page
![alt text](https://github.com/jroygalvez17/ANITU/blob/master/Screenshots/Application%20Page.png "Application Page")

### About Page
![alt text](https://github.com/jroygalvez17/ANITU/blob/master/Screenshots/About%20Page.png "About Page")



