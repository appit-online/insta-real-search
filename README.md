# [insta-real-search: Node.js](https://github.com/appit-online/insta-real-search)

Search & Download reels, posts,... on Instagram without API key or Cookie

**Table of contents:**


* [Quickstart](#quickstart)

  * [Installing the library](#installing-the-library)
  * [Using the library](#using-the-library)
* [License](#license)

## Quickstart

### Installing the library

```bash
npm install insta-real-search --save
```

### Using the library

```javascript
import * as insta from 'insta-real-search';

/**
 * Given a search query, searching on insta
 * @param {string} search value (instaId).
 */
const videos = await insta.search('instaId');
const videos = await insta.search('https://www.instagram.com/p/instaId');
console.log(videos);

{
  "resultsCount": 7,
   "urls": [
    "https://scontent-muc2-1.cdninstagram.com/v...",
    ....
  ],
  "username": "appit-online",
  "name": "AppIT",
  "isVerified": false,
  "isPrivate": false,
  "commentsDisabled": false,
  "likeCounterDisabled": false,
  "location": "Mountains Spot",
  "followers": 15962,
  "likes": 4120,
  "isAd": false,
  "caption": "#sudtirol #dolomiti....",
  "createdAt": "1738502812",
  "media": [
    {
      "type": "image",
      "dimensions": {
        "height": 1350,
        "width": 1080
      },
      "url": "https://scontent-muc2-1.cdninstagram.com/v..."
    },...
  ]
}

```

## License

Apache Version 2.0

See [LICENSE](https://github.com/appit-online/insta-real-search/blob/master/LICENSE)
