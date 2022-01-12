---
lang: de-DE
title: 5. Fehler, häufige Probleme und ihre Vermeidung
description: Fehler, häufige Probleme und ihre Vermeidung
# Sidebar / Kapitelübersicht
sidebar: [ { text: 'OCR4all Userguide' },
{ text : '0. Start', link: '/ocr4all_userguide/0.FrontPage/0.FrontPage.md' }, 
{ text: '1. OCR4all', 
children: [{text: '1.1 Einführung', link: '/ocr4all_userguide/1.OCR4all/1.1_Introduction.md'}, 
{text: '1.2 Einrichtung und Ordnerstruktur', link: '/ocr4all_userguide/1.OCR4all/1.2_Set up and folder structure.md'}]}, 
{ text: '2. Scan Vorbereitung', link: '/ocr4all_userguide/2.ScanAndImagePreparation/2-ScanPreparation.md', }, 
{ text: '3. Projekt starten und Übersicht', 
children: [{text: '3.1 OCR4all starten', link: '/ocr4all_userguide/3.ProjectStartAndOverview/3.1-Getting started.md'}, 
{text: '3.2 Project Overview', link: '/ocr4all_userguide/3.ProjectStartAndOverview/3.2-Project Overview.md'}]}, 
{ text: '4. Workflow', link: '/ocr4all_userguide/4.Workflow/Summary.md', }, 
{ text: '5. Fehler, häufige Probleme und ihre Vermeidung', link: '/ocr4all_userguide/5.Errors/5-Errors-Problems.md', }]
# NavLink
prev: /ocr4all_userguide/4.Workflow/Summary.md
next: false
---
::: danger Achtung 
Die Seite wird gerade noch überarbeitet.
Bei auftretenden Problemen [kontaktieren](mailto:florian.langhanki@uni-wuerzburg.de) Sie uns bitte.
:::
## 5.	Fehler, häufige Probleme und ihre Vermeidung

Probleme bei der Installation und beim Start von Docker:  
- Probleme bei der Installation von Docker? Eine ausführliche Installationsanleitung findet sich LINKhierLINK.
- Probleme beim Starten des Docker-Containers für OCR4all? Kein Serverstart möglich? Starten Sie zuerst Docker noch einmal neu, ggf. laden Sie das OCR4all-Image neu und richten den entsprechenden Container neu ein. Orientieren Sie sich dabei am LINKhierLINK verfügbaren Setup Guide für OCR4all.

Probleme bei der Auswahl von Werken im Project Overview:  
- Probleme im „Project Overview“ – Werke werden nicht angezeigt? Bitte überprüfen Sie Ihre Ordnerstruktur. Orientieren Sie sich dabei an den Vorgaben in Kap. 1.2. Falls Ihre Ordnerstruktur korrekt ist, entfernen Sie den OCR4all-Docker-Container und führen Sie den „Docker run...“-Befehl entsprechend des Setup Guide (LINKhierLINK) noch einmal durch.
- Werkauswahl nicht möglich? Bitte stellen Sie sicher, dass in Ihren Werkbezeichnungen keine Leerzeichen oder Umlaute vorkommen.




**Bei konkreten Fragen, Anmerkungen oder Problemen kontaktieren Sie uns gerne per E- Mail (christian.reul@uni-wuerzburg.de (Projektleitung); florian.langhanki@uni-wuerzburg.de (Beratung, Guides und Anleitungen, Unterstützung nicht-technischer Nutzer)) oder durch einen Beitrag auf GitHub.**
