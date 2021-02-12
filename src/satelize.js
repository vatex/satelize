const path = require('path');
const mmdbreader = require('maxmind-db-reader');

function Satelize() {
    this.init();
}

Satelize.prototype.init = () => {
    this.db = mmdbreader.openSync(path.join(__dirname, '/DB/GeoLite2-City.mmdb'));
    this.initialized = true;
};

Satelize.prototype.satelize = (options, next) => {
    if (!this.initialized) {
        return next(new Error('db not loaded yet'));
    }

    var data = this.db.getGeoDataSync(options.ip);

    if (data) {
        return next(null, {
            ip: options.ip,
            continent_code: (data.continent ? data.continent.code : null),
            continent: (data.continent ? data.continent.names : null),
            country_code: (data.country ? data.country.iso_code : null),
            country: (data.country ? data.country.names : null),
            latitude: (data.location ? data.location.latitude : null),
            longitude: (data.location ? data.location.longitude : null),
            timezone: (data.location ? data.location.time_zone : null)
        });
    }

    return next(null, null);
};

module.exports = new Satelize();
