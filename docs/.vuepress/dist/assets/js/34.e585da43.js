(window.webpackJsonp=window.webpackJsonp||[]).push([[34],{425:function(e,t,n){"use strict";n.r(t);var i=n(54),s=Object(i.a)({},(function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("ContentSlotsDistributor",{attrs:{"slot-key":e.$parent.slotKey}},[n("h3",{attrs:{id:"_4-5line-segmentation"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#_4-5line-segmentation"}},[e._v("#")]),e._v(" 4.5\tLine Segmentation")]),e._v(" "),n("p",[n("strong",[e._v("Input:")]),e._v(" pre-processed images and segmentation information (in the form of PageXML files)\n"),n("strong",[e._v("Output:")]),e._v(" extracted text lines saved in those PageXML files")]),e._v(" "),n("ul",[n("li",[e._v("This step constitutes a direct preparation to the OCR process and features the dissection of all previously defined and classified layout elements into separate text lines (this a necessary step as the OCR is based on line recognition). All results are then automatically saved in the corresponding page XML files.")])]),e._v(" "),n("pre",[e._v("\nBILD\n\n")]),e._v(" "),n("p",[e._v("fig. 35. Line segmentation settings.")]),e._v(" "),n("ul",[n("li",[e._v("Generally speaking, all existing settings can be retained. "),n("strong",[e._v("There are, however, a few restrictions when it comes to page layout:")]),e._v(" if you are working with pages featuring two or more text columns (and if those have been previously defined as separate, individual main text blocks in LAREX), you will need to change the ‘maximum # of whitespace column separators’ which is pre-set at "),n("strong",[e._v("-1")]),e._v(".\n-- "),n("strong",[e._v("'Whitespace column separators'")]),e._v(" are the white columns devoid of text found around text blocks.\n-- When working with a "),n("strong",[e._v("two-column layout")]),e._v(" whose text is continuous (i.e. where the first line of both columns don’t form a semantic unit), you will need to set the ‘maximum # of whitespace column separators’ at "),n("strong",[e._v("3")]),e._v(". This number corresponds to the whitespace on both sides of the columns and to the whitespace situated between them.\n-- When working with a "),n("strong",[e._v("three-column layout")]),e._v(", set the 'whitespace' number to "),n("strong",[e._v("4")]),e._v(", and so on.")]),e._v(" "),n("li",[e._v("Once all desired settings are chosen, click on ‘execute’. Afterwards, control generated results under ‘Project Overview’.")]),e._v(" "),n("li",[e._v("Using the ‘settings (advanced)’ option is especially useful when working with line segmentation, particularly if/when errors are reported (and shown on the interface). For instance, small letters will often fall short of the default minimal line width. You can adjust this minimal width by reducing the ‘minimum scale permitted’, which can be found under menu item ‘limits’. This will enable you to correctly re-do the line segmentation.")]),e._v(" "),n("li",[e._v("You can generally control the accuracy of line segmentation by clicking on the ‘lines’ button (under menu item ‘post correction’).")])])])}),[],!1,null,null,null);t.default=s.exports}}]);