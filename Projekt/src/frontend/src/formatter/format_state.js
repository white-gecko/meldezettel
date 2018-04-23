export default {
  format: function (state) {
    switch (state) {
      case 1:
        return "<span class='el-icon-edit-outline out stateTable'></span>"
      case 2:
        return "<span class='el-icon-circle-close out stateTable'></span>"
      case 3:
        return "<span class='el-icon-view out stateTable'></span>"
      case 4:
        return "<span class='el-icon-service out stateTable'></span>"
      case 5:
        return "<span class='el-icon-circle-check-outline out stateTable'></span>"
      case 6:
        return <span class='el-icon-circle-close-outline out stateTable'></span>
      case 7:
        return <span class='el-icon-circle-check out stateTable'></span>
      case 8:
        return <span class='el-icon-printer out stateTable'></span>
      case 9:
        return <span class='out stateTable'>&#9632;</span>
      case 11:
        return "<span class='el-icon-edit-outline in stateTable'></span>"
      case 12:
        return "<span class='el-icon-circle-close in stateTable'></span>"
      case 13:
        return "<span class='el-icon-tickets in stateTable'></span>"
      case 14:
        return <span class='el-icon-printer in stateTable'></span>
      case 15:
        return <span class='in stateTable'>&#9632;</span>
      default:
        // if this is reached, that means that there is an issue
        // in the whole state process => a warning is shown
        return <span class='el-icon-warning warn stateTable'></span>
    }
  }
}
