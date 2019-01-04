---
layout: page
image: /public/images/demi-map-2.png
title: Census Tracts Web Crawler
year: 2016
summary: A web crawler that scrapes relevant census data and outputs demographic studies.
rank: 2
---

<img src="/public/images/demi-header.png">

<img src="/public/images/demi-logo.png" width="300" align="right">

One day at the Child Evangelism Fellowship Twin Cities office I was assigned the task of manually gathering data from the United States Census Bureau's <a href="https://factfinder.census.gov/">American Fact Finder</a>. It seemed reasonable enough until I realized we needed demographic studies for Hennepin County's 300 census tracts at minimum, and ideally we'd have studies for all of Minnesota's 1,336 tracts. Each study required several minutes to make. It became clear that doing the work manually would cost days, even weeks of monotonous work. Worse, the process would need to be repeated whenever new data emerged. There had to be a better solution!

<img src="/public/images/demi-output.jpg" width="300" align="right">

I brought up the idea of creating a bot to do the process automatically. My supervisor agreed, and so I wrote a Java bot (nicknamed "Demi") using an API called <a href="http://www.seleniumhq.org/">Selenium</a>. It included two parts: data scraping and study creation. Writing the program took much less time than the manual process would have, and it will save even more time when new census data becomes available.

Here's one of the output's 1,336 studies:
```
Demographic Study: Census Tract 1.01

1. Population
        Total:            3157
        Under age 15:     22.4% or 707
                Male:     56.29% or 398
                Female:   43.28% or 306

2. Ethnicities
        White:            43.3%
        African:          18.7%
        Native:           1.4%
        Asian:            21.6%
        Hispanic:         8.6%
        Other:            6.4%

3. Families with children
        Married couple:   157
        Single male:      44
        Single female:    137
```