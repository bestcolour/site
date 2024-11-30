---
layout: post
title:  "C vs Assembly Project"
date:   2023-11-10
permalink: "/projects/coding-projects/CvsAssemblyCOA-post"
# categories: jekyll update

thumbnail: "https://raw.githubusercontent.com/bestcolour/site/refs/heads/master/assets/image/University/ML_TicTacToe/versus_impossible.png"
alt-text: "ML TicTacToe"
---




## Description
---
<br>

This is a small project done in my first year of my university days that I have done to explore assembly and c language. It focuses on the comparison of the execution speed of the Assembly Language and C Language using the game "FizzBuzz".



<br>
<br>



## Features
---
<br>
- FizzBuzz
- Perf for Measuring Execution Speed
- Raspberry Pi Linux


<br>

## Reflection
---
<br>
**Language Used:**
Assembly
C

**Role:**
Coding & Testing of Assembly and C Fizzbuzz

<br>

### Introduction
As part of my studies in year 1, we were tasked with the assignment to explore Computer Organization and Architecture by making a execution test comparison between Assembly language and C Language. We decided on FizzBuzz as our function to use compare execution speeds.

<br>
<br>
<br>

### FizzBuzz

FizzBuzz is essentially a function that has a counter that increments within a loop and prints "Fizz" when the counter is divisible by 3, "Buzz" when the counter is divisble by 5 and "FizzBuzz" when it is divisble by 3 and 5 (aka 15).

<br>

Below are flowcharts that represent this FizzBuzz Test in both Assembly and C.

<br>

### Measuring Execution Time

Measuring execution time of the program can be done in a multitude of ways from finding the clock cycles to using tools to record the run time of the program. 

<br>

For the former, the initial idea was to use the time.h library to record the number of clock ticks elapsed over the execution of the program, then divide the value by the number of ticks per second to obtain the actual execution time of the program. However, implementing this function into the AArch64 assembly program was not as simple as implementing it into C. Moreover, utilising a C library in the assembly code may skew the results, thus, a linux tool was ultimately chosen to measure execution time instead to ensure fairness.

<br>

The linux tool used is a profiling instrument called [perf](https://perf.wiki.kernel.org/index.php/Main_Page). This is how the final result would look like when running perf with the FizzBuzz function to measure the execution time.

<br>

<img width="100%" src="https://raw.githubusercontent.com/bestcolour/site/refs/heads/master/assets/image/University/CvsAssembly_Project/example%20of%20perf.gif"/>

<br>
<br>

#### Perf Setup
The section below will be a guide on how to set up and use to measure the execution time of a program using perf on your raspberry pi.

<br>
<br>

##### Installing Perf
Firstly, we need to check if “perf” is installed on your raspberry pi by typing:
perf –version. You should encounter the error as shown in the image below. In the unlikely event that you already have the correct version of perf installed on your pi, you can skip the installation section.

<br>

<img width="100%" src="https://raw.githubusercontent.com/bestcolour/site/refs/heads/master/assets/image/University/CvsAssembly_Project/PerfSetup_Pictures/PerfSetup-1.png"/>

<br>
<br>

Now type:
<div class="code-block">
    <button class="code-block-copy-btn" onclick="code_block_copyCode(this)">Copy</button>
    <div class="code-block-feedback"></div>
    <pre class="code-block-content">
   sudo apt install linux-perf
</pre>
</div>


After downloading,
From your user directory, keep typing:
cd ../

all the way until you reach the root


### Program

#### Assembly FizzBuzz Flowchart
<img width="100%" src="https://raw.githubusercontent.com/bestcolour/site/refs/heads/master/assets/image/University/CvsAssembly_Project/Q2%20Flowchart.png"/>

<br>

#### C FizzBuzz Flowchart
<img width="100%" src="https://raw.githubusercontent.com/bestcolour/site/refs/heads/master/assets/image/University/CvsAssembly_Project/Q2%20C%20flowchart.jpg"/>



## Images
----

<br>
<br>

<img width="100%" src="https://raw.githubusercontent.com/bestcolour/site/refs/heads/master/assets/image/University/ML_TicTacToe/mainmenu.png"/>