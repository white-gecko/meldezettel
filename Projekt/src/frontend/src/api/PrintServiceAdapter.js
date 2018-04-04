import axios from 'axios'

/**
 * Communication with print service
 */
export const printservice = {
  url: 'http://127.0.0.1:5001/',
//url: 'http://192.168.2.101:5001/',
  sendData: function (formdataString) {
    return axios.request({
      method: 'post',
      url: this.url,
      data: 'data=' + encodeURIComponent(formdataString),
      responseType: 'arraybuffer'
    })
  }
}
