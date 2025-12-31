module.exports = function(eleventyConfig) {
  // Copy assets folder directly to output
  eleventyConfig.addPassthroughCopy("assets");

  return {
    dir: {
      input: ".",
      output: "_site"
    }
  };
};
