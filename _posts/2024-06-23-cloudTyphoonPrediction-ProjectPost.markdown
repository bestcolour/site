---
layout: post
title:  "Typhoon Prediction System"
date:   2024-11-05
permalink: "/projects/coding-projects/cloudTyphoonPrediction-post"
# categories: jekyll update

thumbnail: "https://raw.githubusercontent.com/bestcolour/site/refs/heads/master/assets/image/University/TyphoonPrediction/Map_with_layers.png"
alt-text: "Property Price Prediction Catalogue"
---
<img width="100%" src="https://raw.githubusercontent.com/bestcolour/site/refs/heads/master/assets/image/University/TyphoonPrediction/Map_with_layers.png"/>

<br>

<!-- Github button -->
<a href="https://github.com/DB-OS-Cyber-Sec/cloud" target="_blank">
<img src="https://raw.githubusercontent.com/bestcolour/site/refs/heads/master/assets/image/Images/Logos/GithubLogo.jpg" 
         alt="github icon" 
         style="width: 50px; height: auto; border: 2px solid #000; border-radius: 10px; box-shadow: 2px 2px 12px rgba(0, 0, 0, 0.5); margin: 0 auto; display: block;">
</a>



<br>
<br>

## Description
----
<br>
The project focuses on the environmental monitoring and disaster prediction domain, which involves processing and analyzing real-time data from distributed sources.

<br>

The system will monitor parameters such as temperature, humidity and air quality to predict with AI the probability of tropical typhoons in the Philippines before advising users via email on measures to take. As an AI model trained on historical data was used to forecast the tropical cyclone as compared to the traditional physics model, predictions were made more effectively and accurately.



<br>
<br>



## Features
----
<br>

| - Microservices Architecture   | ||| | - Real-time & Historical Data Handling | 
| | ||| | | 
| - Machine Learning Integration | ||| | - Scalability and Resilience           | 
| | ||| | | 
| - User-Centric Design          | ||| | - Notification System                  | 
| | ||| | | 
| - Dockerisation & K8s          | ||| | - gRPC                                 | 
| | ||| | | 
| - Server-Sent Events           | ||| | - Event Driven Architecture            | 



<br>

## Reflection
----
<br>

**Language Used:**
Python, HTML, TypeScript

<br>

**Software/Tools Used:**
gRPC, K8s, Docker, Apache Kafka, NVIDIA NIM's Meta Llama-3.2b-Instruct, Flask, MongoDB, React, Nodemailer, SMTP, Next.js, Fastify, Tomorrow.io Weather API,

<br>

**Role:**
Data Engineering, Database Management, Data Sourcing & Scraping, Backend

<br>
<br>

### <ins>Introduction</ins>

This project was done in Year 2 Trimester 1 of our university as a project for Cloud & Distributed Computing module. 

<br>

The project aims to utilise cloud technologies and microservices with AI to predict incoming typhoons in the Philippines. Hence, we have developed a web app that uses real-time data from a weather API (Tomorrow.io) that would feed information to a machine learning model (Llama-3.2b-Instruct) to predict the next typhoon that may occur in the future. Email notifications would be sent to any subscribed users based on an event architecture as a proof of concept.

<br>

I played the part in populating the database with historical data (weather variables and typhoon reports) via webscraping and API calls. I was also tasked with setting up data pipelines between microservices (AI Component & Kafka Topic for both before and after AI prediction is done) via gRPC. 

<br>

From this project, I have learnt a lot about designing the a flexible and resilient architecture that is based on microservices and distrubuted computing.

<br>
<br>
<br>

### <ins>Microservice Containerisation</ins>

<br>

<img width="100%" src="https://raw.githubusercontent.com/bestcolour/site/refs/heads/master/assets/image/University/TyphoonPrediction/Dockerized_Technologies.png"/>

<br>

Our microservices and components are all containerised in Docker and orchestrated by K8s to ensure a more resilient web application when it is placed under many request calls. We made use of Horizontal Pod Autoscaler to ensure that there was sufficient instances of each microservice available to replace any component that may have failed.

<br>
<br>
<br>


### <ins>Database Backend Integration</ins>
<br>
<div class="carousel-container-slide">
    <img width="100%" src="https://raw.githubusercontent.com/bestcolour/site/refs/heads/master/assets/image/University/TyphoonPrediction/Mongodb.png"/>
</div>

<br>

We utilised MongoDB to serve as our database in collecting historical typhoon data as well as the subscribers' (for the typhoon) data. There will be a Fastify server responsible for reading and modifying the data.


<br>
<br>

### <ins>Producer Consumer Graph</ins>
<br>
<div class="carousel-container-slide">
    <img width="100%" src="https://raw.githubusercontent.com/bestcolour/site/refs/heads/master/assets/image/University/TyphoonPrediction/producer_consumer.png"/>
</div>

The main data pipelining occurs in within this part of the project as described with a producer consumer graph. The real-time weather data drawn from Tommorrow.io (as the producer) will be streamed into a Kafka topic before being passed to the AI microservice (as a consumer) via gRPC and to the Next.js web app to be displayed via Server Side Events (SSE).

