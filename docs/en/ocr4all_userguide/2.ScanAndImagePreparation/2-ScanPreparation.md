---
lang: en-US
title: 2. Scan and Image Preparation (ScanTailor)
description: Scan and Image Preparation
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
prev: /en/ocr4all_userguide/1.OCR4all/1.2_Set up and folder structure.md
next: /en/ocr4all_userguide/3.ProjectStartAndOverview/3.1-Getting started.md
---
::: danger Warning
This page is still under construction.
If you come across any problems please [contact us](mailto:florian.langhanki@uni-wuerzburg.de).
:::
# 2.	Scan and Image Preparation (ScanTailor)

<p style="text-align: justify">When it comes to early modern prints, the available material exists often solely in the form of facsimilia. Although they generally exhibit a good if not very good quality, their overall condition makes them rather unsuited for a direct export in OCR4all. This is the case when the image file contains, aside the mere text, pictures of the book cover or printing surface. Were those images to be binarized during the workflow, black lines will often occur which are due to contrast differences in the original image and will impair both the OCR and the segmentation. Scan rotation and the display of two book pages on the same scan are other, frequent problems.

However, these complications can be easily avoided through the appropriate preparation of the image files. Therefore, scans destined to be processed with OCR4all should ideally only feature the content of each single page meant for the recognition process. At the time, the ideal scan should also contain enough blank page space so as not to impede further steps, such as segmentation. Thus, only the page content deemed irrelevant to the recognition process should be removed while taking care to leave as much of the original scanned page as possible (concretely, this means page margins shouldn’t be entirely removed).

Theoretically, most image editors are suitable (GIMP, Adobe Photoshop, etc.). If you have a PDF available it's also possible to cut and rotate the pages with Adobe Acrobat DC (Batch Processing). However, we advise the user to employ ScanTailor which sustains a considerable data quantity and processes images quickly, efficiently and in a standardized manner. Detailed instructions can be found here.

This step is completely optional and not part of the OCR4all workflow, which is why no support will be provided here. Each user has to decide for himself whether additional preprocessing of this kind would be profitable for his work or even necessary.</p>
