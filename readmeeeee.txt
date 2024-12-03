This is a summarised instruction on how the layouts, front matter and yml files work in sync.

=== Layouts ===

--- default ---
The base layout in which the rest of the layouts "inherits" from

--- basic page ---
A basic layout which inherits from default. Is used in the about page's markdown (aka index)

--- post-categorypage ---
This is the layout which displays a certain category of posts. It will show all the posts found within a data file found within "_data". To add a category page, add a markdown file within the "_navpages" folder. Follow "post-categorypage.html" comments within the front matter section to know what details need to be filled up in the markdown and corresponding yml data file that uses "post-categorypage" 

--- post-mainpage ---
This is the layout which displays the latest posts. It can also show other contents if needed. See the "post-mainpage.html" for the details to be keyed in. To use this, create a new markdown file in the "_navpages" folder to use it.

--- post ---
The layout which shows the content/post of a topic
To create a new post, create a markdown file with the correct name format eg. "2024-04-24-Test-3.markdown". See the "post.html" file for more information on what details to fill in.




=== Custom html ===

--- Code blocks ---
To ensure that the code are properly shown, make sure "<" and ">" characters are properly replaced in the code with "&lt;" and "&gt;" respectively.
Another crucial thing to take note of is the order of the elements button, div and pre. They need to be in that order to work

Eg.
<div class="code-block">
<i>main_machine_learning_ai.c</i>
    <button class="code-block-copy-btn" onclick="code_block_copyCode(this)">Copy</button>
    <div class="code-block-feedback"></div>
    <pre class="code-block-content">
 hi
</pre>
</div>


<div class="code-block">
<i>main_machine_learning_ai.c</i>
    <button class="code-block-copy-btn" onclick="code_block_copyCode(this)">Copy</button>
    <div class="code-block-feedback"></div>
    <pre class="code-block-content">
#include &lt;stdio.h&gt;
</pre>
</div>



--- Image Carousell ---
<div class="carousel">
    <div class="carousel-container">
        <div class="carousel-container-slide">
            <img width="100%" src="https://raw.githubusercontent.com/bestcolour/site/refs/heads/master/assets/image/HangryGuardians/SplashArt.jpg"/>
        </div>
        <div class="carousel-container-slide">
            <img width="100%" src="https://raw.githubusercontent.com/bestcolour/site/refs/heads/master/assets/image/HangryGuardians/Wind%26TUnnel.jpg"/>
        </div>
    </div>
    <button class="carousel-prev carousel-button" onclick="moveSlide(-1)">&#10094;</button>
    <button class="carousel-next carousel-button" onclick="moveSlide(1)">&#10095;</button>
</div>