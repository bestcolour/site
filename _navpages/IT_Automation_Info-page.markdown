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

## Docker
<a href="{{site.baseurl}}/projects/IT-automation-info/docker/syncthing.yml">syncthing</a>

<a href="{{site.baseurl}}/projects/IT-automation-info/docker/tailscale.yml">tailscale</a>


<br>
<br>
<br>

---
---
---

<br>

## Winutil

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

<a href="{{site.baseurl}}/projects/IT-automation-info/winutil/26.03.13-default.json">winutil-26.03.13-default.json</a>

<a href="{{site.baseurl}}/projects/IT-automation-info/winutil/26.04.02.ps1">winutil-26.04.02.ps1</a>

<br>


