---
layout: post
title:  "Oracle Cloud - 00<br>Bootstrap"
date:   2026-05-11
permalink: "/projects/coding-projects/OracleCloud00"
# categories: jekyll update

thumbnail: "https://raw.githubusercontent.com/bestcolour/site/refs/heads/master/assets/image/IT_Automation-Oracle_Cloud/00-Bootstrap-Architecture.png"
alt-text: "Cloud Architecture"
---

<br>
<br>

<a href="https://github.com/bestcolour/oracle-cloud-infrastructure" target="_blank">
<img src="https://raw.githubusercontent.com/bestcolour/site/refs/heads/master/assets/image/Images/Logos/GithubLogo.jpg" 
         alt="github icon" 
         style="width: 50px; height: auto; border: 2px solid #000; border-radius: 10px; box-shadow: 2px 2px 12px rgba(0, 0, 0, 0.5); margin: 0 auto; display: block;">
</a>

<br>

---


<br>
<br>


## Description

<br>
<br>



**The Goal:** The primary goal of this project is to create an architecture that fulfills these following needs/requirements:

<br>

1) Allow the Terraform State file of future Terraform projetcs to be synchronised on an Oracle Cloud Object Storage, thus allowing different devices to perform Terraform operations to the Infrastructure without having to manually synchronise the Terraform State files on those devices.

<br>

2) Setup a Key Management System Vault and Master Key to allow future Oracle Cloud Infrastructure (like Object Storage or Boot Volume) to have its data be encrypted and Secrets to be stored.

<br>
<br>

All of these must be implemented without exceeding the free forever tier limits of Oracle Cloud.

<br>
<br>

Oracle Cloud has [Free Forever Resources](https://docs.oracle.com/en-us/iaas/Content/FreeTier/freetier_topic-Always_Free_Resources.htm) which, if you do not exceed your usage limits, will literally remain free forever! This is my architecture I have come up with to allow me to utilise free cloud resources for my own projects and use cases.

<br>
<br>


---

<br>

## Cloud Resources - Provisioning & Managing Bootstrap Cloud Resources

Before cloud resources for future projects can be provisioned, it is crucial that the underlying foundation of the cloud architecture is established first. 

<br>
<br>

The foundation would include:

<br>

1) **KMS Vault:** To hold any secrets and a master key used to allow all data held by the workload resources to be encrypted

2) **KMS Key:** The master key used to encrypt/decrypt data encryption keys (basically separate keys that exist within the data storage's location)

3) **An Object Storage:** for storing Terraform State file of the resources mentioned in [the above section](#cloud-resources---provisioning--managing-bootstrap-cloud-resources)


<br>

<img src="https://raw.githubusercontent.com/bestcolour/site/refs/heads/master/assets/image/IT_Automation-Oracle_Cloud/00-Bootstrap-Architecture.png" alt-text="Coding project" width="100%"/>


<br>
<br>

**As such, the flow of how one should setup the Boostrap Cloud Resources with Terraform can be simplified to:**

<br>

<img src="https://raw.githubusercontent.com/bestcolour/site/refs/heads/master/assets/image/IT_Automation-Oracle_Cloud/00-Bootstrap-Sequence.png" alt-text="Coding project" width="65%"/>

<br>
<br>

---

<br>

## Cloud Resources - Setup Process

<br>

To setup, follow the guide in from the project repo's [readme](https://github.com/bestcolour/oracle-cloud-infrastructure/tree/main#62-projects---00-bootstrap).

---