<br>

The AI microservice will now become the producer and feed the prediction results (which are split into two sets of data, weather forecast and typhoon updates) via gRPC to the Kafka microservice to be streamed for display. 

<br>

If necessary, an email regarding a potential typhoon will be mailed via SMTP to subscribed users.

<br>
<br>


### <ins>Data Displayed</ins>

The final display of data would hence be as shown below, allowign the user to stay informed of potential future typhoon alerts, weather forecasts and historical data.

<br>
<br>

#### Historical Data

<img width="100%" src="https://raw.githubusercontent.com/bestcolour/site/refs/heads/master/assets/image/University/TyphoonPrediction/historicalData1.png"/>

<br>
<br>

#### Real-Time Data

<img width="100%" src="https://raw.githubusercontent.com/bestcolour/site/refs/heads/master/assets/image/University/TyphoonPrediction/Map_with_API_call.png"/>

<br>
<br>

#### Notifications

<img width="100%" src="https://raw.githubusercontent.com/bestcolour/site/refs/heads/master/assets/image/University/TyphoonPrediction/Email_Notification_1.png"/>

<img width="100%" src="https://raw.githubusercontent.com/bestcolour/site/refs/heads/master/assets/image/University/TyphoonPrediction/Email_Notification_2.png"/>

<img width="100%" src="https://raw.githubusercontent.com/bestcolour/site/refs/heads/master/assets/image/University/TyphoonPrediction/Email_Notification_3.png"/>

<br>
<br>
<br>

## Other Images
----
<div class="carousel">
    <div class="carousel-container">
        <div class="carousel-container-slide">
            <img src="https://raw.githubusercontent.com/bestcolour/site/refs/heads/master/assets/image/University/TyphoonPrediction/Map.png"/>
        </div>
        <div class="carousel-container-slide">
            <img src="https://raw.githubusercontent.com/bestcolour/site/refs/heads/master/assets/image/University/TyphoonPrediction/Map_with_API_call.png"/>
        </div>
        <div class="carousel-container-slide">
            <img src="https://raw.githubusercontent.com/bestcolour/site/refs/heads/master/assets/image/University/TyphoonPrediction/Map_with_layers.png"/>
        </div>
        <div class="carousel-container-slide">
            <img src="https://raw.githubusercontent.com/bestcolour/site/refs/heads/master/assets/image/University/TyphoonPrediction/historicalData1.png"/>
        </div>
        <div class="carousel-container-slide">
            <img src="https://raw.githubusercontent.com/bestcolour/site/refs/heads/master/assets/image/University/TyphoonPrediction/Email_Notification_1.png"/>
        </div>
        <div class="carousel-container-slide">
            <img src="https://raw.githubusercontent.com/bestcolour/site/refs/heads/master/assets/image/University/TyphoonPrediction/Email_Notification_2.png"/>
        </div>
        <div class="carousel-container-slide">
            <img src="https://raw.githubusercontent.com/bestcolour/site/refs/heads/master/assets/image/University/TyphoonPrediction/Email_Notification_3.png"/>
        </div>
        <div class="carousel-container-slide">
            <img src="https://raw.githubusercontent.com/bestcolour/site/refs/heads/master/assets/image/University/TyphoonPrediction/Dockerized_Technologies.png"/>
        </div>
        <div class="carousel-container-slide">
            <img src="https://raw.githubusercontent.com/bestcolour/site/refs/heads/master/assets/image/University/TyphoonPrediction/Mongodb.png"/>
        </div>
        <div class="carousel-container-slide">
            <img src="https://raw.githubusercontent.com/bestcolour/site/refs/heads/master/assets/image/University/TyphoonPrediction/SystemArchitecture.jpg"/>
        </div>
        <div class="carousel-container-slide">
            <img src="https://raw.githubusercontent.com/bestcolour/site/refs/heads/master/assets/image/University/TyphoonPrediction/producer_consumer.png"/>
        </div>
        <div class="carousel-container-slide">
            <img src="https://raw.githubusercontent.com/bestcolour/site/refs/heads/master/assets/image/University/TyphoonPrediction/publisher_subscriber_model.png"/>
        </div>
        <div class="carousel-container-slide">
            <img src="https://raw.githubusercontent.com/bestcolour/site/refs/heads/master/assets/image/University/TyphoonPrediction/Typhoon_History.png"/>
        </div>
        <div class="carousel-container-slide">
            <img src="https://raw.githubusercontent.com/bestcolour/site/refs/heads/master/assets/image/University/TyphoonPrediction/Llama_Core_Efficiency.png"/>
        </div>
        <div class="carousel-container-slide">
            <img src="https://raw.githubusercontent.com/bestcolour/site/refs/heads/master/assets/image/University/TyphoonPrediction/Prompt_Engineering.png"/>
        </div>
    </div>
    <button class="carousel-prev carousel-button" onclick="moveSlide(-1)">&#10094;</button>
    <button class="carousel-next carousel-button" onclick="moveSlide(1)">&#10095;</button>
</div>
