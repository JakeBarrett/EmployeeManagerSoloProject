const functions = require('../source/functions')
const data = require('../source/data')


module.exports = {

    
    beforeEach : browser => {
        let employeePage=browser.page.employeePage()
        employeePage.navigate()
        },

        after: browser => {
        browser.end()
        },


"JAKE-56 Employee List" : browser => {functions.employeeListFunction(browser,data.page)},

"JAKE-57 Add Employee" : browser => {functions.addEmployeeFunction(browser,data.Employee1)},

"JAKE-62 Delete Button/Delete Employee" : browser => {functions.deleteEmployeeFunction(browser,data)},

"JAKE-58 Edit Employee Valid Data" : browser => {functions.editEmployeeValidFunction(browser,data.Employee2)},

"JAKE-59 Edit Employee Invalid Data" : browser => {functions.editEmployeeInvalidFunction(browser,data)},

"JAKE-60 Save Button" : browser => { functions.saveButtonFunction(browser,data)},

"JAKE-61 Cancel Button" : browser => {functions.cancelButtonFunction(browser,data)},

"JAKE-63 Search Bar" : browser => {functions.searchBarFunction(browser,data)}

}