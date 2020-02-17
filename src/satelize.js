const path = require('path');
const mmdbreader = require('maxmind-db-reader');

function Satelize() {
    this.init();
}

Satelize.prototype.init = () => {
    this.db = mmdbreader.openSync(path.join(__dirname,'/DB/GeoLite2-City.mmdb'));
    this.initialized = true;
};

Satelize.prototype.satelize = (options, next) => {
    if (!this.initialized) {
        return next(new Error('db not loaded yet'));
    }

    var data = this.db.getGeoDataSync(options.ip);
    
    if (data) {
        if (!data.country) {
            data.country = {
                iso_code: null,
                names: null
            }
        }

        return next(null, {
            ip: options.ip,
            continent_code: data.continent.code,
            continent: data.continent.names,
            country_code: data.country.iso_code,
            country: data.country.names,
            latitude: data.location.latitude,
            longitude: data.location.longitude,
            timezone : data.location.time_zone
        });
    }

    return next(null, null);
};

module.exports = new Satelize();
