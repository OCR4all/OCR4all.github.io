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

![ZPD-Logo](zpd.png)

### Workflow

Von der Vorverarbeitung der zur bearbeitenden Bilddateien \(sog. Preprocessing) über die Layoutsegmentierung \(sog. 
Region Segmentation mit [https://github.com/OCR4all/LAREX](https://github.com/OCR4all/LAREX)), die Zeilensegmentierung 
\(Line Segmentation) und Texterkennung \(Recognition mit [https://github.com/Calamari-OCR](https://github.com/Calamari-OCR)
) bis hin zur Korrektur der erkannten Texte (Ground Truth Production) und der Erstellung werkspezifischer OCR-Modelle in
einem Trainingsmodul beschreibt OCR4all einen vollwertigen OCR-Workflow.

Vor allem durch die Möglichkeit der Herstellung und des Trainings
	werkspezifischer Texterkennungsmodelle können mit OCR4all bei so gut
	wie allen gedruckten Texten sehr gute Ergebnisse in der digitalen
	Texterschließung erzielt werden.

### Kooperation mit OCR-D

Im Sommer 2020 wurde eine Kooperation zwischen OCR4all und der
	koordinierten Förderinitiative zur Weiterentwicklung von Verfahren der
	Optical Character Recognition – [https://ocr-d.de](https://ocr-d.de) vereinbart. 
Das Hauptziel des DFG-geförderten OCR-D Projekts ist die
	konzeptionelle und technische Vorbereitung der Volltexttransformation
	der im deutschen Sprachraum erschienenen Drucke des 16.-18.
	Jahrhunderts (VD16, VD17, VD18). Dazu wird die automatischen
	Volltexterkennung, analog zum OCR4all Ansatz, in einzelne
	Prozessschritte zerlegt, die in der Open Source OCR-D-Software
	nachvollzogen werden können, mit dem Ziel, optimale Workflows für die
	zu prozessierenden alten Drucke zu erstellen und damit wissenschaftlich
	verwertbare Volltexte zu generieren.

Gegenstand der Kooperation ist, neben dem fortlaufenden Austausch vor
	allem über Schnittstellen, skalierbare Softwareimplementierungen,
	Erstellung und Bereitstellung von GT sowie kommende Entwicklungen im
	OCR-Bereich, eine technische Annäherung der beiden Projekte. OCR4all
	wird dazu in seiner OCR-Lösung die OCR-D Spezifikationen umsetzen und
	Schnittstellen zu OCR-D Werkzeugen realisieren. Setzt OCR4all intern
	auf OCR-D Lösungen, profitieren OCR4all Anwender:innen von der
	erweiterten Auswahl an Werkzeugen und den damit einhergehenden
	Möglichkeiten, wohingegen OCR-D eine größere Reichweite erhält und
	durch den vereinfachten Zugang auch neue Anwendergruppen in- und
	außerhalb der VD-Massendigitalisierung erreicht.

### Berichterstattung (Auswahl)
- Radiointerview SWR2 Impuls: Mittelalterliche Handschriften werden
		Textdokumente
- [Toolvorstellung](https://fortext.net/tools/tools/ocr4all) 
  im Rahmen des DFG-geförderten Projekts [forText](https://fortext.net)
- Dr. Johann Ramminger: [ocr4all - OCR for Incunables](https://jramminger.github.io/ocr4all)
- Der Tagesspiegel: Computertool für alte Texte
- Der Standard: [Zuverlässiges
  Texterkennungs-Tool für historische Druckschriften](https://www.derstandard.de/story/2000101916347/zuverlaessige-texterkennungs-tool-fuer-historische-druckschriften)
-Augsburger Allgemeine: [Computer liest alte Texte](https://www.augsburger-allgemeine.de/bayern/Computer-liest-alte-Texte-id54130851.html)
- einBlick: [Modernes Tool für alte Texte](https://www.uni-wuerzburg.de/aktuelles/einblick/single/news/modernes-tool-fuer-alte-texte)
### Zitation

Falls Sie OCR4all verwenden, zitieren Sie bitte das zugehörige [Paper](https://www.mdpi.com/2076-3417/9/22/4853"):
Reul, C., Christ, D., Hartelt, A., Balbach, N., Wehner, M., Springmann, U., Wick, C., Grundig, Büttner, A., C.,
Puppe, F.: OCR4all — An open-source tool providing a (semi-) automatic OCR workflow for historical printings,
Applied Sciences 9(22) (2019)

### Funding
- [DFG-Förderinitiative "OCR-D"](https://ocr-d.de/de/), (Phase 2 und 3)
- [Zentrum für Philologie
  und Digitalität (ZPD)](https://www.uni-wuerzburg.de/zpd), Universität Würzburg
- BMBF gefördertes Projekt [Kallimachos](http://kallimachos.de)
- [Lehrstuhl für
  Künstliche Intelligenz und Wissenssysteme](https://www.informatik.uni-wuerzburg.de/is), Universität Würzburg
