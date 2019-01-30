---
layout: post
title: Random Maps
category: News
---

Today we'll be looking at random map generation in Beginnings 2. Every server will be unique. The generation algorithm consists of two parts: island selection and island placement. We also have a GUI minimap.

<!--more-->

### Island Selection

First, a number of islands are selected from a pool. While Beginnings currently has 14 islands, Beginnings 2 will have an island pool around 3 times that size. From this pool the algorithm randomly selects islands to place in a server. The algorithm makes sure all resource types are included in at least one spot on the map.

<figure><img src="/public/images/random-maps-generations.png"><figcaption>Some random maps</figcaption></figure>

### Island Placement

Second, the chosen islands are scattered across the map. In general colder islands are placed in the north, and warmer islands are placed in the south. Some islands can be placed anywhere.

You may have noticed that the continent and the volcano are always present. It's true that a single continent will appear on every server, but other continents are in development (think snow, desert, and so on). As for the volcano, no server will escape its looming presence.

### Minimap

<figure><img src="/public/images/random-maps-minimap.jpg"><figcaption>A GUI showing the original map</figcaption></figure>

This GUI minimap was developed by our faithful admin who goes by the username CounterCrysis. At the moment it takes a "screenshot" of the map when a server launches, though it would be interesting to pursue a minimap that updates in real time.