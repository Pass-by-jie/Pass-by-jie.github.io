const path = require('path')
const  hrmlWebpackPlugin = require('html-webpack-plugin')
// 在 vue-loader@15之后需要导入 VueLoaderPlugin
const VueLoaderPlugin = require('vue-loader/lib/plugin')
// 导入在内存中生成 HTML 页面的插件
// 只要是插件，都一定要放到 plugins 节点中去
// 这个页面的两个作用：
// 1、自动在内存中根据指定页面生成一个内存的页面
// 2、自动，把打包好的 bundle.js 追加到页面中去


// 这个配置文件，起始就是一个 JS 文件，通过 Node 中的模板操作，向外暴露了一个配置对象
module.exports = {
  // 入口
  entry: {
    main: path.join(__dirname, './src/main.js') // 表示，要使用 webpack 打包哪个文件
  },
  // 出口
  output: { // 输出文件相关的配置
    filename: 'bundle.js', // 这是指定输出的文件的名称
    path: path.join(__dirname, './dist') // 制定打包好的文件，输出到哪个目录中去
  },
  plugins:[
    new hrmlWebpackPlugin({ // 创建一个在内存中生成 HTML 页面的插件
      template:path.join(__dirname,'./index.html'),//指定模板页面，将来会根据指定的页面路径去生成内存中的页面
      filename:'index.html' // 指定生成的页面的名称
    }),
    new VueLoaderPlugin() // 创建VueLoaderPlugin方法
  ],
  module:{ // 这个节点，用于配置所有第三方模块加载器
    rules:[ // 所有第三方模板的匹配规则
      { test: /\.css$/, use: ['style-loader','css-loader'] }, // 配置处理 .css 文件的第三方 loader 规则
      { test: /\.less$/, use: ['style-loader','css-loader','less-loader'] }, //配置处理 .less文件的第三方的 loader 规则
      { test: /\.scss$/, use: ['style-loader','css-loader','sass-loader'] }, //配置处理 .scss文件的第三方的 loader 规则
      { test: /\.(jpg|png|gif|bmp|jpeg)$/, use:'url-loader?limit=7631&name=[hash:8][name].[ext]' }, // 处理图片路径的 loader
      // limit 给定的值，是图片的大小，单位是 byte，如果我们引用滴滴图片，大于或等于给定的 limit值，则不会被转为 base64的字符串
      // 如果 图片小于给定的 limit 值，则会转化为 base64 的字符串 
      { test: /\.(ttf|eot|svg|woff|woff2)$/, use: 'url-loader' }, // 处理字体文件的 loader
      { test: /\.js$/, use: 'babel-loader', exclude: /node_modules/ }, // 配置 babel 来转化高级的ES语法
      { test: /\.vue$/, use:'vue-loader' }// 处理 .vue 文件的 loader
    ]
  },
  resolve:{
    alias:{ // 修改 vue 被导入时候包的路径
      // "vue$":"vue/dist/vue.js"
    }
  }
}

