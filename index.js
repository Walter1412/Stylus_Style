const path = require('path')

exports.resources = [
  './styles/_base.styl',
  './styles/_functions.styl',
  './styles/_mixins.styl',
  './styles/_reboot.styl',
  './styles/_transition.styl',
  './styles/_variables.styl',
].map(file => path.resolve(__dirname, file))