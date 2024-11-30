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

### FizzBuzz

FizzBuzz is essentially a function that has a counter that increments within a loop and prints "Fizz" when the counter is divisible by 3, "Buzz" when the counter is divisble by 5 and "FizzBuzz" when it is divisble by 3 and 5 (aka 15).

<br>

Below are flowcharts that represent this FizzBuzz Test in both Assembly and C.

<br>
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
1) Firstly, we need to check if “perf” is installed on your raspberry pi by typing:
perf –version. You should encounter the error as shown in the image below. In the unlikely event that you already have the correct version of perf installed on your pi, you can skip the installation section.

<br>

<img width="100%" src="https://raw.githubusercontent.com/bestcolour/site/refs/heads/master/assets/image/University/CvsAssembly_Project/Perf/PerfSetup_Pictures/PerfSetup-1.png"/>

<br>
<br>

Now type in the command to download and install perf:
<div class="code-block">
    <button class="code-block-copy-btn" onclick="code_block_copyCode(this)">Copy</button>
    <div class="code-block-feedback"></div>
    <pre class="code-block-content">
sudo apt install linux-perf
</pre>
</div>

<br>
<br>

2) After downloading, from your user directory, keep typing:
<div class="code-block">
    <button class="code-block-copy-btn" onclick="code_block_copyCode(this)">Copy</button>
    <div class="code-block-feedback"></div>
    <pre class="code-block-content">
cd ../
</pre>
</div>

all the way until you reach the root

<br>

<img width="100%" src="https://raw.githubusercontent.com/bestcolour/site/refs/heads/master/assets/image/University/CvsAssembly_Project/Perf/PerfSetup_Pictures/PerfSetup-2.png"/>

<br>
<br>

3)	Change Directory to usr > bin and type:

<div class="code-block">
    <button class="code-block-copy-btn" onclick="code_block_copyCode(this)">Copy</button>
    <div class="code-block-feedback"></div>
    <pre class="code-block-content">
ls
</pre>
</div>

and find the “perf_<version>” line to check if it is there

<br>

<img width="100%" src="https://raw.githubusercontent.com/bestcolour/site/refs/heads/master/assets/image/University/CvsAssembly_Project/Perf/PerfSetup_Pictures/PerfSetup-3.png"/>

<br>

Typing "ls" will show

<br>

<img width="100%" src="https://raw.githubusercontent.com/bestcolour/site/refs/heads/master/assets/image/University/CvsAssembly_Project/Perf/PerfSetup_Pictures/PerfSetup-4.png"/>

<br>
<br>

4)	This next step is interesting because it is likely that you will encounter an issue with the version of perf installed. At the time when this blog is being written, the perf version installed through the command is 5.10.

<br>

However, the installed version of perf will not match with the one expected by the system which is 6.1. The system will return you the same error as seen in step 1 despite having installed perf.

<br>

To bypass this problem, type:

<div class="code-block">
    <button class="code-block-copy-btn" onclick="code_block_copyCode(this)">Copy</button>
    <div class="code-block-feedback"></div>
    <pre class="code-block-content">
sudo cp /usr/bin/perf_5.10 /usr/bin/perf_6.1
</pre>
</div>

We are essentially copying perf 5.10 and renaming it to 6.1 to trick the system into thinking we have perf version 6.1. Be mindful that when running this line in the terminal, make sure you type in “6.1” instead of “6.10” as the method will not work otherwise.

<br>

Also take note that should the system expect a different version of perf other than 6.1, you can just alter the command to match what the system is looking for. The solution to this issue was found in the following stackoverflow [post](https://stackoverflow.com/questions/56259373/perf-version-not-matching-with-my-kernel-version).

<br>
<br>

5)	Now when we check for perf's version again, we will have perf being detected by the system!

<br>

<img width="100%" src="https://raw.githubusercontent.com/bestcolour/site/refs/heads/master/assets/image/University/CvsAssembly_Project/Perf/PerfSetup_Pictures/PerfSetup-5.png"/>

<br>
<br>


##### Using Perf

Using perf is really easy! Let’s say you have already compiled your program called “program“ and it is in your current directory. Simply type the following:

<div class="code-block">
    <button class="code-block-copy-btn" onclick="code_block_copyCode(this)">Copy</button>
    <div class="code-block-feedback"></div>
    <pre class="code-block-content">
perf stat ./program
</pre>
</div>

Perf will then run the program and record the amount of time needed for the code to finish running! Find your project and type in

<div class="code-block">
    <button class="code-block-copy-btn" onclick="code_block_copyCode(this)">Copy</button>
    <div class="code-block-feedback"></div>
    <pre class="code-block-content">
perf stat ./&lt;executable name&gt;
</pre>
</div>

Your code will run and a report on how long it took will be generated. Below is an example:

<img width="100%" src="https://raw.githubusercontent.com/bestcolour/site/refs/heads/master/assets/image/University/CvsAssembly_Project/Perf/Perf_Example/Perf_Example_1.gif"/>



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