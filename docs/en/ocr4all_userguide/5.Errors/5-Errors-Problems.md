---
lang: en-US
title: 5. Errors, frequent problems and how to avoid them
description: Errors, frequent problems and how to avoid them
# Sidebar / Kapitelübersicht
sidebar: [ { text: 'OCR4all Userguide' },
{ text : '0. Start', link: '/en/ocr4all_userguide/0.FrontPage/0.FrontPage.md' }, 
{ text: '1. OCR4all', 
children: [{text: '1.1 Introduction', link: '/en/ocr4all_userguide/1.OCR4all/1.1_Introduction.md'}, 
{text: '1.2 Set up and folder structure', link: '/en/ocr4all_userguide/1.OCR4all/1.2_Set up and folder structure.md'}]}, 
{ text: '2. Scan Preparation', link: '/en/ocr4all_userguide/2.ScanAndImagePreparation/2-ScanPreparation.md', }, 
{ text: '3. Project Start and Overview', 
children: [{text: '3.1 Getting started', link: '/en/ocr4all_userguide/3.ProjectStartAndOverview/3.1-Getting started.md'}, 
{text: '3.2 Project Overview', link: '/en/ocr4all_userguide/3.ProjectStartAndOverview/3.2-Project Overview.md'}]}, 
{ text: '4. Workflow', link: '/en/ocr4all_userguide/4.Workflow/Summary.md', }, 
{ text: '5. Errors, Problems', link: '/en/ocr4all_userguide/5.Errors/5-Errors-Problems.md', }]
# NavLink
prev: /en/ocr4all_userguide/4.Workflow/Summary
next: false
---
::: danger Warning
This page is still under construction.
If you come across any problems please [contact us](mailto:florian.langhanki@uni-wuerzburg.de).
:::
## 5.	Errors, frequent problems and how to avoid them

Problems with the installation and start of Docker:
- Did you encounter problems while installing and starting Docker: you will find a detailed guide here.
- Do you have difficulties starting the Docker containers for Ocr4all? Is no server start possible? First, start Docker again (if necessary, reload OCR4all image anew and reset the corresponding container, following the steps described in the OCR4all setup guide here.

Problems selecting works in 'project overview':
- If available works are not displayed in 'project overview', review your folder structure and check if it is correct, following the guidelines outlined in chapter 1.2. If there is no problem with your folder structure, delete the OCR4all Docker container and re- execute the 'Docker run...' command, following the setup guide here.
- Are you unable to select a work? Please ensure that your work/document title contains no blanks or umlauts.





**We welcome all questions and encourage to contact us if you have any problem. Please send an email (to christian.reul@uni-wuerzburg.de (project lead) or florian.langhanki@uni-wuerzburg.de (consultation, guides, and non-technical user support)) or contact us on GitHub.**
