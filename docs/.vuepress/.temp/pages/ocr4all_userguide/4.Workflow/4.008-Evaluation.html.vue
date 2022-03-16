<template><h3 id="_4-8evaluation" tabindex="-1"><a class="header-anchor" href="#_4-8evaluation" aria-hidden="true">#</a> 4.8	Evaluation</h3>
<p><strong>Input</strong>: zeilenbasierte OCR-Texte und entsprechende Ground Truth<br>
<strong>Output</strong>: Fehlerstatistiken</p>
<ul>
<li>Der Menüpunkt Evaluation dient der Ermittlung der Erkennungsrate eines aktuell verwendeten Modells (gemischt oder werkspezifisch).</li>
<li>Um diese zu generieren, werden all jene Scans in der rechten Seitenleiste ausgewählt, die mittels dieses aktuellen Modells erkannt und danach in der „Ground Truth Production” korrigiert wurden. Klickt der Nutzer auf „EXECUTE” und lässt sämtliche Einstellungen unverändert, so wird ihm in der Konsole eine Tabelle ausgegeben: Ganz oben in der Ausgabe finden sich als Prozentsatz die Fehlerrate sowie die Gesamtanzahl der Fehler („errs”). Darunter werden – tabellarisch gelistet durch den Vergleich von Ausgabetext der Recognition und während der Korrektur erstellter Ground Truth – die gefundenen Fehler angezeigt. In der ersten Spalte ist dabei der korrigierte Text zu erkennen („GT”), in der zweiten Spalte der ursprünglich durch das Modell erkannte („PRED”), dahinter die Häufigkeit des Auftretens genau jenes Fehlers sowie der Prozentsatz eben dieses Fehlers an der Gesamtfehlermenge.</li>
</ul>
<p><img src="/images/Abb38.png" alt="Abb38.png"></p>
<p>Abb. 38: Evaluationsergebnis mit Gesamtfehlerrate und den zehn häufigsten Fehler sowie deren Prozentsatz an der Gesamtfehlermenge.</p>
<ul>
<li>Mittels dieser tabellarischen Listung sowie der Erkennungsrate (100% - Fehlerrate) kann nun durch den Nutzer die Abschätzung über die Sinnhaftigkeit eines (neuerlichen) Trainings von werkspezifischen Modellen erfolgen.</li>
</ul>
</template>
