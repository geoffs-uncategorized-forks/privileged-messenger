
// This is just a fake webpack config in order to get
// WebStorm to player nicer

import 'node_modules/bulma/css/bulma.css'
const path = require('path')

module.exports = {
  resolve: {
    extensions: ['.js', '.json', '.vue', '.ts'],
    root: path.resolve(__dirname),
    alias: {
      '@': path.resolve(__dirname),
      '~': path.resolve(__dirname),
    },
  },
}
