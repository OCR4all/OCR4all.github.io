<template><p>OCR4all ist eine Software, die zur digitalen Texterschließung vornehmlich sehr früh gedruckter Werke entwickelt wurde.
Da deren Drucktypen und oft komplex gestalteten Layoutkonzeptionen die Erkennungsmöglichkeiten vieler anderer
Texterkennungsprogramme übersteigen, bedarf es hier der Möglichkeit, den Digitalisierungsvorgang variabel, korpus- und
werkspezifisch zu gestalten. Verständlich und selbstständig anwendbar spricht der in OCR4all vorgeschlagene
semi-automatische OCR-Workflow dabei auch einen dezidiert nicht-informatischen Nutzerkreis an und kombiniert
unterschiedliche Arbeitswerkzeuge und Tools innerhalb einer einheitlichen Benutzeroberfläche.
Der ständige Wechsel zwischen unterschiedlichen Programmen ist deshalb nicht mehr notwendig.
Mit dem <a href="http://kallimachos.de/kallimachos/index.php/Kallimachos_II_(Eingehende_Darstellung)#AP1:_OCR-Optimierung" target="_blank" rel="noopener noreferrer">Abschluss<OutboundLink/></a>
der zweiten Projektphase des BMBF-geförderten Verbundprojekts <a href="http://kallimachos.de" target="_blank" rel="noopener noreferrer">Kallimachos<OutboundLink/></a> wird die Software nun
am <a href="https://www.uni-wuerzburg.de/zpd" target="_blank" rel="noopener noreferrer">Zentrum für Philologie und Digitalität<OutboundLink/></a> der Universität etabliert, um sie einer
möglichst breiten Nutzergruppe dauerhaft frei verfügbar zu machen.</p>
<h3 id="workflow" tabindex="-1"><a class="header-anchor" href="#workflow" aria-hidden="true">#</a> Workflow</h3>
<p>Von der Vorverarbeitung der zur bearbeitenden Bilddateien (sog. Preprocessing) über die Layoutsegmentierung (sog.
Region Segmentation mit <a href="https://github.com/OCR4all/LAREX" target="_blank" rel="noopener noreferrer">https://github.com/OCR4all/LAREX<OutboundLink/></a>), die Zeilensegmentierung
(Line Segmentation) und Texterkennung (Recognition mit <a href="https://github.com/Calamari-OCR" target="_blank" rel="noopener noreferrer">https://github.com/Calamari-OCR<OutboundLink/></a>
) bis hin zur Korrektur der erkannten Texte (Ground Truth Production) und der Erstellung werksspezifischer OCR-Modelle in
einem Trainingsmodul beschreibt OCR4all einen vollwertigen OCR-Workflow.</p>
<p><img src="@source/.vuepress/public/images/workflow.png" alt="Workflow"></p>
<p>Vor allem durch die Möglichkeit der Herstellung und des Trainings
werksspezifischer Texterkennungsmodelle können mit OCR4all bei so gut
wie allen gedruckten Texten sehr gute Ergebnisse in der digitalen
Texterschließung erzielt werden.</p>
<p><img src="@source/.vuepress/public/images/ocr4all-complex.png" alt="Segmentierung">
<img src="@source/.vuepress/public/images/larex-corr.png" alt="Korrektur"></p>
<h3 id="kooperation-mit-ocr-d" tabindex="-1"><a class="header-anchor" href="#kooperation-mit-ocr-d" aria-hidden="true">#</a> Kooperation mit OCR-D</h3>
<p>Im Sommer 2020 wurde eine Kooperation zwischen OCR4all und der
koordinierten Förderinitiative zur Weiterentwicklung von Verfahren der
Optical Character Recognition – <a href="https://ocr-d.de" target="_blank" rel="noopener noreferrer">https://ocr-d.de<OutboundLink/></a> vereinbart.
Das Hauptziel des DFG-geförderten OCR-D Projekts ist die
konzeptionelle und technische Vorbereitung der Volltexttransformation
der im deutschen Sprachraum erschienenen Drucke des 16.-18.
Jahrhunderts (VD16, VD17, VD18). Dazu wird die automatischen
Volltexterkennung, analog zum OCR4all Ansatz, in einzelne
Prozessschritte zerlegt, die in der Open Source OCR-D-Software
nachvollzogen werden können, mit dem Ziel, optimale Workflows für die
zu prozessierenden alten Drucke zu erstellen und damit wissenschaftlich
verwertbare Volltexte zu generieren.</p>
<p>Gegenstand der Kooperation ist, neben dem fortlaufenden Austausch vor
allem über Schnittstellen, skalierbare Softwareimplementierungen,
Erstellung und Bereitstellung von GT sowie kommende Entwicklungen im
OCR-Bereich, eine technische Annäherung der beiden Projekte. OCR4all
wird dazu in seiner OCR-Lösung die OCR-D Spezifikationen umsetzen und
Schnittstellen zu OCR-D Werkzeugen realisieren. Setzt OCR4all intern
auf OCR-D Lösungen, profitieren OCR4all Anwender:innen von der
erweiterten Auswahl an Werkzeugen und den damit einhergehenden
Möglichkeiten, wohingegen OCR-D eine größere Reichweite erhält und
durch den vereinfachten Zugang auch neue Anwendergruppen in- und
außerhalb der VD-Massendigitalisierung erreicht.</p>
<h3 id="berichterstattung-auswahl" tabindex="-1"><a class="header-anchor" href="#berichterstattung-auswahl" aria-hidden="true">#</a> Berichterstattung (Auswahl)</h3>
<ul>
<li>einBlick: <a href="https://www.uni-wuerzburg.de/aktuelles/einblick/single/news/historische-schriften-digital-erkennen/" target="_blank" rel="noopener noreferrer">Historische Schriften digital erkennen<OutboundLink/></a></li>
<li>Radiointerview SWR2 Impuls: Mittelalterliche Handschriften werden
Textdokumente</li>
<li><a href="https://fortext.net/tools/tools/ocr4all" target="_blank" rel="noopener noreferrer">Toolvorstellung<OutboundLink/></a>
im Rahmen des DFG-geförderten Projekts <a href="https://fortext.net" target="_blank" rel="noopener noreferrer">forText<OutboundLink/></a></li>
<li>Dr. Johann Ramminger: <a href="https://jramminger.github.io/ocr4all" target="_blank" rel="noopener noreferrer">ocr4all - OCR for Incunables<OutboundLink/></a></li>
<li>Der Tagesspiegel: Computertool für alte Texte</li>
<li>Der Standard: <a href="https://www.derstandard.de/story/2000101916347/zuverlaessige-texterkennungs-tool-fuer-historische-druckschriften" target="_blank" rel="noopener noreferrer">Zuverlässiges
Texterkennungs-Tool für historische Druckschriften<OutboundLink/></a></li>
<li>Augsburger Allgemeine: <a href="https://www.augsburger-allgemeine.de/bayern/Computer-liest-alte-Texte-id54130851.html" target="_blank" rel="noopener noreferrer">Computer liest alte Texte<OutboundLink/></a></li>
<li>einBlick: <a href="https://www.uni-wuerzburg.de/aktuelles/einblick/single/news/modernes-tool-fuer-alte-texte" target="_blank" rel="noopener noreferrer">Modernes Tool für alte Texte<OutboundLink/></a></li>
</ul>
<h3 id="zitation" tabindex="-1"><a class="header-anchor" href="#zitation" aria-hidden="true">#</a> Zitation</h3>
<p>Falls Sie OCR4all verwenden, zitieren Sie bitte das zugehörige <a href="https://www.mdpi.com/2076-3417/9/22/4853" target="_blank" rel="noopener noreferrer">Paper<OutboundLink/></a>:</p>
<p><code>Reul, C., Christ, D., Hartelt, A., Balbach, N., Wehner, M., Springmann, U., Wick, C., Grundig, Büttner, A., C., Puppe, F.: OCR4all — An open-source tool providing a (semi-) automatic OCR workflow for historical printings, Applied Sciences 9(22) (2019)</code></p>
<h3 id="funding" tabindex="-1"><a class="header-anchor" href="#funding" aria-hidden="true">#</a> Funding</h3>
<ul>
<li><a href="https://ocr-d.de/de/" target="_blank" rel="noopener noreferrer">DFG-Förderinitiative &quot;OCR-D&quot;<OutboundLink/></a>, (Phase 2 und 3)</li>
<li><a href="https://www.uni-wuerzburg.de/zpd" target="_blank" rel="noopener noreferrer">Zentrum für Philologie
und Digitalität (ZPD)<OutboundLink/></a>, Universität Würzburg</li>
<li>BMBF gefördertes Projekt <a href="http://kallimachos.de" target="_blank" rel="noopener noreferrer">Kallimachos<OutboundLink/></a></li>
<li><a href="https://www.informatik.uni-wuerzburg.de/is" target="_blank" rel="noopener noreferrer">Lehrstuhl für
Künstliche Intelligenz und Wissenssysteme<OutboundLink/></a>, Universität Würzburg</li>
</ul>
</template>
