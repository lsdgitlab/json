const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const HtmlWebpackPartialsPlugin = require('html-webpack-partials-plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const CopyPlugin = require("copy-webpack-plugin");
const webpack = require("webpack");
const devMode = process.env.NODE_ENV !== "production";

// all pages name that require in the project
const htmlPageNames = [
    {
        pageName: 'index.html',
        title: 'Lsdigital gallery'
    }, 
    {
        pageName: 'brand.html',
        title: 'Lsdigital gallery'
    }, 
    {
        pageName: 'category.html',
        title: 'Lsdigital gallery'
    }, 
    {
        pageName: 'test.html',
        title: 'Test'
    },
    {
        pageName: 'wikipedia.html',
        title: 'Wikipedia'
    }, 
];
// get the html page name
let htmlFileName = htmlPageNames.map(htmlPage=> htmlPage.pageName);

// convert the page into array to concatinate in pulgin
let multipleHtmlPlugins = htmlPageNames.map(name => {
    return new HtmlWebpackPlugin({
        filename: `${name.pageName}`, 
        title: name.title,
        template: path.resolve(__dirname, `src/${name.pageName}`),
    })
});
module.exports = (env, argv) => ({
    entry:{
        // entery for main file
        main:path.resolve(__dirname, 'src/js/index.ts'),
    },
    output:{
        // output for dist folder
        path: path.resolve(__dirname, 'dist'),
        filename:'./js/[name].[contenthash].js',
        clean:true,
    },
    // if source map of js file 
    devtool: 'source-map',
    // devserver is use to run html pages on browser we can also set the port
    devServer:{
        static: path.resolve(__dirname, 'src'),
        port: 9001,
        open: true,
        hot: true,
    },
    // loaders
    module:{
        rules:[
            //css 
            {
                test: /\.(sa|sc|c)ss$/,
                use: [MiniCssExtractPlugin.loader,"css-loader","sass-loader"], 
            },
            //images 
            {
                test: /\.(svg|png|jpg|webp|ico|jpeg)$/,
                type: 'asset/resource',
                
            },
            // js babel for convert ts file to js file
            {   
                test: /\.m?js$/,
                exclude: /(node_modules|bower_components)/,
                use: {
                    loader: 'babel-loader',
                    options: {
                        presets: ['@babel/preset-env'],
                        only: ["./src"],
                        // name: '[name][ext]',
                        // outputPath :'./js/'
                    }
                }

            }
            
        ]
    },
   
    //  // Plugins
    plugins:[
        // this is use for path of the file for css path in dev and prod
        new MiniCssExtractPlugin({
            filename: devMode ? "./css/scss/[name].[contenthash].css" : "[name].css",
        }),

        // HtmlWebpackPartialsPlugin is use for intgrate componet in html pages  
        // new HtmlWebpackPartialsPlugin({
        //     path:path.join(__dirname,'./src/header.html'),
        //     location:'header',
        //     template_filename: htmlFileName
        // }),

        // HtmlWebpackPartialsPlugin is use for intgrate componet in html pages  
        new HtmlWebpackPartialsPlugin({
            path:path.join(__dirname,'./src/footer.html'),
            location:'footer',
            template_filename: htmlFileName
        }),
        // to use jquery globle in project 
        new webpack.ProvidePlugin({
            $: "jquery",
            jQuery: "jquery",
            'window.jQuery': 'jquery'
        }),
       // copy asset of dist in prod
        new CopyPlugin({
            patterns: [
                { from: './src/assets', to: './assets' },
                { from: "./src/img", to: "./img" },
                { from: "./src/video", to: "./video" },
                { from: "./src/favicon.ico", to: "./favicon.ico" },
            ],
          })
      
    //    add  the html pages in plugin
    ].concat(multipleHtmlPlugins)
})