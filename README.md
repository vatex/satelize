**Satelize** NodeJS module to retrieve user location information based on IP, combined with expressjs for instance make life easier to get some stuff as latitude/longitude of your visitor.

Inspired and using http://www.telize.com/ service. ~~Free today~~.

As API is not free anymore, it uses a small dataset (provided by maxmind) to fetch information about IP requested, it won't work for all cases.

## Why ?

Because ecchymose in the nose. I needed something but on server side.

With expressjs for instance, you can get your request IP, then just need to use this library that will make the call to get user location data.

And it is done.

## Install

~~~
npm install satelize-lts
~~~

## Usage

```javascript
var satelize = require('satelize-lts');

// Example retrieve IP from request
// var ip = req.header('x-forwarded-for') || req.connection.remoteAddress;

// then satelize call

satelize.satelize({ip:'46.19.37.108'}, function(err, payload) {
  // if used with expressjs
  // res.send(payload);
  // res.json...
});
```

## Return

~~~ json
{
    "ip": "46.19.37.108",
    "continent_code": "EU",
    "continent": {
      "de": "Europa",
      "en": "Europe"
    },
    "country_code": "NL",
    "country": {
      "de": "Niederlande",
      "en": "Netherlands"
    },
    "latitude": 52.5,
    "longitude": 5.75,
    "timezone":"Europe/Amsterdam"
}
~~~

Details

- **ip** (Visitor IP address, or IP address specified as parameter)
- **country_code** (Two-letter ISO 3166-1 alpha-2 country code)
- **country** (Names of the country)
- **continent** (Names of the continent)
- **continent_code** (Two-letter continent code)
- **latitude** (Latitude)
- **longitude** (Longitude)
- **timezone** (Time Zone)

## Options

- **ip** : IPV4 better.
- **timeout** : default 1000ms

## License

MIT License
Copyright (c) 2017 Valeri Kuparashvili

Permission is hereby granted, free of charge, to any person obtaining a copy of this software and associated documentation files (the "Software"), to deal in the Software without restriction, including without limitation the rights to use, copy, modify, merge, publish, distribute, sublicense, and/or sell copies of the Software, and to permit persons to whom the Software is furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE SOFTWARE.
