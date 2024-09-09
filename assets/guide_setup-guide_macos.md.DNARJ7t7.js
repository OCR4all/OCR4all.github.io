import{_ as s,c as t,j as a,a as n,t as l,a4 as o,o as i}from"./chunks/framework.CI6U-QuP.js";const v=JSON.parse('{"title":"macOS","description":"","frontmatter":{"lang":"en-US","title":"macOS"},"headers":[],"relativePath":"guide/setup-guide/macos.md","filePath":"guide/setup-guide/macos.md","lastUpdated":1725861431000}'),r={name:"guide/setup-guide/macos.md"},p={id:"setup-guide-–-frontmatter-title",tabindex:"-1"},c=a("a",{class:"header-anchor",href:"#setup-guide-–-frontmatter-title","aria-label":'Permalink to "Setup Guide – {{ $frontmatter.title }}"'},"​",-1),d=o(`<h2 id="preparation" tabindex="-1">Preparation <a class="header-anchor" href="#preparation" aria-label="Permalink to &quot;Preparation&quot;">​</a></h2><p>You have to prepare the following folder structure:</p><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span>...</span></span>
<span class="line"><span>├── ocr4all</span></span>
<span class="line"><span>│   ├── data</span></span>
<span class="line"><span>│   |   ├── [Your book]</span></span>
<span class="line"><span>│   |   |   ├── input</span></span>
<span class="line"><span>│   |   |   |   ├── 0001.png</span></span>
<span class="line"><span>│   |   |   |   ├── 0002.png</span></span>
<span class="line"><span>│   |   |   |   ├── ...</span></span>
<span class="line"><span>│   |   ├── [Another book]</span></span>
<span class="line"><span>│   |   |   ├── input</span></span>
<span class="line"><span>│   |   |   |   ...</span></span>
<span class="line"><span>│   ├── models</span></span>
<span class="line"><span>...</span></span></code></pre></div><p>Explanation:</p><ul><li><code>ocr4all</code> (main folder)</li><li><code>models</code> (folder for the neural network models)</li><li><code>data</code> (folder for the documents you want to recognize)</li><li><code>[Your book]</code> (folder that contains all data of a single, specific print/book)</li><li><code>input</code> (folder for original, coloured / grayscaled book scans on page level)</li></ul><h3 id="docker-setup" tabindex="-1">Docker Setup <a class="header-anchor" href="#docker-setup" aria-label="Permalink to &quot;Docker Setup&quot;">​</a></h3><ul><li><a href="https://docs.docker.com/desktop/install/mac-install/" target="_blank" rel="noreferrer">Install Docker Desktop on macOS</a></li></ul><h3 id="ocr4all-setup" tabindex="-1">OCR4all setup <a class="header-anchor" href="#ocr4all-setup" aria-label="Permalink to &quot;OCR4all setup&quot;">​</a></h3><ul><li>The OCR4all folder structure detailed above (<code>Preparation</code>) can be located anywhere you want.</li><li>Open a terminal inside the OCR4all folder and load an OCR4all image by using the following command (this will take up a few minutes and requires a stable connection to the internet):</li></ul><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span>docker pull uniwuezpd/ocr4all</span></span></code></pre></div><ul><li>Create the OCR4all container using the following command:</li></ul><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span>sudo docker run -p 1476:8080 \\</span></span>
<span class="line"><span>    --name ocr4all \\</span></span>
<span class="line"><span>    -v $PWD/data:/var/ocr4all/data \\</span></span>
<span class="line"><span>    -v $PWD/models:/var/ocr4all/models/custom \\</span></span>
<span class="line"><span>    -it uniwuezpd/ocr4all</span></span></code></pre></div><ul><li>Do not enter line breaks manually!</li></ul><h3 id="browser-access-and-further-use" tabindex="-1">Browser access and further use <a class="header-anchor" href="#browser-access-and-further-use" aria-label="Permalink to &quot;Browser access and further use&quot;">​</a></h3><ul><li><p>OCR4all is optimized for Chrome/Chromium.</p></li><li><p>Browser access: <a href="http://localhost:1476/ocr4all/" target="_blank" rel="noreferrer"><a href="http://localhost:1476/ocr4all/" target="_blank" rel="noreferrer">http://localhost:1476/ocr4all/</a></a></p></li><li><p>If you want to check whether the mapping is working correctly you can add the example projects <code>Cirurgia</code> and <code>GNM</code> from <a href="https://github.com/OCR4all/getting_started/tree/master/ocr4all/data" target="_blank" rel="noreferrer">here</a> to your <code>data</code> directory. In the browser, check <code>Project Overview</code> -&gt; <code>Project selection</code>: If you can find the two aforementioned books (or any other book that you added), the mapping (<code>-v $PWD/data:/…</code>) is working properly.</p></li><li><p>Otherwise, it´s likely that there was a typo in the “docker run” command, so you will have to create the container again. First, delete the container you just created:</p></li><li><p>Stop the process in the terminal using CTRL+C, then type:</p></li></ul><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span>docker rm ocr4all</span></span></code></pre></div><ul><li>Check and correct your command (as with most terminals, you can sift through your previous commands using the arrow keys), especially the <code>-v $PWD/data:/…</code> lines, then run it again.</li><li>If everything is set up properly, you are able to restart OCR4all in the future by using:</li></ul><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span>docker start –ia ocr4all</span></span></code></pre></div>`,18);function u(e,h,m,g,b,k){return i(),t("div",null,[a("h1",p,[n("Setup Guide – "+l(e.$frontmatter.title)+" ",1),c]),d])}const y=s(r,[["render",u]]);export{v as __pageData,y as default};