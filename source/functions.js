const data = require('./data')


let employeeListFunction = (browser,data) => {
    let employeePage = browser.page.employeePage()
    employeePage
    .waitForElementVisible('@employeeList', 2000)
    .verify.containsText('@pageTitle', data.title)
    .verify.containsText('@noEmployee', data.noEmployee)
    .verify.visible('@employeeList')
    .verify.visible('@searchBox')
    .verify.visible('@addEmployee')
    .click('@employee1')
    .verify.elementPresent('@employeeId')
    .verify.elementPresent('@employeeCardName')
    .verify.elementPresent('@employeeName')
    .verify.elementPresent('@employeePhone')
    .verify.elementPresent('@employeeEmail')
    .verify.elementPresent('@employeeTitle')

}

let addEmployeeFunction =(browser,data) => {
    let employeePage = browser.page.employeePage()
    employeePage
    .waitForElementVisible('@employeeList', 2000)
    .click('@addEmployee')
    .waitForElementVisible('@newEmployee',2000)
    .click('@newEmployee')
    .verify.containsText('@employeeCardName', data.newEmployee)
    .clearValue('@nameEntry')
    .setValue('@nameEntry',data.name)
    .clearValue('@phoneEntry')
    .setValue('@phoneEntry',data.phone)
    .clearValue('@emailEntry')
    .setValue('@emailEntry',data.email)
    .clearValue('@titleEntry')
    .setValue('@titleEntry',data.title)
    .click('@saveButton')      
    .verify.value('@nameEntry', data.name)
    .verify.value('@phoneEntry', data.phone)
    .verify.value('@emailEntry', data.email)
    .verify.value('@titleEntry', data.title)

}

let editEmployeeValidFunction =(browser,data) => {
    let employeePage = browser.page.employeePage()
    employeePage
    .waitForElementVisible('@employeeList', 2000)
    .click('@employee2')
    .clearValue('@nameEntry')
    .setValue('@nameEntry',data.name)
    .clearValue('@phoneEntry')
    .setValue('@phoneEntry',data.phone)
    .clearValue('@emailEntry')
    .setValue('@emailEntry',data.email) 
    .clearValue('@titleEntry')
    .setValue('@titleEntry',data.title)
    .click('@saveButton')
    .verify.value('@nameEntry',  data.name)
    .verify.value('@phoneEntry', data.phone)
    .verify.value('@emailEntry', data.email)
    .verify.value('@titleEntry', data.title)
    
    
}

let editEmployeeInvalidFunction = (browser,data)=>{
    let employeePage = browser.page.employeePage()
    employeePage
    .waitForElementVisible('@employeeList', 3000)
    .click('@employee2')
    .clearValue('@nameEntry')
    .setValue('@nameEntry', data.invalidEmployee.name)
    .clearValue('@phoneEntry')
    .setValue('@phoneEntry',data.invalidEmployee.phone)
    .clearValue('@emailEntry')
    .setValue('@emailEntry',data.invalidEmployee.email) 
    .clearValue('@titleEntry')
    .setValue('@titleEntry',data.invalidEmployee.title)
    .click('@saveButton')
    .verify.visible('@errorMessage')
    .verify.visible('@nameError')
    .verify.containsText('@nameError',data.invalidEmployee.nameError)
    .verify.visible('@phoneError')
    .verify.containsText('@phoneError',data.invalidEmployee.phoneError)
    .verify.visible('@titleError')
    .verify.containsText('@titleError',data.invalidEmployee.titleError)
    .verify.elementNotPresent('@emailError')
    .click('@employee1')
    .click('@employee2')
    .verify.value('@nameEntry',data.Employee2.name)
    .verify.value('@phoneEntry',data.Employee2.phone)
    .verify.value('@emailEntry',data.Employee2.email)
    .verify.value('@titleEntry',data.Employee2.title)
    
}

let saveButtonFunction=(browser,data) => {
    let employeePage = browser.page.employeePage()
    employeePage
    .waitForElementVisible('@employeeList', 3000)
    .click('@employee2')
    .clearValue('@nameEntry')
    .setValue('@nameEntry', data.Employee2.newName)
    .click('@saveButton')
    .click('@employee1')
    .click('@employee2')
    .verify.value('@nameEntry',data.Employee2.newName)
}

let cancelButtonFunction = (browser,data) => {
    let employeePage = browser.page.employeePage()
    employeePage
    .waitForElementVisible('@employeeList', 3000)
    .click('@employee1')
    .clearValue('@nameEntry')
    .setValue('@nameEntry',data.Employee2.name)
    .clearValue('@phoneEntry')
    .setValue('@phoneEntry',data.Employee2.phone)
    .clearValue('@emailEntry')
    .setValue('@emailEntry',data.Employee2.email) 
    .clearValue('@titleEntry')
    .setValue('@titleEntry',data.Employee2.title)
    .click('@cancelButton')
    .verify.value('@nameEntry',data.berniceOrtiz.name)
    .verify.value('@phoneEntry',data.berniceOrtiz.phone)
    .verify.value('@emailEntry',data.berniceOrtiz.email)
    .verify.value('@titleEntry',data.berniceOrtiz.title)
}

let deleteEmployeeFunction = (browser,data) => {
    let employeePage = browser.page.employeePage()
    employeePage
    .waitForElementVisible('@employeeList', 2000)
    .click('@jakeBarrett')
    .verify.containsText('@employeeCardName',data.Employee1.name)
    .click('@deleteButton')
    browser.acceptAlert()
    employeePage
    .click('@employee1')
    .waitForElementVisible('@employeeCardName',3000)
    browser.pause(1000)
    employeePage
    .verify.elementNotPresent('@jakeBarrett')

}

let searchBarFunction = (browser,data) => {
    let employeePage = browser.page.employeePage()
    employeePage
    .waitForElementVisible('@employeeList', 2000)
    .waitForElementVisible('@searchBox',2000)
    .setValue('@searchBox',data.berniceOrtiz.firstName)
    .verify.visible('@berniceOrtiz')
    .verify.elementNotPresent('@elonMusk')
    .click('@clearSearch')
    .verify.elementPresent('@employeeList')
    .verify.elementPresent('@elonMusk')

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