const cheerio = require("cheerio");
const parseDomain = require("parse-domain");
const request = require("request-promise");

const getHostName = url => {
const urlParsed = parseDomain(url)
const domainAndTld = `${urlParsed.domain}.${urlParsed.tld}` 
    return urlParsed.subdomain ? `${urlParsed.subdomain}.${domainAndTld.tld}` : domainAndTld
}

const getDocumentData = async url => {
  const response = await request.get(url);
  const $ = cheerio.load(response);
  const canonicalURL = $('link[rel=canonical]').attr('href') || url;
  const description = $('meta[property="og:description"]').attr("content") || 
  $('meta[name:description"]').attr("content")


  return {
    title: $("title").text(),
    description,
    thumbnail: $('meta[property="og:image"]').attr("content"),
    source: getHostName(canonicalURL)
  };
};

module.exports = { getDocumentData }

