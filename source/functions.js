const selectors = require('./selectors')
const data = require('./data')

let employeeListFunction = (browser,selectors,data) => {
    browser
    .waitForElementVisible(selectors.employeeList, 2000)
    .verify.containsText(selectors.pageTitle, data.title)
    .verify.containsText(selectors.noEmployee, data.noEmployee)
    .verify.visible(selectors.employeeList)
    .verify.visible(selectors.searchBox)
    .verify.visible(selectors.addEmployee)
    .click(selectors.employee1)
    .verify.elementPresent(selectors.employeeId)
    .verify.elementPresent(selectors.employeeCardName)
    .verify.elementPresent(selectors.employeeName)
    .verify.elementPresent(selectors.employeePhone)
    .verify.elementPresent(selectors.employeeEmail)
    .verify.elementPresent(selectors.employeeTitle)

}

let addEmployeeFunction =(browser,selectors,data) => {
    browser
    .waitForElementVisible(selectors.employeeList, 2000)
    .click(selectors.addEmployee)
    .useXpath()
    .waitForElementVisible(selectors.newEmployee,2000)
    .click(selectors.newEmployee)
    .useCss()
    .verify.containsText(selectors.employeeCardName, data.newEmployee)
    .clearValue(selectors.nameEntry)
    .setValue(selectors.nameEntry,data.name)
    .clearValue(selectors.phoneEntry)
    .setValue(selectors.phoneEntry,data.phone)
    .clearValue(selectors.emailEntry)
    .setValue(selectors.emailEntry,data.email)
    .clearValue(selectors.titleEntry)
    .setValue(selectors.titleEntry,data.title)
    .click(selectors.saveButton)      
    .verify.value(selectors.nameEntry, data.name)
    .verify.value(selectors.phoneEntry, data.phone)
    .verify.value(selectors.emailEntry, data.email)
    .verify.value(selectors.titleEntry, data.title)

}

let editEmployeeValidFunction =(browser,selectors,data) => {
    browser
    .waitForElementVisible(selectors.employeeList, 2000)
    .click(selectors.employee2)
    .clearValue(selectors.nameEntry)
    .setValue(selectors.nameEntry,data.name)
    .clearValue(selectors.phoneEntry)
    .setValue(selectors.phoneEntry,data.phone)
    .clearValue(selectors.emailEntry)
    .setValue(selectors.emailEntry,data.email) 
    .clearValue(selectors.titleEntry)
    .setValue(selectors.titleEntry,data.title)
    .click(selectors.saveButton)
    .verify.value(selectors.nameEntry,  data.name)
    .verify.value(selectors.phoneEntry, data.phone)
    .verify.value(selectors.emailEntry, data.email)
    .verify.value(selectors.titleEntry, data.title)
    
    
}

let editEmployeeInvalidFunction = (browser,selectors,data)=>{
    browser
    .waitForElementVisible(selectors.employeeList, 3000)
    .click(selectors.employee2)
    .clearValue(selectors.nameEntry)
    .setValue(selectors.nameEntry, data.invalidEmployee.name)
    .clearValue(selectors.phoneEntry)
    .setValue(selectors.phoneEntry,data.invalidEmployee.phone)
    .clearValue(selectors.emailEntry)
    .setValue(selectors.emailEntry,data.invalidEmployee.email) 
    .clearValue(selectors.titleEntry)
    .setValue(selectors.titleEntry,data.invalidEmployee.title)
    .click(selectors.saveButton)
    .verify.visible(selectors.errorMessage)
    .useXpath()
    .verify.visible(selectors.nameError)
    .verify.containsText(selectors.nameError,data.invalidEmployee.nameError)
    .verify.visible(selectors.phoneError)
    .verify.containsText(selectors.phoneError,data.invalidEmployee.phoneError)
    .verify.visible(selectors.titleError)
    .verify.containsText(selectors.titleError,data.invalidEmployee.titleError)
    .verify.elementNotPresent(selectors.emailError)
    .useCss()
    .click(selectors.employee1)
    .click(selectors.employee2)
    .verify.value(selectors.nameEntry,data.Employee2.name)
    .verify.value(selectors.phoneEntry,data.Employee2.phone)
    .verify.value(selectors.emailEntry,data.Employee2.email)
    .verify.value(selectors.titleEntry,data.Employee2.title)
    
}

let saveButtonFunction=(browser,selectors,data) => {
    browser
    .waitForElementVisible(selectors.employeeList, 3000)
    .click(selectors.employee2)
    .clearValue(selectors.nameEntry)
    .setValue(selectors.nameEntry, data.Employee2.newName)
    .click(selectors.saveButton)
    .click(selectors.employee1)
    .click(selectors.employee2)
    .verify.value(selectors.nameEntry,data.Employee2.newName)
}

let cancelButtonFunction = (browser,selectors,data) => {
    browser
    .waitForElementVisible(selectors.employeeList, 3000)
    .click(selectors.employee1)
    .clearValue(selectors.nameEntry)
    .setValue(selectors.nameEntry,data.Employee2.name)
    .clearValue(selectors.phoneEntry)
    .setValue(selectors.phoneEntry,data.Employee2.phone)
    .clearValue(selectors.emailEntry)
    .setValue(selectors.emailEntry,data.Employee2.email) 
    .clearValue(selectors.titleEntry)
    .setValue(selectors.titleEntry,data.Employee2.title)
    .click(selectors.cancelButton)
    .verify.value(selectors.nameEntry,data.berniceOrtiz.name)
    .verify.value(selectors.phoneEntry,data.berniceOrtiz.phone)
    .verify.value(selectors.emailEntry,data.berniceOrtiz.email)
    .verify.value(selectors.titleEntry,data.berniceOrtiz.title)
}

let deleteEmployeeFunction = (browser,selectors,data) => {
    browser
    .waitForElementVisible(selectors.employeeList, 2000)
    .useXpath()
    .click('//li[contains(.,"Jake Barrett")]')
    .useCss()
    .verify.containsText(selectors.employeeCardName,data.Employee1.name)
    .click(selectors.deleteButton)
    .acceptAlert()
    .click(selectors.employee1)
    .waitForElementVisible(selectors.employeeCardName,3000)
    .pause(100)
    .useXpath()
    .verify.elementNotPresent('//li[contains(.,"Jake Barrett")]')
    .useCss()

}

let searchBarFunction = (browser,selectors,data) => {
    browser
    .waitForElementVisible(selectors.employeeList, 2000)
    .waitForElementVisible(selectors.searchBox,2000)
    .setValue(selectors.searchBox,data.berniceOrtiz.firstName)
    .useXpath()
    .verify.visible(selectors.berniceOrtiz)
    .verify.elementNotPresent(selectors.elonMusk)
    .useCss()
    .click(selectors.clearSearch)
    .verify.elementPresent(selectors.employeeList)
    .useXpath()
    .verify.elementPresent(selectors.elonMusk)
    .useCss()
}

module.exports = {
    employeeListFunction : employeeListFunction,
    addEmployeeFunction : addEmployeeFunction,
    editEmployeeValidFunction  : editEmployeeValidFunction,
    editEmployeeInvalidFunction: editEmployeeInvalidFunction,
    saveButtonFunction : saveButtonFunction,
    cancelButtonFunction : cancelButtonFunction,
    deleteEmployeeFunction : deleteEmployeeFunction,
    searchBarFunction : searchBarFunction,

}