const electron = require('electron');
const { BrowserWindow } = electron;

class MainWindow extends BrowserWindow {
    constructor(url) {
        super({
            height: 500,
            width: 250,
            show: false, // don't show on load
            frame: false, // hide window top bar
            resizable: false,
            webPreferences: { backgroundThrottling: false}
        });
        this.loadURL(url);
        this.on('blur', () => this.hide());
    }
}

module.exports = MainWindow;
