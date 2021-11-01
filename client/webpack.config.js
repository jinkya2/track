const path = require('path');
const HtmlWebpackPlugin = require("html-webpack-plugin");
const Dotenv = require('dotenv-webpack');

module.exports = {
    entry: { index: path.resolve(__dirname, "source", "index.js") },
    output: {
        path: path.resolve(__dirname, "build")
      },
//      devServer:{
//        static: './build/index.js',
//        hot: true,
//      },
      // loaders
    module: {
        rules: [
            {
                test: /\.css$/, // /\.css$/, [SKIP: fnd how to combine]
                use: ["style-loader", "css-loader"]
              },
            {
            test: /\.scss$/, // /\.css$/, [SKIP: fnd how to combine]
            /*
            loading order matters (Right to Left), style loader is for 
            injecting CSS styles in page, if used later, actual css will 
            not load first.
            */
            use: ["style-loader", "css-loader", "sass-loader"]
          },
          {
            test: /\.?(js|jsx)$/,
            exclude: /node_modules/,
            use: {
              loader: "babel-loader",
              options: {
                presets: ['@babel/preset-env', '@babel/preset-react']
              }
            }
          },
          {
            test: /\.(png|svg|jpg|jpeg|gif)$/i,
            type: 'asset/resource',
          },
        ]
      },
      resolve: {
        extensions: ['.js', '.jsx']
      },
    plugins: [
      // inject javascript file in the HTML Page
      new HtmlWebpackPlugin({
        template: path.resolve(__dirname, "public", "index.html")
      }),
      new Dotenv({
        path: './.env', // Path to .env file (this is the default)
        safe: true, // load .env.example (defaults to "false" which does not use dotenv-safe)
      })
    ],
    mode: "development",
    optimization: {
        splitChunks: { chunks: "all" }
    },
}