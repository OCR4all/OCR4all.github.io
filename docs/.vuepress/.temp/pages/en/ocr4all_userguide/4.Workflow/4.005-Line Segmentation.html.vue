<template><h3 id="_4-5line-segmentation" tabindex="-1"><a class="header-anchor" href="#_4-5line-segmentation" aria-hidden="true">#</a> 4.5	Line Segmentation</h3>
<p><strong>Input:</strong> pre-processed images and segmentation information (in the form of PageXML files)
<strong>Output:</strong> extracted text lines saved in those PageXML files</p>
<ul>
<li>This step constitutes a direct preparation to the OCR process and features the dissection of all previously defined and classified layout elements into separate text lines (this a necessary step as the OCR is based on line recognition). All results are then automatically saved in the corresponding page XML files.</li>
</ul>
<pre>

BILD

</pre>
<p>fig. 35. Line segmentation settings.</p>
<ul>
<li>Generally speaking, all existing settings can be retained. <strong>There are, however, a few restrictions when it comes to page layout:</strong> if you are working with pages featuring two or more text columns (and if those have been previously defined as separate, individual main text blocks in LAREX), you will need to change the ‘maximum # of whitespace column separators’ which is pre-set at <strong>-1</strong>.
-- <strong>'Whitespace column separators'</strong> are the white columns devoid of text found around text blocks.
-- When working with a <strong>two-column layout</strong> whose text is continuous (i.e. where the first line of both columns don’t form a semantic unit), you will need to set the ‘maximum # of whitespace column separators’ at <strong>3</strong>. This number corresponds to the whitespace on both sides of the columns and to the whitespace situated between them.
-- When working with a <strong>three-column layout</strong>, set the 'whitespace' number to <strong>4</strong>, and so on.</li>
<li>Once all desired settings are chosen, click on ‘execute’. Afterwards, control generated results under ‘Project Overview’.</li>
<li>Using the ‘settings (advanced)’ option is especially useful when working with line segmentation, particularly if/when errors are reported (and shown on the interface). For instance, small letters will often fall short of the default minimal line width. You can adjust this minimal width by reducing the ‘minimum scale permitted’, which can be found under menu item ‘limits’. This will enable you to correctly re-do the line segmentation.</li>
<li>You can generally control the accuracy of line segmentation by clicking on the ‘lines’ button (under menu item ‘post correction’).</li>
</ul>
</template>
