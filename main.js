const { app, BrowserWindow } = require('electron')

const createWindow = () => {
    const win = new BrowserWindow({
      width: 1300,
      height: 700
    })
  
    win.loadFile('index.html')
}

app.whenReady().then(() => {
    createWindow()
})