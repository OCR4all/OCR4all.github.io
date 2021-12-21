---
lang: de-DE
title: 2. Scan Vorbereitung
description: Scan Vorbereitung
# Sidebar / Kapitelübersicht
sidebar: [ { text: 'OCR4all Userguide' },
{ text : '0. Start', link: '/ocr4all_userguide/0.FrontPage/0.FrontPage.md' }, 
{ text: '1. OCR4all', 
children: ['/ocr4all_userguide/1.OCR4all/1.1_Introduction.md', 
'/ocr4all_userguide/1.OCR4all/1.2_Set up and folder structure.md']}, 
{ text: '2. Scan Vorbereitung', link: '/ocr4all_userguide/2.ScanAndImagePreparation/2-ScanPreparation.md', }, 
{ text: '3. Projekt starten und Übersicht', 
children: ['/ocr4all_userguide/3.ProjectStartAndOverview/3.1-Getting started.md', 
'/ocr4all_userguide/3.ProjectStartAndOverview/3.2-Project Overview.md']}, 
{ text: '4. Workflow', link: '/ocr4all_userguide/4.Workflow/Summary.md', }, 
{ text: '5. Fehler, häufige Probleme und ihre Vermeidung', link: '/ocr4all_userguide/5.Errors/5-Errors-Problems.md', }]
# NavLink
prev: /ocr4all_userguide/1.OCR4all/1.2_Set up and folder structure.md
next: /ocr4all_userguide/3.ProjectStartAndOverview/3.1-Getting started.md
---
::: danger Achtung 
Die Seite wird gerade noch überarbeitet.
Bei auftretenden Problemen [kontaktieren](mailto:florian.langhanki@uni-wuerzburg.de) Sie uns bitte.
:::
# 2.	Vorbereitung von Scans und Bilddateien (ScanTailor)

<p style="text-align: justify">Häufig liegen Werke, für die eine OCR durchgeführt werden soll, lediglich als Faksimilia vor. Deren Einzelbilder weisen zwar meistens eine gute bis sehr gute Qualität auf, sind jedoch in ihrer Gesamtanlage für den direkten Import in OCR4all eher ungeeignet. Dies ist bspw. der Fall, wenn Bilddateien über den eigentlichen Seiteninhalt hinaus Teile von Buchdeckel oder - rückseite sowie Teile einer Auflagefläche zeigen. Werden solche Bilder während des Workflows binarisiert, entstehen durch unterschiedliche Kontraste in den Originalen schwarze Trennlinien, die neben der eigentlichen OCR v. a. für die Segmentierung problematisch sind. Auch die Rotation von Scans oder die Darstellung von zwei Seiten pro Scan stellen häufige Probleme dar.
Diese können jedoch durch eine entsprechende Vorverarbeitung von Bilddateien einfach vermieden werden: Ziel muss es deshalb sein, Scans für die Arbeit mit OCR4all zu verwenden, die möglichst nur den zur Erkennung gedachten Inhalt einer einzelnen Seite zeigen. Gleichzeitig sollten über den eigentlich relevanten sog. Content hinaus auch diese vorverarbeiteten Bilder jedoch ausreichend unbedruckte bzw. unbeschriebene Seitenfläche aufweisen, um bspw. bestimmte Segmentierungsvorgänge nicht zu verkomplizieren. Sinnvoll ist es also, genau jene Teile des Bildes zu entfernen, die nicht zur eigentlichen Druckseite gehören und deshalb nicht erfasst werden müssen, daneben jedoch so viel der Originaldruckseite wie möglich zu erhalten (d. h. eben z. B. Seitenränder nicht vollständig zu entfernen).
Dazu bieten sich theoretisch sämtliche Bildbearbeitungsprogramme an (GIMP, Photoshop, etc.). Liegt das zu bearbeitende Werk als PDF vor, ist es auch möglich, innerhalb von Adobe Acrobat DC alle Seiten mittels Stapelverarbeitung zu beschneiden oder zu drehen. Empfohlen wird jedoch an dieser Stelle die Arbeit mit ScanTailor, da große Bildmengen einfach und standardisiert in relativ geringer Zeit verarbeitet werden können. Ausführliches Anleitungs- und Videomaterial findet sich hier.
Dieser Arbeitsschritt ist optional und kein Teil des OCR4all-Workflows, weshalb hier kein Support geleistet werden kann. Jeder Nutzer muss selbst entscheiden, ob eine zusätzliche Vorverarbeitung dieser Art für sein Werk gewinnbringend wäre oder sogar notwendig ist.</p>
