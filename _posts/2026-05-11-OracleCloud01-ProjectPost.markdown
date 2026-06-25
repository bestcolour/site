---
layout: post
title:  "Oracle Cloud - 01<br>Headscale Control Server"
date:   2026-05-11
permalink: "/projects/coding-projects/OracleCloud01"
# categories: jekyll update

thumbnail: "https://raw.githubusercontent.com/bestcolour/site/refs/heads/master/assets/image/IT_Automation-Oracle_Cloud/01-Headscale-Setup_Strategy.drawio.png"
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

1) Host a Virtual Private Network (VPN) control server so that my other devices could all communicate with each other as if they were in a local network (crucial for self hosting).

2) Ensure that the Oracle Cloud resources and VPN control server setups are completely automated.

3) Utilise Terraform as the Infrastructure as Code's golden source.

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

Before all the resources mentioned above in [the below section](#cloud-resources---workload-resources-to-be-provisioned--for-what-purposes) can be provisioned, it is crucial that the underlying foundation of the cloud architecture is established first. Visit this [page]({{site.baseurl}}/projects/coding-projects/OracleCloud00) for more information. (You can also do use this without this bootstrap infrastructure but there are many benefits with setting it up first)


<br>
<br>

---

<br>
<br>

## Cloud Resources - Resources To Be Provisioned & For What Purposes

<br>

After setting up the bootstrap cloud resources, we can finally get into the main cloud resources that will be used for the Headscale control server's architecture.

<br>
<br>


<img src="https://raw.githubusercontent.com/bestcolour/site/refs/heads/master/assets/image/IT_Automation-Oracle_Cloud/01-Headscale-Architecture.drawio.png" alt-text="Coding project" width="100%"/>


<br>

The oracle cloud architecture will comprise of mainly 2 Virtual Machines (VMs), 1 reserved public ip and 1 static private ip.

<br>

1) **The first VM** will exist in the public subnet with a reserved public ip to run NGINX as reverse proxy and Tinyproxy as a forward proxy. It will act as as a Secure Web Gateway, directing outside requests/connections to applications running within the private subnet and allowing them to send their responses back to the public. This VM will also serve as a bastion host for ssh connections to the private subnet VMs.

<br>

2) **The second VM** will exist in the private subnet with an private ip and run a Headscale control server that allows my own devices to communicate with one another even when they are not in the same local network.

<br>
<br>

---

<br>

## Cloud Resources - Strategies to Setup Software on VM Instances

Based on different use cases, there will be different strategies employed to setup the softwares running on these VM Instances.

<br>

<img src="https://raw.githubusercontent.com/bestcolour/site/refs/heads/master/assets/image/IT_Automation-Oracle_Cloud/01-Headscale-Setup_Strategy.drawio.png" alt-text="Coding project" width="100%"/>

<br>

1) **The first VM (the secure web gateway)**: Since the reverse and forward proxies are often "setup once and forget it" applications, it would be easier to use Oracle's native Cloud-Init method to setup them up.

2) **The second VM (the Headscale VPN Control Server):** This control server is also similar to the first VM as a "setup once and forget it" application. It will use a similar method to the first VM.

<br>
<br>

---

<br>

## Cloud Resources - Network Rules

<br>

This section will talk about the resources used in handling networking rules within the architecture.
<br>

<img src="https://raw.githubusercontent.com/bestcolour/site/refs/heads/master/assets/image/IT_Automation-Oracle_Cloud/01-Headscale-Networking_Rules.drawio.png" alt-text="Coding project" width="100%"/>

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
<br>

---

<br>
<br>

## Cloud Resources - Setup Process

<br>

To setup, follow the guide in from the project repo's [readme](https://github.com/bestcolour/oracle-cloud-infrastructure/tree/main#63-projects---01-headscale).

<br>

<iframe width="100%" height="315" src="https://www.youtube.com/embed/SzAMgq_vxeE?si=MQYIDZYle4O6Pxj9" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>