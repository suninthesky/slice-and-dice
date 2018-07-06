# Slice and Dice

## About

This tool was created in my spare time as a submission to the [360Giving Data Visualisation Challenge](https://challenge.threesixtygiving.org/), in answer to the question "_Who has funded what themes throughout the years_".

It allows you to take the URL of a search on [GrantNav](http://grantnav.threesixtygiving.org/), and visually **slice** it up by dimensions such as Year or Location.

## Setup

[Instructions](https://jekyllrb.com/docs/installation/)

## Development

`jekyll s` to run development server.

`npm run dev` to bundle JavaScript and watch for changes.

## Deployment

<!-- TODO: -->

## Known issues

- **CORS** - In order to handle [CORS](https://developer.mozilla.org/en-US/docs/Web/HTTP/CORS) client-side a [proxy server](http://slice-and-dice.herokuapp.com/) is being used to set the `Access-Control-Allow-Origin: *` response HTTP header from GrantNav (via the proxy).
<!-- TODO: Add link -->
- **Label overlapping** - A [crude approach](#) is being used to avoid chart labels overlapping.
- **'Slice by' lost on resize** - Resizing the chart reverts the `slice` param to the one set on initial page load.

## Contributing

First of all, **thank you** for your help!

Be sure to check out the projects open [issues](#) to see where help is needed.

### Bugs

<!-- TODO: Add links -->
If you've spotted a bug please file an [issue](#). Even better, submit a [pull request](#) (details below) with a patch.

### Features
<!-- TODO: Add link -->
If you want a feature added, the best way to get it done is to submit a pull request that implements it...

<!-- TODO: Add links -->
1. [Fork](#) the repo
2. Create your feature branch (`git checkout -b my-new-feature`)
3. Commit your changes (`git commit -am 'Add some feature'`)
4. Push to the branch (`git push origin my-new-feature`)
5. Create a [pull request](#)

Alternatively you can submit an [issue](#) describing the feature.

## License

Slice and Dice is released under the [MIT License](https://opensource.org/licenses/MIT).
