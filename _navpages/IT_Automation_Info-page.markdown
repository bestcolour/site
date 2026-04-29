---
layout: post
# title: "Projects"
permalink: "projects/IT-automation-info/"

title:  "IT Automation Info"
date:   2026-04-10
# categories: jekyll update
---


This page is meant to just hold the links to different IT Automation or DevOps configuration for my own ease of access.


<br>
<br>

## Content Table
1) [Docker Compose Resources](#docker-compose)

2) [Winutil Resources](#winutil)

3) [Oracle Cloud Personal Architecture](#oracle-cloud-personal-architecture)


<br>
<br>



---
---
---

<br>
<br>



## Docker Compose

<br>

[Back to content table](#)

<br>
<br>


<a href="{{site.baseurl}}/projects/IT-automation-info/docker/syncthing.yml">syncthing</a>

<a href="{{site.baseurl}}/projects/IT-automation-info/docker/tailscale.yml">tailscale</a>

<a href="{{site.baseurl}}/projects/IT-automation-info/docker/terraform.yml">terraform</a>


<br>
<br>
<br>

---
---
---

<br>

## Winutil

<br>

[Back to content table](#)

<br>

### How to use the ps1 file:

<br>

1) Press the Windows key.

2) Type "PowerShell" or "Terminal" (for Windows 11).

3) Press Ctrl + Shift + Enter or Right-click and choose "Run as administrator" to launch it with administrator privileges.

<br>

<div class="code-block">
<i>Paste this into your powershell terminal</i>
    <button class="code-block-copy-btn" onclick="code_block_copyCode(this)">Copy</button>
    <div class="code-block-feedback"></div>
    <pre class="code-block-content">
irm "paste your ps1 link here" | iex
</pre>
</div>

<br>
<br>

---

<br>

### How to use winutil json file:

<br>

The json files hold the tweaks and applications that was configured/installed using winutil.
Most apps are better off installed using Chocolatey. If you are on a fresh windows copy, you need to install Chocolatey after giving your current terminal session access to run scripts.

<div class="code-block">
<i>This gives your current terminal session access to run scripts. Paste this into your powershell terminal</i>
    <button class="code-block-copy-btn" onclick="code_block_copyCode(this)">Copy</button>
    <div class="code-block-feedback"></div>
    <pre class="code-block-content">
Set-ExecutionPolicy -ExecutionPolicy Bypass -Scope Process
</pre>
</div>


---

<br>

### ps1 & app config Links:

<br>

<a href="{{site.baseurl}}/projects/IT-automation-info/winutil/26.03.13.ps1">winutil-26.03.13.ps1</a>

- <a href="{{site.baseurl}}/projects/IT-automation-info/winutil/26.03.13-default.json">winutil-26.03.13-default.json</a>

<br>

<a href="{{site.baseurl}}/projects/IT-automation-info/winutil/26.04.02.ps1">winutil-26.04.02.ps1</a> (installing with win11 creator debloated iso will apply the Tweaks)
- Windows ISO Version that works with this winutil's win11 creator version
    - Win11_25H2_EnglishInternational_x64_v2

- Winutil Install JSONs

    - <a href="{{site.baseurl}}/projects/IT-automation-info/winutil/26.04.02-base_installs.json">winutil-26.04.02-base_installs.json</a>

    - <a href="{{site.baseurl}}/projects/IT-automation-info/winutil/26.04.02-development_installs.json">winutil-26.04.02-development_installs.json</a>

    - <a href="{{site.baseurl}}/projects/IT-automation-info/winutil/26.04.02-game_installs.json">winutil-26.04.02-game_installs.json</a>

<br>


---
---
---

<br>


## Oracle Cloud Personal Architecture

<br>

[Back to content table](#)

<br>
<br>

Oracle Cloud has [Free Forever Resources](https://docs.oracle.com/en-us/iaas/Content/FreeTier/freetier_topic-Always_Free_Resources.htm) which, if you do not exceed your usage limits, will literally remain free forever! This is my architecture I have come up with to allow me to utilise free cloud resources for my own projects and uses.

<br>
<br>


<img src="https://raw.githubusercontent.com/bestcolour/site/refs/heads/master/assets/image/IT_Automation-Oracle_Cloud/Current%20Architecture-Oracle%20Cloud%20Resources.drawio.png" alt-text="Coding project" width="100%"/>


<br>

The oracle cloud architecture will comprise of mainly 4 VMs (since that is the limit for a Free Forever Resource Tier).

<br>

1) The first VM will exist in the public subnet with a reserved public ip to run NGINX as reverse proxy that acts as as "Traffic Cop" or a Gateway, directing outside requests/connections to applications running within the private subnet. 

<br>

2) The second VM will exist in the public subnet with an ephemeral public ip and run containerised apps (in this case minecraft is used as an example)

<br>

3) The third VM will exist in the private subnet with an private ip and run containerised apps (in this case minecraft is used as an example)

<br>

4) The fourth VM will exist in the private subnet with an private ip and run a headscale control server that allows my own devices to communicate with one another even when they are not in the same local network.