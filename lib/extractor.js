"use strict";
exports.__esModule = true;
exports.Extractor = void 0;
var cheerio = require("cheerio");
var Extractor = /** @class */ (function () {
    function Extractor(titleSelector, linksSelector) {
        this.titleSelector = titleSelector;
        this.linksSelector = linksSelector;
    }
    Extractor.prototype.extract = function (content) {
        var parser = cheerio.load(content);
        var parsedLinks = parser(this.linksSelector);
        var parsedTitles = parser(this.titleSelector);
        var links = [];
        parsedLinks.each(function (i, elem) {
            var link = parser(this).attr("href");
            links.push(link);
        });
        var titles = [];
        parsedTitles.each(function (i, elem) {
            titles.push(parser(this).text());
        });
        return {
            titles: titles,
            links: links
        };
    };
    return Extractor;
}());
exports.Extractor = Extractor;
