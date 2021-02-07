---
layout: page
image: /public/images/protolabs-thumbnail.jpg
title: Protolabs Cam Blank Framework
year: 2019
summary: A framework that outputs G-Code to be run in CNC mills.
rank: 2
---

<img src="/public/images/protolabs-header.jpg">

In the summer of 2019 I interned at Protolabs HQ on the Protomold Designer (PMD) Scrum team. [Protolabs](https://www.protolabs.com/) is the world leader in digital manufacturing, and my team specialized in [injection molding](https://www.protolabs.com/services/injection-molding/). Along with 7 other developers, we were responsible for maintaining and expanding PMD, a CAD desktop application for designing molds around parts. PMD is also responsible for outputting the G-Code to manufacture these molds in Protolabs' Haas CNC mills. For certain complex molds, cams are necessary, and cams are created from cam blanks. For years, PMD had let its users output the G-Code to create these cam blanks, but the original source files had since been lost. We needed to recreate in C++ a program to output cam blank NC files rather than blindly modifying the G-Code itself whenever updates needed to be made. This was the main project assigned to me, and it involved a variety of activites: reverse engineering G-Code, creating a new cam blank framework in C++, and testing NC files in the mills.

<img src="/public/images/protolabs-1.jpg">

<img src="/public/images/protolabs-2.jpg">