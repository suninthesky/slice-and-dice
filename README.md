# Slice and Dice

## About

This tool was created in my spare time as a submission to the [360Giving Data Visualisation Challenge](https://challenge.threesixtygiving.org/), in answer to the question "_Who has funded what themes throughout the years_".

It allows you to take the URL of a search on [GrantNav](http://grantnav.threesixtygiving.org/), and visually **slice** it up by dimensions such as Year or Location.

## Local setup

1. [Install](https://www.npmjs.com/get-npm) `npm`
2. [Install](https://jekyllrb.com/docs/installation/) Jekyll

## Development

`npm start` will start Jekyll development server and Webpack in --watch mode.

## Deployment

Use `npm run build` to generate static files and push to `master` branch.

## Known issues

- **CORS** - In order to handle [CORS](https://developer.mozilla.org/en-US/docs/Web/HTTP/CORS) client-side a [proxy server](http://slice-and-dice.herokuapp.com/) is being used to set the `Access-Control-Allow-Origin: *` response HTTP header from GrantNav (via the proxy).
- **Label overlapping** - A [crude approach](https://github.com/suninthesky/slice-and-dice/blob/904309e9eb2544fc45253f065919ae0e91a470d9/javascript/modules/chart.js#L97) is being used to avoid chart labels overlapping.
- **'Slice by' lost on resize** - Resizing the chart reverts the `slice` param to the one set on initial page load.

## Contributing

First of all, **thank you** for your help!

Be sure to check out the projects open [issues](https://github.com/suninthesky/slice-and-dice/issues) to see where help is needed.

### Bugs

If you've spotted a bug please file an [issue](https://github.com/suninthesky/slice-and-dice/issues). Even better, submit a [pull request](https://github.com/suninthesky/slice-and-dice/pulls) (details below) with a patch.

### Features
If you want a feature added, the best way to get it done is to submit a pull request that implements it...

1. Fork the repo
2. Create your feature branch (`git checkout -b my-new-feature`)
3. Commit your changes (`git commit -am 'Add some feature'`)
4. Push to the branch (`git push origin my-new-feature`)
5. Create a [pull request](https://github.com/suninthesky/slice-and-dice/pulls)

Alternatively you can submit an [issue](https://github.com/suninthesky/slice-and-dice/issues) describing the feature.

## License

Slice and Dice is released under the [MIT License](https://opensource.org/licenses/MIT).
