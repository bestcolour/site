---
layout: post
title:  "Oracle Cloud - 02<br>Pterodactyl Game Management"
date:   2026-05-11
permalink: "/projects/coding-projects/OracleCloud02"
# categories: jekyll update

thumbnail: "https://raw.githubusercontent.com/bestcolour/site/refs/heads/master/assets/image/IT_Automation-Oracle_Cloud/02-Pterodactyl-Setup_Strategy.drawio.png"
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

1) Host a Game Management Panel and Server on a single compute instance (in this case it will be Pterodactyl Panel & Wings). 

<br>

The reason for this is to allow the maximum compute resources to be allocated to a single machine as Pterodactyl's game servers (like Minecraft or ARK: Survival Evolved) are usually reliant on single-core performance. Having multiple cores on this machine allows the game server to run heavy mods that require more cores to perform dynamic map generation and entity AI processes.

<br>

2) Allow the Game Management Panel & Server to be accessible to public

<br>

In the past, I had experimented hosting game servers within a Virtual Private Network (VPN). It worked and is more secure but has the downside of requiring the clients (my friends who want to join the game server) to install and sign up for a VPN account. This time, I wish to have the server accessible (but still behind a reverse proxy) from a public sub domain (from using DuckDNS) so that the clients could access the server by just typing in the url.


<br>
<br>

All of these must be implemented without exceeding the free forever tier limits of Oracle Cloud.

<br>
<br>

Oracle Cloud has [Free Forever Resources](https://docs.oracle.com/en-us/iaas/Content/FreeTier/freetier_topic-Always_Free_Resources.htm) which, if you do not exceed your usage limits, will literally remain free forever! 

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

## Cloud Resources - Cloud Resources To Be Provisioned & For What Purposes

<br>

After setting up the Bootstrap Cloud Resources, we can finally get into the main cloud resources that will be used for the architecture. 

<br>
<br>


<img src="https://raw.githubusercontent.com/bestcolour/site/refs/heads/master/assets/image/IT_Automation-Oracle_Cloud/02-Pterodactyl-Architecture.drawio.png" alt-text="Coding project" width="60%"/>


<br>

The oracle cloud architecture will comprise of mainly 1 Virtual Machine (VMs), 1 ephemeral public ip.

<br>

1) **The first VM** will exist in the public subnet with an ephemeral public ip and run a Pterodactyl Panel container, a game server management panel that allows easy hosting of dedicated game servers, and Wings a backend performing all of the logic of running game servers. (Using a ephemeral public ip means that the reserved public ip is freed up for other projects if needed)

<br>
<br>

---

<br>

## Cloud Resources - Workload Resources Strategies to Setup Software on VM Instances


<br>

<img src="https://raw.githubusercontent.com/bestcolour/site/refs/heads/master/assets/image/IT_Automation-Oracle_Cloud/02-Pterodactyl-Setup_Strategy.drawio.png" alt-text="Coding project" width="60%"/>

<br>

1) **The first VM (the game server management panel):** As Pterodactyl Panel is a server management application, the allocation of servers is stateful thus making Ansible a perfect choice for setting it up and maintaining it throughout its lifetime. However, Cloud-Init will still be used to install Ansible and any other packages at the beginning before running the Ansible playbook to setup the rest.


<br>

**Below is an Activity Diagram to describe the entire setup process.**

<img src="https://raw.githubusercontent.com/bestcolour/site/refs/heads/master/assets/image/IT_Automation-Oracle_Cloud/02-Pterodactyl-Setup_Sequence_Diagram.drawio.png" alt-text="Coding project" width="60%"/>



<br>
<br>

---

<br>

## Cloud Resources - Workload Resources Network Rules

<br>

This section will talk about the resources used in handling networking rules within the architecture.
<br>

<img src="https://raw.githubusercontent.com/bestcolour/site/refs/heads/master/assets/image/IT_Automation-Oracle_Cloud/02-Pterodactyl-Networking_Rules.drawio.png" alt-text="Coding project" width="60%"/>

<br>
<br>

Within the Virtual Network Cloud (VCN), networking rules will be divided between Security Lists and Network Security Groups (NSG).

<br>
<br>

**Network Security Groups - Dedicated Game Server**

1) Will expose the compute instance's ports to the public internet via 443 and 80 along with other game-related ports. Any other ports that ought to be exposed later on can be done so through new Terraform operation and Ansible playbook runs.


<br>

---

<br>
<br>


## Cloud Resources - Setup Process

<br>

To setup, follow the guide in from the project repo's [readme](https://github.com/bestcolour/oracle-cloud-infrastructure/tree/main#64-projects---02-pterodactyl).

<br>

### Cloud Resources - Setup Process - Part 1

<br>

<iframe width="100%" height="315" src="https://www.youtube.com/embed/RkPPkJyflnk?si=eal4kuGFv3Ip5cLf" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>

<br>
<br>


### Cloud Resources - Setup Process - Part 2

<iframe width="100%" height="315" src="https://www.youtube.com/embed/61BS7QEAbBQ?si=jz8ipYkcHUZxViRY" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>