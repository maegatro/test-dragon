const withSass = require("@zeit/next-sass");
module.exports = withSass({
  env: {
    MONGO_URI:
      "mongodb+srv://dragon:cc12finalproject@cluster0-dxrge.mongodb.net/test?retryWrites=true&w=majority",
  },
});
