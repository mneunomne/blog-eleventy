const syntaxHighlight = require("@11ty/eleventy-plugin-syntaxhighlight"),
      markdownIt = require('markdown-it');
module.exports = eleventyConfig => {
  eleventyConfig.addPlugin(syntaxHighlight);
  eleventyConfig.addPassthroughCopy('favicon.ico');
  eleventyConfig.addPassthroughCopy('assets');
  const options = {
    html: true,
    breaks: true,
    linkify: false
  };
  eleventyConfig.setLibrary("md", markdownIt(options))
  
  eleventyConfig.addCollection("tagList", function(collection) {
    let tagSet = new Set();
    collection.getAll().forEach(function(item) {
      if( "tags" in item.data ) {
        let tags = item.data.tags;
        tags = tags.filter(function(item) {
          switch(item) {
            case "all":
            case "nav":
            case "post":
            case "posts":
              return false;
          }
          return true;
        });
        for (const tag of tags) {
          tagSet.add(tag);
        }
      }
    });
    // returning an array in addCollection works in Eleventy 0.5.3
    return [...tagSet];
  });

  return {
    // Use liquid in html templates
    htmlTemplateEngine: "liquid",
    pathPrefix: "/blog-eleventy/",
    dir: {
      output: "docs"
    }
  };
};
