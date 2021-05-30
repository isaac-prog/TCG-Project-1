## DRUGVIO

Foobar is a Python library for dealing with word pluralization.

## About DRUGVIO

DrugVio is a basic informative drug-abuse website that allows user to gather general information about the abuses of drugs. 

## Project Complexity

DrugVio follows theme 2 of the following complexity matrix:

* Consume the GET endpoint of an API, or consume a CSV/JSON file 5
* Adding or removing DOM elements to the display (map, DOM tree, game screen) base on user's actions 8 

## Features
The website is targeted to youths to help raise awareness of the issues of drug abuse. The website provides statistics, news and Singapore drug counselling links, allowing youth to search for their information within three clicks.

## Technologies used
1. [Font awesome](https://fontawesome.com/ "Font Awesome")
   Font Awesome is used across the project HTML for icons used.
2. [ApexCharts](https://apexcharts.com/ "Apex Charts")
   Apex Charts is used for statistic graph in the statistic page
3. [Axios Library](https://cdnjs.cloudflare.com/ajax/libs/axios/0.19.2/axios.min.js "Axios Library")

## Testing
1. Test if webpage is mobile responsive: 
    a. Right click and select inspect element
    b. Ctrl + Shift + M (For windows users) OR Cmd + M (For Mac users)
    c. under the responsive dropdown, select desired screen width. Contents on the screen should readjust accordingly
2. Test if filter works in statistics line graph
    a. Enter the start and end year accordingly in the text boxes provided.
    b. Graph should readjust according to the time-frame allocated by you.
3. Test for searching of news articles.
    a. Enter keywords into the search bar,
    b. everytime a new keyword is searched, the page should clear old contents and provide the latest content based on the keywords searched.
