<template><h3 id="_4-8evaluation" tabindex="-1"><a class="header-anchor" href="#_4-8evaluation" aria-hidden="true">#</a> 4.8	Evaluation</h3>
<p><strong>Input:</strong> line based OCR texts and corresponding ground truth
<strong>Output:</strong> error statistics</p>
<ul>
<li>
<p>Under menu item 'evaluation', users can check on the recognition rate of the model(s) currently under use.</p>
</li>
<li>
<p>In order to generate an evaluation, go to right sidebar and select all the scans recognized with the help of said model and subsequently corrected during 'ground truth production'.</p>
</li>
<li>
<p>Click on 'execute': a chart will appear in the console. At the top, you will see the percentage of errors as well as the full count of errors ('errs'). All identified errors are listed underneath, displayed as a chart featuring the comparison between the initially recognized text ('PRED', righthand column) and the results of ground truth production ('GT', lefthand column). Behind each error item, you will see the frequency of that particular type of error as well as its percentage compared to the entire error count.</p>
</li>
</ul>
<pre>

BILD

</pre>
<p>fig. 39. Evaluation results with general error rate, ten most frequent errors as well as their percentage
compared to entire error count.</p>
<ul>
<li>Thanks to the spreadsheet and its display (100% - error rate), users can evaluate whether a new training using individual, targeted models is necessary.</li>
</ul>
</template>
