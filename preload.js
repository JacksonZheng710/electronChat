
const { ipcRenderer, contextBridge } = require('electron');


// window.sendNotification = (message) => {
//   console.log(window.notSecure);
//   ipcRenderer.send('notify', message);
// }
contextBridge.exposeInMainWorld('electron', {
    notificationApi: {
      sendNotification(message) {
        ipcRenderer.send('notify', message);
      }
    },
    batteryApi: {
  
    },
    fileApi: {
  
    }
  })