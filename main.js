// process of creating javascript web scraper


//
const { app, BrowserWindow } = require('electron')
const path = require('path')
const https = require('https')


let mainWindow
function createWindow() {
  // create
  mainWindow = new BrowserWindow({
    width: 1220,
    height: 1000,
    webPreferences: {
      nodeIntegration: true,
      preload: path.join(__dirname, 'preload.js')
    }
  })


  //load frontend
  mainWindow.loadFile('index.html')
  mainWindow.setMenu(null)
  mainWindow.on('closed', () => {
    mainWindow = null
  })
}


app.on('ready', createWindow)
app.on('window-all-closed', function () {

  if (process.platform !== 'darwin') app.quit()
})

app.on('activate', function () {

  if (BrowserWindow.getAllWindows().length === 0) createWindow()
})

