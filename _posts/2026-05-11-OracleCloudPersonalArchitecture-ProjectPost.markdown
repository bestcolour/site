---
layout: post
title:  "Oracle Cloud<br>Personal Architecture"
date:   2026-05-11
permalink: "/projects/coding-projects/OracleCloudPersonalArchitecture"
# categories: jekyll update

thumbnail: "https://raw.githubusercontent.com/bestcolour/site/refs/heads/master/assets/image/IT_Automation-Oracle_Cloud/Current%20Architecture-Oracle%20Cloud%20Secure%20Data%20Management.drawio.png"
alt-text: "Cloud Architecture"
---

<br>
<br>

---


<br>
<br>


## Description

<br>
<br>

Oracle Cloud has [Free Forever Resources](https://docs.oracle.com/en-us/iaas/Content/FreeTier/freetier_topic-Always_Free_Resources.htm) which, if you do not exceed your usage limits, will literally remain free forever! This is my architecture I have come up with to allow me to utilise free cloud resources for my own projects and uses.

<br>
<br>


**The Goal:** The primary goal of this project is to create an architecture that fulfills these following needs/requirements:

<br>

1) VPN control server so that my other devices could all communicate with each other as if they were in a local network

2) Hosting of a dedicated game server (like Minecraft for example)

3) Running resources of other cloud projects

<br>
<br>

All of these must be done without exceeding the free forever tier limits of Oracle Cloud

<br>
<br>

## Cloud Resources - Workload Resources To Be Provisioned & For What Purposes

These are the main cloud resources that will be used for my personal architecture. They will perform work for me as described below:

<img src="https://raw.githubusercontent.com/bestcolour/site/refs/heads/master/assets/image/IT_Automation-Oracle_Cloud/Current%20Architecture-Oracle%20Cloud%20Resources.drawio.png" alt-text="Coding project" width="100%"/>


<br>

The oracle cloud architecture will comprise of mainly 4 VMs, 1 reserved public ip and 1 ephemeral public ip (since that is the limit for a Free Forever Resource Tier).

<br>

1) The first VM will exist in the public subnet with a reserved public ip to run NGINX as reverse proxy that acts as as "Traffic Cop" or a Gateway, directing outside requests/connections to applications running within the private subnet. This VM will also serve as a bastion host for ssh connections (for Ansible to manage the software state of the computing instances within the private subnet)

<br>

2) The second VM will exist in the public subnet with an ephemeral public ip and run containerised apps (in this case minecraft is used as an example)

<br>

3) The third VM will exist in the private subnet with an private ip and run containerised apps

<br>

4) The fourth VM will exist in the private subnet with an private ip and run a headscale control server that allows my own devices to communicate with one another even when they are not in the same local network.

<br>
<br>

---

<br>

## Cloud Resources - Workload Resources Strategies to Setup Software on VM Instances

Based on different use cases, there will be different strategies employed to setup the softwares running on these VM Instances.

<br>

<img src="https://raw.githubusercontent.com/bestcolour/site/refs/heads/master/assets/image/IT_Automation-Oracle_Cloud/Current%20Architecture-Oracle%20Cloud%20Workload%20Resource%20Setup.drawio.png" alt-text="Coding project" width="100%"/>

<br>

1) **The first VM (the reverse proxy)**: Since the reverse proxy is often a "setup once and forget it" application, it would be easier to use Oracle's native Cloud Init method to setup the reverse proxy.

<br>

2) **The second VM (the minecraft server):** A dedicated game server may change often due to how much I play games hence it would be wiser to use Ansible to manage the state of the Docker containers.

<br>

3) **The third VM (the side project instance)**: As this instance is for other side projects, it would be better to play it safe to use Ansible and Docker to ensure that the instance is clean so as to allow future me the most flexibility in setting up new projects.

<br>

4) **The fourth VM (the Headscale VPN Control Server):** This control server is also similar the the first VM in the sense that it is often just a "setup once and forget it" application. It will use a similar method to the first VM.

<br>
<br>

---

<br>

## Cloud Resources - Provisioning & Managing Bootstrap Cloud Resources

Before all the resources mentioned above in [the above section](#cloud-resources---provisioning--managing-bootstrap-cloud-resources) can be provisioned. It is crucial that the underlying foundation of the cloud architecture is established first. 

<br>
<br>

These would be:

<br>

1) **KMS Vault:** To hold any secrets and a master key used to allow all data held by the workload resources to be encrypted

2) **KMS Key:** The master key used to encrypt/decrypt data encryption keys (basically separate keys that exist within the data storage's location)

3) **An Object Storage:** for storing Terraform State file of the resources mentioned in [the above section](#cloud-resources---provisioning--managing-bootstrap-cloud-resources)


<br>

<img src="https://raw.githubusercontent.com/bestcolour/site/refs/heads/master/assets/image/IT_Automation-Oracle_Cloud/Current%20Architecture-Oracle%20Cloud%20Secure%20Data%20Management.drawio.png" alt-text="Coding project" width="100%"/>


<br>
<br>

**As such, the flow in which one should run terraform can be simplified to:**

<br>

<img src="https://raw.githubusercontent.com/bestcolour/site/refs/heads/master/assets/image/IT_Automation-Oracle_Cloud/Current%20Architecture-Order_of_Setup.png" alt-text="Coding project" width="65%"/>



<br>
<br>

