---
layout: story
title:  01. Tech grant funding over the years
description: SEO description
permalink: /tour/01-tech-grant-funding-over-the-years
query : http://grantnav.threesixtygiving.org/search?json_query=%7B"extra_context"%3A+%7B"amountAwardedFixed_facet_size"%3A+3%2C+"awardYear_facet_size"%3A+3%7D%2C+"sort"%3A+%7B"_score"%3A+%7B"order"%3A+"desc"%7D%7D%2C+"aggs"%3A+%7B"recipientOrganization"%3A+%7B"terms"%3A+%7B"field"%3A+"recipientOrganization.id_and_name"%2C+"size"%3A+3%7D%7D%2C+"fundingOrganization"%3A+%7B"terms"%3A+%7B"field"%3A+"fundingOrganization.id_and_name"%2C+"size"%3A+3%7D%7D%2C+"currency"%3A+%7B"terms"%3A+%7B"field"%3A+"currency"%2C+"size"%3A+3%7D%7D%2C+"recipientRegionName"%3A+%7B"terms"%3A+%7B"field"%3A+"recipientRegionName"%2C+"size"%3A+3%7D%7D%2C+"recipientDistrictName"%3A+%7B"terms"%3A+%7B"field"%3A+"recipientDistrictName"%2C+"size"%3A+3%7D%7D%7D%2C+"query"%3A+%7B"bool"%3A+%7B"filter"%3A+%5B%7B"bool"%3A+%7B"should"%3A+%5B%5D%7D%7D%2C+%7B"bool"%3A+%7B"should"%3A+%5B%5D%7D%7D%2C+%7B"bool"%3A+%7B"should"%3A+%5B%5D%2C+"must"%3A+%7B%7D%7D%7D%2C+%7B"bool"%3A+%7B"should"%3A+%7B"range"%3A+%7B"amountAwarded"%3A+%7B%7D%7D%7D%2C+"must"%3A+%7B%7D%7D%7D%2C+%7B"bool"%3A+%7B"should"%3A+%5B%5D%7D%7D%2C+%7B"bool"%3A+%7B"should"%3A+%5B%5D%7D%7D%2C+%7B"bool"%3A+%7B"should"%3A+%5B%5D%7D%7D%2C+%7B"bool"%3A+%7B"should"%3A+%5B%5D%7D%7D%5D%2C+"must"%3A+%7B"query_string"%3A+%7B"query"%3A+"tech"%2C+"default_field"%3A+"_all"%7D%7D%7D%7D%7D
slice: year
prev: /
next: /slice-and-dice
---

This tool was created as a submission to the [360Giving Data Visualisation Challenge](https://challenge.threesixtygiving.org/){:target="_blank"}, in answer to the question "_Who has funded what themes throughout the years_".

It allows you to take the URL of a search from [GrantNav](http://grantnav.threesixtygiving.org/){:target="_blank"}, and visually **slice** it up by dimensions such as [Year]({{ page.url | append: "?slice=year" }}) or [Location]({{ page.url | append: "?slice=location" }}).

The following pages will guide you through a series of **slices** in response to the challenge question, ending in a version of the tool you can use to create your own visualisations.

This **slice** shows grants with a "tech" theme. We can see that Comic Relief dominated in 2017, along with a number of historic grants in other years which aren't quite right for the digital technology focus we're interested in. Let's try and improve this...

<!-- TODO: add links -->
>**Please note**  
>As this is primarily a challenge submission it has not been optimised for heavy use, and includes a number of [known issues](#).
>
>If you spot a bug or would like to request a feature, please [file an issue](#), or even better consider [contributing](#).
