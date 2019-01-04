---
layout: page
image: /public/images/currency-thumbnail.png
title: Currency Market Maker Bot
year: 2013
summary: A trading algorithm that offered liquidity in return for profit.
rank: 4
---

<img src="/public/images/currency-graph.jpg">

<img src="/public/images/currency-trade.png" width="300" align="right">

<a href="http://www.investopedia.com/terms/m/marketmaker.asp">According to Investopedia</a>: "The most common type of market maker is a brokerage house that provides purchase and sale solutions for investors in order to keep the financial markets liquid. . .For example, when an investor searches for a stock using an online brokerage firm, it might have a bid price of $100 and an ask price of $100.05. This means that the broker is purchasing the stock for $100 and then selling the stock for $100.05 to prospective buyers. Through high-volume trading, the small spread adds up to large daily profits."

<img src="/public/images/currency-rates.png" width="300" align="right">

Thus, a market maker offers liquidity in return for profit on the bid-ask spread of an exchange. In October 2013 I created a Java trading algorithm (using the <a href="http://www.seleniumhq.org/">Selenium API</a>) that functioned essentially as a market maker. It operated on ROBLOX's "Tickets" and "Robux" currency exchange. It may seem silly to trade virtual currencies, but at <a href="https://www.roblox.com/develop/developer-exchange">current rates</a>, 100,000 Robux can be exchanged for $350 USD. At the time, I had no idea what a market maker was, but I recognized an opportunity for profit.

The finished product earned an average of $15.61 per day, and all I had to do was hit "Run" and check in every few days. Additionally, the bot created greater market liquidity. The currency exchange was later shutdown, with all Tickets being converted to Robux. It was fun while it lasted!