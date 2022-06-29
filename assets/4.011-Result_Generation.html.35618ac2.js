import{_ as e,e as t}from"./app.b397120f.js";const a={},n=t(`<h3 id="_4-11result-generation" tabindex="-1"><a class="header-anchor" href="#_4-11result-generation" aria-hidden="true">#</a> 4.11 Result Generation</h3><p><strong>Input:</strong> line-based OCR results, ground truth (optional - only if at hand) and the LAREX- segmentation and line-segmentation data <strong>Output:</strong> final text output (lines will be re-grouped into pages and full-text) as well as page- based PageXML</p><pre>
BilD

</pre><p>Abb. 42: Result Generation.</p><ul><li>Once the user considers all recognition and correction steps to be finalized, results can be generated as TXT or XML files, saved under ocr4all/data/results.</li><li>You can choose whether you need a text or PageXML file under &#39;settings&#39;. If you opt for a text file, individual TXT files will be generated for each scan as well as an additional one containing your document&#39;s entire text.</li><li>PageXML files are also generated on a page-base and additionally contain data about creation date, last changes in the file, metadata about each page&#39;s corresponding scan, about the page&#39;s size, its layout regions and their exact coordinates, its reading order, its text lines and their text content.</li></ul>`,5);function i(o,r){return n}var l=e(a,[["render",i],["__file","4.011-Result_Generation.html.vue"]]);export{l as default};
