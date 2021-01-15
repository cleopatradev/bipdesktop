import {BrowserWindow} from 'electron';

let mainWindow;

export default function createWindow() {
    mainWindow = new BrowserWindow({
        width: 1150,
        height: 850,
        center: true,
        show: false,
        title: 'bip Desktop',
        icon: __dirname + '/bin/viewer/cdn/favicon.ico'
    });

    mainWindow.loadURL('https://web.bip.com');

    mainWindow.webContents.on("did-finish-load", () => {
        mainWindow.show();
    });

    //mainWindow.webContents.openDevTools();
    return mainWindow
}