<template><h3 id="_4-11result-generation" tabindex="-1"><a class="header-anchor" href="#_4-11result-generation" aria-hidden="true">#</a> 4.11	Result Generation</h3>
<p><strong>Input</strong>: OCR-Ergebnisse auf Zeilenbasis, optional Ground Truth (wenn vorhanden) und zusätzliche Daten aus der Segmentierung (LAREX) und Zeilensegmentierung<br>
<strong>Output</strong>: endgültiger Output als Text (einzelne Textzeilen zusammengefasst zu Seiten und Volltext) und PageXML auf Seitenbasis</p>
<p><img src="/images/Abb41.png" alt="Abb41.png"></p>
<p>Abb. 41: Result Generation.</p>
<ul>
<li>Sind die Erkennungs- und/oder Korrekturarbeiten an einem Werk aus Sicht des Nutzers abgeschlossen, so können Ergebnisse in Form von TXT- sowie XML-Dateien generiert werden. Sie werden unter ocr4all/data/results gespeichert.</li>
<li>Unter „Settings” kann ausgewählt werden, ob Text- oder PageXML-Dateien erstellt werden sollen. Im Falle der Text-Dateien wird sowohl für jede Scanseite eine einzelne TXT erstellt, als auch eine zusammenhängende, die den Gesamttext des bearbeiteten Werks beinhaltende ausgegeben.</li>
<li>Die PageXML-Dateien werden auf Scanseitenbasis ausgegeben und enthalten Angaben zum Erstellungsdatum, zu letzten Dateiänderungen, zu Metadaten der sich auf sie beziehenden Scanseite, zur Seitengröße, zu auf der Seite enthaltenen Layoutelementen inklusive deren genaue Koordinaten, zur Reading Order der vorhandenen Layoutelemente, zu den einzelnen Textzeilen sowie den Text der Zeilen selbst.</li>
</ul>
</template>
