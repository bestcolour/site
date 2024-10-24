---
layout: post
title:  "Machine Learning<br>Tic Tac Toe"
date:   2023-11-26
permalink: "/projects/coding-projects/MLtictactoe-post"
# categories: jekyll update

thumbnail: "https://raw.githubusercontent.com/bestcolour/site/refs/heads/master/assets/image/HangryGuardians/Tunel%26Ice_edited.jpg"
alt-text: "ML TicTacToe"
---

<iframe width="100%" height="315" src="https://www.youtube.com/embed/fn4uVmEv2sw?si=7tm4Pz8t3udfNs-Q" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>

<br>
<br>

<!-- Download exe button -->
## Download or More Info
***
<br>

<div style="display: flex; justify-content: center; align-items: center; gap: 10px;">
    <a href="https://github.com/bestcolour/MachineLearning_TicTacToe_Uni_Y1T1" target="_blank">
        <img src="https://raw.githubusercontent.com/bestcolour/site/refs/heads/master/assets/image/Images/Logos/GithubLogo.jpg" 
             alt="github icon" 
             style="width: 50px; height: auto; border: 2px solid #000; border-radius: 10px; box-shadow: 2px 2px 12px rgba(0, 0, 0, 0.5);">
    </a>
</div>



## Description
----
<br>

This machine learning Tic Tac Toe game project done in my first year of my university days.



<br>
<br>



## Features
----
<br>
- Singleplayer
- Two Player Mode
- Different levels of AI difficulty
- Logistic Regression Model
- Minmax Algorithm



<br>

## Reflection
----
<br>
**Language Used:**
C

**Software Used:**
[raylib](https://www.raylib.com/)

**Role:**
Logistic Regression machine learning AI

<br>

As part of my Programming Methodology module in year 1, our group embarked on our journey to develop a tic tac toe game. To make the AI stand out (and to grasp more marks), we decided to include a Machine Learning AI as part of the difficulty levels in the singleplayer mode of this game.

<br>


The first challenge I had encountered was selecting the correct model to use for the AI. As different models had different prediction rates, I chose the Logistic Regression model to ensure that the AI was sufficiently easy to beat as compared to the Minmax algorithm was impossible to beat.

<br>
The next issue was handling the data and transforming it into something readable by the learning model.

<br>

--insert pic of data set--

<br>

I did some digging around and found the idea of converting the data into an integer array, representing the current board's gamestate. These gamestates could then be assigned to a value to influence the model's next decision as "the next best choice".

<br>

After which, I started to train the model to generate its weights so that the Logistic Model could be a medium leveled opponent for the player.

--insert code of training code ---

<br>

Then, I tested the model's accuracy in choosing "the next best move" and got the results:

--insert code of results ---


Finally I concluded the AI by writing its behaviour when it is playing its turn so that the rest of the team could merge this AI more easily into the main game:

--insert code of main_machine_learning_ai ---


//reflection
As this is my first time handling machine learning related AIs. I felt hesitant with doing the 
<br>



<br>
<br>
## Images
----
<br>

<img width="100%" src="https://raw.githubusercontent.com/bestcolour/site/refs/heads/master/assets/image/HangryGuardians/SplashArt.jpg"/>
<img width="100%" src="https://raw.githubusercontent.com/bestcolour/site/refs/heads/master/assets/image/HangryGuardians/Tutorial.jpg"/>
<img width="100%" src="https://raw.githubusercontent.com/bestcolour/site/refs/heads/master/assets/image/HangryGuardians/Star.jpg"/>
<img width="100%" src="https://raw.githubusercontent.com/bestcolour/site/refs/heads/master/assets/image/HangryGuardians/Ice.jpg"/>
<img width="100%" src="https://raw.githubusercontent.com/bestcolour/site/refs/heads/master/assets/image/HangryGuardians/Tunel%26Ice.jpg"/>
<img width="100%" src="https://raw.githubusercontent.com/bestcolour/site/refs/heads/master/assets/image/HangryGuardians/Tunnel.jpg"/>
<img width="100%" src="https://raw.githubusercontent.com/bestcolour/site/refs/heads/master/assets/image/HangryGuardians/Ice%26Wind.jpg"/>
<img width="100%" src="https://raw.githubusercontent.com/bestcolour/site/refs/heads/master/assets/image/HangryGuardians/Wind%26TUnnel.jpg"/>