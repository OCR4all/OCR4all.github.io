<template><h4 id="_4-4-5weitere-bearbeitungsoptionen" tabindex="-1"><a class="header-anchor" href="#_4-4-5weitere-bearbeitungsoptionen" aria-hidden="true">#</a> 4.4.5	Weitere Bearbeitungsoptionen</h4>
<p>Darüber hinaus bestehen generell <strong>weitere Bearbeitungsmöglichkeiten</strong> von Scans, die im Folgenden angezeigt werden sollen:</p>
<ul>
<li>Für Löschungen oder die Zusammenführung mehrere Layoutelemente zu einer zusammenhängenden Region ist es praktisch, diese <strong>gleichzeitig auswählen</strong> zu können. Dazu halten Sie die Umschalttaste gedrückt und ziehen mit Hilfe der Maus ein Rechteck um die entsprechenden Layoutregionen. Die Regionen müssen sich dazu vollständig innerhalb des Rechtecks befinden. Alle auf diese Weise ausgewählten Layoutregionen erscheinen nun blau umrandet.</li>
<li><strong>„Select contours to combine (with „C“) to segments (see function combine)“</strong> (Shortcut: 6): Dieses Werkzeug kann verwendet werden, um auch auf sehr eng und detailreich bedruckten Seiten zu einem optimalen Segmentierungsergebnis zu gelangen. Grundlegende Idee ist, dass Layoutelemente durch die Konturen der einzelnen Typen des Textes, den sie beinhalten, oder exakt durch die Ränder von Bildern und Zierinitialen begrenzt werden – ohne überschüssigen, durch händisches Segmentieren entstehenden Rand, der immer wieder zur Elementüberschneidungen und damit zu Ungenauigkeiten mit Folgen für die OCR führen kann.
<ul>
<li>Um die Funktion auszuführen, erfolgt zuerst ein Klick auf den entsprechenden Button in der Werkzeugleiste oder der Shortcut 6. Daraufhin werden alle als Layoutelemente der Seite erkannten Bestandteile blau eingefärbt.</li>
</ul>
</li>
</ul>
<p><img src="/docs/.vuepress/public/images/Abb29.png" alt="Abb29.png"></p>
<p>Abb. 29: Konturenanzeige.</p>
<ul>
<li>Klickt man nun auf nur einzelne Typen oder sogar Typenbestandteile, verfärben sie sich violett – sie sind nun ausgewählt.</li>
</ul>
<p><img src="/docs/.vuepress/public/images/Abb30.png" alt="Abb30.png"></p>
<p>Abb. 30: Konturenauswahl.</p>
<ul>
<li>Es können auch mehrere Typen, ganze Wörter und Zeilen oder Teile ganzer Layoutelemente ausgewählt werden (s. o.: Umschalt + Auswahl über Aufziehen eines Rechtecks). Erfolgt nach der Auswahl bestimmter Typen, Wörter, Zeilen etc. der Shortcut C, so werden alle ausgewählten Elemente der Scanseite zu einem eigenen Layoutelement zusammengefasst, unabhängig von ihrer vorherigen Elementzugehörigkeit. Die Eingrenzung des so entstehenden neuen Layoutelements ist dabei im Vergleich zu den automatisch erkannten Elementen sehr viel feiner, weil sie sich wie besprochen direkt an den Rändern einzelner Typen oder Bilder orientiert. Auf diese Weise ist eine sehr viel detailliertere Segmentierung als über die standardisierten Tools möglich.</li>
</ul>
<p><img src="/docs/.vuepress/public/images/Abb31.png" alt="Abb31.png"></p>
<p>Abb. 31: Zusammenfassung ausgewählter Konturen zu einem neuen Layoutelement.</p>
<ul>
<li>Der anschließende Klick auf „SEGMENT“ fixiert den Eingriff. Abschließend kann das entstandene, eigenständige Layoutelement entsprechend obigen Vorgehens nach Belieben umbenannt werden.</li>
</ul>
<p><img src="/docs/.vuepress/public/images/Abb32.png" alt="Abb32.png"></p>
<p>Abb. 32: Typisierung des segmentierten Layoutelements.</p>
<ul>
<li><strong>„Combine selected segments or contours“</strong> (Shortcut: C): Um mehrere, einzeln erkannte Layoutelemente zu einer einzigen zusammenzufassen, wählen sie die gewünschten Regionen vollständig aus (s. o.) und klicken „C“ bzw. auf den entsprechenden Button in der Werkzeugleiste.</li>
<li><strong>„Fix/unfix segments, for it to persist a new auto segmentation“</strong> (Shortcut: F): Mit Hilfe dieser Funktion können Layoutelemente über einen weiteren Segmentierungsvorgang einer Seite hinaus fixiert werden. Dazu wird das entsprechende Layoutelement durch Anklicken markiert, danach folgt ein Klick auf „F“ oder den entsprechenden Button. Fixierte Elemente erscheinend mit einer gestrichelten Umrandung. Um die Fixierung zu verwerfen, wird der Vorgang einfach wiederholt.</li>
<li><strong>Zoomen</strong>: Mithilfe des Mausrads kann bei sehr klein gedrucktem Text oder kompliziertem Layout an den Scan herangezoomt werden. Mithilfe der Leertaste wird die Anzeige in ihrem ursprünglichen Zustand zurückgesetzt.</li>
<li>Bei besonders kleinteiligem und damit aufwendigem Layout können Segmentierungsergebnisse durch spezielle <strong>Detaileingriffe</strong> weiter optimiert werden. Die Umrisse der als Layoutelemente erkannten Bereiche einer Scanseite werden bei genauerem Hinsehen als Punktlinie dargestellt.</li>
</ul>
<p><img src="/docs/.vuepress/public/images/Abb33.png" alt="Abb33.png"></p>
<p>Abb. 33: Punktlinie als Umriss von Layoutelementen.</p>
<ul>
<li>Diese Punkte können einzeln oder auch zu mehreren verschoben werden, um bspw. bei sehr engem Druckbild Überschneidungen mit anderen, angrenzenden Layoutelemente zu vermeiden. Einzelne Punkte können durch einen gehaltenen Linksklick mit der Maus verschoben werden. Durch einen Klick auf die Linie können darüber hinaus bei Bedarf neue Punkte geschaffen werden. Auch das Löschen von Punkten ist mithilfe von „Entf“ möglich.</li>
<li><strong>„LOAD RESULTS“</strong>: Mit Hilfe dieser Funktion können bereits bestehende Segmentierungsergebnisse für eine bestimmte Scanseite direkt aus der Ordnerstruktur von OCR4all in LAREX geladen werden.</li>
</ul>
</template>
