---
layout: tour
title:  01. Tech grant funding over the years
description: Comic Relief dominated tech grant funding in 2017, along with a number of historic grants which don't relate to "tech for good".
permalink: /tour/01-tech-grant-funding-over-the-years
query : http://grantnav.threesixtygiving.org/search?json_query=%7B%22sort%22%3A+%7B%22_score%22%3A+%7B%22order%22%3A+%22desc%22%7D%7D%2C+%22aggs%22%3A+%7B%22recipientOrganization%22%3A+%7B%22terms%22%3A+%7B%22field%22%3A+%22recipientOrganization.id_and_name%22%2C+%22size%22%3A+3%7D%7D%2C+%22fundingOrganization%22%3A+%7B%22terms%22%3A+%7B%22field%22%3A+%22fundingOrganization.id_and_name%22%2C+%22size%22%3A+3%7D%7D%2C+%22currency%22%3A+%7B%22terms%22%3A+%7B%22field%22%3A+%22currency%22%2C+%22size%22%3A+3%7D%7D%2C+%22recipientRegionName%22%3A+%7B%22terms%22%3A+%7B%22field%22%3A+%22recipientRegionName%22%2C+%22size%22%3A+3%7D%7D%2C+%22recipientDistrictName%22%3A+%7B%22terms%22%3A+%7B%22field%22%3A+%22recipientDistrictName%22%2C+%22size%22%3A+3%7D%7D%7D%2C+%22query%22%3A+%7B%22bool%22%3A+%7B%22filter%22%3A+%5B%7B%22bool%22%3A+%7B%22should%22%3A+%5B%5D%7D%7D%2C+%7B%22bool%22%3A+%7B%22should%22%3A+%5B%5D%7D%7D%2C+%7B%22bool%22%3A+%7B%22should%22%3A+%5B%5D%2C+%22must%22%3A+%7B%7D%7D%7D%2C+%7B%22bool%22%3A+%7B%22should%22%3A+%7B%22range%22%3A+%7B%22amountAwarded%22%3A+%7B%7D%7D%7D%2C+%22must%22%3A+%7B%7D%7D%7D%2C+%7B%22bool%22%3A+%7B%22should%22%3A+%5B%5D%7D%7D%2C+%7B%22bool%22%3A+%7B%22should%22%3A+%5B%5D%7D%7D%2C+%7B%22bool%22%3A+%7B%22should%22%3A+%5B%5D%7D%7D%2C+%7B%22bool%22%3A+%7B%22should%22%3A+%5B%5D%7D%7D%5D%2C+%22must%22%3A+%7B%22query_string%22%3A+%7B%22query%22%3A+%22tech%22%2C+%22default_field%22%3A+%22%2A%22%7D%7D%7D%7D%2C+%22extra_context%22%3A+%7B%22amountAwardedFixed_facet_size%22%3A+3%2C+%22awardYear_facet_size%22%3A+3%7D%7D
slice: year
prev: /
next: /tour/02-an-evolving-definition-of-tech-for-good-funding
---

This tool was created in [my](http://www.suninthesky.co.uk/){:target="_blank"} spare time as a submission to the [360Giving Data Visualisation Challenge](https://challenge.threesixtygiving.org/){:target="_blank"}, in answer to the question "_Who has funded what themes throughout the years_".

It allows you to take the URL of a search on [GrantNav](http://grantnav.threesixtygiving.org/){:target="_blank"}, and visually **slice** it up by dimensions such as [Year]({{ site.baseurl }}{{ page.url | append: "?slice=year" }}) or [Location]({{ site.baseurl }}{{ page.url | append: "?slice=location" }}).

The next few pages will guide you through a series of **slices** that show how the tool can be used to explore a range of topical funding themes; ending in a version of the tool you can use to create your own visualisations to share.

This **slice** shows grants with a [tech]({{ page.query }}){:target="_blank"} theme. Each grant is represented by a circle, the size of which is based on the amount awarded. We can see that Comic Relief dominated in 2017, along with a number of historic grants which don't relate to "tech for good" - which we'll focus on [next]({{ site.baseurl }}{{ page.next }})...

>**P.S.**  
>As this is primarily a challenge submission, it has not been optimised for heavy use (limited to 1,350 grants) and includes some [known issues](https://github.com/suninthesky/slice-and-dice#known-issues){:target="_blank"}.
>
>Commentary on each **slice** is based on data available through GrantNav before July 2018, and may become outdated when GrantNav is updated. As such, if you spot a bug or would like to request a feature, please [file an issue](https://github.com/suninthesky/slice-and-dice/issues){:target="_blank"}, or even better consider [contributing](https://github.com/suninthesky/slice-and-dice#contributing){:target="_blank"} a fix.
>
>**P.P.S.**  
>Please remember this tool does little to improve the data which funders have published, which may result in missing information in places. A quick look at a dimension such as [Location]({{ site.baseurl }}{{ page.url | append: "?slice=location" }}) will highlight some of the inconsistencies.
