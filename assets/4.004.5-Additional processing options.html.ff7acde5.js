import{_ as e,e as n}from"./app.b397120f.js";import{_ as i,a as t,b as r,c as s,d as a}from"./Abb33.cecea596.js";const u={},l=n('<h4 id="_4-4-5weitere-bearbeitungsoptionen" tabindex="-1"><a class="header-anchor" href="#_4-4-5weitere-bearbeitungsoptionen" aria-hidden="true">#</a> 4.4.5 Weitere Bearbeitungsoptionen</h4><p>Dar\xFCber hinaus bestehen generell <strong>weitere Bearbeitungsm\xF6glichkeiten</strong> von Scans, die im Folgenden angezeigt werden sollen:</p><ul><li>F\xFCr L\xF6schungen oder die Zusammenf\xFChrung mehrere Layoutelemente zu einer zusammenh\xE4ngenden Region ist es praktisch, diese <strong>gleichzeitig ausw\xE4hlen</strong> zu k\xF6nnen. Dazu halten Sie die Umschalttaste gedr\xFCckt und ziehen mit Hilfe der Maus ein Rechteck um die entsprechenden Layoutregionen. Die Regionen m\xFCssen sich dazu vollst\xE4ndig innerhalb des Rechtecks befinden. Alle auf diese Weise ausgew\xE4hlten Layoutregionen erscheinen nun blau umrandet.</li><li><strong>\u201ESelect contours to combine (with \u201EC\u201C) to segments (see function combine)\u201C</strong> (Shortcut: 6): Dieses Werkzeug kann verwendet werden, um auch auf sehr eng und detailreich bedruckten Seiten zu einem optimalen Segmentierungsergebnis zu gelangen. Grundlegende Idee ist, dass Layoutelemente durch die Konturen der einzelnen Typen des Textes, den sie beinhalten, oder exakt durch die R\xE4nder von Bildern und Zierinitialen begrenzt werden \u2013 ohne \xFCbersch\xFCssigen, durch h\xE4ndisches Segmentieren entstehenden Rand, der immer wieder zur Element\xFCberschneidungen und damit zu Ungenauigkeiten mit Folgen f\xFCr die OCR f\xFChren kann. <ul><li>Um die Funktion auszuf\xFChren, erfolgt zuerst ein Klick auf den entsprechenden Button in der Werkzeugleiste oder der Shortcut 6. Daraufhin werden alle als Layoutelemente der Seite erkannten Bestandteile blau eingef\xE4rbt.</li></ul></li></ul><p><img src="'+i+'" alt="Abb29.png"></p><p>Abb. 29: Konturenanzeige.</p><ul><li>Klickt man nun auf nur einzelne Typen oder sogar Typenbestandteile, verf\xE4rben sie sich violett \u2013 sie sind nun ausgew\xE4hlt.</li></ul><p><img src="'+t+'" alt="Abb30.png"></p><p>Abb. 30: Konturenauswahl.</p><ul><li>Es k\xF6nnen auch mehrere Typen, ganze W\xF6rter und Zeilen oder Teile ganzer Layoutelemente ausgew\xE4hlt werden (s. o.: Umschalt + Auswahl \xFCber Aufziehen eines Rechtecks). Erfolgt nach der Auswahl bestimmter Typen, W\xF6rter, Zeilen etc. der Shortcut C, so werden alle ausgew\xE4hlten Elemente der Scanseite zu einem eigenen Layoutelement zusammengefasst, unabh\xE4ngig von ihrer vorherigen Elementzugeh\xF6rigkeit. Die Eingrenzung des so entstehenden neuen Layoutelements ist dabei im Vergleich zu den automatisch erkannten Elementen sehr viel feiner, weil sie sich wie besprochen direkt an den R\xE4ndern einzelner Typen oder Bilder orientiert. Auf diese Weise ist eine sehr viel detailliertere Segmentierung als \xFCber die standardisierten Tools m\xF6glich.</li></ul><p><img src="'+r+'" alt="Abb31.png"></p><p>Abb. 31: Zusammenfassung ausgew\xE4hlter Konturen zu einem neuen Layoutelement.</p><ul><li>Der anschlie\xDFende Klick auf \u201ESEGMENT\u201C fixiert den Eingriff. Abschlie\xDFend kann das entstandene, eigenst\xE4ndige Layoutelement entsprechend obigen Vorgehens nach Belieben umbenannt werden.</li></ul><p><img src="'+s+'" alt="Abb32.png"></p><p>Abb. 32: Typisierung des segmentierten Layoutelements.</p><ul><li><strong>\u201ECombine selected segments or contours\u201C</strong> (Shortcut: C): Um mehrere, einzeln erkannte Layoutelemente zu einer einzigen zusammenzufassen, w\xE4hlen sie die gew\xFCnschten Regionen vollst\xE4ndig aus (s. o.) und klicken \u201EC\u201C bzw. auf den entsprechenden Button in der Werkzeugleiste.</li><li><strong>\u201EFix/unfix segments, for it to persist a new auto segmentation\u201C</strong> (Shortcut: F): Mit Hilfe dieser Funktion k\xF6nnen Layoutelemente \xFCber einen weiteren Segmentierungsvorgang einer Seite hinaus fixiert werden. Dazu wird das entsprechende Layoutelement durch Anklicken markiert, danach folgt ein Klick auf \u201EF\u201C oder den entsprechenden Button. Fixierte Elemente erscheinend mit einer gestrichelten Umrandung. Um die Fixierung zu verwerfen, wird der Vorgang einfach wiederholt.</li><li><strong>Zoomen</strong>: Mithilfe des Mausrads kann bei sehr klein gedrucktem Text oder kompliziertem Layout an den Scan herangezoomt werden. Mithilfe der Leertaste wird die Anzeige in ihrem urspr\xFCnglichen Zustand zur\xFCckgesetzt.</li><li>Bei besonders kleinteiligem und damit aufwendigem Layout k\xF6nnen Segmentierungsergebnisse durch spezielle <strong>Detaileingriffe</strong> weiter optimiert werden. Die Umrisse der als Layoutelemente erkannten Bereiche einer Scanseite werden bei genauerem Hinsehen als Punktlinie dargestellt.</li></ul><p><img src="'+a+'" alt="Abb33.png"></p><p>Abb. 33: Punktlinie als Umriss von Layoutelementen.</p><ul><li>Diese Punkte k\xF6nnen einzeln oder auch zu mehreren verschoben werden, um bspw. bei sehr engem Druckbild \xDCberschneidungen mit anderen, angrenzenden Layoutelemente zu vermeiden. Einzelne Punkte k\xF6nnen durch einen gehaltenen Linksklick mit der Maus verschoben werden. Durch einen Klick auf die Linie k\xF6nnen dar\xFCber hinaus bei Bedarf neue Punkte geschaffen werden. Auch das L\xF6schen von Punkten ist mithilfe von \u201EEntf\u201C m\xF6glich.</li><li><strong>\u201ELOAD RESULTS\u201C</strong>: Mit Hilfe dieser Funktion k\xF6nnen bereits bestehende Segmentierungsergebnisse f\xFCr eine bestimmte Scanseite direkt aus der Ordnerstruktur von OCR4all in LAREX geladen werden.</li></ul>',18);function d(o,g){return l}var c=e(u,[["render",d],["__file","4.004.5-Additional processing options.html.vue"]]);export{c as default};
