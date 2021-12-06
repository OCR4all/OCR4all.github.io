<template><div class="custom-container danger"><p class="custom-container-title">Achtung</p>
<p>Die Seite wird gerade noch überarbeitet.
Bei auftretenden Problemen <a href="mailto:florian.langhanki@uni-wuerzburg.de">kontaktieren</a> Sie uns bitte.</p>
</div>
<h3 id="_3-2project-overview" tabindex="-1"><a class="header-anchor" href="#_3-2project-overview" aria-hidden="true">#</a> 3.2	Project Overview</h3>
<p>Wird OCR4all im Browser geöffnet, gelangt der Nutzer automatisch auf die Startseite „Project Overview“:</p>
<ul>
<li>„<strong>Settings</strong>“: Die Option „Settings“ dient dazu, jenes Werk auszuwählen, das im Folgenden bearbeitet werden soll. Dazu wird unter „Project Selection“ aus einer Dropdown-Liste das gewünschte Werk ausgewählt, welches zuvor als Ordner unter <code>ocr4all/data/Werktitel</code> angelegt wurde (s. 1.2). Zusätzlich erfolgt unter „Project image type“ die Auswahl von „Gray“.</li>
</ul>
<p><img src="@source/.vuepress/public/images/Abb2.jpg" alt="Abb2.jpg"></p>
<p>Abb. 2: Settings in der Project Overview.</p>
<ul>
<li>
<p>Nach der Auswahl des Werks erfolgt das Laden des Werks über den Button „LOAD PROJECT“! Da von OCR4all bestimmte, festgelegte Dateibenennungen und -formate verlangt werden (0001.png usw.), kann der LOAD-Funktion die Aufforderung einer Konvertierung folgen. Diese kann direkt in OCR4all vorgenommen werden.</p>
</li>
<li>
<p>Hierbei ist es unerheblich, ob der 'input'-Ordner mit einem PDF oder mit Einzelbildern bestückt wurde. Wenn die Möglichkeit besteht, sind jedoch meist Einzelbilder zu bevorzugen.</p>
</li>
</ul>
<p><img src="@source/.vuepress/public/images/Abb3.png" alt="Abb3.png"></p>
<p>Abb. 3: Mögliche Datenkonvertierung. (Hier ein PDF im 'input'-Ordner)</p>
<ul>
<li>
<p>In OCR4all werden alle während des Workflows und für dessen Funktionieren entstehenden Daten in einer einzigen PageXML-Datei pro Scanseite gespeichert und nicht mehr in Form vieler Einzeldateien vorgehalten. Sollten noch Projektdaten aus früheren Versionen vorhanden sein, besteht nun die Möglichkeit, das Projekt automatisiert in die von OCR4all geforderte Struktur zu konvertieren.
Abb. 4: Mögliche Konvertierung eines Legacy-Projekts</p>
</li>
<li>
<p>Unter der Option „<strong>Overview</strong>“ kann nun jederzeit der tabellarisch geordnete, aktuelle Bearbeitungszustand des geladenen Werks eingesehen werden. Jede Seite des vorliegenden Werks erhält dazu als sog. „Page Identifier“ eine eigene Zeile, die darauffolgenden Spalten bilden von links nach rechts den typischen und vorgeschlagenen OCR4all-Workflow ab. Wurden bestimmte Arbeitsschritte des Gesamtworkflows durchgeführt, werden die entsprechenden Seiten im „Overview“ als bearbeitet (Haken) markiert. Über die Optionen „Show... entries“ und „Search“ können die Anzeige selbst verändert oder besonders umfassende Werke durchsucht werden!</p>
</li>
</ul>
<p><img src="@source/.vuepress/public/images/Abb4.png" alt="Abb4.png"></p>
<p>Abb. 4: Overview.</p>
<ul>
<li>Durch einen Klick auf einzelne „<strong>Page Identifier</strong>“ können die Bearbeitungszustände einzelner Scanseite sowie die zu ihnen bereits vorliegenden Daten über den gesamten Arbeitsprozess hinweg eingesehen werden. Dazu dient die Spalte „Images“ sowie die zugehörigen Optionen „Original“, „Binary“, „Gray“ sowie „Noise Removal“.</li>
<li>Über den Button &quot;Export GT&quot; (oben rechts) können sämtliche im Rahmen des Projekts entstandenen Daten exportiert und als Zip-Ordner innerhalb von 'data' verpackt werden.</li>
</ul>
</template>
