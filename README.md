# semantic-release-sicon-store-publish-plugin
Publishes prepared git releases to the sicon app-store

## Installation

```
npm install semantic-release-sicon-store-publish-plugin
```

in your release.config.js:

``` js
module.exports = {
    plugins: [
        '@semantic-release/commit-analyzer', 
        '@semantic-release/release-notes-generator', 
        [
            'semantic-release-sicon-store-publish-plugin', {
                maturity: 'PUT YOUR MATURITY HERE'
            }
        ]
    ],
    preset: 'angular',
}
```

There are different ways to define maturity for an app:

* By branch name convention (master = stable, dev = alpha)
* By environment variables set by CI

If you only produce one maturity of apps, that is also no problem. The maturity only gives you an option to channel who gets which updates, and how stable they are.