---
layout: page
image: /public/images/imbio-thumbnail.jpg
title: Imbio Reporting Module
year: 2019
summary: A reporting module to unify lung scan algorithm outputs.
rank: 3
---

<img src="/public/images/imbio-header.jpg">

In the spring of 2019 I interned at [Invenshure](https://invenshure.com/), a biotech incubator with several portfolio companies. Within Invenshure, I specifically worked at the startup [Imbio](https://www.imbio.com/): "With big data analysis and computer vision, Imbio transforms standard medical images into rich visual maps of a patient’s condition, and quantitative reports that provide physicians detailed data on the type and extent of abnormalities found in the patient images."

<img src="/public/images/imbio-flowchart.jpg" align="right">

Researchers at Imbio have created several algorithms that analyze CT scans and output the results in a PDF format. The problem was that each algorithm handled much of that reporting individually, and the reports were generated using bloated LaTeX templates in combination with string substitution. My task was twofold: unify the algorithms by creating a universal ImbioReporting module in Python, and replace the LaTeX templates with HTML/CSS files. This would result in a dramatic increase in the extensibility and maintainability of both algorithm and template code.