---
layout: post
title:  "Airport Travel App"
date:   2024-03-31
permalink: "/projects/coding-projects/airportTravelApp-post"
# categories: jekyll update

thumbnail: "https://raw.githubusercontent.com/bestcolour/site/refs/heads/master/assets/image/University/AirportTravelApp/FlyWhereAh_2.png"
alt-text: "Airport Travel App Route"
---

<iframe width="100%" height="315" src="https://www.youtube.com/embed/fn4uVmEv2sw?si=7tm4Pz8t3udfNs-Q" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>

<br>
<br>

<!-- Download exe button -->
## Download or More Info
***
<br>

<div style="display: flex; justify-content: center; align-items: center; gap: 10px;">
    <a href="https://github.com/bestcolour/FlyWhereAh" target="_blank">
        <img src="https://raw.githubusercontent.com/bestcolour/site/refs/heads/master/assets/image/Images/Logos/GithubLogo.jpg" 
             alt="github icon" 
             style="width: 50px; height: auto; border: 2px solid #000; border-radius: 10px; box-shadow: 2px 2px 12px rgba(0, 0, 0, 0.5);">
    </a>
</div>



## Description
---
<br>

This is a Data Structure and Algorithm (DSA) project which my group and I completed during the second year of university.

<br>

It is an airport travel app named "FlyWhereAh?" that calculates the time, distance and cost incurred when travelling from one airport to another. The flight dataset is only limited to Asia.

<br>

The application makes use of multiple algorithms to determine the fastest and best (money for distance) routes to take. It also allows the user to manipulate the time to money ratio they want to save when searching for their desired flight  route.

<br>


## Features
---
<br>
- A Star
- Dijkstra
- Quicksort (Filtering of Routes)
- PyQt for GUI
- Pandas


<br>

## Reflection
---
<br>
**Language Used:**
Python

**Software Used:**
PyQt for GUI

**Role:**
Implementation of A Star Algorithm

<br>

### Introduction

Although I was tasked with implementing the A Star Algorithm, it is crucical to know how the overall project workes. 

<br>

Firstly, the airport route application required a dataset of Airport codes, which are unique identifiers assigned globally by the International Air Transport Association (IATA) or the International Civil Aviation Organization (ICAO). 

<br>

We decided to use IATA codes for airports within Asia as it was more convenient at that point in time.

<br>
<br>


### Dataset Preparation

