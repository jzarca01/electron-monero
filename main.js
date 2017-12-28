const menubar = require('menubar')

const mb = menubar({
  index: 'http://savory-paste.surge.sh/',
  icon: './assets/icon.png'
})

mb.on('ready', function ready () {
  console.log('app is ready')
})

mb.on('after-close', function () {
  if (process.platform !== 'darwin') {
    mb.quit()
  }
})
