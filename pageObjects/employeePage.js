module.exports = {
    url : 'https://devmountain-qa.github.io/employee-manager-v2/build/index.html',

    elements : {
        
    // App Homepage Elements
        employeeList: 'ul[class="listContainer"]',
        pageTitle : 'span[class="titleText"]',
        noEmployee : 'p[id="noEmployee"]',
        searchBox : 'input[name="searchBox"]',
        addEmployee: 'li[name="addEmployee"]',
        employee1 : 'li[name="employee1"]',
        employee2 : 'li[name="employee2"]',
        newEmployee: {
            selector: '//ul/li[contains(.,"New Employee")]',
            locateStrategy : 'xpath'
        },

    // Employee Elements
        employeeId : 'span[id="employeeID"]',
        employeeCardName : 'p[id="employeeTitle"]',
        employeeName : 'span[name="nameLabel"]',
        employeePhone : 'span[name="phoneLabel"]',
        employeeEmail : 'span[name="emailLabel"]',
        employeeTitle : 'span[name="titleLabel"]',

    // Inputs
        nameEntry: 'input[name="nameEntry"]',
        phoneEntry: 'input[name="phoneEntry"]',
        emailEntry: 'input[name="emailEntry"]',
        titleEntry: 'input[name="titleEntry"]',
        
     // Employee Profiles  
        berniceOrtiz : {
            selector : '//ul/li[contains(.,"Bernice Ortiz")]',
            locateStrategy : 'xpath'
        },
        elonMusk : {
            selector : '//ul/li[contains(.,"Elon Musk")]',
            locateStrategy : 'xpath'
        },

        jakeBarrett : {
            selector : '//li[contains(.,"Jake Barrett")]',
            locateStrategy : 'xpath'
        },

    // Buttons
         saveButton: 'button[name="save"]',
         cancelButton: 'button[name="cancel"]',
         deleteButton: 'button[name="delete"]',
         clearSearch: 'button[name="clearSearch"]',

    //Error Messages
        errorMessage: 'span[class="errorMessage"]',
        nameError: {
            selector: '//span/div[contains(.,"The name field must be between 1 and 30 characters long.")]',
            locateStrategy : 'xpath'
        },
        phoneError: {
            selector : '//span/div[contains(.,"The phone number must be 10 digits long. ")]',
            locateStrategy : 'xpath'
        },
        titleError: {
            selector : '//span/div[contains(.,"The title field must be between 1 and 30 characters long.")]',
            locateStrategy : 'xpath'
        },
        emailError: {
            selector : '//span/div[contains(.,"The email field must contain a valid email address.")]',
            locateStrategy : 'xpath'
        },

    }
}