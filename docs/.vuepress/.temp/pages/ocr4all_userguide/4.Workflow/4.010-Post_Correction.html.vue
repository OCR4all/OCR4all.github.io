<template><h3 id="_4-10post-correction" tabindex="-1"><a class="header-anchor" href="#_4-10post-correction" aria-hidden="true">#</a> 4.10	Post Correction</h3>
<p><strong>Input</strong>: Segmentierungsinformationen für vorverarbeitete Bilder und zugehöriger Text<br>
<strong>Output</strong>: Korrigierte Segmentierungsinformationen und Text</p>
<p>Unter dem Menüpunkt „Post Correction“ können die in den vorherigen Teilmodulen erstellten Segmentierungsinformationen und Texte manuell angepasst und korrigiert werden. Das Teilmodul ist hierbei in drei Ebenen untergliedert:</p>
<ul>
<li>Unter dem Reiter „SEGMENTS“ können die in der Segmentierung erstellten Regionen und deren Reading Order seitenweise angepasst werden. Hierfür stehen einige der aus LAREX bekannten Werkzeuge (s. o.) zur Verfügung. Beachten Sie, dass Veränderungen auf dieser Ebene ebenfalls Auswirkung auf die folgenden Ebenen haben. So führt beispielsweise das Entfernen einer Region und das Speichern dieser Änderung zum Verlust der zugehörigen Zeilen und Texte.</li>
<li>Der Reiter „LINES“ ermöglicht die manuelle Anpassung der automatischen Zeilenerkennung. So können analog zur vorhergehenden Auszeichnung der Regionen, einzelne Zeilen hinzugefügt, deren Form und Position verändert oder diese entfernt werden. Auch die Reading Order kann auf Zeilenebene manuell angepasst werden. Diese Aktionen werden wie bei LAREX unter Verwendung verschiedener Werkzeuge aus der Werkzeugleiste und der Seitenleiste durchgeführt.</li>
</ul>
<p><img src="/docs/.vuepress/public/images/Abb40.png" alt="Abb40.png"></p>
<p>Abb. 40: Anpassung der zeilenbasierten Reading Order in der „Post Correction“.</p>
<ul>
<li>Unter „TEXT“ ist das schon zuvor behandelte „Ground Truth Production“-Teilmodul (s. o.) zu finden, mittels dessen die zu den Zeilen zugeordneten Texte korrigiert werden können.</li>
</ul>
</template>
