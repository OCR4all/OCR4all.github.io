---
title: Set up and folder structure
---
# {{ $frontmatter.title }}
Once OCR4all has been successfully installed, the ‘ocr4all’ folder and its two subfolders, `data` and `models`, provide the user with the basic and indispensable folder structure for the processing of printed texts.

`data` contains all the data the user intends to work on with OCR4all as well as all automatically generated data produced with OCR4all during the workflow. In order to complete the structure, `data` must contain a title folder, whose name can be freely chosen (whereby umlauts and blanks should be avoided) and which itself contains another subfolder titled `input` in which the original scans or images must be deposited. As the OCR4all workflow progresses, a `processing` folder will be automatically generated on the same system level, to which images corresponding to the processing stages of the user’s scans and PAGE XML files will be added.

Additionally, the user can save mixed recognition models in the ‘models’ folder (you will find a selection here). This folder will also contain book-specific models generated with OCR4all, which will be saved in sub folders named after the relevant book/work titles. Once a particular training starts, the generated models will be saved in such `models/work_title` folders and numbered accordingly, starting with `0`.
