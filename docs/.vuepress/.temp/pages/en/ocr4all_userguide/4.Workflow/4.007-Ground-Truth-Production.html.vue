<template><h3 id="_4-7ground-truth-production" tabindex="-1"><a class="header-anchor" href="#_4-7ground-truth-production" aria-hidden="true">#</a> 4.7	Ground Truth Production</h3>
<p><strong>Input:</strong> text line images and their corresponding OCR output when available
<strong>Output:</strong> line based ground truth</p>
<ul>
<li>Under menu item 'ground truth production' you will be able to view the texts generated during 'recognition', correct them and save them as a training model. This is the so called 'ground truth'.</li>
<li>The correction tool used in this step is divided into two parts. On the left handside are the (selectable) scans. In the middle, you will find the segmented text line images (see above for workflow) as well as their corresponding OCR text lines, placed directly underneath. We call this standard display 'text view'.</li>
</ul>
<pre>

BILD

</pre>
<p>fig. 37. Ground truth production with 'text view'.</p>
<p>Clicking on the 'Swith to page view' button will bring you to the so called 'page view' display, in which you can work on all text lines while they are displayed in relation to the entire page layout. By clicking 'switch to text view', you will return to the initial 'text view' display.</p>
<pre>

BILD

</pre>
<p>fig. 38. Ground truth production with 'page view'.</p>
<ul>
<li>On the right hand side of the display, you will find the virtual keyboard, with which you can set special characters such as ligatures, abbreviation, diacritical signs etc. Simply place your cursor where you with to insert a special character and then click on said character in the virtual keyboard. In order to add new characters to the virtual keyboard, simply click on the plus icon, add character through copy and paste in the blank and click on 'save'. if you wish to delete characters from the virtual keyboard, drag and drop said character on the recycle bin icon. Once all necessary/desired changes have been made, click on 'save' and 'lock'. Using buttons 'lad' and 'save' will ultimately enable you to save different virtual keyboards specific to any particular document. Once a virtual keyboard has been saved as such, it can be re-loaded at any time, which is particularly useful when you need to interrupt correction - or if you want to use this keyboard for another document for which it is suited.</li>
<li>In order to correct individual lines in 'text view' mode, click on the line in question: you can now correct and edit it. (When working with 'page view', you will need to click on the line you wish to edit first, after which a text field will appear in which you will be able to proceed to corrections/edits as well. Use 'tabulator' key to go to the next line, and so on. All following steps are identical in both viewers. Once a text line has been completely and satisfactorily corrected, press 'enter key'. The line will be coloured green, meaning it will be automatically saved as 'ground truth' in OCR4all once the entire page has been completed and saved (by clicking on 'save result' or using shortcut crtl + S). Once a line has been identified as ground truth, it can be used as a basis for OCR training as well as a tool to evaluate the OCR model you used.</li>
<li>If there are erroneously recognised text line images among your pairs of text lines images and corresponding OCR text lines, please let your OCR text lines unfilled to not cause problems during the OCR model training.</li>
<li>Were you to conclude, while working on ground truth production, that the quality of the text recognition achieved with mixed models wasn't satisfactory, you can always perform a final, manual text correction by employing a training model targeted towards the specific kind of document you are working on. Proceeding to this step will generally increase the recognition quality and percentage.</li>
</ul>
</template>
