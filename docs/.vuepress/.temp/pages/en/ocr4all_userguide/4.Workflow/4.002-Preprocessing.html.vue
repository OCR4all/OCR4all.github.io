<template><h3 id="_4-2preprocessing" tabindex="-1"><a class="header-anchor" href="#_4-2preprocessing" aria-hidden="true">#</a> 4.2	Preprocessing</h3>
<p><strong>Input:</strong> original image (in colour, greyscale or binarized)
<strong>Output:</strong> straightened binarized or greyscale image</p>
<ul>
<li>This processing step is meant to produce binarized and normalized greyscale images, a basic requirement for a successful segmentation and recognition.</li>
<li>Proceed by selecting the relevant scans (sidebar on the right) – the settings must remain unchanged (‘settings (general)’ and ‘settings (advanced)’), meaning that the images’ angle as well as the automatically generated number of CPUs used by this particular submodule don’t vary either (the latter pertains to all of OCR4all’s subsequent submodules).</li>
</ul>
<pre>

BILD

</pre>
<p>Abb. 9: fig. 9. Pre-processing settings.</p>
<ul>
<li>Click on ‘execute’ to start binarization. The progression of this work stage can be tracked on the console, more accurately the ‘console output’. Warnings might be issued during the binarization process (in ‘console error’) which have no incidence on the binarization results.</li>
<li>In order to check the binarization’s success, simply go to ‘project overview’ and click on any page identifier then on the display option ‘binary’. In addition, all processed pages should be marked with a green check mark in the project overview.</li>
</ul>
</template>
