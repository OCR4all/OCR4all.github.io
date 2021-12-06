<template><div class="custom-container danger"><p class="custom-container-title">Achtung</p>
<p>Die Seite wird gerade noch überarbeitet.
Bei auftretenden Problemen <a href="mailto:florian.langhanki@uni-wuerzburg.de">kontaktieren</a> Sie uns bitte.</p>
</div>
<h2 id="_3-start-und-ubersicht" tabindex="-1"><a class="header-anchor" href="#_3-start-und-ubersicht" aria-hidden="true">#</a> 3.	Start und Übersicht</h2>
<h3 id="_3-1ocr4all-starten" tabindex="-1"><a class="header-anchor" href="#_3-1ocr4all-starten" aria-hidden="true">#</a> 3.1	OCR4all starten</h3>
<p><strong>Docker starten:</strong></p>
<ul>
<li>Linux: Docker startet automatisch mit Inbetriebnahme des Rechners</li>
<li>Docker for Windows: Docker starten über Docker-Icon in „Programme“, „Docker is running“ abwarten</li>
<li>Docker Toolbox: Docker Quickstart Terminal öffnen, „Docker is configured to use default machine...“ abwarten</li>
</ul>
<p><strong>OCR4all starten:</strong></p>
<ul>
<li>Linux: Terminal öffnen, <code>docker start -ia ocr4all</code> eingeben und mit „Enter“ bestätigen, Serverstart abwarten</li>
<li>Windows 10 (Pro, Enterprise, Education): Windows-PowerShell  öffnen,  Befehl <code>docker start -ia ocr4all</code> eingeben, mit „Enter“ bestätigen, Serverstart abwarten</li>
<li>Ältere Windowsversionen (mit Docker Toolbox): im Docker Quickstart Terminal <code>docker start -ia ocr4all</code> eingeben, mit „Enter“ bestätigen, Serverstart abwarten</li>
</ul>
<p>Danach kann <strong>OCR4all im Browser</strong> je nach verwendeter Docker-Version unter den folgenden Domains aufgerufen werden:</p>
<ul>
<li>Linux, Docker for Windows, MacOS: http://localhost:1476/ocr4all/</li>
<li>Docker Toolbox: http://192.168.99.100:1476/ocr4all/</li>
</ul>
</template>
