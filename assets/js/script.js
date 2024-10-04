// Get a reference to the #add-employees-btn element
const addEmployeesBtn = document.querySelector('#add-employees-btn');

//Created an array for Employees collected
const employeesArray = [];
// Collect employee data
const collectEmployees = function () {
  // TODO: Get user input to create and return an array of employee objects

//Added prompts for the user to input Employee data using a while loop
while(employeesArray){
        const userFirstName = prompt('Enter first name of Employee:');
        const userLastName = prompt ('Enter last name of Employee:');
       
        //Added parseFloat function to the prompt to see if it's NaN, then defaults to 0 if true
        let userSalary = parseFloat(prompt('Enter salary of Employee:'));
            if(isNaN(userSalary)){
              userSalary = 0;
              alert('Invalid number.')
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
            } else {
              return employeesArray;
            }
          }
        }
        

// Display the average salary
const displayAverageSalary = function (employeesArray) {
  // TODO: Calculate and display the average salary

//Defined the total to find the average of
let total = 0;
for (let i = 0; i < employeesArray.length; i++) {
  total += parseFloat(employeesArray[i].userSalary)
}  
const averageSalary = total / employeesArray.length;

  //Logs the Average salary in the console
  console.log (`Average salary of Employees: ${averageSalary}`)
  
};

// Select a random employee
const getRandomEmployee = function (employeesArray) {
  // TODO: Select and display a random employee
  const random = Math.floor(Math.random() * employeesArray.length);
  const randomEmployee = employeesArray[random];

//Logs in the console the Congrats message 
  console.log(`Congratulations to ${randomEmployee.firstName} ${randomEmployee.lastName}, our random drawing winner!`)
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