---
layout: post
title:  "School Learning Management System"
date:   2024-07-29
permalink: "/projects/coding-projects/schoolLearningManagementSystem-post"
# categories: jekyll update

thumbnail: "https://raw.githubusercontent.com/bestcolour/site/refs/heads/master/assets/image/University/PropertyPricePrediction/ImageCarousell/detailspage1.png"
alt-text: "Property Price Prediction Catalogue"
---

<img width="100%" src="https://raw.githubusercontent.com/bestcolour/site/refs/heads/master/assets/image/University/PropertyPricePrediction/ImageCarousell/detailspage1.png"/>

<iframe width="100%" height="350" src="https://www.youtube.com/embed/SDEfX5aowhY?si=nh6RZ8AnFaSYK_YS" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>

<br>
<br>

## Description
----
<br>
This project is a property selling/rent web app, accomplished in year 1 trimester 3 of my university period, that allows users to list properties that they want to sell or rent with the help of machine learning AI predicting prices.


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

<br>

**Software/Tools Used:**
Django, Pandas, sklearn, MySQL

<br>

**Role:**
Data Sourcing and Cleaning, ML Model Implementation, Model Testing

<br>

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

The dataset that was used in this project was the "Melbourne Housing Snapshot" from <a href="https://www.kaggle.com/datasets/dansbecker/melbourne-housing-snapshot" target="_blank">Kaggle</a>

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
<br>

### <ins>Database Management</ins>
For managing our data, we utilised Azure MySQL database to store and retrieve our data within our backend Django server. Django also has an ORM  and Django Models to ensure consistency between the database and the backend server, hence making our development easier and human-error resistant.

<br>
<br>
<br>

### <ins>Machine Learning</ins>

<br>

#### <i><ins>Machine Learning - Features</ins></i>
For the Machine Learning aspect, the following categorical features were used to train the model.

<br>

| Suburb | |||| | Region |
| Council Area | |||| | Property Type |
| Distance from CBD | |||| | No. bathrooms |
| No. of Car Park slots | |||| | Longitude |
| Latitude | |||| | Year Built |
| Land Size | |||| | Postal Code |
| Property Count | |||| | No. of Bedroom |

<br>

The categorical features are one-hot encoded into numerical values before normalizing all features' values. The target feature of the model is the “Price” column of the dataset in which after the model's training, results in a prediction score of 0.8 (rounded).

<br>

The features were then normalised based on their minimum and maximum ranges to a value of between 0 and 1 to ensure that all features have all the same scale. Although it is not entirely necessary to minmax-normalise these features, it is important to do so for the model used is the XGBRegressor model, tuned with the hyperparameters learning_rate and max_depth.


<br>
<br>
<br>

#### <i><ins>Machine Learning - Model</ins></i>

The model used was the XGBRegressor model from the sklearn library with fine tuned hyperparameters to predict prices. The hyperparameters are:

<br>

**n_estimators:** This determines how many trees will be build in the model with the idea to capture the complex relationship between the features like Number of Bedrooms, Land Size, Distance from CBD with the price.

<br>

**learning_rate:** To control how much each tree contributes to the final model. It is wise to put this a lower value to make sure the model is trained slower but with more care to ensure better generalization of data.

<br>

**max_depth:** This governs the depth of each tree. Deeper trees mean more complexity captured for features like Year Built, Land Size, and Property Type but having the depth set too high would also sometimes lead to wastes. 

<br>

**reg_lambda (L2 regularization):** Regularization encourages the model to focus on the most important features (like Land Size, Distance from CBD, or No. of Bedrooms) and not overemphasize noise or irrelevant patterns (like the Postal Code or Longitude).

<br>

Tuning these hyperparameters at high values could lead to overfitting. Hence it is best if a balance could be struck to achieve the best results.

<br>
<br>
<br>

#### <i><ins>Machine Learning - Training & Testing</ins></i>
The dataset is split into two subsets to accomodate the training & testing phases.

<br>
<br>

#### <i><ins>Machine Learning - Results</ins></i>
<img width="100%" src="https://raw.githubusercontent.com/bestcolour/site/refs/heads/master/assets/image/University/PropertyPricePrediction/best_test.png"/>

<br>

Seeing that the **Best Score = 0.807** is generally quite good for many real-world regression problems

<br>

<img width="100%" src="https://raw.githubusercontent.com/bestcolour/site/refs/heads/master/assets/image/University/PropertyPricePrediction/statistics.png"/>

<br>

Seeing that the median of property prices is $903,000, having the **Mean Absolute Error ≈ 162090.27** is relatively good.

<br>
<br>


### <ins>Prediction On Frontend</ins>

