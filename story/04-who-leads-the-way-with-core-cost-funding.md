---
layout: story
title:  04. Who leads the way with core cost funding?
description: Over the past 5 years Esmée Fairbairn Foundation has been the most prolific supporter of "core costs" grants, followed by .The Tudor Trust.
permalink: /tour/04-who-leads-the-way-with-core-cost-funding
query: http://grantnav.threesixtygiving.org/search?json_query=%7B%22query%22%3A+%7B%22bool%22%3A+%7B%22filter%22%3A+%5B%7B%22bool%22%3A+%7B%22should%22%3A+%5B%5D%7D%7D%2C+%7B%22bool%22%3A+%7B%22should%22%3A+%5B%5D%7D%7D%2C+%7B%22bool%22%3A+%7B%22should%22%3A+%5B%5D%2C+%22must%22%3A+%7B%7D%7D%7D%2C+%7B%22bool%22%3A+%7B%22should%22%3A+%7B%22range%22%3A+%7B%22amountAwarded%22%3A+%7B%7D%7D%7D%2C+%22must%22%3A+%7B%7D%7D%7D%2C+%7B%22bool%22%3A+%7B%22should%22%3A+%5B%5D%7D%7D%2C+%7B%22bool%22%3A+%7B%22should%22%3A+%5B%5D%7D%7D%2C+%7B%22bool%22%3A+%7B%22should%22%3A+%5B%5D%7D%7D%2C+%7B%22bool%22%3A+%7B%22should%22%3A+%5B%5D%7D%7D%5D%2C+%22must%22%3A+%7B%22query_string%22%3A+%7B%22query%22%3A+%22%5C%22core+costs%5C%22+AND+awardDate%3A%5B2013-01-01+TO+2018-12-31%5D+-gatsby%22%2C+%22default_field%22%3A+%22_all%22%7D%7D%7D%7D%2C+%22sort%22%3A+%7B%22_score%22%3A+%7B%22order%22%3A+%22desc%22%7D%7D%2C+%22aggs%22%3A+%7B%22currency%22%3A+%7B%22terms%22%3A+%7B%22field%22%3A+%22currency%22%2C+%22size%22%3A+3%7D%7D%2C+%22recipientRegionName%22%3A+%7B%22terms%22%3A+%7B%22field%22%3A+%22recipientRegionName%22%2C+%22size%22%3A+3%7D%7D%2C+%22recipientDistrictName%22%3A+%7B%22terms%22%3A+%7B%22field%22%3A+%22recipientDistrictName%22%2C+%22size%22%3A+3%7D%7D%2C+%22fundingOrganization%22%3A+%7B%22terms%22%3A+%7B%22field%22%3A+%22fundingOrganization.id_and_name%22%2C+%22size%22%3A+3%7D%7D%2C+%22recipientOrganization%22%3A+%7B%22terms%22%3A+%7B%22field%22%3A+%22recipientOrganization.id_and_name%22%2C+%22size%22%3A+3%7D%7D%7D%2C+%22extra_context%22%3A+%7B%22awardYear_facet_size%22%3A+50%2C+%22amountAwardedFixed_facet_size%22%3A+3%7D%7D
slice: funder
prev: /tour/03-a-decade-of-grant-funding-around-migration
next: /tour/05-funding-core-costs-in-the-youth-sector
---

### Approach-based theme

A search for the past 5 years of [core cost]({{ page.query }}){:target="_blank"} funding (which excludes Gatsby Charitable Foundation) shows that [Esmée Fairbairn Foundation](https://www.esmeefairbairn.org.uk/){:target="_blank"} has been the most prolific supporter of "core costs", followed by [The Tudor Trust](https://tudortrust.org.uk/){:target="_blank"}.

[**Slicing** by Year]({{ page.url | append: "?slice=year" }}), we see the volume of "core costs" funding has remained reasonably consistent throughout the years.

For the [last example]({{ page.next }}), we'll bring the different types of funding theme we've explored together, by looking at the composite theme of "core costs + youth"...
