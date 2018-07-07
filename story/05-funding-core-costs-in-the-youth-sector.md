---
layout: story
title:  05. Funding core costs in the youth sector
description: Esmée Fairbairn Foundation who give the most "core cost" grant funding, have been steadily providing infrastructure support to the "youth" sector since 2009.
permalink: /tour/05-funding-core-costs-in-the-youth-sector
query: http://grantnav.threesixtygiving.org/search?json_query=%7B%22query%22%3A+%7B%22bool%22%3A+%7B%22filter%22%3A+%5B%7B%22bool%22%3A+%7B%22should%22%3A+%5B%5D%7D%7D%2C+%7B%22bool%22%3A+%7B%22should%22%3A+%5B%5D%7D%7D%2C+%7B%22bool%22%3A+%7B%22should%22%3A+%5B%5D%2C+%22must%22%3A+%7B%7D%7D%7D%2C+%7B%22bool%22%3A+%7B%22should%22%3A+%7B%22range%22%3A+%7B%22amountAwarded%22%3A+%7B%7D%7D%7D%2C+%22must%22%3A+%7B%7D%7D%7D%2C+%7B%22bool%22%3A+%7B%22should%22%3A+%5B%5D%7D%7D%2C+%7B%22bool%22%3A+%7B%22should%22%3A+%5B%5D%7D%7D%2C+%7B%22bool%22%3A+%7B%22should%22%3A+%5B%5D%7D%7D%2C+%7B%22bool%22%3A+%7B%22should%22%3A+%5B%5D%7D%7D%5D%2C+%22must%22%3A+%7B%22query_string%22%3A+%7B%22query%22%3A+%22%5C%22core+costs%5C%22+AND+children+and+young+people%22%2C+%22default_field%22%3A+%22_all%22%7D%7D%7D%7D%2C+%22sort%22%3A+%7B%22_score%22%3A+%7B%22order%22%3A+%22desc%22%7D%7D%2C+%22aggs%22%3A+%7B%22currency%22%3A+%7B%22terms%22%3A+%7B%22field%22%3A+%22currency%22%2C+%22size%22%3A+3%7D%7D%2C+%22recipientRegionName%22%3A+%7B%22terms%22%3A+%7B%22field%22%3A+%22recipientRegionName%22%2C+%22size%22%3A+50%7D%7D%2C+%22recipientDistrictName%22%3A+%7B%22terms%22%3A+%7B%22field%22%3A+%22recipientDistrictName%22%2C+%22size%22%3A+3%7D%7D%2C+%22fundingOrganization%22%3A+%7B%22terms%22%3A+%7B%22field%22%3A+%22fundingOrganization.id_and_name%22%2C+%22size%22%3A+3%7D%7D%2C+%22recipientOrganization%22%3A+%7B%22terms%22%3A+%7B%22field%22%3A+%22recipientOrganization.id_and_name%22%2C+%22size%22%3A+3%7D%7D%7D%2C+%22extra_context%22%3A+%7B%22awardYear_facet_size%22%3A+50%2C+%22amountAwardedFixed_facet_size%22%3A+3%7D%7D
slice: year
prev: /tour/04-who-leads-the-way-with-core-cost-funding
next: /slice-and-dice
---

### Composite theme

How might we categorise work that uses the arts to ease mental health conditions in ex-servicemen and women?

You could legitimately say it relates to an "arts" funding theme, as much as it does to "mental health". This is where composite funding themes like "arts + mental health" or "tech + abuse" help us describe specialist or overlapping areas of funding.

For this last **slice** of [core costs + youth]({{ page.query }}){:target="_blank"} we can see that as expected [Esmée Fairbairn Foundation](https://www.esmeefairbairn.org.uk/){:target="_blank"} who give the most "core cost" funding, have been steadily providing infrastructure support to the "youth" sector since 2009.

>**Pop quiz**  
>Can you remember which funders have shown up in all of the ways we've **sliced** funding themes?
>
>Tweet answers [@360Giving](https://twitter.com/360Giving){:target="_blank"}

Now that you've seen a few ways to use the tool, it's over to you to [give it a try]({{ page.next }})...
