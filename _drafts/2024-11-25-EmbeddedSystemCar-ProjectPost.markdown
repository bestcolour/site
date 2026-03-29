---
layout: post
title:  "Remote Control Car with Raspberry Picos"
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

---

<br>

## Description

<br>
The Goal: To create a remote controllable car that can move in 4 directions and its remote with 2 Raspberry Picos.

<br>

Responsibilities: Embedded Systems Developer & Tester

<br>

**Key Contributions**
- Architected a Finite State Machine (FSM)
- Developed Wheel Encoder Component
- Developed Motor with Fine-tuned Proportional-Integral-Derivative (PID)
- Developed Ultrasound Sensor Feature

<br>
<br>

**Tech Stack**

<br>

- Language: C
- Tools & Packages: CMake, FreeRTOS, Arduino, TCP

<br>
<br>

---

<br>

**Key Features & Functionality**

<br>

1) Remotely Controlled: The car can be controlled with a controller remotely made with another Raspberry Pico via TCP.

2) Line Reading: A Line Reading mode was developed to allow the remote control car to follow a printed line on the ground based on light sensor values.

3) Distance Tracking: A Wheel Encoder component tracks the distance travelled by the car.

4) Motor with PID: The motor will adjust its own duty cycle value based on the desired duty cycle using the PID algorithm.

5) Ultrasonic Sensor: An Ultrasonic Sensor component tracks the distance the car is from whenever it encounters an obstacle.

6) Dashboard: Tracks the car's current status and tracked metrics (like distance travelled, ultrasonic sensor detection, etc).

<br>
<br>

---

<br>

## Technical Challenges & Solutions

<br>
<br>

### Technical Challenges & Solutions - Motor Stability

#### Technical Challenges & Solutions - Motor Stability - Issue

The first issue was the car's motor. Having two motors, each with its own motor speed, is difficult to balance as having a different motor speed on one wheel from the other could cause the car to drift in a direction. Hence, a flexible solution was needed to overcome this issue so that it could work with any set of motors that the car was constructed with.

<br>

By searching online for solutions, a popular industrial solution was the **PID - Proportional-Integral-Derivative.**

<br>

To simplify this, the PID is essentially an algorithm that utilises and modifies these 3 variables in a system:

<br>

1) Desired value (that can be defined by the user)

2) Current value (that was retrieved by a sensor)

3) Correction value (that is calculated based on Error to be added to the current value in the next cycle)

<br>

By constantly retrieving the current value and using it to calculate the error between the desired value, a correction value could be calculated. Finally, by setting the current value of variable as the correction value, a self-adjusting feedback system can be created thus achieving balance in the two motors.

<br>

However, what variables can we use for the PID algorithm in order to achieve balance in the two motors? 

<br>

In this remote control car project, there are these following information that are being tracked/known:

1) Pulse Per Revolution (number of electrical signals an encoder sends for every one full 360 degrees rotation of its shaft.)

2) Wheel Circumference (A fixed number that describes the circumference of the wheel used in the car construction)

3) Duty Cycle that controls how fast the motor turns

<br>

As such we can use these variables for the following:
- Feedback (Input): By counting how many pulses occur over a set time interval (e.g., every 50ms), you can calculate the current velocity.
- Output: The Duty Cycle. This is what the PID "adjusts" to reach the target speed.


<br>
<br>


#### Technical Challenges & Solutions - Motor Stability - The Logic Flow

The PID algorithm runs in a fast, repeating loop. Here is how the variables can be used:

<br>

<div class="code-block">
<i>Pesudo Code for PID Logic</i>
    <button class="code-block-copy-btn" onclick="code_block_copyCode(this)">Copy</button>
    <div class="code-block-feedback"></div>
    <pre class="code-block-content">

Calculate Current Speed: Current_Speed = (Pulses_Counted / Pulses_Per_Rev) * (Circumference / Time_Interval)

Calculate Error: Error = Desired_Speed - Current_Speed

Compute PID Terms:
    P: Kp * Error (Immediate reaction)
    I: Ki * Sum_of_Errors (Fixes long-term drift)
    D: Kd * Rate_of_Change (Prevents overshooting)

Update Duty Cycle: New_Duty_Cycle = P + I + D
</pre>
</div>

#### Technical Challenges & Solutions - Motor Stability - Fine-Tuning in Reality

Once the software logic has been implemented into the motor component, it is time for us to fine tune the PID Terms mentioned in the previous section.

<iframe width="100%" height="315" src="https://www.youtube.com/embed/LE79RYhKu9M?si=XQkGD-UFM7rcGka7" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>

<br>

When the fine-tuning process was taking place, it can be seen that the controller car is jittering quite a bit when trying to adjust its PID. As such there were a few things that was needed to be fine tuned: 

1) Lower the Deravative Gain (Kd)
2) Lower the proportional gain (Kp)
3) Check the time interval of when the PID algorithm is called

#### Technical Challenges & Solutions - Motor Stability - The Lesson

@ToDo


<br>


This is the most important section. It proves you can handle adversity.

    The Hurdle: Describe a specific bug, scaling issue, or architectural roadblock.

    The Fix: How did you research it? What logic did you use to solve it?

    The Lesson: What did this teach you about your stack or workflow?

6. Results & Reflections

Numbers speak louder than code.

    Metrics (if applicable): "Reduced load time by 30%" or "Automated a process that took 5 hours weekly."

    Final Thoughts: What would you do differently in Version 2.0? This shows a "growth mindset."