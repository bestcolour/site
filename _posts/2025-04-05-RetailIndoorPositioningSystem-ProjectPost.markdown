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
            <img src="https://raw.githubusercontent.com/bestcolour/site/refs/heads/master/assets/image/University/IndoorPositioningSystem/MQTT Diagram for BLE-only.png"/>
            <br>
        </div>
        <div class="carousel-container-slide">
            <img src="https://raw.githubusercontent.com/bestcolour/site/refs/heads/master/assets/image/University/IndoorPositioningSystem/MQTT Diagram for Hybrid.png"/>
            <br>
        </div>
        <div class="carousel-container-slide">
            <img src="https://raw.githubusercontent.com/bestcolour/site/refs/heads/master/assets/image/University/IndoorPositioningSystem/MQTT Diagram for Wi-Fi-only.png"/>
            <br>
        </div>
        <div class="carousel-container-slide">
            <img src="https://raw.githubusercontent.com/bestcolour/site/refs/heads/master/assets/image/University/IndoorPositioningSystem/MQTT Diagram.png"/>
            <br>
        </div>
        <div class="carousel-container-slide">
            <img src="https://raw.githubusercontent.com/bestcolour/site/refs/heads/master/assets/image/University/IndoorPositioningSystem/Map of Physical Setup.png"/>
            <br>
        </div>
        <div class="carousel-container-slide">
            <img src="https://raw.githubusercontent.com/bestcolour/site/refs/heads/master/assets/image/University/IndoorPositioningSystem/System-Architecture.png"/>
            <br>
        </div>
        <div class="carousel-container-slide">
            <img src="https://raw.githubusercontent.com/bestcolour/site/refs/heads/master/assets/image/University/IndoorPositioningSystem/Wifi Run.png"/>
            <br>
            <i>Snapshot of gathering RSSI Data using Wifi</i>
        </div>
        <div class="carousel-container-slide">
            <img src="https://raw.githubusercontent.com/bestcolour/site/refs/heads/master/assets/image/University/IndoorPositioningSystem/Hybrid Run.png"/>
            <br>
            <i>Snapshot of gathering RSSI Data using Wifi & BLE</i>
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

### Technical Challenges & Solutions - @todo

#### Technical Challenges & Solutions - @todo - Issue
@todo

#### Technical Challenges & Solutions - @todo - The Logic Flow
@todo


#### Technical Challenges & Solutions - @todo - Fine-Tuning in Reality
@todo


<br>
<br>


---

<br>

#### Technical Challenges & Solutions - Motor Stability - The Lesson

<br>

@todo



<br>

---

<br>

## Results

<img width="100%" src="https://raw.githubusercontent.com/bestcolour/site/refs/heads/master/assets/image/University/IndoorPositioningSystem/Heatmap BLE.png"/>
<img width="100%" src="https://raw.githubusercontent.com/bestcolour/site/refs/heads/master/assets/image/University/IndoorPositioningSystem/Heatmap Hybrid.png"/>
<img width="100%" src="https://raw.githubusercontent.com/bestcolour/site/refs/heads/master/assets/image/University/IndoorPositioningSystem/Heatmap Wi-Fi.png"/>
<img width="100%" src="https://raw.githubusercontent.com/bestcolour/site/refs/heads/master/assets/image/University/IndoorPositioningSystem/Mean Latency Comparison.png"/>
<img width="100%" src="https://raw.githubusercontent.com/bestcolour/site/refs/heads/master/assets/image/University/IndoorPositioningSystem/Positioning Error Comparison.png"/>


<br>
