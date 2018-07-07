---
layout: story
title:  Slice & Dice
description: This tool allows you to take the URL of a search on GrantNav, and visually slice it up by dimensions such as Year or Location.
permalink: /slice-and-dice
tool: true
example1: '?q=http://grantnav.threesixtygiving.org/search?json_query=%7B"aggs"%3A+%7B"currency"%3A+%7B"terms"%3A+%7B"size"%3A+3%2C+"field"%3A+"currency"%7D%7D%2C+"recipientOrganization"%3A+%7B"terms"%3A+%7B"size"%3A+50%2C+"field"%3A+"recipientOrganization.id_and_name"%7D%7D%2C+"fundingOrganization"%3A+%7B"terms"%3A+%7B"size"%3A+50%2C+"field"%3A+"fundingOrganization.id_and_name"%7D%7D%2C+"recipientDistrictName"%3A+%7B"terms"%3A+%7B"size"%3A+3%2C+"field"%3A+"recipientDistrictName"%7D%7D%2C+"recipientRegionName"%3A+%7B"terms"%3A+%7B"size"%3A+3%2C+"field"%3A+"recipientRegionName"%7D%7D%7D%2C+"query"%3A+%7B"bool"%3A+%7B"must"%3A+%7B"query_string"%3A+%7B"query"%3A+"%2A"%2C+"default_field"%3A+"_all"%7D%7D%2C+"filter"%3A+%5B%7B"bool"%3A+%7B"should"%3A+%5B%5D%7D%7D%2C+%7B"bool"%3A+%7B"should"%3A+%5B%7B"term"%3A+%7B"recipientOrganization.id_and_name"%3A+"%5B%5C"Barnardo%27s%5C"%2C+%5C"GB-CHC-216250%5C"%5D"%7D%7D%5D%7D%7D%2C+%7B"bool"%3A+%7B"must"%3A+%7B%7D%2C+"should"%3A+%5B%5D%7D%7D%2C+%7B"bool"%3A+%7B"must"%3A+%7B%7D%2C+"should"%3A+%7B"range"%3A+%7B"amountAwarded"%3A+%7B%7D%7D%7D%7D%7D%2C+%7B"bool"%3A+%7B"should"%3A+%5B%5D%7D%7D%2C+%7B"bool"%3A+%7B"should"%3A+%5B%5D%7D%7D%2C+%7B"bool"%3A+%7B"should"%3A+%5B%5D%7D%7D%2C+%7B"bool"%3A+%7B"should"%3A+%5B%5D%7D%7D%5D%7D%7D%2C+"sort"%3A+%7B"_score"%3A+%7B"order"%3A+"desc"%7D%7D%2C+"extra_context"%3A+%7B"amountAwardedFixed_facet_size"%3A+3%2C+"awardYear_facet_size"%3A+3%7D%7D'
example2: '?q=http://grantnav.threesixtygiving.org/search?json_query=%7B%22aggs%22%3A+%7B%22currency%22%3A+%7B%22terms%22%3A+%7B%22size%22%3A+3%2C+%22field%22%3A+%22currency%22%7D%7D%2C+%22recipientOrganization%22%3A+%7B%22terms%22%3A+%7B%22size%22%3A+3%2C+%22field%22%3A+%22recipientOrganization.id_and_name%22%7D%7D%2C+%22fundingOrganization%22%3A+%7B%22terms%22%3A+%7B%22size%22%3A+3%2C+%22field%22%3A+%22fundingOrganization.id_and_name%22%7D%7D%2C+%22recipientDistrictName%22%3A+%7B%22terms%22%3A+%7B%22size%22%3A+3%2C+%22field%22%3A+%22recipientDistrictName%22%7D%7D%2C+%22recipientRegionName%22%3A+%7B%22terms%22%3A+%7B%22size%22%3A+3%2C+%22field%22%3A+%22recipientRegionName%22%7D%7D%7D%2C+%22query%22%3A+%7B%22bool%22%3A+%7B%22must%22%3A+%7B%22query_string%22%3A+%7B%22query%22%3A+%22%5C%22start+up%5C%22+AND+awardDate%3A%5B2008-01-01+TO+2018-12-31%5D%22%2C+%22default_field%22%3A+%22_all%22%7D%7D%2C+%22filter%22%3A+%5B%7B%22bool%22%3A+%7B%22should%22%3A+%5B%5D%7D%7D%2C+%7B%22bool%22%3A+%7B%22should%22%3A+%5B%5D%7D%7D%2C+%7B%22bool%22%3A+%7B%22must%22%3A+%7B%7D%2C+%22should%22%3A+%5B%5D%7D%7D%2C+%7B%22bool%22%3A+%7B%22must%22%3A+%7B%7D%2C+%22should%22%3A+%7B%22range%22%3A+%7B%22amountAwarded%22%3A+%7B%7D%7D%7D%7D%7D%2C+%7B%22bool%22%3A+%7B%22should%22%3A+%5B%5D%7D%7D%2C+%7B%22bool%22%3A+%7B%22should%22%3A+%5B%5D%7D%7D%2C+%7B%22bool%22%3A+%7B%22should%22%3A+%5B%5D%7D%7D%2C+%7B%22bool%22%3A+%7B%22should%22%3A+%5B%5D%7D%7D%5D%7D%7D%2C+%22sort%22%3A+%7B%22_score%22%3A+%7B%22order%22%3A+%22desc%22%7D%7D%2C+%22extra_context%22%3A+%7B%22amountAwardedFixed_facet_size%22%3A+3%2C+%22awardYear_facet_size%22%3A+3%7D%7D'
example3: '?slice=location&q=http://grantnav.threesixtygiving.org/search?json_query={"aggs":%20{"currency":%20{"terms":%20{"size":%203,%20"field":%20"currency"}},%20"recipientOrganization":%20{"terms":%20{"size":%203,%20"field":%20"recipientOrganization.id_and_name"}},%20"fundingOrganization":%20{"terms":%20{"size":%2050,%20"field":%20"fundingOrganization.id_and_name"}},%20"recipientDistrictName":%20{"terms":%20{"size":%203,%20"field":%20"recipientDistrictName"}},%20"recipientRegionName":%20{"terms":%20{"size":%203,%20"field":%20"recipientRegionName"}}},%20"query":%20{"bool":%20{"must":%20{"query_string":%20{"query":%20"awardDate:[2015-01-01%20TO%202017-12-31]",%20"default_field":%20"_all"}},%20"filter":%20[{"bool":%20{"should":%20[{"term":%20{"fundingOrganization.id_and_name":%20"[\"The%20Clothworkers%20Foundation\",%20\"GB-CHC-274100\"]"}}]}},%20{"bool":%20{"should":%20[]}},%20{"bool":%20{"must":%20{},%20"should":%20[]}},%20{"bool":%20{"must":%20{},%20"should":%20{"range":%20{"amountAwarded":%20{}}}}},%20{"bool":%20{"should":%20[]}},%20{"bool":%20{"should":%20[]}},%20{"bool":%20{"should":%20[]}},%20{"bool":%20{"should":%20[]}}]}},%20"sort":%20{"_score":%20{"order":%20"desc"}},%20"extra_context":%20{"amountAwardedFixed_facet_size":%203,%20"awardYear_facet_size":%203}}'
---

### How to use this tool

1. Visit [GrantNav](http://grantnav.threesixtygiving.org/){:target="_blank"}
2. Conduct a search
3. Copy the URL
4. Paste it in the **Query** field and hit the &rarr; button
5. Use the **Slice by** dropdown to explore the data

### Examples

Here are some example **slices** you might want to try:

- [Grants to Barnado's]({{ site.baseurl }}{{ page.url | append: page.example1 }})
- [A decade of start up grants]({{ site.baseurl }}{{ page.url | append: page.example2 }})
- [Recent Clothworkers Foundation grants by Location]({{ site.baseurl }}{{ page.url | append: page.example3 }})

>**P.S.**  
>As this is primarily a [challenge](https://challenge.threesixtygiving.org/){:target="_blank"} submission it has not been optimised for heavy use, and includes some [known issues](https://github.com/suninthesky/slice-and-dice#known-issues){:target="_blank"}.
><!-- TODO: and will limit your searches to displaying the first 1,250 grants -->
>
>If you spot a bug or would like to request a feature, please [file an issue](https://github.com/suninthesky/slice-and-dice/issues){:target="_blank"}, or even better consider [contributing](https://github.com/suninthesky/slice-and-dice#contributing){:target="_blank"} a fix.
