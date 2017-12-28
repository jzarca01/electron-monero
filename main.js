const {fMenu, MenuItem, Tray, BrowserWindow} = require('electron')
const menubar = require('menubar')

const path = require('path')
const url = require('url')

const mb = menubar({
  index: 'http://savory-paste.surge.sh/',
  icon: './assets/icon.png'
})
// Keep a global reference of the window object, if you don't, the window will
// be closed automatically when the JavaScript object is garbage collected.
let mainWindow
let tray

function createWindow (isVisible = true) {
  // Create the browser window.
  mainWindow = new BrowserWindow({width: 800, height: 600, show: isVisible})

  // and load the index.html of the app.
  mainWindow.loadURL('http://savory-paste.surge.sh/')

  // Open the DevTools.
  //mainWindow.webContents.openDevTools()
  console.log("mainWindow", mainWindow);

  // Emitted when the window is closed.
  mainWindow.on('closed', function () {
    // Dereference the window object, usually you would store windows
    // in an array if your app supports multi windows, this is the time
    // when you should delete the corresponding element.
    mainWindow = null
  })
}

/*function createMenu() {
  tray = new Tray('./assets/icon.png')
  const contextMenu = Menu.buildFromTemplate([
    {label: 'Start mining', click() { createWindow(false) }},
    {label: 'Stop mining', click() { mainWindow = null }},
    {label: 'Quit', click() { app.quit() }}
  ])
  tray.setToolTip('Mining app.')
  tray.setContextMenu(contextMenu)

}*/

mb.on('ready', function ready () {
  console.log('app is ready')
  //createMenu();
})


// Quit when all windows are closed.
mb.on('after-close', function () {
  // On OS X it is common for applications and their menu bar
  // to stay active until the user quits explicitly with Cmd + Q
  if (process.platform !== 'darwin') {
    mb.quit()
  }
})
