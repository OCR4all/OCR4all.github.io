<template><p>The OCR4all software was developed for the digitization of primarily
very early printed documents. As many text recognition programs are
often not able to handle the high complexity of the types and layout
conceptions these texts hold, an option to organize the process of
digitization in a variable way, orienting on the peculiarities of the
specific corpus or document is urgently needed.</p>
<p>By combining different tools within a uniform user interface, the
constant need to switch between different programs is eliminated. The
comprehensible and intuitive handling combined with the semi-automatic
workflow of OCR4all explicitly addresses non-computer-scientists as
well.</p>
<p>With the <a href="http://kallimachos.de/kallimachos/index.php/Kallimachos_II_(Eingehende_Darstellung)#AP1:_OCR-Optimierung" target="_blank" rel="noopener noreferrer">closure<OutboundLink/></a>
of the second project stage of the BMBF-funded joint project <a href="http://kallimachos.de" target="_blank" rel="noopener noreferrer">Kallimachos<OutboundLink/></a>
the software is now being established at the <a href="https://www.uni-wuerzburg.de/zpd" target="_blank" rel="noopener noreferrer">center for philology and digitally<OutboundLink/></a>
of the University of Würzburg, which
opens the program up for the widest possible user group.</p>
<h3 id="workflow" tabindex="-1"><a class="header-anchor" href="#workflow" aria-hidden="true">#</a> Workflow</h3>
<p>The workflow starts with the Preprocessing of the relevant image files.
Layout segmentation (so-called Region Segmentation carried out with
<a href="https://github.com/OCR4all/LAREX" target="_blank" rel="noopener noreferrer">LAREX<OutboundLink/></a> and Line Segmentation
follow. Next is the Text Recognition which is carried out with
<a href="https://github.com/Calamari-OCR" target="_blank" rel="noopener noreferrer">Calamari<OutboundLink/></a>. The final stage is
the correction of the recognized texts the so-called Ground Truth
Production. This Ground Truth is then the foundation for creating
work-specific OCR models in a training module. Therefore OCR4all
entails a full-featured OCR workflow.</p>
<p><img src="@source/ocr4all-workflow.png" alt="Workflow"></p>
<p>Particularly due to the capacity to create and train work-specific
text recognition models, OCR4all makes achieving high-quality results
in the digitization of texts in nearly all printed documents possible.</p>
<p><img src="@source/ocr4all-segmentation.png" alt="Segmentation">
<img src="@source/ocr4all-correction.png" alt="Correction"></p>
<h3 id="cooperation-with-ocr-d" tabindex="-1"><a class="header-anchor" href="#cooperation-with-ocr-d" aria-hidden="true">#</a> Cooperation with OCR-D</h3>
<p>In the summer of 2020, a co-operation between OCR4all and the
coordinated funding initiative for further development of processes
involving Optical Character Recognition (<a href="https://ocr-d.de" target="_blank" rel="noopener noreferrer">OCR-D<OutboundLink/></a>) was arranged.</p>
<p>The main goal of the DFG-funded OCR-D project was the conceptual as
well as technical preparation of the mass digitization of printed texts
published in german-speaking areas from the 16th to the 18th century
(VD16, VD17, VD18).</p>
<p>For this purpose, the automatic full-text recognition, analogous to
the OCR4all approach, is divided into individual process steps that can
be reproduced in the Open Source OCR-D software. This aims to create
optimized workflows for the old prints to be processed and thus
generating scientifically applicable full texts.</p>
<p>The aim of the co-operation is not only the continuous exchange of
information mainly about interfaces, scalable software implementations,
creation and provision of GT but the upcoming developments in the OCR
field as well. Furthermore, it strives to achieve a technical
convergence of the two projects. For this purpose, OCR4all will
implement the OCR-D specifications in its OCR solution and realize its
interfaces for OCR-D tools. With OCR4all's internal use of OCR-D
solutions, OCR4all users will benefit from the extended selection of
tools and the associated possibilities, whereas OCR-D will have a
broader scope and, through simplified access, will also reach new user
groups inside and outside VD mass digitization.</p>
<h3 id="reporting-assortment" tabindex="-1"><a class="header-anchor" href="#reporting-assortment" aria-hidden="true">#</a> Reporting (assortment)</h3>
<ul>
<li>Radiointerview SWR2 Impuls: Mittelalterliche Handschriften werden
Textdokumente</li>
<li><a href="https://fortext.net/tools/tools/ocr4all" target="_blank" rel="noopener noreferrer">Toolvorstellung<OutboundLink/></a>
im Rahmen des DFG-geförderten Projekts <a href="https://fortext.net" target="_blank" rel="noopener noreferrer">forText<OutboundLink/></a></li>
<li>Dr. Johann Ramminger: <a href="https://jramminger.github.io/ocr4all" target="_blank" rel="noopener noreferrer">ocr4all - OCR for Incunables<OutboundLink/></a></li>
<li>Der Tagesspiegel: Computertool für alte Texte</li>
<li>Der Standard: <a href="https://www.derstandard.de/story/2000101916347/zuverlaessige-texterkennungs-tool-fuer-historische-druckschriften" target="_blank" rel="noopener noreferrer">Zuverlässiges Texterkennungs-Tool für historische
Druckschriften<OutboundLink/></a></li>
<li>Augsburger Allgemeine: <a href="https://www.augsburger-allgemeine.de/bayern/Computer-liest-alte-Texte-id54130851.html" target="_blank" rel="noopener noreferrer">Computer liest alte Texte<OutboundLink/></a></li>
<li>einBlick: <a href="https://www.uni-wuerzburg.de/aktuelles/einblick/single/news/modernes-tool-fuer-alte-texte" target="_blank" rel="noopener noreferrer">Modernes Tool für alte Texte<OutboundLink/></a></li>
</ul>
<h3 id="zitation" tabindex="-1"><a class="header-anchor" href="#zitation" aria-hidden="true">#</a> Zitation</h3>
<p>If you are using OCR4all please cite the corresponding <a href="https://www.mdpi.com/2076-3417/9/22/4853%22" target="_blank" rel="noopener noreferrer">paper<OutboundLink/></a>:
Reul, C., Christ, D., Hartelt, A., Balbach, N., Wehner, M., Springmann, U., Wick, C., Grundig, Büttner, A., C.,
Puppe, F.: OCR4all — An open-source tool providing a (semi-) automatic OCR workflow for historical printings,
Applied Sciences 9(22) (2019)</p>
<h3 id="funding" tabindex="-1"><a class="header-anchor" href="#funding" aria-hidden="true">#</a> Funding</h3>
<ul>
<li><a href="https://ocr-d.de/en/" target="_blank" rel="noopener noreferrer">DFG-funded Initiative &quot;OCR-D&quot;<OutboundLink/></a>, (phase 2 and 3)</li>
<li><a href="https://www.uni-wuerzburg.de/zpd" target="_blank" rel="noopener noreferrer">Zentrum für Philologie
und Digitalität (ZPD)<OutboundLink/></a>, Universität Würzburg</li>
<li>BMBF gefördertes Projekt <a href="http://kallimachos.de" target="_blank" rel="noopener noreferrer">Kallimachos<OutboundLink/></a></li>
<li><a href="https://www.informatik.uni-wuerzburg.de/is" target="_blank" rel="noopener noreferrer">Lehrstuhl für
Künstliche Intelligenz und Wissenssysteme<OutboundLink/></a>, Universität Würzburg</li>
</ul>
</template>
