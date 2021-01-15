import {BrowserWindow} from 'electron';
const path = require('path');

let mainWindow;

export default function createWindow() {
    mainWindow = new BrowserWindow({
        width: 1150,
        height: 850,
        center: true,
        show: false,
        title: 'bip Desktop',
        icon: __dirname + '/bin/favicon.ico'
    });

    mainWindow.setMenu(null);

    mainWindow.loadURL('https://web.bip.com');

    mainWindow.webContents.on("did-finish-load", () => {
        mainWindow.show();
        //mainWindow.setTitle("bip"); use default 'BiP Web'
    });

    //mainWindow.webContents.openDevTools();
    return mainWindow
}