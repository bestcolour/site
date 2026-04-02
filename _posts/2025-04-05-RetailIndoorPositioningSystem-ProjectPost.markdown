---
layout: post
title:  "Retail Indoor Positioning System "
date:   2025-04-05
permalink: "/projects/coding-projects/RetailIndoorPositioningSystem-post"
# categories: jekyll update

thumbnail: "https://raw.githubusercontent.com/bestcolour/site/refs/heads/master/assets/image/University/TyphoonPrediction/Map_with_layers.png"
alt-text: ""
---
<img width="100%" src=""/>

<br>

---

<div class="carousel">
    <div class="carousel-container">
        <div class="carousel-container-slide">
            <img src="https://raw.githubusercontent.com/bestcolour/site/refs/heads/master/assets/image/HangryGuardians/SplashArt.jpg"/>
            <br>
            <i>Image description</i>
        </div>
        <div class="carousel-container-slide">
            <img src="https://raw.githubusercontent.com/bestcolour/site/refs/heads/master/assets/image/HangryGuardians/Wind%26TUnnel.jpg"/>
            <br>
            <i>Image description</i>
        </div>
    </div>
    <button class="carousel-prev carousel-button" onclick="moveSlide(-1)">&#10094;</button>
    <button class="carousel-next carousel-button" onclick="moveSlide(1)">&#10095;</button>
</div>

---

<br>

<!-- Github button -->
<a href="https://github.com/bestcolour/IoT-Indoor-Positioning-HeatMap" target="_blank">
<img src="https://raw.githubusercontent.com/bestcolour/site/refs/heads/master/assets/image/Images/Logos/GithubLogo.jpg" 
         alt="github icon" 
         style="width: 50px; height: auto; border: 2px solid #000; border-radius: 10px; box-shadow: 2px 2px 12px rgba(0, 0, 0, 0.5); margin: 0 auto; display: block;">
</a>

<br>

---

<br>

## Description

<br>

**The Goal:** To improve space utilization in supermarkets by implementing an Indoor Positioning System (IPS) that tracks shopping trolleys and baskets using Bluetooth Low Energy (BLE) and Wi-Fi technologies.

<br>

**The Solution:** Develop a system that generates heatmaps that reveal movement patterns, dwell times, and traffic density within a store.

<br>

BLE and Wi-Fi technologies were chosen due to its low cost, scalability and ubiquity. Moreover, they easily leverage on existing infrastructure and easily available hardware like Raspberry Pis and M5StickCPlus devices. Moreover, BLE has the added benefit of being low power consuming and low latency, making it perfect to be part of a shopping trolley or basket.

<br>

A study is also done to evaluate and compare the positional accuracy and performance of three distinct approaches: BLE-only, Wi-Fi-only, and a hybrid BLE + Wi-Fi system.

<br>

With visual heatmaps, analysis could be done to identify underutilized store areas, detect congestion in high-traffic zones and provide meaningful shopper behavioral data to help managers make informed decisions regarding store layouts and promotional placements.

---

<br>
<br>

**Responsibilities:** IoT Developer & Tester

<br>

**Key Contributions**
- BLE+WiFi combined hybrid positioning system
- Heat Map Visualization Dashboard
- Evaluation Metrics Tests


<br>
<br>

**Tech Stack**

<br>

- Language: Python, Shell, Arduino IDE
- Hardware: Raspberry Pis, M5StickCPlus


<br>
<br>

---

<br>

**Key Features & Functionality**

<br>

1. **Hybrid Positioning System** : Combines Bluetooth Low Energy and Wi-Fi signals to estimate device locations within indoor environments.
2. **Dynamic Heatmap Generation** : Visualizes shopper movement patterns, dwell times, and traffic density using Flask and Plotly.
3. **Multi-Phase Deployment** : Supports three distinct tracking configurations including BLE-only, Wi-Fi-only, and hybrid setups.
4. **Advanced Signal Processing** : Uses Kalman filtering and log-distance path loss models to refine raw signal data for trilateration.
5. **Secure MQTT Communication** : Ensures data integrity and confidentiality through TLS 1.3 encryption and certificate-based authentication.
6. **Passive Tracking Interface** : Collects location data via M5StickCPlus devices embedded in shopping baskets without requiring active shopper input.
7. **Centralized Analytics Dashboard** : Provides authorized personnel with a secure web interface to view spatial insights and store layout data.
8. **Regulatory Privacy Compliance** : Implements data anonymization and notification protocols to align with GDPR and PDPA standards.
9. **Scalable Network Architecture** : Employs a star topology centered on an MQTT broker to manage high volumes of device data.


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

<br>

2) Lower the proportional gain (Kp)

<br>

3) Check the time interval of when the PID algorithm is called


<br>
<br>


---

<br>

#### Technical Challenges & Solutions - Motor Stability - The Lesson

<br>

If a lesson was to be learnt from this entire project, it would be that real life physics does not play nicely with code. This came as a shock this was my first time developing an embedded system that moves, reacts and interacts with the real physical world. 

<br>

For example, as I was fine-tuning the PID values. I realised that tuning on a wooden surface is completely different from tuning on a croncrete ground. Due to each material's friction, different values were needed to ensure that the car controller was moving at its best performance.

<br>

Moreover, debugging a certain issue like why a motor is not moving became twofold. I would need to check both the code and the hardware wiring to see if there were any mistakes like unplugged wires or loose cables made. 

<br>

All in all, it was a good project to learn from. I realized how difficult working with hardware could be due to the increased effort one must take whenever they test the device.

<br>

---

<br>

## Results
@ToDo: upload a video of the car running correctly for the whole circuit


<br>
