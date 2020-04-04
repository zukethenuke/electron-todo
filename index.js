const path = require('path');
const electron = require('electron');
const { app, ipcMain } = electron;
const TimerTray = require('./app/timer_tray');
const MainWindow = require('./app/main_window');

let mainWindow;
let tray;

app.on('ready', () => {
    app.dock.hide();
    // Main Window
    mainWindow = new MainWindow(`file://${__dirname}/src/index.html`);

    // Tray Icon
    const iconName = process.platform === 'win32' ? 'windows-icon@2x.png' : 'iconTemplate@2x.png';
    const iconPath = path.join(__dirname, `./src/assets/${iconName}`);
    tray = new TimerTray(iconPath, mainWindow); // Requires path to icon
})

ipcMain.on('update-timer', (event, timeLeft) => {
    tray.setTitle(timeLeft);
})
