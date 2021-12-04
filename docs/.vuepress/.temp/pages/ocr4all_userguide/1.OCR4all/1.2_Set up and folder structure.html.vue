<template><div class="custom-container danger"><p class="custom-container-title">Achtung</p>
<p>Die Seite wird gerade noch überarbeitet.
Bei auftretenden Problemen <a href="mailto:florian.langhanki@uni-wuerzburg.de">kontaktieren</a> Sie uns bitte.</p>
</div>
<h2 id="_1-2einrichtung-und-ordnerstruktur" tabindex="-1"><a class="header-anchor" href="#_1-2einrichtung-und-ordnerstruktur" aria-hidden="true">#</a> 1.2	Einrichtung und Ordnerstruktur</h2>
<p style="text-align: justify">Sobald OCR4all vollständig installiert ist, besteht mit „ocr4all“ und den beiden Unterordner „data“ und „models“ auch eine grundlegende und notwendige Ordnerstruktur für die Bearbeitung von Werken. In „data“ werden dabei sowohl alle Daten gespeichert, die der Nutzer in OCR4all bearbeiten will, als auch diejenigen automatisch abgelegt, die während des OCR-Workflows vom Nutzer mittels OCR4all produziert werden. Dazu muss zu Beginn in „data“ ein sog. Werkordner angelegt werden (vermeiden Sie in der frei wählbaren Bezeichnung Ihres Werks bitte Umlaute und Leerzeichen!), der wiederum einen Ordner namens „input“ mit den zu bearbeitenden Scans bzw. Bilddateien enthält. Im weiteren Verlauf der Arbeit mit OCR4all werden einem, auf derselben Ebene automatisch erstelltem „processing“-Ordner jeweils Bilder für unterschiedliche Verarbeitungsstufen der Scandateien und PageXML-Dateien hinzugefügt.</p>
<pre>
...
├── ocr4all
│   ├── data
│   |   ├── [Ihr Werk]
│   |   |   ├── input
│   |   |   |   ├── 0001.png
│   |   |   |   ├── 0002.png
│   |   |   |   ├── ...
│   ├── models
...
</pre>  
<p style="text-align: justify">In „models“ können allgemeine gemischte Modelle zur Texterkennung abgelegt werden (eine Auswahl findet sich hier). Auch werden hier mit OCR4all erstellte werkspezifische Modelle in einem nach dem entsprechenden Werk benannten Ordner abgelegt. Sobald der jeweilige Trainingsprozess beginnt, werden in diesen „models/Werkbezeichnung“-Ordner die so neu entstehenden Modelle durchnummeriert (d. h. mit dem Modell(-ensemble) „0“ beginnend) abgespeichert.
</p>
</template>
