const HtmlWebpackPlugin = require("html-webpack-plugin");

function createPages(template, filename) {
  return new HtmlWebpackPlugin({
    template: template,
    filename: filename,
  });
}

const htmlPages = [
  createPages("./src/index.html", "./index.html"),
  createPages("./src/pages/catalog.html", "./pages/catalog.html"),
  createPages("./src/pages/tests.html", "./pages/tests.html"),
  createPages("./src/pages/trends.html", "./pages/trends.html"),
  createPages(
    "./src/pages/tests/test1.html",
    "./pages/tests/test1.html"
  ),
  createPages("./src/pages/tests/test1.html", "./pages/tests/test1.html"),
];

module.exports = htmlPages;
