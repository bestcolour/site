---
layout: post
title:  "WIP - Oracle Cloud<br>Personal Architecture"
date:   2026-05-11
permalink: "/projects/coding-projects/OracleCloudPersonalArchitecture"
# categories: jekyll update

thumbnail: "https://raw.githubusercontent.com/bestcolour/site/refs/heads/master/assets/image/IT_Automation-Oracle_Cloud/Current%20Architecture-Oracle%20Cloud%20Secure%20Data%20Management.drawio.png"
alt-text: "Cloud Architecture"
---

<br>
<br>

<a href="https://github.com/bestcolour/oracle-cloud-infrastructure" target="_blank">
<img src="https://raw.githubusercontent.com/bestcolour/site/refs/heads/master/assets/image/Images/Logos/GithubLogo.jpg" 
         alt="github icon" 
         style="width: 50px; height: auto; border: 2px solid #000; border-radius: 10px; box-shadow: 2px 2px 12px rgba(0, 0, 0, 0.5); margin: 0 auto; display: block;">
</a>


---


<br>
<br>


## Description

<br>
<br>



**The Goal:** The primary goal of this project is to create an architecture that fulfills these following needs/requirements:

<br>

1) Host a Virtual Private Network (VPN) control server so that my other devices could all communicate with each other as if they were in a local network (crucial for self hosting).

2) Host a dedicated game server (like Minecraft for example).

3) Have the flexibility to run other cloud resources in the future when new cloud project ideas pop up.

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

Before all the resources mentioned above in [the below section](#cloud-resources---workload-resources-to-be-provisioned--for-what-purposes) can be provisioned, it is crucial that the underlying foundation of the cloud architecture is established first. 

<br>
<br>

The foundation would include:

<br>

1) **KMS Vault:** To hold any secrets and a master key used to allow all data held by the workload resources to be encrypted

2) **KMS Key:** The master key used to encrypt/decrypt data encryption keys (basically separate keys that exist within the data storage's location)

3) **An Object Storage:** for storing Terraform State file of the resources mentioned in [the above section](#cloud-resources---provisioning--managing-bootstrap-cloud-resources)


<br>

<img src="https://raw.githubusercontent.com/bestcolour/site/refs/heads/master/assets/image/IT_Automation-Oracle_Cloud/Current%20Architecture-Oracle%20Cloud%20Secure%20Data%20Management.drawio.png" alt-text="Coding project" width="100%"/>


<br>
<br>

**As such, the flow of how one should setup the Boostrap Cloud Resources with Terraform can be simplified to:**

<br>

<img src="https://raw.githubusercontent.com/bestcolour/site/refs/heads/master/assets/image/IT_Automation-Oracle_Cloud/Current%20Architecture-Order_of_Setup.png" alt-text="Coding project" width="65%"/>

<br>
<br>

---

<br>
<br>

## Cloud Resources - Workload Resources To Be Provisioned & For What Purposes

<br>

After setting up the Bootstrap Cloud Resources, we can finally get into the main cloud resources that will be used for my personal architecture. They will be called "Workload Resources" and will perform work for me as described below:

<br>
<br>


<img src="https://raw.githubusercontent.com/bestcolour/site/refs/heads/master/assets/image/IT_Automation-Oracle_Cloud/Current%20Architecture-Oracle%20Cloud%20Resources.drawio.png" alt-text="Coding project" width="100%"/>


<br>

The oracle cloud architecture will comprise of mainly 4 Virtual Machines (VMs), 1 reserved public ip and 1 ephemeral public ip (since that is the limit for a Free Forever Resource Tier).

<br>

1) **The first VM** will exist in the public subnet with a reserved public ip to run NGINX as reverse proxy and Tinyproxy as a forward proxy. It will act as as a Secure Web Gateway, directing outside requests/connections to applications running within the private subnet and allowing them to send their responses back to the public. This VM will also serve as a bastion host for ssh connections to the private subnet VMs.

<br>

2) **The second VM** will exist in the public subnet with an ephemeral public ip and run a Pterodactyl Panel container, a game server management panel that allows easy hosting of dedicated game servers, and Wings a backend performing all of the logic of running game servers.

<br>

3) **The third VM** will exist in the private subnet with an private ip to run other future side projects.

<br>

4) **The fourth VM** will exist in the private subnet with an private ip and run a Headscale control server that allows my own devices to communicate with one another even when they are not in the same local network.

<br>
<br>

---

<br>

## Cloud Resources - Workload Resources Strategies to Setup Software on VM Instances

Based on different use cases, there will be different strategies employed to setup the softwares running on these VM Instances.

<br>

<img src="https://raw.githubusercontent.com/bestcolour/site/refs/heads/master/assets/image/IT_Automation-Oracle_Cloud/Current%20Architecture-Oracle%20Cloud%20Workload%20Resource%20Setup.drawio.png" alt-text="Coding project" width="100%"/>

<br>

1) **The first VM (the secure web gateway)**: Since the reverse and forward proxies are often "setup once and forget it" applications, it would be easier to use Oracle's native Cloud-Init method to setup them up.

<br>

2) **The second VM (the game server management panel):** As Pterodactyl Panel is a server management application, the allocation of servers is stateful thus making Ansible a perfect choice for setting it up and maintaining it throughout its lifetime. 

<br>

3) **The third VM (the side project instance)**: As this instance is for other side projects, it would be better to play it safe to use Ansible and Docker to ensure that the instance is clean so as to allow future me the most flexibility in setting up new projects.

<br>

4) **The fourth VM (the Headscale VPN Control Server):** This control server is also similar to the first VM as a "setup once and forget it" application. It will use a similar method to the first VM.

<br>
<br>

---

<br>

## Cloud Resources - Workload Resources Network Rules

<br>

This section will talk about the resources used in handling networking rules within the architecture.
<br>

<img src="https://raw.githubusercontent.com/bestcolour/site/refs/heads/master/assets/image/IT_Automation-Oracle_Cloud/Current%20Architecture-Oracle%20Cloud%20Networking%20Rules.drawio.png" alt-text="Coding project" width="100%"/>

<br>
<br>

Within the Virtual Network Cloud (VCN), networking rules will be divided between Security Lists and Network Security Groups (NSG).

<br>
<br>

**Security List - Public & Private**

1) Will expose port 22 for SSH connections between compute resources 

<br>

**Network Security Groups - Secure Web Gateway**

1) Will expose the necessary ports used by both NGINX & Tinyproxy on the Secure Web Network compute instance for ingress and egress directions from/towards Private Network Security Group

<br>

2) Will expose the Secure Web Network to the public internet

<br>

**Network Security Groups - Dedicated Game Server**

1) Will expose the compute instance's ports to the public internet via 443 and 80 along with other game-related ports.


