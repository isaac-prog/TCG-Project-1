## DRUGVIO

Foobar is a Python library for dealing with word pluralization.

## About DRUGVIO

DrugVio is a basic informative drug-abuse website that allows user to gather general information about the abuses of drugs. 

## Project Complexity

DrugVio follows theme 2 of the following complexity matrix:

* Consume the GET endpoint of an API, or consume a CSV/JSON file
* Adding or removing DOM elements to the display (map, DOM tree, game screen) base on user's actions
* Modifying the CSS of DOM elements based on the user's actions 
* Use of 1D traversal of array 
* Each use of a unique functional mapping method (map, reduce, filter)
* Each use of CSS layout technique (Bootstrap columns, flex box, grid) 
* Each instance of a graph changing dynamically based on the user's action 
* Each instance of one type of graph covered in class (bar, line, chart etc.) 
* Each of one of the following: synchronized chart, chart with at least 3 series, chart reading data from JSON/CSV files or API 
* Each customization added to the default chart (change of colors, for example) 
* Each instance of one type of graph not covered in class


## UI/UX
* User stories:
As a non-profit anti-drug abuse organisation, I want to provide resources about drug abuse related contents all within a single website so that youths at risk, counsellers and educators can access these materials with ease and to raise awareness of the abuse of drugs.

*link to the wireframe: https://app.moqups.com/mLztc8RnHf/view

* Acceptance criteria:
1. Links to renowned drug counselling websites
2. statistic to show drug abuse cases in Singapore
3. A search engine to search drug-related articles with ease


* 5 planes of the UX
1. Surface: The visual design was set to a dark theme, in line with the dark side of drug abuse. The image depicts the chaos and confusion with the needle, indicating the disorientation upon abusing drugs.

2. Skeleton design: The interface was set to a simple yet modern feel to the webpage. As youth has a shorter attention span, the use of less words and more pictorial form will keep them engaged for a longer time. As for the navigation design, all materials can be achieved within 3 clicks, so that the targeted audience will spend a longer time interacting with the website.

3. Structure: The more vital links of drug counselling are kept at the main page, as youths abusing drugs require immediate help and thus, reducing the number of clicks as compared to the statistics and news. 

4. scope: The functional specs of filtering the statistics and getting news articles with the use of search engine to meet the user's need of getting all resources within a website.

5.Strategy: The purpose of the website is to raise awareness of the adverse effecrts of drug abuse and help youth at risk of abusing drugs. The end-user can be more well informed of the effects of abusing drugs, educators can utilise materials to teach youths about the dangers of drugs abuse while the organisation can achieve its goals of raising awareness of drug abuse.

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
