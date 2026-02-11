---
layout: post
title:  "Remote Control Car"
date:   2024-11-25
permalink: "/projects/coding-projects/embeddedSystemRemoteControlCar-post"
# categories: jekyll update

thumbnail: "https://raw.githubusercontent.com/bestcolour/site/refs/heads/master/assets/image/University/EmbeddedRemoteControlCar/front-view.jpg"
alt-text: "Car Front View"
---

<div class="carousel">
    <div class="carousel-container">
        <div class="carousel-container-slide">
            <img src="https://raw.githubusercontent.com/bestcolour/site/refs/heads/master/assets/image/University/EmbeddedRemoteControlCar/back-view.jpg"/>
        </div>
        <div class="carousel-container-slide">
            <img src="https://raw.githubusercontent.com/bestcolour/site/refs/heads/master/assets/image/University/EmbeddedRemoteControlCar/front-view.jpg"/>
        </div>
        <div class="carousel-container-slide">
            <img src="https://raw.githubusercontent.com/bestcolour/site/refs/heads/master/assets/image/University/EmbeddedRemoteControlCar/side-view-2.jpg"/>
        </div>
        <div class="carousel-container-slide">
            <img src="https://raw.githubusercontent.com/bestcolour/site/refs/heads/master/assets/image/University/EmbeddedRemoteControlCar/side-view.jpg"/>
        </div>
        <div class="carousel-container-slide">
            <img src="https://raw.githubusercontent.com/bestcolour/site/refs/heads/master/assets/image/University/EmbeddedRemoteControlCar/top-view.jpg"/>
        </div>
        <div class="carousel-container-slide">
            <img src="https://raw.githubusercontent.com/bestcolour/site/refs/heads/master/assets/image/University/EmbeddedRemoteControlCar/track.jpg"/>
        </div>
    </div>
    <button class="carousel-prev carousel-button" onclick="moveSlide(-1)">&#10094;</button>
    <button class="carousel-next carousel-button" onclick="moveSlide(1)">&#10095;</button>
</div>

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


### <ins>Data Displayed</ins>

The final display of data would hence be as shown below, allowign the user to stay informed of potential future typhoon alerts, weather forecasts and historical data.

<br>
<br>

## Other Images
----
