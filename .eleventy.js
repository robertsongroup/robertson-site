module.exports = function(eleventyConfig) {
  eleventyConfig.addPassthroughCopy("admin");
  // robots.txt was never reaching _site, so it 404'd in production. Sitemap is
  // generated from sitemap.liquid so it can't go stale. (2026-07-31)
  eleventyConfig.addPassthroughCopy("robots.txt");
  eleventyConfig.addPassthroughCopy("images");
  eleventyConfig.addPassthroughCopy({"site-assets": "."});
  eleventyConfig.addPassthroughCopy("styles.css");
  eleventyConfig.addPassthroughCopy("script.js");

  eleventyConfig.addFilter("readableDate", function(d){
    return new Date(d).toLocaleDateString("en-US",{year:"numeric",month:"long",day:"numeric",timeZone:"UTC"});
  });

  // ISO 8601 for schema.org structured data and sitemap lastmod.
  eleventyConfig.addFilter("isoDate", function(d){
    return new Date(d).toISOString();
  });

  eleventyConfig.addCollection("posts", function(collectionApi) {
    return collectionApi.getFilteredByGlob("posts/*.md").reverse();
  });

  return {
    dir: { input: ".", output: "_site", includes: "_includes" }
  };
};
