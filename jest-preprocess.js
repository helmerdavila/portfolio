const babelOptions = {
  presets: ['babel-preset-gatsby', '@babel/preset-typescript'],
  plugins: ['@babel/plugin-transform-modules-commonjs'],
};
module.exports = require('babel-jest').default.createTransformer(babelOptions);
