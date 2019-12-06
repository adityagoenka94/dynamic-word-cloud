# DynamicWordCloud

This project was generated with [Angular CLI](https://github.com/angular/angular-cli) version 7.0.4.
<br/>
This project is used to generate Word Cloud dynamically.

## Steps

* Clone the project
* Within the root folder of the project, run <b>npm install</b>.
* To start the server, run <b>ng serve</b>.
* The server starts at <b>localhost:4200</b>.

## Process

The Word Cloud in this project is generated dynamically using Data-Driven Documents(d3) and a custom javascript file created created. The custom javascript file <b>wordCloudModule</b> exposes a function <b>wordCloudGenerator</b>. This function expects an object containing 2 mandatory parametes <b>containerid</b> which is the id of the container in which you want to display the Word Cloud and <b>wordclouddata</b> which is the data of the word cloud.
  The function has 2 optional parametes also. One is <b>stopwords</b> which are the words you don't want to appear in your word cloud but exists in the provided data and the second is the <b>padding</b> which is the padding for the word cloud if needed.
  
## Sample Data

Sample data used to create the word cloud :
<b>https://api.myjson.com/bins/80zl0</b> and <b>https://api.myjson.com/bins/12o1gk</b>.
  
