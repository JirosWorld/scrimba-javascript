const path = require("path");

module.exports = {
   mode: "development", // change this to production before doing the final build
   entry: "./index.js", //This property defines where the application starts
   //This property defines the file path and the file name which will be used for deploying the bundled file
   output: {
      path: path.resolve( __dirname, "public" ),
      filename: "main.js"
   },
   target: "node",
   devServer: {
      port: "8888",
      contentBase: ["./public"],
      open: true
   },
   resolve: {
      extensions: [".js", ". jsx", ". json"]
   },
   // Setup loaders
   module: {
      rules: [{
         test: /\.(js|jsx)$/,
         exclude: / node_modules /,
         use: {
            loader: "babel-loader"
         }
      }]
   }
   // Setup plugin here to use a HTML file for serving bundled js files
}
