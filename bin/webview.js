import {BrowserWindow} from 'electron';

export default function createWindow() {
    let mainWindow = new BrowserWindow({
        width: 800,
        height: 600,
        backgroundColor: '#f2f2f2',
        center: true,
        show: false,
        title: 'bip Desktop', // not valid
        icon: __dirname + '/bin/favicon.ico'
    });

    mainWindow.setMenu(null);
    mainWindow.maximize();

    mainWindow.loadURL('https://web.bip.com');

    mainWindow.webContents.on('did-finish-load', () => {
        mainWindow.show();
        mainWindow.setBackgroundColor('#f2f2f2');
        //mainWindow.setTitle("bip"); use default 'BiP Web'
    });

    //mainWindow.webContents.openDevTools(); for development
    return mainWindow
}