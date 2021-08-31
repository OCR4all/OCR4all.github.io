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
) bis hin zur Korrektur der erkannten Texte (Ground Truth Production) und der Erstellung werkspezifischer OCR-Modelle in
einem Trainingsmodul beschreibt OCR4all einen vollwertigen OCR-Workflow.</p>
</template>
