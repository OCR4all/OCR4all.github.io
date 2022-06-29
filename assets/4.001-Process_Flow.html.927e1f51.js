import{_ as e,e as n}from"./app.b397120f.js";import{_ as i,a as r,b as t}from"./Abb7.3ef42e84.js";const s={},l=n('<h2 id="_4-workflow" tabindex="-1"><a class="header-anchor" href="#_4-workflow" aria-hidden="true">#</a> 4. Workflow</h2><p>OCR4all bietet grunds\xE4tzlich zwei unterschiedliche Varianten eines OCR-Workflows an, die sich v. a. im Hinblick auf den mit ihnen verbundenen Arbeitsaufwand, damit jedoch fast zwangsl\xE4ufig auch in \xDCberpr\xFCfbarkeit von Teilergebnissen und somit Qualit\xE4t der erstellten Daten stark voneinander unterscheiden k\xF6nnen. Beide Varianten werden im Folgenden vorgestellt und eingeordnet.</p><h3 id="_4-1process-flow" tabindex="-1"><a class="header-anchor" href="#_4-1process-flow" aria-hidden="true">#</a> 4.1 Process Flow</h3><p>Die Variante des sog. \u201E<strong>Process Flow</strong>\u201C (Hauptmen\xFC \u2630 \u2192 Process Flow) bietet die M\xF6glichkeit eines nahezu vollautomatisierten Workflows. Hier werden lediglich die zur Bearbeitung vorgesehenen Scans in der rechten Seitenleiste ausgew\xE4hlt und mittels Haken danach all jene Arbeitsschritte ausgew\xE4hlt, die am vorliegenden Datenmaterial durchgef\xFChrt werden sollen.</p><p><img src="'+i+'" alt="Abb6.png"></p><p>Abb. 5: Teilkomponenten des \u201EProcess Flow\u201C.</p><p>Lediglich f\xFCr das Teilmodul \u201ERecognition\u201C muss nun noch ein geeignetes OCR-Modell oder Modellensemble (f\xFCnf gleichzeitig und miteinander agierende Einzelmodelle, s. dazu auch Kap. 4.7) zur Erkennung ausgew\xE4hlt werden (dies geschieht unter \u201ESettings\u201C \u2192 \u201ERecognition\u201D \u2192 \u201EGeneral\u201D), wie in der folgenden Abb. dargestellt, aus der Liste aller verf\xFCgbaren OCR-Modelle (\u201ELine recognition models \u2013 Available\u201C).</p><p><img src="'+r+'" alt="Abb7-2.png"></p><p>Abb. 6: Auswahl eines geeigneten OCR-Modells.</p><p>Generell ist es dabei m\xF6glich, mehr als nur ein Modell f\xFCr die Erkennung ausw\xE4hlen. Empfohlen wird dies jedoch nur dann, wenn auch unterschiedliche Typen innerhalb des zu erkennenden Drucktextes vorkommen.</p><p>Durch \u201EEXECUTE\u201C wird der \u201EProcess Flow\u201C gestartet. \xDCber Fortschrittsbalken zu den einzelnen Teilmodulen l\xE4sst sich der aktuelle Stand der automatisierten Bearbeitung verfolgen. Nach dem vollst\xE4ndigen Durchlauf des Workflows k\xF6nnen die Ergebnisse im Men\xFCpunkt \u201EGround Truth Production\u201C (\u2630) \xFCberpr\xFCft werden.</p><p><img src="'+t+'" alt="Abb7.png"></p><p>Abb. 7: Zeilenbilder mit entsprechendem OCR-Ergebnis.</p><p>Entsprechen die erstellten OCR-Texte auf Zeilenbasis der gew\xFCnschten bzw. geforderten Erkennungsgenauigkeit, k\xF6nnen bereits jetzt finale OCR-Ergebnisse (TXT und/oder PageXML) unter dem Men\xFCpunkt \u201EResult Generation\u201C (\u2630) generiert werden. Entsprechen die Ergebnisse nicht der gew\xFCnschten Genauigkeit, k\xF6nnen sie vor der Ergebnisausgabe noch einmal korrigiert werden (s. dazu Kapitel 4.8).</p><p>Neben dem sog. \u201EProcess Flow\u201C bietet OCR4all auch die M\xF6glichkeit eines <strong>sequenziellen Workflows</strong>, bei dem der Nutzer die unterschiedlichen Teilmodule (s. dazu Abb. 1) und deren zugeh\xF6rige Arbeitsschritte eigenst\xE4ndig durchf\xFChrt, um jeweils die Korrektheit und Qualit\xE4t der produzierten Daten zu gew\xE4hrleisten. Da die separaten Teilmodule aufeinander aufbauen, erscheint diese Herangehensweise v. a. im Falle der Bearbeitung fr\xFChneuzeitlicher Drucke mit aufwendigem und komplexeren Layout besonders sinnvoll.</p><p>V. a. Erstnutzern wird an dieser Stelle ohnehin geraten, mindestens einmal den nun folgenden schrittweisen Workflow der OCR durchzuf\xFChren, um die Funktionsweise der jeweiligen Teilmodule zu verstehen.</p>',16);function d(a,o){return l}var c=e(s,[["render",d],["__file","4.001-Process_Flow.html.vue"]]);export{c as default};
