<template><h4 id="_4-4-4exemplary-page-segmentation" tabindex="-1"><a class="header-anchor" href="#_4-4-4exemplary-page-segmentation" aria-hidden="true">#</a> 4.4.4	Exemplary page segmentation</h4>
<p>With each page loading, LAREX automatically generates segmentation results – these only need to be subsequently corrected. The following, exemplary segmentation process uses page 4 of reference book Cirurgia, which you can download here when downloading the OCR4all folder structure.</p>
<p><strong>Error analysis:</strong> Which layout elements were correctly recognised, which incorrectly, which weren’t at all? Are there any user marks in the margins, bordures, spots or elements of text which will influence segmentation, but you wish to avoid being recognised?</p>
<pre>

BILD

</pre>
<p>fig. 22. Auto generated results, Cirurgia page 4.</p>
<p><strong>'Region of interest' (RoI):</strong> Defining a RoI will help exclude certain sections of your page, situated outside the area later subjected to recognition but which can negatively impact segmentation (such as user marks, impurities, library stamps, etc.). To do so, go to toolbar and click on ‘Set the region of interest’ (under ‘RoI’), then use left click-and-hold to draw a rectangle around the page section you wish to segment.</p>
<pre>

BILD

</pre>
<p>fig. 23. Defining a 'region of interest'.</p>
<p>Once RoI has been defined, click on 'SEGMENT' button (right sidebar) – all element situated outside of RoI are now excluded from any further steps. Once RoI has been defined, it will be automatically transposed to all the book's scans. However, due to a wide array of factors, the page sections relevant to segmentation can shift from scan to scan. Therefore, as processing progresses, the user will likely need to adjust RoI from time to time. To do so, simply click on any RoI section and shift it using the mouse. Independently of RoI, the 'Create an ignore rectangle' option creates an 'ignore region' which allows for certain, small sections of a scan to be ignored and thus excluded from segmentation.</p>
<p><strong>Correcting layout recognition flaws:</strong>
Incorrectly recognized layout elements can be assigned a new typification manually: a right- hand click on said element will open a pop-up menu from which you can choose the correct designation.</p>
<pre>

BILD

</pre>
<p>fig. 24. Correcting a faulty typification.</p>
<p>Should you need to separate a title from another textual element with which it is fused, there three ways to proceed:
To begin, you can draw a rectangle around the section you wish to classify: proceed to toolbar, click on ‘Segment’ and select ‘Create a fixed segment rectangle’ (shortcut: 3); using mouse, draw a rectangle around the relevant section – a pop-up menu will appear from</p>
<p>which it’s correct designation/type can be chosen. Next, you can instead choose to use a polygon shape. This option is particularly suited to the more complex or chaotic layouts and/ or those comprising angled edges, rounded pictures and woodcuts, or ornate initials inside the text block. Proceed to toolbar, click on ‘Segment’, this time selecting ‘Create a fixed segment polygon’ option (shortcut: 4). Using the mouse, generate a dotted line to go around end encompass the entire relevant section – once the line’s end has been joined to its starting point, creating a polygon, the aforementioned pop-up menu will appear to allow for designation. Finally, you can also separate a text block – Initially recognized as one paragraph – into a title and main text using a cutting line: simply go to toolbar and ‘Segment’, and select ‘Create a cut line’ option (shortcut: 5).</p>
<pre>

BILD

</pre>
<p>fig. 25. Toolbar: selecting cut line option.</p>
<p>Using left mouse key, create a line through the element you wish to separate, clicking along its path to adjust it as needed; end line with a double click.</p>
<pre>

BILD

</pre>
<p>fig. 26. Drawing a line between two layout elements to be separated.</p>
<p>Click on 'Segment' in order to prompt separation. Afterwards, title element can be correctly renamed, using right-hand click and pop-up menu (as shown below).</p>
<pre>

BILD

</pre>
<p>fig. 27. Correcting typification of separated sections.</p>
<p>If at any time you with to delete layout components, inaccurate cutting lines or polygons, etc. simply click on the relevant element and use ‘Delete’ key or ‘Delete selected items’ option in the toolbar.</p>
<p><strong>Determining 'Reading Order' (see below):</strong></p>
<pre>

BILD

</pre>
<p>fig. 28. Determining reading order.</p>
<p><strong>Saving current scan’s segmentation results:</strong> Save your segmentation results by clicking on ‘Save results’ or with Ctrl + S. This will automatically generate an XML file containing those results inside the OCR4all folder structure.</p>
<pre>

BILD

</pre>
<p>fig. 29. Saving segmentation results.</p>
<p>Afterwards, you can proceed to the next scan (left sidebar). If you wish to redo or change a scan’s segmentation, you can do as much at any time: simply save the new results – the previous XML file will be automatically deleted and replaced with a new version.</p>
</template>
