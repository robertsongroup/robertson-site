module.exports = function(eleventyConfig) {
  eleventyConfig.addPassthroughCopy("admin");
  eleventyConfig.addPassthroughCopy("images");
  eleventyConfig.addPassthroughCopy({"site-assets": "."});
  eleventyConfig.addPassthroughCopy("styles.css");
  eleventyConfig.addPassthroughCopy("script.js");

  eleventyConfig.addFilter("readableDate", function(d){
    return new Date(d).toLocaleDateString("en-US",{year:"numeric",month:"long",day:"numeric",timeZone:"UTC"});
  });

  eleventyConfig.addCollection("posts", function(collectionApi) {
    return collectionApi.getFilteredByGlob("posts/*.md").reverse();
  });

  return {
    dir: { input: ".", output: "_site", includes: "_includes" }
  };
};
