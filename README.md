# va

![ci](https://circleci.com/gh/residential/va.svg?style=shield&circle-token=7e435a9a4d8e8d254f5aa05b332f66bc91a773f7)
![dependencies](https://david-dm.org/residential/va.svg)
![devDependencies](https://david-dm.org/residential/va/dev-status.svg)

Reactive patterns for visualizing audio streams.

## Development

### Setting up an input source

To source audio from an arbitrary stream, we'll need to update the browser's configuration to properly route sound.

The simplest way of doing this with Chrome on MacOS relies on using [Soundflower](https://github.com/mattingalls/Soundflower/releases/tag/2.0b2). To start, install the 2.0b2 version (required if running on El Capitan).

Then, proceed to follow the steps as demonstrated below.

![](http://f.cl.ly/items/273a3n443V0j1N0s1P3Z/routing-setup.gif)
