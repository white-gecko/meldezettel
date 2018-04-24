export default{

  formdataToInsertQuery: function (doc) {
    return 'insert_formdata_query'
  },

  formdataToDeleteQuery: function (doc) {
    return 'delete_formdata_query'
  },

  dashboardQuery: function (filter) {
    return 'dashboard_query'
  },

  formQuery: function (id) {
    return 'form_query'
  },

  operationsQuery: function () {
    return 'operations_query'
  },

  operationToInsertQuery: function (newOperation) {
    return 'new_operation_query'
  }
}
