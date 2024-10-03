// Get a reference to the #add-employees-btn element
const addEmployeesBtn = document.querySelector('#add-employees-btn');

// Collect employee data

const collectEmployees = function () {
  // TODO: Get user input to create and return an array of employee objects
  
//Created an array of employees
const employeesArray = [];

//Added prompts for the user to input Employee data
        let userFirstName = prompt('Enter first name of Employee:');
        let userLastName = prompt ('Enter last name of Employee:');
        //Added parseFloat function to the prompt to see if it's a number or NaN
        let userSalary = parseFloat(prompt('Enter salary of Employee:'));
            if(isNaN(userSalary)){
              userSalary = 0;
              return collectEmployees()
            };
             
              //Defined the collected data into a variable
            let employee = {
                firstName: userFirstName,
                lastName: userLastName,
                salary: userSalary
            };

          //Inserted collected variables into Array of Employees
            employeesArray.push(employee);
            
            //Added a prompt to see if the user wants to add more employees
            let keepGoing = confirm('Add another?');

            if (keepGoing){
              return collectEmployees();
            } 
            else {
              return employeesArray;
            };
          }


// Display the average salary
const displayAverageSalary = function (employeesArray) {
  // TODO: Calculate and display the average salary

//Defined the total to find the average of
  let total = 0;
  for (let i = 0; i < employeesArray.length; i++){
    sum += employeesArray[i].salary;
  }
  let average = total / employeesArray.length;
  console.log ('Average salary of Employees:', average)
};

// Select a random employee
const getRandomEmployee = function (employeesArray) {
  // TODO: Select and display a random employee



};





/*
  ====================
  STARTER CODE
  Do not modify any of the code below this line:
*/

// Display employee data in an HTML table
const displayEmployees = function (employeesArray) {
  // Get the employee table
  const employeeTable = document.querySelector('#employee-table');

  // Clear the employee table
  employeeTable.innerHTML = '';

  // Loop through the employee data and create a row for each employee
  for (let i = 0; i < employeesArray.length; i++) {
    const currentEmployee = employeesArray[i];

    const newTableRow = document.createElement('tr');

    const firstNameCell = document.createElement('td');
    firstNameCell.textContent = currentEmployee.firstName;
    newTableRow.append(firstNameCell);

    const lastNameCell = document.createElement('td');
    lastNameCell.textContent = currentEmployee.lastName;
    newTableRow.append(lastNameCell);

    const salaryCell = document.createElement('td');
    // Format the salary as currency
    salaryCell.textContent = currentEmployee.salary.toLocaleString('en-US', {
      style: 'currency',
      currency: 'USD',
    });

    newTableRow.append(salaryCell);

    employeeTable.append(newTableRow);
  }
};

const trackEmployeeData = function () {
  const employees = collectEmployees();

  console.table(employees);

  displayAverageSalary(employees);

  console.log('==============================');

  getRandomEmployee(employees);

  employees.sort(function (a, b) {
    if (a.lastName < b.lastName) {
      return -1;
    } else {
      return 1;
    }
  });

  displayEmployees(employees);
};

// Add event listener to 'Add Employees' button
addEmployeesBtn.addEventListener('click', trackEmployeeData);