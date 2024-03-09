const helloMessage = require('../messages/hello-message')

function sayMessage(message) {
  console.log(`"${message}"`)
}

sayMessage(helloMessage);

//!!START SILENT
module.exports = sayMessage;
//!!END
