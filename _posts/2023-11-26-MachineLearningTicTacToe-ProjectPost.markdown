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
---
<br>

This machine learning Tic Tac Toe game project done in my first year of my university days.



<br>
<br>



## Features
---
<br>
- Singleplayer
- Two Player Mode
- Different levels of AI difficulty
- Logistic Regression Model
- Minimax Algorithm



<br>

## Reflection
---
<br>
**Language Used:**
C

**Software Used:**
[raylib](https://www.raylib.com/)

**Role:**
Logistic Regression ML AI

<br>

### Introduction
As part of my Programming Methodology module in year 1, our group embarked on our journey to develop a tic tac toe game.

<br>

To make the AI stand out (and to grasp more marks), we decided to include a Machine Learning AI as part of the difficulty levels in the singleplayer mode of this game.

<br>

The first challenge I had encountered was selecting the correct model to use for the AI.

After some [research](https://vpapaluta06.medium.com/how-i-teached-sklearn-algorithm-to-play-tic-tac-toe-2b50aeea19e), I chose the Logistic Regression model to ensure that the AI was sufficiently easy to beat. 

(220/575 * 100 ≈ 38%)

<br>

<img width="100%" src="https://miro.medium.com/v2/resize:fit:2000/format:webp/1*rPhPAs9wYVgnnuXQstynsw.png"/>

<a href="https://vpapaluta06.medium.com/how-i-teached-sklearn-algorithm-to-play-tic-tac-toe-2b50aeea19e" target="_blank"><i>Source</i><a>


<br>
<br>
<br>

### Data Processing
The next issue was handling the data and transforming it into something readable by the learning model.

<br>

<img width="50%" src="https://raw.githubusercontent.com/bestcolour/site/refs/heads/master/assets/image/University/ML_TicTacToe/data.png"/>

*Tic Tac Toe Dataset*

<br>
<br>
<br>

I did some digging around and found the idea of converting the data into an integer array, representing the current board's gamestate.These gamestates could then be assigned to a value to influence the model's next decision as "the next best choice".

<br>

<img width="50%" src="https://raw.githubusercontent.com/bestcolour/site/refs/heads/master/assets/image/University/ML_TicTacToe/data_extract_1.png"/>
<img width="100%" src="https://raw.githubusercontent.com/bestcolour/site/refs/heads/master/assets/image/University/ML_TicTacToe/data_extract_2.png"/>

<br>
<br>
<br>

### Training Model
After which, I started to train the model to generate its weights so that the Logistic Model could be a medium leveled opponent for the player.

<img width="50%" src="https://raw.githubusercontent.com/bestcolour/site/refs/heads/master/assets/image/University/ML_TicTacToe/trained_model_weights.png"/>

<br>
<br>
<br>

### Testing the model

After training the model, a test was done to see the accuracy of the trained weights.

<img width="100%" src="https://raw.githubusercontent.com/bestcolour/site/refs/heads/master/assets/image/University/ML_TicTacToe/TestSet%20Test.png"/>

<br>
<br>
<br>

### Connecting to the rest
Finally I concluded the AI by writing its behaviour when it is playing its turn so that the rest of the team could merge this AI more easily into the main game:

<div class="code-block">
<i>main_machine_learning_ai.h</i>
    <button class="code-block-copy-btn" onclick="code_block_copyCode(this)">Copy</button>
    <div class="code-block-feedback"></div>
    <pre class="code-block-content">
// The file that communicates with the game system on the next move the AI is going to make.
#include &lt;stdio.h&gt;
#include "PrepareData/prepare_data.h"
#include "TrainModel/train_model.h"
#include "training_settings.h"

#pragma region === Defitinition & Declaration ===

// Determines if this ML AI is initialised or not. 1 = true, 0 = false
static int _isInitialised = 0;

// Initializes the machine learning ai values and model. Will retrain model if model is missing.
void Init_MachineLearning_AI();

// Pass in current gamestate and returns chosen tile via pointers
void Decide_Next_Move(int gridSize, int currentBoard[gridSize][gridSize], int *x, int *y);
#pragma endregion

void Init_MachineLearning_AI()
{
    // Machine learning ai already initialised, return code flow
    if (_isInitialised == 1)
        return;

    _isInitialised = 1;

    // Initialise data prep
    // we will use the symbol from the settings ('O' in this case)
    Init_Data_Prep(SETTINGS_NUM_OF_DATALINES, SETTINGS_DATAFILE_PATH,SETTINGS_SYMBOL_THAT_AI_USE); 

    // Initialise Model Trainer and check for any missing values (1 means nothing wrong)
    if (Init_Model_Trainer(SETTINGS_NUM_OF_DATALINES, GAMESTATE_AS_INT_SIZE, SETTINGS_LEARNING_RATE, SETTINGS_ITERATIONS, SETTINGS_TRAINED_MODEL_FILEPATH) == 1)
        return;

    //--- Values missing from Model Trainer ---
    TicTacData *trainingData_pointer = Read_Data();                                                 // Grab data from data file
    FlatTicTacData flatData = Flatten_TicTac_Data(trainingData_pointer, SETTINGS_NUM_OF_DATALINES); // Make data usable for training model
    Retrain_Model(flatData.allGameStateAsInt_pointer, flatData.allIsPositive_pointer);              // Retrain model

    free(trainingData_pointer); // Free memory just incase
}

void Decide_Next_Move(int gridSize, int currentBoard[gridSize][gridSize], int *x, int *y)
{
    int row, col, i;
    int bestMoveToMake = -1;
    int originalSetOfThree[3] = {0, 0, 0};
    double bestProbability = -1, tempProbability;
    int flatCurrBoardData[GAMESTATE_AS_INT_SIZE] = {}; // holds the current board data in model trainable form

#pragma region Flatten currentBoard Data
    // Using the knowledge that 0 = blank, 1 = cross and 2 = circle,
    // we can convert this data into the data needed for the model prediction
    for (row = 0; row < gridSize; row += 1)
    {
        for (col = 0; col < gridSize; col += 1)
        {
            // printf("Grid[%d][%d] = %d\n", row, col, currentBoard[row][col]); //debug
            i = (row * gridSize + col) * 3; // To get the correct element index in the flattened array data

            switch (currentBoard[row][col])
            {

            case 0: // when we see currentBoard[row][col] = 0 (blank), we assign a value of 0,0,1 to our flattened data array
                flatCurrBoardData[i] = 0;
                flatCurrBoardData[i + 1] = 0;
                flatCurrBoardData[i + 2] = 1;
                break;

            case 1:
                // when we see currentBoard[row][col] = 1 (cross), we assign a value of 1,0,0 to our flattened data array
                flatCurrBoardData[i] = 1;
                flatCurrBoardData[i + 1] = 0;
                flatCurrBoardData[i + 2] = 0;
                break;

            case 2:
                // when we see currentBoard[row][col] = 2 (circle), we assign a value of 0,1,0 to our flattened data array
                flatCurrBoardData[i] = 0;
                flatCurrBoardData[i + 1] = 1;
                flatCurrBoardData[i + 2] = 0;
                break;

            default:
                printf("Unrecognised case: %d !\n", currentBoard[row][col]);
                break;
            }
        }
    }

#pragma endregion

#pragma region Deciding the Best Move to Make
    // Loop thru all sets of 3 in the current gamestate
    for (i = 0; i < GAMESTATE_AS_INT_SIZE; i += 3)
    {
        // Since i increments by 3 every loop, i will be the index of the first set of 3
        // Check if current cell is blank (representation of blank is 001)
        if (flatCurrBoardData[i] != 0 || flatCurrBoardData[i + 1] != 0 || flatCurrBoardData[i + 2] != 1)
        {
            continue;
        }

        // Record the discovered blank cell
        originalSetOfThree[0] = flatCurrBoardData[i];
        originalSetOfThree[1] = flatCurrBoardData[i + 1];
        originalSetOfThree[2] = flatCurrBoardData[i + 2];

        // --- Create a scenario where the current blank cell in the loop is chosen ---
        // Change the set of 3 starting from 'i' into the symbol which the AI uses which is O, which is represented by 0,1,0
        flatCurrBoardData[i] = 0;
        flatCurrBoardData[i + 1] = 1;
        flatCurrBoardData[i + 2] = 0;

        // --- Predict using the new gamestate to see if it is the best chance of winning ---
        // Call Predict() and compare the probability returned if it is higher than the current one
        tempProbability = Predict(flatCurrBoardData);
        // if the new prediction probability of winning is better than the previous one,
        if (tempProbability > bestProbability)
        {
            // set that as the best probability to win
            bestProbability = tempProbability;
            // Record the current best gamestate to move
            bestMoveToMake = i;
        }

        // Revert the board to its original scenario
        flatCurrBoardData[i] = originalSetOfThree[0];
        flatCurrBoardData[i + 1] = originalSetOfThree[1];
        flatCurrBoardData[i + 2] = originalSetOfThree[2];
    }
#pragma endregion

    // reverse the equation i = (row * gridSize + col) * 3 to find the cell number
    bestMoveToMake /= 3;
    *y = bestMoveToMake % gridSize;        // col index = remainder of cell index / gridSize (in this case gridSize = 3)
    *x = (bestMoveToMake - *y) / gridSize; // row index = (cell index - remainder) gridSize
}    
</pre>
</div>



<br>

### Conclusion
As this is my first time handling a machine learning task, the machine learning model may or may not be as accurate as the graph above had predicted.

<br>

However, this had led me to learn a great deal (althought I know it is only a small fraction) of what data scientists go through.

<br>

As such I am very much grateful to have a team dedicated to making this game together with me. To play or see the game code, click <a href="https://github.com/bestcolour/MachineLearning_TicTacToe_Uni_Y1T1" target="_blank">here</a>


## Images
----

<br>
<br>

<img width="100%" src="https://raw.githubusercontent.com/bestcolour/site/refs/heads/master/assets/image/University/ML_TicTacToe/mainmenu.png"/>
<img width="100%" src="https://raw.githubusercontent.com/bestcolour/site/refs/heads/master/assets/image/University/ML_TicTacToe/difficulty_select.png"/>
<img width="100%" src="https://raw.githubusercontent.com/bestcolour/site/refs/heads/master/assets/image/University/ML_TicTacToe/versus_easy.png"/>
<img width="100%" src="https://raw.githubusercontent.com/bestcolour/site/refs/heads/master/assets/image/University/ML_TicTacToe/versus_impossible.png"/>