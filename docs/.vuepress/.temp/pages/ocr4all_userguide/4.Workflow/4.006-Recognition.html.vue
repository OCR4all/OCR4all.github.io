<template><h3 id="_4-6recognition" tabindex="-1"><a class="header-anchor" href="#_4-6recognition" aria-hidden="true">#</a> 4.6	Recognition</h3>
<p><strong>Input</strong>: Textzeilen und ein oder mehrere OCR-Modelle<br>
<strong>Output</strong>: OCR-Output in Textform für jede in den PageXML-Dateien vorliegenden Zeile</p>
<ul>
<li>Der Arbeitsschritt der Recognition stellt die Erkennung von Text auf Grundlage der während der Line Segmentation (s. o.) erstellten Zeilenbilder aller Layoutelemente mit Text dar.</li>
<li>Wählen Sie dazu den Menüpunkt „Recognition”. In der rechten Seitenleiste finden Sie nun nur Scans bzw. Druckseiten des bearbeiteten Werkes aufgelistet, für die bereits alle Vorbedingungen der OCR erfüllt, d. h. alle bisher beschriebenen Arbeitsschritte (mit Ausnahme der „Noise Removal“) durchgeführt wurden. Wählen Sie jene aus, für die Sie Text produzieren lassen wollen.</li>
<li>Wählen Sie nun unter „Line recognition models” in der Spalte „Available” all jene Modelle oder Modellensembles aus, die zur Erkennung ihres Textes entsprechend der vorhandenen Schriftarten und Typen (z. B. frühneuzeitliche bzw. historische Fraktur, Kursive, historische Antiqua etc.) geeignet sind. Die Verwendung von Modellensembles (fünf gleichzeitig und gemeinsam agierende Einzelmodelle) statt einfacher Einzelmodelle wird dringend empfohlen! Durch einfaches Anklicken werden sie in die Spalte „Selected” verschoben. Über die „Search“-Funktion ist eine Filterung nach Namen möglich, wenn besonders viele Modelle zur Auswahl stehen.</li>
</ul>
<p><img src="/docs/.vuepress/public/images/Abb35.png" alt="Abb35.png"></p>
<p>Abb. 35: Auswahl eines gemischten Modellensembles für die Texterkennung.</p>
<ul>
<li>Eine Anpassung der erweiterten Einstellung ist in aller Regel nicht notwendig.</li>
<li>Klicken Sie nun auf „EXECUTE” und warten Sie die Texterkennung über die Fortschrittsanzeige und die Konsole ab.</li>
<li>Ist die Erkennung abgeschlossen, können Sie die Ergebnisse für jedes Zeilenbild unter dem Menüpunkt „Ground Truth Production” einsehen.</li>
</ul>
</template>
