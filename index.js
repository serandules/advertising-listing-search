var dust = require('dust')();
var serand = require('serand');
var utils = require('utils');
var Advertisement = require('advertisement-service');
var list = require('advertisements-listing');

module.exports = function (sandbox, fn, options) {
    Advertisement.find({
        query: options,
        images: '288x162'
    }, function (err, advertisements) {
        if (err) {
            return fn(true, serand.none);
        }
        list(sandbox, fn, {
            advertisements: advertisements,
            size: 4
        });
    });
};
