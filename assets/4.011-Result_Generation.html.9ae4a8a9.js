import{_ as e,e as n}from"./app.b397120f.js";import{_ as t}from"./Abb41.1a4d873d.js";const r={},a=n('<h3 id="_4-11result-generation" tabindex="-1"><a class="header-anchor" href="#_4-11result-generation" aria-hidden="true">#</a> 4.11 Result Generation</h3><p><strong>Input</strong>: OCR-Ergebnisse auf Zeilenbasis, optional Ground Truth (wenn vorhanden) und zus\xE4tzliche Daten aus der Segmentierung (LAREX) und Zeilensegmentierung<br><strong>Output</strong>: endg\xFCltiger Output als Text (einzelne Textzeilen zusammengefasst zu Seiten und Volltext) und PageXML auf Seitenbasis</p><p><img src="'+t+'" alt="Abb41.png"></p><p>Abb. 41: Result Generation.</p><ul><li>Sind die Erkennungs- und/oder Korrekturarbeiten an einem Werk aus Sicht des Nutzers abgeschlossen, so k\xF6nnen Ergebnisse in Form von TXT- sowie XML-Dateien generiert werden. Sie werden unter ocr4all/data/results gespeichert.</li><li>Unter \u201ESettings\u201D kann ausgew\xE4hlt werden, ob Text- oder PageXML-Dateien erstellt werden sollen. Im Falle der Text-Dateien wird sowohl f\xFCr jede Scanseite eine einzelne TXT erstellt, als auch eine zusammenh\xE4ngende, die den Gesamttext des bearbeiteten Werks beinhaltende ausgegeben.</li><li>Die PageXML-Dateien werden auf Scanseitenbasis ausgegeben und enthalten Angaben zum Erstellungsdatum, zu letzten Datei\xE4nderungen, zu Metadaten der sich auf sie beziehenden Scanseite, zur Seitengr\xF6\xDFe, zu auf der Seite enthaltenen Layoutelementen inklusive deren genaue Koordinaten, zur Reading Order der vorhandenen Layoutelemente, zu den einzelnen Textzeilen sowie den Text der Zeilen selbst.</li></ul>',5);function i(s,u){return a}var o=e(r,[["render",i],["__file","4.011-Result_Generation.html.vue"]]);export{o as default};
