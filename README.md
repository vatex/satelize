**Satelize** NodeJS module to retrieve user location information based on IP, combined with expressjs for instance make life easier to get some stuff as latitude/longitude of your visitor.

## Install

~~~
npm install satelize-lts
~~~

## Usage

```javascript
const satelize = require('satelize-lts');

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
