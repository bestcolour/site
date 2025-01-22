---
layout: post
title:  "Property Price Prediction"
date:   2024-06-23
permalink: "/projects/polytechnic-games/propertyPricePrediction-post"
# categories: jekyll update

thumbnail: "https://raw.githubusercontent.com/bestcolour/site/refs/heads/master/assets/image/HangryGuardians/Tunel%26Ice_edited.jpg"
alt-text: "Property Price Prediction"
---


<!-- https://play.google.com/store/apps/details?id=com.ET.HangryGods&hl=en -->

<iframe width="100%" height="315" src="https://www.youtube.com/embed/o2pJGXzi9xI?si=rh-3ebJ8mEcgKupH" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>

<br>
<br>

## Description
----
<br>
A property selling/rent web app, accomplished in year 1 trimester 3 of my university period, that allows users to list properties that they want to sell or rent with the help of machine learning AI predicting prices.


<br>
<br>



## Features
----
<br>
- Database Management (MySQL)
- Data Cleaning
- Machine Learning (ML)


<br>

## Reflection
----
<br>

**Language Used:**
Python

**Software/Tools Used:**
Django, Pandas, sklearn, MySQL

**Role:**
Data Sourcing and Cleaning, ML Model Implementation, Model Testing

<br>
<br>

### <ins>Introduction</ins>

This project was developed as part of a project for our Database Management module in year 1 of university. 

<br>

Our project aims to provide home buyers and renters an idea of the market price for their type of properties before making a decision. As such, we have developed a web app that utilizes machine learning algorithms to predict the price of properties based on the different attributes selected.

<br>

My role in the project was thus data sourcing, cleaning and ML model implementation.

<br>
<br>

### <ins>Data Sourcing</ins>

The dataset that was used in this project was the "Melbourne Housing Snapshot" from [Kaggle](https://www.kaggle.com/datasets/dansbecker/melbourne-housing-snapshot)

<br>

The data includes Melbourne's real estate scenario, listing a variety of statistics for each home, including "Suburb, Type, No. of rooms," among other things. The initial downloaded dataset contained 21 columns(fields).

<br>
<br>

### <ins>Data Cleaning & Processing</ins>
To meet the requirements of our program, additional data are manually generated, such as user information and rent costs. Additionally, fields like "Method" have been changed to meet the requirements of our application. 

<br>

Fields like "Method" have been changed to meet the requirements of our application.

<br>

To add on, there were columns in the downloaded dataset that the team believed ought to be divided into a different dataset. For instance, there was a column called "SellerG" in the downloaded dataset. The team believed that a property should be moved to another dataset called "Listing" rather than having a seller.

<br>

Lastly, in order to produce a more comprehensive and reliable dataset, entries that were missing data from certain columns also had their information manually produced.

<br>
<br>

### <ins>Database Management</ins>

<br>

For managing our data, we utilised Azure MySQL database to store and retrieve our data within our backend Django server. Django also has an ORM  and Django Models to ensure consistency between the database and the backend server, hence making our development easier and human-error resistant.

<br>
<br>

### <ins>Machine Learning</ins>

For the Machine Learning aspect, we  made use of the categorical features, 'suburb',  'region', 'council_area', 'property_type', from the database and the numerical features of 'distance_from_cbd', 'longitude', 'latitude', 'year_built', 'land_size', 'postal_code', 'property_count', 'bedroom_no', 'bathroom_no' and 'car_parking_no' to train the model. The categorical features are one-hot encoded into numerical values before normalizing all features' values.  The target feature of the model is the “Price” column of the dataset in which after the model’s training, results in a prediction score of 0.8 (rounded).






<br>
<br>
## Images
----
<br>


<div class="carousel">
    <div class="carousel-container">
        <div class="carousel-container-slide">
            <img width="100%" src="https://raw.githubusercontent.com/bestcolour/site/refs/heads/master/assets/image/HangryGuardians/SplashArt.jpg"/>
        </div>
        <div class="carousel-container-slide">
            <img width="100%" src="https://raw.githubusercontent.com/bestcolour/site/refs/heads/master/assets/image/HangryGuardians/Tutorial.jpg"/>
        </div>
        <div class="carousel-container-slide">
            <img width="100%" src="https://raw.githubusercontent.com/bestcolour/site/refs/heads/master/assets/image/HangryGuardians/Star.jpg"/>
        </div>
        <div class="carousel-container-slide">
            <img width="100%" src="https://raw.githubusercontent.com/bestcolour/site/refs/heads/master/assets/image/HangryGuardians/Ice.jpg"/>
        </div>
        <div class="carousel-container-slide">
            <img width="100%" src="https://raw.githubusercontent.com/bestcolour/site/refs/heads/master/assets/image/HangryGuardians/Tunel%26Ice.jpg"/>
        </div>
        <div class="carousel-container-slide">
            <img width="100%" src="https://raw.githubusercontent.com/bestcolour/site/refs/heads/master/assets/image/HangryGuardians/Tunnel.jpg"/>
        </div>
        <div class="carousel-container-slide">
            <img width="100%" src="https://raw.githubusercontent.com/bestcolour/site/refs/heads/master/assets/image/HangryGuardians/Ice%26Wind.jpg"/>
        </div>
        <div class="carousel-container-slide">
            <img width="100%" src="https://raw.githubusercontent.com/bestcolour/site/refs/heads/master/assets/image/HangryGuardians/Wind%26TUnnel.jpg"/>
        </div>
    </div>
    <button class="carousel-prev carousel-button" onclick="moveSlide(-1)">&#10094;</button>
    <button class="carousel-next carousel-button" onclick="moveSlide(1)">&#10095;</button>
</div>
