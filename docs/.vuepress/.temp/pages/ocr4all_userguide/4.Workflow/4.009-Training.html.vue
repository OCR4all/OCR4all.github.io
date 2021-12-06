<template><h3 id="_4-9training" tabindex="-1"><a class="header-anchor" href="#_4-9training" aria-hidden="true">#</a> 4.9	Training</h3>
<p><strong>Input</strong>: Zeilenbilder mit entsprechender Ground Truth sowie optional bereits bestehende OCR-Modelle, die als sog. Pretraining und Datengrundlage des Modelltrainings genutzt werden<br>
<strong>Output</strong>: ein oder mehrere OCR-Modelle</p>
<p>Generell muss es das Ziel sein, einen insgesamt möglichst fehlerfreien Text zu erhalten!<br>
Warum dann aber die Erstellung werkspezifischer Modelle mittels des Trainings-Moduls statt einfacher, abschließender Textkorrektur?</p>
<p>→ Je besser das Modell, welches zur Texterkennung genutzt wird, desto kürzere fällt die Korrekturzeit aus. Idee und Sinn eines kontinuierlichen Modelltrainings sind es also, mit fortlaufendem Korrekturfortschritt auch immer bessere Modelle zu trainieren und somit den Korrekturaufwand für die danach noch zu korrigierenden Seiten des Werkes auf ein Minimum zu reduzieren.</p>
<ul>
<li>Innerhalb des Trainingstools können auf Grundlage aller zu einem Werk vorliegenden Zeilen Ground Truth werkspezifische Modelle bzw. -ensembles trainiert werden. Dazu werden in den allgemeinen Einstellungen folgende Werte eingetragen:
<ul>
<li>„<strong>The number of folds</strong> (= the number of models) <strong>to train</strong>“: <strong>5</strong> → Es wird im Folgenden ein Modellensemble, bestehend aus fünf Einzelmodellen, trainiert.</li>
<li>„<strong>Only train a single fold</strong> (= a single model)“: <em>Nichts eintragen!</em> → Es werden alle fünf Einzelmodelle statt nur eines einzelnen trainiert.</li>
<li>„<strong>Number of models to train in parallel</strong>“: <strong>-1</strong> → Alle Modelle des Ensembles werden gleichzeitig trainiert.</li>
<li>„<strong>Keep all characters loaded from the last model</strong>”: Auswählen, wenn alle in den „Pretraining”-Modellen enthaltenen Zeichen im zu trainierenden Modell beibehalten werden sollen, also zu dessen Whitelist hinzugefügt werden.</li>
<li>„<strong>Whitelist characters to keep in the model</strong>”: Liste von Zeichen, die beim Training und im daraus entstehenden Modell berücksichtigt werden. Alle Zeichen außerhalb dieser „Whitelist“ werden nicht berücksichtigt.</li>
<li>„Pretraining“:<br>
„<strong>Train each model based on different existing models</strong>“ (Im Folgenden öffnen sich fünf Dropdown-Listen; in jede wird eines der gemischten Modelle des Modellensembles eingetragen, das wie empfohlen zur ersten Erkennung von Text im vorliegenden Werk genutzt wurde; egal bei welcher Trainingsiteration der Nutzer steht: Auch wenn bspw. bereits das dritte werkspezifische Modell trainiert wird – es werden trotzdem immer die fünf zu Beginn verwendeten grundlegenden gemischten Modelle eingetragen)<br>
<strong>ODER</strong><br>
„<strong>Train all models based on one existing model</strong>“ (Wurde die erste Texterkennung auf Grundlage eines einzelnen gemischten Modells durchgeführt, so wird nur ein Modell eingetragen; jedoch gilt auch hier, dass bei jeder Iteration eben dieses gemischte Modell erneut angegeben werden muss).</li>
<li>„<strong>Data augmentation</strong>“: <em>Nichts eintragen.</em> → Aber: beschreibt die Anzahl der Datenerweiterungen pro Zeile. Es kann hier ein Wert, bspw. 5, angegeben werden, um damit die Menge des Trainingsmaterials zu erhöhen, auf der trainiert wird. Dies kann zur Erstellung besserer Modelle führen, benötigt aber deutlich mehr Trainingszeit.</li>
<li>„<strong>Skip retraining on real data only</strong>“: <em>Nicht auswählen!</em></li>
</ul>
</li>
<li>Die erweiterten Einstellungen bleiben unverändert.</li>
</ul>
<p><img src="/docs/.vuepress/public/images/Abb39.png" alt="Abb39.png"></p>
<p>Abb. 39: Einstellungen für das Training von werkspezifischen Modellensembles.</p>
<ul>
<li>Mittels „EXECUTE“ wird das Training gestartet. Im Folgenden kann das Training der Konsole nachvollzogen werden. Je nach Gesamtmenge der vorhandenen Zeilen Ground Truth variieren die Trainingszeiten.</li>
<li>Entsprechend obiger Einstellungen wird durch das Training ein werkspezifisches Modellensemble, bestehend aus fünf Einzelmodellen, erstellt, welches in ocr4all/models/Werktitel/0 gespeichert wird. Das Modellensemble trägt folglich den Namen „0“. Es kann nun, zur weiteren Arbeit am vorliegenden Werk und Verbesserung der Erkennung innerhalb des Menüpunkts „Recognition“ und der Spalte der auswählbaren Modelle, zur Erkennung neuer Textseiten verwendet werden. Soll ein zweites werkspezifisches Modellensemble erstellt werden, mit Hilfe dessen bspw. mögliche Schwächen des ersten behoben werden können, wird erneut vorgegangen wie hier beschrieben. Dem neuen werkspezifischen Modell wird dann automatisch die Bezeichnung „1“ zugewiesen. Die Bezeichnungen weiterer Modellensembles setzt sich nach diesem Schema fort.</li>
</ul>
</template>
