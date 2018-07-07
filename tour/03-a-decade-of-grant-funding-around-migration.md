---
layout: tour
title:  03. A decade of grant funding around migration
description: Over the last decade the Big Lottery Fund appears consistently throughout the years, with the largest volume of grants being towards the funding theme of migration being awarded in 2016. Strangely however, their funding to this theme all but disappears in 2014.
permalink: /tour/03-a-decade-of-grant-funding-around-migration
query: http://grantnav.threesixtygiving.org/search?json_query=%7B%22query%22%3A+%7B%22bool%22%3A+%7B%22filter%22%3A+%5B%7B%22bool%22%3A+%7B%22should%22%3A+%5B%5D%7D%7D%2C+%7B%22bool%22%3A+%7B%22should%22%3A+%5B%5D%7D%7D%2C+%7B%22bool%22%3A+%7B%22should%22%3A+%5B%5D%2C+%22must%22%3A+%7B%7D%7D%7D%2C+%7B%22bool%22%3A+%7B%22should%22%3A+%7B%22range%22%3A+%7B%22amountAwarded%22%3A+%7B%7D%7D%7D%2C+%22must%22%3A+%7B%7D%7D%7D%2C+%7B%22bool%22%3A+%7B%22should%22%3A+%5B%5D%7D%7D%2C+%7B%22bool%22%3A+%7B%22should%22%3A+%5B%5D%7D%7D%2C+%7B%22bool%22%3A+%7B%22should%22%3A+%5B%5D%7D%7D%2C+%7B%22bool%22%3A+%7B%22should%22%3A+%5B%5D%7D%7D%5D%2C+%22must%22%3A+%7B%22query_string%22%3A+%7B%22query%22%3A+%22immigration+OR+asylum+AND+awardDate%3A%5B2008-01-01+TO+2018-12-31%5D+%22%2C+%22default_field%22%3A+%22_all%22%7D%7D%7D%7D%2C+%22sort%22%3A+%7B%22_score%22%3A+%7B%22order%22%3A+%22desc%22%7D%7D%2C+%22aggs%22%3A+%7B%22currency%22%3A+%7B%22terms%22%3A+%7B%22field%22%3A+%22currency%22%2C+%22size%22%3A+3%7D%7D%2C+%22recipientRegionName%22%3A+%7B%22terms%22%3A+%7B%22field%22%3A+%22recipientRegionName%22%2C+%22size%22%3A+50%7D%7D%2C+%22recipientDistrictName%22%3A+%7B%22terms%22%3A+%7B%22field%22%3A+%22recipientDistrictName%22%2C+%22size%22%3A+3%7D%7D%2C+%22fundingOrganization%22%3A+%7B%22terms%22%3A+%7B%22field%22%3A+%22fundingOrganization.id_and_name%22%2C+%22size%22%3A+3%7D%7D%2C+%22recipientOrganization%22%3A+%7B%22terms%22%3A+%7B%22field%22%3A+%22recipientOrganization.id_and_name%22%2C+%22size%22%3A+3%7D%7D%7D%2C+%22extra_context%22%3A+%7B%22awardYear_facet_size%22%3A+50%2C+%22amountAwardedFixed_facet_size%22%3A+3%7D%7D
slice: year
prev: /tour/02-an-evolving-definition-of-tech-for-good-funding
next: /tour/04-who-leads-the-way-with-core-cost-funding
---

### Issue-based theme

This **slice** shows the last decade of grants for the issue-based funding theme of [migration]({{ page.query }}){:target="_blank"}.

Discounting 2018 the [Big Lottery Fund](https://www.biglotteryfund.org.uk/){:target="_blank"} appears consistently throughout the years, with the largest volume of grants being awarded in 2016. Strangely however, their funding to this theme all but disappears in 2014.

Going beyond conventional funding themes around issue or sector, [next]({{ site.baseurl }}{{ page.next }}) we'll see if **slicing** the data by *Funder* helps us identify leading supporters "core cost" funding...
