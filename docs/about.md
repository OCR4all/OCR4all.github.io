---
lang: de-GER
title: about
description: about OCR4all
---
OCR4all ist eine Software, die zur digitalen Texterschließung vornehmlich sehr früh gedruckter Werke entwickelt wurde.
Da deren Drucktypen und oft komplex gestalteten Layoutkonzeptionen die Erkennungsmöglichkeiten vieler anderer
Texterkennungsprogramme übersteigen, bedarf es hier der Möglichkeit, den Digitalisierungsvorgang variabel, korpus- und
werkspezifisch zu gestalten. Verständlich und selbstständig anwendbar spricht der in OCR4all vorgeschlagene 
semi-automatische OCR-Workflow dabei auch einen dezidiert nicht-informatischen Nutzerkreis an und kombiniert
unterschiedliche Arbeitswerkzeuge und Tools innerhalb einer einheitlichen Benutzeroberfläche. 
Der ständige Wechsel zwischen unterschiedlichen Programmen ist deshalb nicht mehr notwendig.
Mit dem [Abschluss](http://kallimachos.de/kallimachos/index.php/Kallimachos_II_(Eingehende_Darstellung)#AP1:_OCR-Optimierung)
der zweiten Projektphase des BMBF-geförderten Verbundprojekts [Kallimachos](http://kallimachos.de) wird die Software nun
am [Zentrum für Philologie und Digitalität](https://www.uni-wuerzburg.de/zpd) der Universität etabliert, um sie einer
möglichst breiten Nutzergruppe dauerhaft frei verfügbar zu machen.

### Workflow

Von der Vorverarbeitung der zur bearbeitenden Bilddateien \(sog. Preprocessing) über die Layoutsegmentierung \(sog. 
Region Segmentation mit [https://github.com/OCR4all/LAREX](https://github.com/OCR4all/LAREX)), die Zeilensegmentierung 
\(Line Segmentation) und Texterkennung \(Recognition mit [https://github.com/Calamari-OCR](https://github.com/Calamari-OCR)
) bis hin zur Korrektur der erkannten Texte (Ground Truth Production) und der Erstellung werkspezifischer OCR-Modelle in
einem Trainingsmodul beschreibt OCR4all einen vollwertigen OCR-Workflow.
