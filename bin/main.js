import {app} from 'electron';
import createWindow from './webview';

app.whenReady().then(createWindow);