<img width="75%" src="https://raw.githubusercontent.com/bestcolour/site/refs/heads/master/assets/image/University/PropertyPricePrediction/ImageCarousell/detailspage1.png"/>
<img width="75%" src="https://raw.githubusercontent.com/bestcolour/site/refs/heads/master/assets/image/University/PropertyPricePrediction/ImageCarousell/detailspage2.png"/>

<br>

As such, this is the end result of how the property price would be viewed by the users based on the details of the property.



<br>
<br>



## Images
----
<div class="carousel">
    <div class="carousel-container">
        <div class="carousel-container-slide">
            <img src="https://github.com/bestcolour/site/blob/master/assets/image/University/SchoolLearningManagementSystem/Adding%20Content%20to%20Course.png?raw=true"/>
            <br>
            <i>Add Content Page</i>
        </div>
        <div class="carousel-container-slide">
            <img src="https://github.com/bestcolour/site/blob/master/assets/image/University/SchoolLearningManagementSystem/Admin%20Delete%20Course.png?raw=true"/>
            <br>
            <i>Add Content Page</i>
        </div>
        <div class="carousel-container-slide">
            <img src="https://github.com/bestcolour/site/blob/master/assets/image/University/SchoolLearningManagementSystem/Admin%20Delete%20User.png?raw=true"/>
            <br>
            <i>Add Content Page</i>
        </div>
        <div class="carousel-container-slide">
            <img src="https://github.com/bestcolour/site/blob/master/assets/image/University/SchoolLearningManagementSystem/Communication%20Chat.png?raw=true"/>
            <br>
            <i>Add Content Page</i>
        </div>
        <div class="carousel-container-slide">
            <img src="https://github.com/bestcolour/site/blob/master/assets/image/University/SchoolLearningManagementSystem/Communication%20List%20Chat%20Delete.png?raw=true"/>
            <br>
            <i>Add Content Page</i>
        </div>
        <div class="carousel-container-slide">
            <img src="https://github.com/bestcolour/site/blob/master/assets/image/University/SchoolLearningManagementSystem/Communication%20List%20Chat%20Open.png?raw=true"/>
            <br>
            <i>Add Content Page</i>
        </div>
        <div class="carousel-container-slide">
            <img src="https://github.com/bestcolour/site/blob/master/assets/image/University/SchoolLearningManagementSystem/Communication.png?raw=true"/>
            <br>
            <i>Add Content Page</i>
        </div>
        <div class="carousel-container-slide">
            <img src="https://github.com/bestcolour/site/blob/master/assets/image/University/SchoolLearningManagementSystem/Courses.png?raw=true"/>
            <br>
            <i>Add Content Page</i>
        </div>
        <div class="carousel-container-slide">
            <img src="https://github.com/bestcolour/site/blob/master/assets/image/University/SchoolLearningManagementSystem/Delete%20Account.png?raw=true"/>
            <br>
            <i>Add Content Page</i>
        </div>
        <div class="carousel-container-slide">
            <img src="https://github.com/bestcolour/site/blob/master/assets/image/University/SchoolLearningManagementSystem/Edit%20Profile.png?raw=true"/>
            <br>
            <i>Add Content Page</i>
        </div>
        <div class="carousel-container-slide">
            <img src="https://github.com/bestcolour/site/blob/master/assets/image/University/SchoolLearningManagementSystem/Login%20Fail.png?raw=true"/>
            <br>
            <i>Add Content Page</i>
        </div>
        <div class="carousel-container-slide">
            <img src="https://github.com/bestcolour/site/blob/master/assets/image/University/SchoolLearningManagementSystem/Login.png?raw=true"/>
            <br>
            <i>Add Content Page</i>
        </div>
        <div class="carousel-container-slide">
            <img src="https://github.com/bestcolour/site/blob/master/assets/image/University/SchoolLearningManagementSystem/Payment%20Cancellation%202.png?raw=true"/>
            <br>
            <i>Add Content Page</i>
        </div>
        <div class="carousel-container-slide">
            <img src="https://github.com/bestcolour/site/blob/master/assets/image/University/SchoolLearningManagementSystem/Payment%20Cancellation%203.png?raw=true"/>
            <br>
            <i>Add Content Page</i>
        </div>
        <div class="carousel-container-slide">
            <img src="https://github.com/bestcolour/site/blob/master/assets/image/University/SchoolLearningManagementSystem/Payment%20Cancellation.png?raw=true"/>
            <br>
            <i>Add Content Page</i>
        </div>
        <div class="carousel-container-slide">
            <img src="https://github.com/bestcolour/site/blob/master/assets/image/University/SchoolLearningManagementSystem/Payment%20Process.png?raw=true"/>
            <br>
            <i>Add Content Page</i>
        </div>
        <div class="carousel-container-slide">
            <img src="https://github.com/bestcolour/site/blob/master/assets/image/University/SchoolLearningManagementSystem/Payment%20Renewal%202.png?raw=true"/>
            <br>
            <i>Add Content Page</i>
        </div>
        <div class="carousel-container-slide">
            <img src="https://github.com/bestcolour/site/blob/master/assets/image/University/SchoolLearningManagementSystem/Payment%20Renewal%203.png?raw=true"/>
            <br>
            <i>Add Content Page</i>
        </div>
        <div class="carousel-container-slide">
            <img src="https://github.com/bestcolour/site/blob/master/assets/image/University/SchoolLearningManagementSystem/Payment%20Renewal.png?raw=true"/>
            <br>
            <i>Add Content Page</i>
        </div>
        <div class="carousel-container-slide">
            <img src="https://github.com/bestcolour/site/blob/master/assets/image/University/SchoolLearningManagementSystem/Quiz%20Creation.png?raw=true"/>
            <br>
            <i>Add Content Page</i>
        </div>
        <div class="carousel-container-slide">
            <img src="https://github.com/bestcolour/site/blob/master/assets/image/University/SchoolLearningManagementSystem/Quiz%20Display%202.png?raw=true"/>
            <br>
            <i>Add Content Page</i>
        </div>
        <div class="carousel-container-slide">
            <img src="https://github.com/bestcolour/site/blob/master/assets/image/University/SchoolLearningManagementSystem/Quiz%20Display.png?raw=true"/>
            <br>
            <i>Add Content Page</i>
        </div>
        <div class="carousel-container-slide">
            <img src="https://github.com/bestcolour/site/blob/master/assets/image/University/SchoolLearningManagementSystem/Quiz%20Results.png?raw=true"/>
            <br>
            <i>Add Content Page</i>
        </div>
        <div class="carousel-container-slide">
            <img src="https://github.com/bestcolour/site/blob/master/assets/image/University/SchoolLearningManagementSystem/Subscription%20Plan.png?raw=true"/>
            <br>
            <i>Add Content Page</i>
        </div>
        <div class="carousel-container-slide">
            <img src="https://github.com/bestcolour/site/blob/master/assets/image/University/SchoolLearningManagementSystem/Subscription%20Restriction.png?raw=true"/>
            <br>
            <i>Add Content Page</i>
        </div>
        <div class="carousel-container-slide">
            <img src="https://github.com/bestcolour/site/blob/master/assets/image/University/SchoolLearningManagementSystem/Video%20Call.png?raw=true"/>
            <br>
            <i>Add Content Page</i>
        </div>
        <div class="carousel-container-slide">
            <img src="https://github.com/bestcolour/site/blob/master/assets/image/University/SchoolLearningManagementSystem/View%20Chat%20Clear%20History.png?raw=true"/>
            <br>
            <i>Add Content Page</i>
        </div>
        <div class="carousel-container-slide">
            <img src="https://github.com/bestcolour/site/blob/master/assets/image/University/SchoolLearningManagementSystem/View%20Chat%20Video%20Call.png?raw=true"/>
            <br>
            <i>Add Content Page</i>
        </div>
        <div class="carousel-container-slide">
            <img src="https://github.com/bestcolour/site/blob/master/assets/image/University/SchoolLearningManagementSystem/View%20Profile.png?raw=true"/>
            <br>
            <i>Add Content Page</i>
        </div>
        <div class="carousel-container-slide">
            <img src="https://github.com/bestcolour/site/blob/master/assets/image/University/SchoolLearningManagementSystem/Viewing%20Content%20Image.png?raw=true"/>
            <br>
            <i>Add Content Page</i>
        </div>
        <div class="carousel-container-slide">
            <img src="https://github.com/bestcolour/site/blob/master/assets/image/University/SchoolLearningManagementSystem/Viewing%20Content%20PDF.png?raw=true"/>
            <br>
            <i>Add Content Page</i>
        </div>
        <div class="carousel-container-slide">
            <img src="https://github.com/bestcolour/site/blob/master/assets/image/University/SchoolLearningManagementSystem/Viewing%20Content%20Video.png?raw=true"/>
            <br>
            <i>Add Content Page</i>
        </div>
        <div class="carousel-container-slide">
            <img src="https://github.com/bestcolour/site/blob/master/assets/image/University/SchoolLearningManagementSystem/Viewing%20Course.png?raw=true"/>
            <br>
            <i>Add Content Page</i>
        </div>
        <div class="carousel-container-slide">
            <img src="https://github.com/bestcolour/site/blob/master/assets/image/University/SchoolLearningManagementSystem/Viewing%20Lessons.png?raw=true"/>
            <br>
            <i>Add Content Page</i>
        </div>
    </div>
    <button class="carousel-prev carousel-button" onclick="moveSlide(-1)">&#10094;</button>
    <button class="carousel-next carousel-button" onclick="moveSlide(1)">&#10095;</button>
</div>
