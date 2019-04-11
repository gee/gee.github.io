---
layout: page
image: /public/images/wsi-logo-2.jpg
title: WSI Sports Production Flow
year: 2017
summary: The analysis of WSI Sports' production flow and the design of relevant improvements.
rank: 6
---

<img src="/public/images/wsi-diagram.jpg">

For the class System Analysis and Design (MIS3265), my partner and I were instructed to seek out an organization unrelated to the University of Northwestern and work with them on a project. Under the steps of the Unified Process System Development Life Cycle, we were to perform system analysis, then provide a proposed design solution. Additionally, we would create Unified Modeling Language (UML) diagrams such as the one shown above in order to visualize the project.

We met with the founder and owner of WSI Sports, as well as other coworkers, several times over the course of the semester. In our first meeting we went over potential projects, including replacement of the current point of sale program, improved search engine optimization, a web crawler to gather customer data, more accurate inventory tracking, and so on. Initially, the greatest need appeared to be the point of sale program, so we visited WSI's booth at the 2017 Medtronic Twin Cities Marathon's Health & Fitness Expo in the Saint Paul RiverCentre. We compared WSI's point of sale method with other booths around the event, and it became evident that WSI was actually using more efficient technology than most of the other organizations. In our next meeting we decided on a new objective: to make WSI's production flow more efficient and reduce data redundancy. Over the course of the semester we identified two areas that could be improved and came up with solutions for each.

<img src="/public/images/wsi-photo.jpg">

First, one problem that needed solving was the time-consuming process of manually entering purchase orders and vendor orders. Occasional user error was probable, and error could ultimately be avoided by implementing an automated system to synchronize order information. This would not be a difficult task, given that QuickBooks offers a great variety of integrations to work with potential sources for orders, found here (https://apps.intuit.com/). WSI does manual integration with at least Amazon, Shopify, Square, and Excel. QuickBooks supports all of these using automatic integration.

Second, stickers are attached to differentiate bundles of material. Not only are the stickers made up of hand-written data that is already in their QuickBooks database, user error has been known to cause problems. A solution to this would be to create an application that retrieves information from their existing database and prints it respectively for easy application to the bundles. This would cut down the sticker process time and maintain accurate information by avoiding the possibility of user error. This can be addressed by writing software that interacts with the QuickBooks Online API, found here (https://developer.intuit.com/). This is a RESTful web service. The software application would fetch data via this API, then format it similarly to how WSI's UPC sheets are currently. These could then be applied to a label rather than handwriting the information.