The first step to take was to search for datasets of Airport Codes. Our data was sourced from airports.dat from [OpenFlights](https://openflights.org/data.php).

<br>

The airport codes were filtered by searching Asia in Tz Database column using Pandas library in Python.


<img width="100%" src="https://raw.githubusercontent.com/bestcolour/site/refs/heads/master/assets/image/University/AirportTravelApp/FlyWhereAh_Dataset.png"/>

<br>
<br>

Next, we sourced for data on the routes between these airports. Our routes are also filtered by flights between airports in Asia.

<br>

Afterwards, we have to manually calculate the distance, cost and time each route will incur (some calculated values may not be 100% accurate due to the limited data we had at that time but it is still viable for this project as a proof of concept).

<br>

- Using the latitude and longitude data, the distances between airports were calculated with the geopy library in python.

<br>

- Assuming that the average cost of travelling by plane is 0.15 SGD/Km, the cost between routes were calculated.

<br>

- Assuming that the speed of travelling by plane is 935 Km/Hr, the time between routes were calculated.

<br>
<br>

As such, we were left with this dataset:

<img width="100%" src="https://raw.githubusercontent.com/bestcolour/site/refs/heads/master/assets/image/University/AirportTravelApp/FlyWhereAh_Dataset_3.png"/>

<br>
<br>
<br>


### Data Processing - A Star Route Calculation

<br>

The A Star algorithm is able to determine the best path to a destination node based on user determined variables (heuristic and g cost). 

<br>

Unlike Dijkstra, A star does not explore all possible routes but instead takes the informed route, hence making it generally faster and more efficient than Dijkstra.

<br>

A Star Pathfinding Variables:
- Knows a general idea of how “far” the destination is (h cost)
- Knows how much the algorithm has “travelled” for each possible path chosen (g cost)
- Picks the node with the lowest sum of these two information (f cost)

<br>

To adapt this into our project, we have defined our airport travel route variables accordingly:

<br>
<br>

#### h Cost
The Great Circle Distance between two airports is used as the H cost for the algorithm to make sure that there is no overestimation of heuristic value.

<br>
<br>

#### g Cost
A mix of time and cost to travel to the other airport. The user can adjust time and cost weights to get results that has 
- Less time
- Less cost

<br>

Calculation of g cost between neighbouring node = Time x 60 x timeWeight + Cost x costWeight

<br>

To account for layover time when the flight is not direct, we increase the time taken to travel between airports by 2 hrs when the number of nodes in our path to the destination exceeds 2.

<br>
<br>


#### f Cost
f cost is the sum of g cost and h cost:

<br>

fCost = gCost + (hCost/10)

<br>

The reason why h cost is divided by 10 is to ensure that these two variables are not overpowering the other with its sheer value.

<br>
<br>

#### A Star - Data Structure

The A Star Route Algorithm makes use of a graph data structure with weighted edges created with an adjacency list.

<div class="code-block">
    <button class="code-block-copy-btn" onclick="code_block_copyCode(this)">Copy</button>
    <div class="code-block-feedback"></div>
    <pre class="code-block-content">
class AirportGraph:
    flight_routes:dict;
    """
    This dictionary is mainly used to store the routes (aka edges) between the airports
    key_0: Reference to an airport node 
    value_0: A nested dictionary where

    key_1: The aiport node reference which key_0 is connected to
    value_1: A tuple that contains the time and cost needed to travel between the 2 airports
    """

    airport_nodes:dict;
    """
    A dictionary that has the key as the IATA (Unique ID) of an airport and the value is the airport node belonging to the corresponding to the IATA.
    """
    #region === Initialization ===
    def __init__(self, asia_airports, asia_routes,airline_ids,time_weight, cost_weight):
        self.time_weight = time_weight
        self.cost_weight= cost_weight
        self.flight_routes:dict= {}
        self.airport_nodes :dict = {}
        self.airlineIDs :dict = {}
        self.airport_nodes= self.add_airport(asia_airports)
        self.add_route(asia_routes,self.airport_nodes)
        self.populate_airline_ids(airline_ids)
</pre>
</div>

<br>
<br>
As for the Airport nodes, they have details such as airport name, IATA code, latitude and longitude

<div class="code-block">
    <button class="code-block-copy-btn" onclick="code_block_copyCode(this)">Copy</button>
    <div class="code-block-feedback"></div>
    <pre class="code-block-content">
#Node in the graph
class Airport:
    def __init__(self, name, city, country, iata, lat, lon):
        # data variables, should not be changed after intialization
        self.name = name
        self.city = city
        self.country = country
        self.iata = iata
        self.lat = lat
        self.lon = lon
</pre>
</div>

<br>
<br>

The output data which we want to get is a list of FlightRouteInfo that we can backtrack from the source to the destination and present it on the map.
<br>

<div class="code-block">
    <button class="code-block-copy-btn" onclick="code_block_copyCode(this)">Copy</button>
    <div class="code-block-feedback"></div>
    <pre class="code-block-content">
class FlightRouteInfo:
    def __init__(self, fromAirportName:str,toAirportName:str,fromAirportIata:str,toAirportIata:str,distBetween: float,cost:float,time:float,airlineName:str):
        # data variables, should not be changed after intialization
        self.fromAirportName = fromAirportName;
        self.toAirportName = toAirportName;
        self.fromAirportIata = fromAirportIata;
        self.toAirportIata = toAirportIata;
        self.distBetween = distBetween;
        self.cost = cost;
        self.time = time;
        self.airlineName = airlineName;

</pre>
</div>

#### A Star - Algorithm

This [video](https://youtu.be/ySN5Wnu88nE?si=gc8cpXvk7A3_CwYQ) will be of great help to understand how A Star algorithm works.

<br>

In short, the A Star algorithm relies on a general sense of direction (h cost) and the travelled amount (g cost) to determine which neighbouring node in the graph to pick next. The neighbouring nodes which will get checked by the algorithm goes into a queue before getting sorted and checked.

<br>

Our A Star Algorithm's open set uses a Priority Queue that uses a Min Heap. The Min Heap's priority is set according to the f cost of each potential node, ensuring that only the nodes with the lowest f cost is checked first.

<img width="100%" src="https://raw.githubusercontent.com/bestcolour/site/refs/heads/master/assets/image/University/AirportTravelApp/AStar_Code_1.png"/>

<br>
<br>


The A Star Algorithm considers a neighbouring node worth exploring if:

- it is unexplored
- g score of this node is faster than the previous way of getting to this node

<br>

<img width="100%" src="https://raw.githubusercontent.com/bestcolour/site/refs/heads/master/assets/image/University/AirportTravelApp/AStar_Code_2.png"/>

<br>
<br>


To allow for the user to decide how much lesser time vs lesser cost they wish to save, we included a calculate weight function that will affect the algorithm's decision on the next "best" node.

<br>

<img width="100%" src="https://raw.githubusercontent.com/bestcolour/site/refs/heads/master/assets/image/University/AirportTravelApp/AStar_Code_3.png"/>

<br>
<br>

As a result, when all of these parts come together, the A Star Algorithm becomes a very modifiable search algorithm that searches the best airport route based on the user's interest.

<br>
<br>
<br>

### Dijkstra
Although not handled by me, the Dijkstra also plays a huge role in our application by allowing the user to find the shortest air travel route (regardless of cost) from one airport to another.


## Images
----

<br>
<br>

<img width="100%" src="https://raw.githubusercontent.com/bestcolour/site/refs/heads/master/assets/image/University/ML_TicTacToe/mainmenu.png"/>