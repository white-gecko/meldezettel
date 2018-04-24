export const printservice = {
  sendData: function (formdataString) {
    return new Promise((resolve, reject) => {
      let obj = JSON.parse(formdataString)
      if (obj.mock === 'FLAWED') {
        reject(new Error('FAILED REQUEST'))
      } else {
        resolve('SUCCESS')
      }
    })
  }
}
