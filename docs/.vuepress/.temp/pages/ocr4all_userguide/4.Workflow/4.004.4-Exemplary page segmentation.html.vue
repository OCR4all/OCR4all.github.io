<template><h4 id="_4-4-4beispielhafte-segmentierung-einer-scanseite" tabindex="-1"><a class="header-anchor" href="#_4-4-4beispielhafte-segmentierung-einer-scanseite" aria-hidden="true">#</a> 4.4.4	Beispielhafte Segmentierung einer Scanseite</h4>
<p>LAREX erstellt mit dem Laden einer Scanseite automatisch erste Segmentierungsergebnisse. Diese müssen im Folgenden korrigiert werden.</p>
<p>Der folgende Segmentierungsdurchgang bezieht sich auf die vierte Seite des Standardwerkes „Cirurgia“, welches beim Download der OCR4all-Ordnerstruktur LINKhierLINK heruntergeladen werden kann.</p>
<p><strong>Fehleranalyse</strong>: Welche Layoutelemente wurden richtig erkannt, welche fehlerhaft, welche gar nicht? Befinden sich auf den Seitenrändern Benutzerspuren, Bordüren, Verschmutzungen oder Textteile, die nicht erkannt werden sollen, das Segmentierungsergebnis jedoch beeinflussen?</p>
<p><img src="/docs/.vuepress/public/images/Abb21.png" alt="Abb21.png"></p>
<p>Abb. 21: Automatisches Segmentierungsergebnis für die vierte Seite aus „Cirurgia“.</p>
<p><strong>„Region of Interest“ (RoI)</strong>: Befinden sich außerhalb der Abschnitte eine Scanseite, die für die Erkennung relevant sind, Elemente, die das Segmentierungsergebnis negativ beeinflussen (z.
B. Benutzerspuren, Verunreinigungen, Bibliotheksstempel etc.), so kann eine RoI festgelegt werden, um diese Bereiche von Vornherein aus der automatischen Segmentierung auszuschließen. Dazu wird in der Werkzeugleiste unter „RoI“ die Option „Set the Region of Interest“ ausgewählt und mithilfe der linken Maustaste ein Rechteck um den zu segmentierenden Inhalt der Scanseite gelegt.</p>
<p><img src="/docs/.vuepress/public/images/Abb22.png" alt="Abb22.png"></p>
<p>Abb. 22: Festlegungen einer Region of Interest.</p>
<p>Ist die RoI festgelegt, erfolgt ein Klick auf das auf der rechten Seite befindliche Feld „<strong>SEGMENT</strong>“ – Elemente, die sich außerhalb der RoI befinden, werden nun nicht mehr berücksichtigt. Wichtig: Wird eine RoI gesetzt, überträgt sich diese auch auf alle Scanseiten, die im weiteren Verlauf der Arbeit an einem Werk aufgerufen werden. Da sich die segmentierungsrelevanten Abschnitte auf einer Seite aufgrund unterschiedlicher Faktoren immer wieder verschieben können, ist es wahrscheinlich, auch die RoI in Abständen immer wieder den Seitengegebenheiten anpassen zu müssen. Dazu können einfach einzelne Bereiche der RoI angeklickt und mit Hilfe der Maus verschoben werden.</p>
<p>Unabhängig von der RoI kann durch die Option „Create a ignore rectangle“ eine sog. Ignore-Region erstellt werden, mit deren Hilfe kleinräumigere Scanbestandteile ignoriert und somit von der Segmentierung ausgeschlossen werden können.</p>
<p><strong>Korrektur fehlerhaft erkannter Layoutelemente</strong>:
Falsch erkannte Layoutelemente können in ihrer Typisierung geändert werden. Dazu klickt man mit der rechten Maustaste auf das entsprechende Element – im sich öffnenden Auswahlfenster kann die korrekte Region ausgewählt werden.</p>
<p><img src="/docs/.vuepress/public/images/Abb23.png" alt="Abb23.png"></p>
<p>Abb. 23: Korrektur einer fehlerhaften Typisierung.</p>
<p>Soll die Überschrift aufgrund ihrer Verwachsung mit dem ihr folgenden Text von diesem abgetrennt werden, so kann dies auf drei Arten erfolgen:</p>
<p>Zum einen bietet sich die Möglichkeit, um die zu klassifizierende Region ein Rechteck zu ziehen. Dazu wird in der Werkzeugleiste unter „Segment“ die Option „Create a fixed segment rectangle“ (Shortcut: 3) ausgewählt, anschließend mithilfe der Maus ein Fenster um die entsprechende Region gezogen und im sich darauf öffnenden Auswahlmenü die richtige Benennung ausgewählt. Zum zweiten kann die Auswahl der zu klassifizierenden Region mit Hilfe eines Polygons vorgenommen werden. Dies bietet sich vor allem bei komplexen, unübersichtlichen oder verschachtelten Layouts an, in denen schräge Kanten, Rundungen in Bildern und Holzschnitten oder im Textblock platzierte Zierinitialen o. Ä. vorkommen. Hierzu wird in der Werkzeugleiste unter „Segment“ diesmal die Option „Create a fixed segment polygon“ (Shortcut: 4) ausgewählt und die zu klassifizierende Layoutregion in einer Punktlinie eingefasst, deren Ende mit dem Beginn verknüpft und damit zu einem Polygon zusammengefasst wird. Auch hier erscheint nach Verbindung von Anfangs- und Endpunkt ein Auswahlmenü, in dem die richtige Benennung ausgewählt werden kann.</p>
<p>Die dritte Möglichkeit umfasst die Zerteilung des als paragraph erkannten Textblockes aus Überschrift und Haupttext mithilfe einer Schnittlinie. Diese wird in der Werkzeugleiste unter
„Segment“ mit der Option „Create a cut line“ (Shortcut: 5) ausgewählt.</p>
<p><img src="/docs/.vuepress/public/images/Abb24.png" alt="Abb24.png"></p>
<p>Abb. 24: Auswahl der Schnittlinie in der Werkzeugleiste.</p>
<p>Mit Hilfe der linken Maustaste wird die Linie polygonartig durch mehrere Klicks quer durch das aufzuspaltende Layoutelement gezogen. Durch einen Doppelklick auf die linke Maustaste kann ein Endpunkt der Linie gesetzt wird.</p>
<p><img src="/docs/.vuepress/public/images/Abb25.png" alt="Abb25.png"></p>
<p>Abb. 25: Festlegung der Schnittlinie zwischen zwei zu trennenden Bereichen eines Layoutelements.</p>
<p>Wird nun auf „SEGMENT“ geklickt, wird der als ein Layoutelement erkannte Bereich in zwei unterschiedliche Layoutelemente aufgetrennt. Anschließend kann der Bereich der Überschrift mittels Rechtsklick und entsprechender Auswahl (s. o.) korrekt umbenannt werden.</p>
<p><img src="/docs/.vuepress/public/images/Abb26.png" alt="Abb26.png"></p>
<p>Abb. 26: Korrekte Typisierung der getrennten Bereiche.</p>
<p>Sollen Layoutelemente, falsch gezogene Schnittlinien, verzogene Polygone etc. gelöscht werden, können diese einfach durch einen Linksklick der Maus markiert und anschließend über „Entf“ oder in der Werkzeugleiste mittels „Delete selected items“ gelöscht werden.</p>
<p><strong>Festlegung der „Reading Order“</strong> (s. o.):</p>
<p><img src="/docs/.vuepress/public/images/Abb27.png" alt="Abb27.png"></p>
<p>Abb. 27: Festlegung der Reading Order.</p>
<p><strong>Speichern des Segmentierungsergebnisses des aktuellen Scans</strong>: Das Speichern der Ergebnisse erfolgt durch einen Klick auf den „SAVE RESULT“-Button oder durch Strg + S. In diesem Moment wird in der OCR4all-Ordnerstruktur eine XML-Datei mit den Segmentierungsergebnissen abgelegt.</p>
<p><img src="/docs/.vuepress/public/images/Abb28.png" alt="Abb28.png"></p>
<p>Abb. 28: Speichern von Segmentierungsergebnissen.</p>
<p><strong>Anschließend kann in der linken Seitenleiste der nächste Scan ausgewählt werden.</strong> Soll die Segmentierung eines Scans nachträglich noch einmal geändert werden, so muss danach einfach die neue Segmentierung einmal abgespeichert werden – auf diese Weise wird die dann veraltete XML-Datei durch die aktuelle und neue überschrieben.</p>
</template>
