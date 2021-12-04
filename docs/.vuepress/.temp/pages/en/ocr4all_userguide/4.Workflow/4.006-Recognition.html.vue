<template><h3 id="_4-6recognition" tabindex="-1"><a class="header-anchor" href="#_4-6recognition" aria-hidden="true">#</a> 4.6	Recognition</h3>
<p><strong>Input:</strong> Text lines and one or more OCR models
<strong>Output:</strong> OCR-output in the form of text for each of the PageXML files at hand</p>
<ul>
<li>This step is where the actual text recognition takes place based on the individual lines and textual layout elements identified during line segmentation (see above).</li>
<li>Select menu item 'Recognition': in the right sidebar, you will only find your document's scans (or rather printed pages) for which all OCR pre-processing steps have been completed, by which we mean all previously explained steps - bar 'noise removal'. Please select the scans for which you wish to produce an OCR text.</li>
<li>Go to 'line recognition models' (under 'available') and select all models or model packages relevant to the typographical recognition of your text (e.g. early modern/historical Gothic type, italic/cursive type, historical Antiqua etc.). <strong>We expressly advise the use of a model package, where five models simultaneously work and interact with each other!</strong> This is much preferable to using only one model at a time. You can select all models you wish to add to your package by clicking on each of them - they will automatically be added to the 'selected' category. When dealing with a large amount of models, you can find them by using the 'search' function.</li>
</ul>
<pre>

BILD

</pre>
<p>fig. 36. Selection of model package for text recognition.</p>
<ul>
<li>You likely won't need to adjust any of the advanced settings.</li>
<li>Click on 'execute' and oversee the text recognition progress on the console.</li>
<li>Once recognition is finished, you will be able to view all results under menu item 'ground truth production'.</li>
</ul>
</template>
