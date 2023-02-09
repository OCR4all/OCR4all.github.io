---
title: What is OCR4all?
---
# {{ $frontmatter.title }}
OCR4all was developed for the digitization of primarily
very early printed documents. As many text recognition programs are
	often not able to handle the high complexity of the types and layout
	conceptions these texts hold, an option to organize the process of
	digitization in a variable way, orienting on the peculiarities of the
	specific corpus or document is urgently needed.

By combining different tools within a uniform user interface, the
	constant need to switch between different programs is eliminated. The
	comprehensible and intuitive handling combined with the semi-automatic
	workflow of OCR4all explicitly addresses non-computer-scientists as
	well.

With the [closure](http://kallimachos.de/kallimachos/index.php/Kallimachos_II_(Eingehende_Darstellung)#AP1:_OCR-Optimierung)
of the second project stage of the BMBF-funded joint project [Kallimachos](http://kallimachos.de)
the software is now being established at the [center for philology and digitally](https://www.uni-wuerzburg.de/zpd)
of the University of Würzburg, which
opens the program up for the widest possible user group.

### Workflow
The workflow starts with the Preprocessing of the relevant image files.
Layout segmentation (so-called Region Segmentation carried out with
[LAREX](https://github.com/OCR4all/LAREX) and Line Segmentation
follow. Next is the Text Recognition which is carried out with
[Calamari](https://github.com/Calamari-OCR). The final stage is
	the correction of the recognized texts the so-called Ground Truth
	Production. This Ground Truth is then the foundation for creating
	work-specific OCR models in a training module. Therefore OCR4all
	entails a full-featured OCR workflow.

![Workflow](/images/about/ocr4all/workflow.png)

Particularly due to the capacity to create and train work-specific
	text recognition models, OCR4all makes achieving high-quality results
	in the digitization of texts in nearly all printed documents possible.

![Segmentation](/images/about/ocr4all/ocr4all-complex.png)
![Correction](/images/about/ocr4all/larex-corr.png)

### Cooperation with OCR-D
In the summer of 2020, a co-operation between OCR4all and the
	coordinated funding initiative for further development of processes
	involving Optical Character Recognition ([OCR-D](https://ocr-d.de)) was arranged.

The main goal of the DFG-funded OCR-D project was the conceptual as
	well as technical preparation of the mass digitization of printed texts
	published in german-speaking areas from the 16th to the 18th century
	(VD16, VD17, VD18).

For this purpose, the automatic full-text recognition, analogous to
	the OCR4all approach, is divided into individual process steps that can
	be reproduced in the Open Source OCR-D software. This aims to create
	optimized workflows for the old prints to be processed and thus
	generating scientifically applicable full texts.

The aim of the co-operation is not only the continuous exchange of
	information mainly about interfaces, scalable software implementations,
	creation and provision of GT but the upcoming developments in the OCR
	field as well. Furthermore, it strives to achieve a technical
	convergence of the two projects. For this purpose, OCR4all will
	implement the OCR-D specifications in its OCR solution and realize its
	interfaces for OCR-D tools. With OCR4all's internal use of OCR-D
	solutions, OCR4all users will benefit from the extended selection of
	tools and the associated possibilities, whereas OCR-D will have a
	broader scope and, through simplified access, will also reach new user
	groups inside and outside VD mass digitization.

### Reporting (assortment)
- einBlick: [Historische Schriften digital erkennen](https://www.uni-wuerzburg.de/aktuelles/einblick/single/news/historische-schriften-digital-erkennen/)
- Radiointerview SWR2 Impuls: Mittelalterliche Handschriften werden
		Textdokumente
- [Toolvorstellung](https://fortext.net/tools/tools/ocr4all)
  im Rahmen des DFG-geförderten Projekts [forText](https://fortext.net)
- Dr. Johann Ramminger: [ocr4all - OCR for Incunables](https://jramminger.github.io/ocr4all)
- Der Tagesspiegel: Computertool für alte Texte
- Der Standard: [Zuverlässiges Texterkennungs-Tool für historische
  Druckschriften](https://www.derstandard.de/story/2000101916347/zuverlaessige-texterkennungs-tool-fuer-historische-druckschriften)
- Augsburger Allgemeine: [Computer liest alte Texte](https://www.augsburger-allgemeine.de/bayern/Computer-liest-alte-Texte-id54130851.html)
- einBlick: [Modernes Tool für alte Texte](https://www.uni-wuerzburg.de/aktuelles/einblick/single/news/modernes-tool-fuer-alte-texte)

### Cite

If you are using OCR4all please cite the corresponding [paper](https://www.mdpi.com/2076-3417/9/22/4853):

``` 
Reul, C., Christ, D., Hartelt, A., Balbach, N., Wehner, M., Springmann, U., Wick, C., Grundig, Büttner, A., C.,
Puppe, F.: OCR4all — An open-source tool providing a (semi-) automatic OCR workflow for historical printings,
Applied Sciences 9(22) (2019)
```

### Funding
- [DFG-funded Initiative "OCR-D"](https://ocr-d.de/en/), (phase 2 and 3)
- [Center for Philology and Digitality (ZPD)](https://www.uni-wuerzburg.de/zpd), University of Würzburg
- BMBF-funded Project [Kallimachos](http://kallimachos.de)
- [Chair of Computer Science VI - Artificial Intelligence and Applied Computer Science](https://www.informatik.uni-wuerzburg.de/is), University of Würzburg

