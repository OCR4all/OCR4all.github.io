<template><h1 id="setup-guide" tabindex="-1"><a class="header-anchor" href="#setup-guide" aria-hidden="true">#</a> Setup guide</h1>
<h2 id="preparation" tabindex="-1"><a class="header-anchor" href="#preparation" aria-hidden="true">#</a> Preparation</h2>
<p>You have to prepare the following folder structure:</p>
<div class="language-text ext-text line-numbers-mode"><pre v-pre class="language-text"><code>...
├── ocr4all
│   ├── data
│   |   ├── [Your book]
│   |   |   ├── input
│   |   |   |   ├── 0001.png
│   |   |   |   ├── 0002.png
│   |   |   |   ├── ...
│   ├── models
...
</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br></div></div><p>Explanation:</p>
<ul>
<li>ocr4all (main folder)</li>
<li>models (folder for the neural network models)</li>
<li>data (folder for the documents you want to recognize)</li>
<li><em>work title</em> (Your book) (folder that contains all data of a single, specific print/book)</li>
<li>input (folder for original, coloured/grayscaled book scans on page level)</li>
</ul>
<p style="text-align: justify">This structure can be created provisionally anywhere in your system. However, depending on your system (Linux, Windows, MacOS), you might have to move it later, see below.</p>
<h2 id="choosing-the-right-docker-version" tabindex="-1"><a class="header-anchor" href="#choosing-the-right-docker-version" aria-hidden="true">#</a> Choosing the right Docker version</h2>
<ul>
<li>
<p>You will need the Community Edition (CE) of Docker for installation.</p>
</li>
<li>
<p><strong>Recommendation:</strong></p>
<ul>
<li>If you can: Use Linux!</li>
<li>Else, try to use a more recent Windows version that is compatible with <em>Docker for Windows</em>.</li>
</ul>
</li>
<li>
<p>Linux: https://docs.docker.com/install/ (choose your distribution on the left)</p>
</li>
<li>
<p>Windows:</p>
<ul>
<li>Docker for Windows:
<ul>
<li>Available for Windows 10, 64 bit: Pro, Enterprise or Education (Build 14393 or later; check for your version, which can be found in your System Information)</li>
<li>https://docs.docker.com/docker-for-windows/release-notes/ (If you do not want to register, do not chose “Download Docker for Windows” right away, but instead use “Download” under the “Stable Releases” section below)</li>
</ul>
</li>
</ul>
</li>
<li>
<p>Mac: https://docs.docker.com/docker-for-mac/</p>
<ul>
<li>Like with Windows, there is Docker for Mac</li>
<li>However, this will not be covered in this guide.</li>
</ul>
</li>
</ul>
<p><strong>Following up, you will find two separate guides, each for a Linux system, Docker and for Windows</strong></p>
<p><strong>You can copy the different terminal commands without line breaks from the accompanying file calls.txt.</strong></p>
<h2 id="linux" tabindex="-1"><a class="header-anchor" href="#linux" aria-hidden="true">#</a> Linux</h2>
<h3 id="docker-setup" tabindex="-1"><a class="header-anchor" href="#docker-setup" aria-hidden="true">#</a> Docker Setup</h3>
<ul>
<li>follow the instructions under https://docs.docker.com/install/</li>
<li>...and appreciate that everything works without further adjustments!</li>
</ul>
<h3 id="ocr4all-setup" tabindex="-1"><a class="header-anchor" href="#ocr4all-setup" aria-hidden="true">#</a> OCR4all Setup</h3>
<ul>
<li>The OCR4all folder structure detailed above (“Preparation”) can be located anywhere you want.</li>
<li>Open a terminal inside the OCR4all folder and load an OCR4all image by using the following command (this will take up a few minutes and requires a stable connection to the internet):</li>
</ul>
<p><em>docker pull uniwuezpd/ocr4all</em></p>
<ul>
<li>Create the OCR4all container using the following command:</li>
</ul>
<p><em>sudo docker run -p 1476:8080 -u <code>id -u root</code>:<code>id -g $USER</code> --name ocr4all -v $PWD/data:/var/ocr4all/data -v $PWD/models:/var/ocr4all/models/custom -it uniwuezpd/ocr4all</em></p>
<ul>
<li>Do not enter line breaks manually!</li>
</ul>
<h3 id="browser-access-and-further-use" tabindex="-1"><a class="header-anchor" href="#browser-access-and-further-use" aria-hidden="true">#</a> Browser access and further use</h3>
<ul>
<li>
<p>OCR4all is optimized for Chrome/Chromium.</p>
</li>
<li>
<p>Browser access: http://localhost:1476/ocr4all/</p>
</li>
<li>
<p>In the browser tool, check Project Overview -&gt; Project selection: If you can find the two pre- loaded books called “Cirurgia” and “GNM”, the mapping (-v $PWD/data:/…) is working properly.</p>
</li>
<li>
<p>Otherwise, it´s likely that there was a typo in the “docker run” command, so you will have to create the container again. First, delete the container you just created:</p>
</li>
<li>
<p>Stop the process in the terminal using CTRL+C, then type:</p>
</li>
</ul>
<p><em>docker rm ocr4all</em></p>
<ul>
<li>Check and correct your command (as with most terminals, you can sift through your previous commands using the arrow keys), especially the “-v $PWD/data:/…”-lines, then run it again.</li>
<li>If everything is set up properly, you are able to restart OCR4all in the future by using:</li>
</ul>
<p><em>docker start –ia ocr4all</em></p>
<h2 id="docker-for-windows" tabindex="-1"><a class="header-anchor" href="#docker-for-windows" aria-hidden="true">#</a> Docker for Windows</h2>
<h3 id="docker-setup-1" tabindex="-1"><a class="header-anchor" href="#docker-setup-1" aria-hidden="true">#</a> Docker Setup</h3>
<ul>
<li>
<p>Follow the installation guide under https://docs.docker.com/desktop/windows/install/.</p>
</li>
<li>
<p>Make sure to give all needed permissions, install all additional drivers etc.</p>
</li>
<li>
<p>Start Docker.</p>
</li>
<li>
<p>Adjust the Docker settings (Right-click on the Docker symbol in the hidden bottom-right toolbar, then chose Settings):</p>
<ul>
<li><em>Shared Drives</em>: Chosen drive (or partition).
<ul>
<li>You will need at least one. Our recommendation: Simply use “C:”.</li>
<li>Click Apply. (Attention: This requires a valid, non-empty Windows password. Changing or removing the password later results in a silent removal of your Docker privileges!).</li>
</ul>
</li>
<li><em>Advanced</em>: Adjust CPUs (max) and Memory (2GB+) if you want to.</li>
</ul>
</li>
</ul>
<h3 id="ocr4all-setup-1" tabindex="-1"><a class="header-anchor" href="#ocr4all-setup-1" aria-hidden="true">#</a> OCR4all Setup</h3>
<ul>
<li>Move the OCR4all folder structure detailed above (“Preparation”) to the shared drive (or partition). In the following example, we use “C:\Users\Public\ocr4all...”. We recommend to use the same for the first setup.</li>
<li>Inside the OCR4all folder, open PowerShell (Shift + right click inside OCR4all folder -&gt; Open PowerShell window here) and load an OCR4all image using the following command (this will take up a few minutes and requires a stable connection to the internet):</li>
</ul>
<p><em>docker pull uniwuezpd/ocr4all</em></p>
<ul>
<li>Create the OCR4all container using the following command (Note: this works only for the recommended setup, i.e. when the OCR4all folder is located in “C:\Users\Public...”)</li>
</ul>
<p><em>docker run -p 1476:8080 -p 5000:5000 --name ocr4all -v C:\Users\Public\ocr4all\data:/var/ocr4all/data -v C:\Users\Public\ocr4all\models:/var/ocr4all/models/custom -it uniwuezpd/ocr4all</em></p>
<ul>
<li>
<p>Do not enter line breaks manually!</p>
</li>
<li>
<p>Alternatively, you will have to adjust the paths marked in bold print.</p>
<ul>
<li>Use absolute paths!</li>
<li>Use auto completion! (default: Tabulator)</li>
<li>It is recommended to not use print working directory (PWD) in this case.</li>
</ul>
</li>
</ul>
<h3 id="browser-access-and-further-use-1" tabindex="-1"><a class="header-anchor" href="#browser-access-and-further-use-1" aria-hidden="true">#</a> Browser access and further use</h3>
<ul>
<li>
<p>OCR4all is optimized for Chrome/Chromium.</p>
</li>
<li>
<p>Browser access: http://localhost:1476/ocr4all/</p>
</li>
<li>
<p>In the browser tool, check Project Overview -&gt; Project selection: If you can find the two pre- loaded books called “Cirurgia” und “GNM”, the mapping (-v C:\Users...) is working properly.</p>
</li>
<li>
<p>Otherwise, there might be a typo in the “docker run” command, so you will have to create the container again. First, delete the container you just created:</p>
</li>
<li>
<p>Stop the process in PowerShell using CTRL + C, then type:</p>
</li>
</ul>
<p><em>docker rm ocr4all</em></p>
<ul>
<li>Check and correct your command (as with most terminals, you can sift through your previous commands using the arrow keys), especially the two “-v C:\Users...”-lines, then run it again.</li>
<li>If everything is set up properly, you are able to restart OCR4all in the future by using</li>
</ul>
<p><em>docker start –ia ocr4all</em></p>
</template>
