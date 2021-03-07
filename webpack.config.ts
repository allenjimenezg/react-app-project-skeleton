import { resolve as _resolve } from 'path'
import HtmlWebpackPlugin from 'html-webpack-plugin'
import MiniCssExtractPlugin from 'mini-css-extract-plugin'

export const entry = './src/index.tsx'
export const target = 'web'
export const mode = 'development'
export const output = {
  path: _resolve(__dirname, 'dist'),
  filename: 'bundle.js',
  clean: true

}
export const resolve = {
  extensions: ['.js', '.jsx', '.json', '.ts', '.tsx']
}

export const module = {
  rules: [
    {
      test: /\.(ts|tsx)$/,
      loader: 'awesome-typescript-loader'
    },
    {
      enforce: 'pre',
      test: /\.js$/,
      loader: 'source-map-loader'
    },
    {
      test: /\.css$/,
      loader: 'css-loader'
    }
  ]
}
export const plugins = [
  new HtmlWebpackPlugin({
    template: _resolve(__dirname, 'public', 'index.html')
  }),
  new MiniCssExtractPlugin({
    filename: './src/yourfile.css'
  })
]
